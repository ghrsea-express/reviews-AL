
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', (table) => {
        table.increments();
        table.string('name');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products');
};
