
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      return knex('products').del()
    })
    .then(function () {
      return knex('users').del()
    });
};
