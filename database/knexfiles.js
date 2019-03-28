const databaseName = 'reviews_module';

module.exports = {
    development: {
        client: 'postgresql',
        connection: `postgres://localhost/${databaseName}`,
        migrations: {
            directory: __dirname + '/migrations'
        },
        seeds: {
            directory: __dirname + '/seeds'
        }
    }
}