
exports.up = function(knex) {
    return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments();
        tbl.varchar('recipe_name', 255)
    })
    .createTable('steps', tbl => {
        tbl.increments();
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        tbl.varchar('step_name', 255)
        tbl.integer('step_number')
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.varchar('ingredient_name')
    })
    .createTable('recipe_ingredients', tbl => {
        tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        tbl.float('quantity', 255);
        tbl.primary(['recipe_id', 'ingredient_id'])
    })
  };
  
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('steps')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipe_ingredients')
  };
  