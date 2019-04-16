const path = require('path');

module.exports = {
    development: {
        client: 'mysql',
        connection: {
            user: 'root',
            host: 'database',
            database: 'reviews_module',
            password: 'testpw',
            port: 3306
        },
        migrations: {
            directory: path.join(__dirname, 'database', 'migrations')
        },
        seeds: {
            directory: path.join(__dirname, 'database', 'seeds')
        }
    }
}


 