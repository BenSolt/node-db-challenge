
exports.seed = function(knex) {
        return knex('projects').insert([
        {
            project_name: 'Project Halo Api',
            project_description: 'create react app using api and redux'
        },

        {
            project_name: 'Clean Room',
            project_description: 'Dust and vacuum'
        }

        ]);
  };
  