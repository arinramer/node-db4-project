
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes', 'ingredients', 'steps', 'recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, recipe_name: 'chocolate cake'},
        {id: 2, recipe_name: 'chocolate milk'},
        {id: 3, recipe_name: 'chocolate brownies'}
      ]);
    })
    .then(function () {
      return knex('steps').insert([
        {recipe_id: 1, step_name: 'Pour cake mix into pan', step_number: 1},
        {recipe_id: 1, step_name: 'Add chocolate syrup to cake mix', step_number: 2},
        {recipe_id: 2, step_name: 'Pour glass of milk', step_number: 1},
        {recipe_id: 2, step_name: 'Add chocolate sryup to milk', step_number: 2},
        {recipe_id: 3, step_name: 'Pour brownie mix into pan', step_number: 1},
        {recipe_id: 3, step_name: 'Add chocolate syrup to brownie mix', step_number: 2}
      ])
    })
    .then(function () {
      return knex('ingredients').insert([
        {id: 1, ingredient_name: 'cake mix'},
        {id: 2, ingredient_name: 'hersheys chocolate syrup'},
        {id: 3, ingredient_name: 'brownie mix'},
        {id: 4, ingredient_name: 'milk'}
      ])
    })
    .then(function () {
      return knex('recipe_ingredients').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 3},
        {recipe_id: 1, ingredient_id: 2, quantity: 2},
        {recipe_id: 2, ingredient_id: 4, quantity: 1},
        {recipe_id: 2, ingredient_id: 2, quantity: 2},
        {recipe_id: 3, ingredient_id: 3, quantity: 1},
        {recipe_id: 3, ingredient_id: 2, quantity: 2}
      ])
    })
};
