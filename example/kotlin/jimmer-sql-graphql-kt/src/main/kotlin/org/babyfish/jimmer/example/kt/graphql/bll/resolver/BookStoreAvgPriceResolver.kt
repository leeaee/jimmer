package org.babyfish.jimmer.example.kt.graphql.bll.resolver

import org.babyfish.jimmer.example.kt.graphql.dal.BookRepository
import org.babyfish.jimmer.example.kt.graphql.entities.Book
import org.babyfish.jimmer.example.kt.graphql.entities.BookStore
import org.babyfish.jimmer.lang.Ref
import org.babyfish.jimmer.sql.event.AssociationEvent
import org.babyfish.jimmer.sql.event.EntityEvent
import org.babyfish.jimmer.sql.kt.KTransientResolver
import org.babyfish.jimmer.sql.kt.event.getUnchangedRef
import org.babyfish.jimmer.sql.kt.event.isChanged
import org.springframework.context.event.EventListener
import org.springframework.stereotype.Component
import java.math.BigDecimal
import java.util.*

@Component
class BookStoreAvgPriceResolver(
    private val bookRepository: BookRepository
) : KTransientResolver<Long, BigDecimal> {

    // You can also inject it directly
    private val sqlClient = bookRepository.sql

    override fun resolve(ids: Collection<Long>): Map<Long, BigDecimal> =
        bookRepository.findAvgPriceGroupByStoreIds(ids)

    override fun getDefaultValue(): BigDecimal =
        BigDecimal.ZERO

    // -----------------------------
    // If you are a beginner, you can ignore all the following code.
    //
    // The following code is only used for cache mode(start the application
    // by `application.yml`).
    //
    // Unlike the fully automatic cache consistency maintenance of
    // ordinary associated property, if a calculated property uses cache,
    // its consistency requires manual assistance.
    // -----------------------------

    @EventListener
    fun onAssociationChange(e: AssociationEvent) {
        // The association property `BookStore.books` is changed
        //
        // It is worth noting that
        // not only modifying the `STORE_ID` field of the `BOOK` table can trigger the event,
        // but also modifying the `TENANT` field of the BOOK table can trigger the event.
        if (sqlClient.caches.isAffectedBy(e) && e.isChanged(BookStore::books)) {
            sqlClient
                .caches
                .getPropertyCache<Any, Any>(BookStore::avgPrice)
                ?.delete(e.sourceId)
        }
    }

    @EventListener
    fun onEntityChange(e: EntityEvent<*>) {
        // The association property `Book.price` is changed
        if (sqlClient.caches.isAffectedBy(e) && e.isChanged(Book::price)) {
            val storeId = e.getUnchangedRef(Book::store)?.value?.id
            if (storeId !== null) {
                sqlClient
                    .caches
                    .getPropertyCache<Any, Any>(BookStore::avgPrice)
                    ?.delete(storeId)
            }
        }
    }

    // Contribute part of the secondary hash key to multiview-cache
    override fun getParameterMapRef(): Ref<SortedMap<String, Any>?>? {
        return sqlClient.filters.getTargetParameterMapRef(BookStore::books)
    }
}