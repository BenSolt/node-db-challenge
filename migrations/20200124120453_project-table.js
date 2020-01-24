
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.text('project_name', 128)
        .unique()
        .notNullable();
	tbl.text('project_description');
	tbl.boolean('completed').defaultTo(false);
	})

    .createTable('resources', tbl => {
        tbl.increments();
        tbl.text('resource_name')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
	tbl.text('resource_description');
	})


    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.text('task_description')
          .unsigned()
          .notNullable()
 	  .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('CASCADE');
	tbl.text('notes');
	tbl.boolean('completed').defaultTo(false);
	})
}

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
    
};