
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'TJ', password: 'TJ', department: 'Management'},
        {id: 2, username: 'Justin', password: 'Justin', department: 'Human Resources'},
        {id: 3, username: 'Gavin', password: 'Gavin', department: 'Marketing'}
      ]);
    });
};
