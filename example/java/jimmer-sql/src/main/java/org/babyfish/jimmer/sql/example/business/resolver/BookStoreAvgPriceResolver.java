package org.babyfish.jimmer.sql.example.business.resolver;

import org.babyfish.jimmer.lang.Ref;
import org.babyfish.jimmer.meta.TypedProp;
import org.babyfish.jimmer.sql.JSqlClient;
import org.babyfish.jimmer.sql.TransientResolver;
import org.babyfish.jimmer.sql.ast.tuple.Tuple2;
import org.babyfish.jimmer.sql.cache.Caches;
import org.babyfish.jimmer.sql.event.AssociationEvent;
import org.babyfish.jimmer.sql.event.DatabaseEvent;
import org.babyfish.jimmer.sql.event.EntityEvent;
import org.babyfish.jimmer.sql.event.TriggerType;
import org.babyfish.jimmer.sql.example.repository.BookStoreRepository;
import org.babyfish.jimmer.sql.example.model.Book;
import org.babyfish.jimmer.sql.example.model.BookProps;
import org.babyfish.jimmer.sql.example.model.BookStore;
import org.babyfish.jimmer.sql.example.model.BookStoreProps;
import org.babyfish.jimmer.sql.filter.Filters;
import org.springframework.context.event.EventListener;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
import java.util.Collection;
import java.util.Map;
import java.util.SortedMap;
import java.util.stream.Collectors;

@Component
public class BookStoreAvgPriceResolver implements TransientResolver<Long, BigDecimal> {

    private final BookStoreRepository bookStoreRepository;

    private final JSqlClient sqlClient;

    public BookStoreAvgPriceResolver(BookStoreRepository bookStoreRepository) {
        this.bookStoreRepository = bookStoreRepository;
        this.sqlClient = bookStoreRepository.sql(); // You can also inject it directly
    }

    @Override
    public Map<Long, BigDecimal> resolve(Collection<Long> ids) {
        return bookStoreRepository.findIdAndAvgBookPrice(ids)
                .stream()
                .collect(
                        Collectors.toMap(Tuple2::get_1, Tuple2::get_2)
                );
    }

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

    // The association property `BookStore.books` is changed
    @EventListener
    public void onAssociationChanged(AssociationEvent e) {
        // The association property `BookStore.books` is changed
        //
        // It is worth noting that
        // not only modifying the `STORE_ID` field of the `BOOK` table can trigger the event,
        // but also modifying the `TENANT` field of the BOOK table can trigger the event.
        if (isAffectedBy(e, BookStoreProps.BOOKS)) {
            Caches caches = bookStoreRepository.sql().getCaches();
            caches
                    .getPropertyCache(BookStoreProps.AVG_PRICE)
                    .delete(e.getSourceId());
        }
    }

    @EventListener
    public void onEntityChanged(EntityEvent<?> e) {
        // The scalar property `Book.price` is changed
        if (isAffectedBy(e, BookProps.PRICE)) {
            Ref<BookStore> storeRef = e.getUnchangedRef(BookProps.STORE);
            BookStore store = storeRef != null ? storeRef.getValue() : null;
            if (store != null) {
                Caches caches = bookStoreRepository.sql().getCaches();
                caches
                    .getPropertyCache(BookStoreProps.AVG_PRICE)
                    .delete(store.id());
            }
        }
    }

    // Contribute part of the secondary hash key to multiview-cache
    @Override
    public Ref<SortedMap<String, Object>> getParameterMapRef() {
        Filters filters = bookStoreRepository.sql().getFilters();
        return filters.getTargetParameterMapRef(BookStoreProps.BOOKS);
    }

    private boolean isAffectedBy(DatabaseEvent e, TypedProp<?, ?> prop) {
        return (e.getConnection() == null || sqlClient.getTriggerType() == TriggerType.TRANSACTION_ONLY) &&
                e.isChanged(prop);
    }
}
