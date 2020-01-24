
exports.seed = function(knex) {
    return knex('resources').insert([
    {
        resource_name: 'computer',
        resource_description: 'electronic'
    },

    {
        resource_name: 'dust cloths, vacuum',
        resource_description: ' cloths used for dusting, machine to pick up dirt'
    }
    
    ]);
};
