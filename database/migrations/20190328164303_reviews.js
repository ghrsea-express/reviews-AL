
exports.up = function(knex, Promise) {
    return knex.schema.createTable("reviews", (table) => {
        table.increments();
        table.integer("rating");
        table.string("title");
        table.string("text_body");
        table.date("created_at");
        table.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
            .index();
        table.integer("product_id")
            .notNullable()
            .references("id")
            .inTable("products")
            .index();
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("user");
};
