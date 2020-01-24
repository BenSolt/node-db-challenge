
exports.seed = function(knex) {
    return knex('resources').insert([
    {
        task_description: 'open vs code, make react app, add redux, authorization key',
        notes: 'take a break now and then from coding',
        project_id: 1
    },

    {
        task_description: 'dust dresser and desk, vacuum floor',
        notes: ' dirty dirty dirty',
        project_id: 2
    }

    ]);
}