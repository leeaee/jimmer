package org.babyfish.jimmer.sql.example.model

import org.babyfish.jimmer.sql.*
import org.babyfish.jimmer.sql.example.model.common.TenantAware
import java.math.BigDecimal

@Entity
interface Book : TenantAware {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long

    @Key
    val name: String

    @Key
    val edition: Int
    val price: BigDecimal

    @ManyToOne
    val store: BookStore?

    @ManyToMany
    @JoinTable(
        name = "BOOK_AUTHOR_MAPPING",
        joinColumnName = "BOOK_ID",
        inverseJoinColumnName = "AUTHOR_ID"
    )
    val authors: List<Author>

    @OneToMany(mappedBy = "book", orderedProps = [OrderedProp("index")])
    val chapters: List<Chapter>
}