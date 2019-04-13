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


 /*
 *****************FAKE USERS********************
 const faker = require('faker');

 const createFakeUser = () => ({
    name: faker.name.findName(),
    thumbnail_url: faker.image.imageUrl
 })

 exports.seed = async function (knex, Promise) {
     const fakeUsers = [];
     const numberOfFakeUsers = 100;
     for (let i = 0; i < numberOfFakeUsers; i++) {
         fakeUsers.push(createFakeUser());
     }
     await knex('user')
     .insert(fakeUsers)
 };

 *****************FAKE PRODUCTS********************
 const createFakeProduct = () => ({
    name: faker.commerce.productName()
 })

 exports.seed = async function (knex, Promise) {
     const fakeProducts = [];
     const numberOfFakeProducts = 100;
     for (let i = 0; i < numberOfFakeProducts; i++) {
         fakeUsers.push(createFakeProduct());
     }
     await knex('product')
     .insert(fakeProducts)
 };

 *****************FAKE REVIEWS********************
 const faker = require('faker');
 
 const randomNumberGenerator = (min, max) => {
    return min + Math.floor( Math.random() * (max + 1 - min) )
 }

 const createFakeReview = () => ({
    rating: randomNumberGenerator(1,5),
    title: faker.lorem.words(),
    text_body: faker.lorem.paragraph(),
    created_at: faker.date.between(2000/01/01, 2019/03/01),
    product_id: randomNumberGenerator(1,100),
    user_id: randomNumberGenerator(1,50)
 })

 exports.seed = async function (knex, Promise) {
     const fakeReviews = [];
     const numberOfFakeReviews = 800;
     for (let i = 0; i < numberOfFakeReviews; i++) {
         fakeReviews.push(createFakeReview());
     }
     await knex('review')
     .insert(fakeReviews)
 };

 */