/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('movies').del()
  await knex('movies').insert([
    {title: 'Eternal Sunshine of the Spotless Mind', list: 'unwatched'},
    {title: 'Malcom and Marie', list: 'unwatched'},
    {title: 'The Graduate', list: 'unwatched'},
    {title: 'Asteroid City', list: 'unwatched'},
    {title: 'A Perfect World', list: 'unwatched'},
  ]);
};
