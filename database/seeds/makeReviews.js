const reviews = require('../seedFunctions/seedFunctions.js');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert(reviews);
    });
};

/*
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        { id: 1, 
          rating: 2, 
          title: 'officia voluptates nobis', 
          text_body: 'Autem et quo veniam similique perferendis fugiat sunt aliquid doloremque.', 
          created_at: '2005-01-26',
          product_id: 1,
          user_id: 2
        },
        { id: 2, 
          rating: 2, 
          title: 'Willa Kutch I', 
          text_body: 'Modi facere nulla ea. Nobis nisi mollitia velit rerum quisquam dolorem.', 
          created_at: '2009-03-05',
          product_id: 1,
          user_id: 1
        },
        { id: 3, 
          rating: 2, 
          title: 'Velit neque ad culpa sed', 
          text_body: 'Ut ut tempora omnis iste. Aut quia modi.', 
          created_at: '2015-10-26',
          product_id: 2,
          user_id: 3
        }
      ]);
    });
};
*/