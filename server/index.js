const express = require('express');
const bodyParser = require('body-parser');

const knex = require('../database/connection');

const app = express();
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/users', (req, res) => {
    knex.select().from('users')
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err))
});

app.post('/users', (req, res) => {
    knex('users').insert(req.body)
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err))
});

app.get('/reviews', (req, res) => {
    knex.select().from('users')
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err))
});

app.get('/reviews/:product_id', (req, res) => {
    let product_id = req.params.product_id;
    knex.select('reviews.id','rating', 'title', 'text_body', 'created_at', 'store_name', 'helpful_score', 'users.name', 'users.thumbnail_url')
        .from('reviews').innerJoin('users', 'reviews.user_id', 'users.id')
        .where('product_id', product_id)
        .orderBy('helpful_score','desc')
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err))
});

app.get('/positiveReviews/:product_id', (req, res) => {
    let product_id = req.params.product_id;
    knex.select('reviews.id','rating', 'title', 'text_body', 'created_at', 'store_name', 'helpful_score', 'users.name', 'users.thumbnail_url')
        .from('reviews').innerJoin('users', 'reviews.user_id', 'users.id')
        .where('product_id', product_id)
        .andWhere('rating', '>', 3)
        .orderBy('helpful_score','desc')
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err))
});

app.get('/criticalReviews/:product_id', (req, res) => {
    let product_id = req.params.product_id;
    knex.select('reviews.id','rating', 'title', 'text_body', 'created_at', 'store_name', 'helpful_score', 'users.name', 'users.thumbnail_url')
        .from('reviews').innerJoin('users', 'reviews.user_id', 'users.id')
        .where('product_id', product_id)
        .andWhere('rating', '<', 3)
        .orderBy('helpful_score','desc')
    .then((data) => res.send(data))
    .catch((err) => res.status(500).send(err))
});


let port = process.env.PORT || 3001;
app.listen(port, ()=> console.log(`Listening on port: ${port}`));
