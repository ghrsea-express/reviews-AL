
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name')
            .notNullable();
        table.string('thumbnail_url');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
