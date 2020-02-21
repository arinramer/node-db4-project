const db = require('../data/dbConfig.js');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('recipe_ingredients').select('recipe_name', 'ingredient_name', 'quantity')
    .where({recipe_id: id})
    .join('recipes', 'recipes.id', 'recipe_ingredients.recipe_id')
    .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
}

function getInstructions(id) {
    return db('steps').select('recipe_name', 'step_number', 'step_name')
    .where({recipe_id: id})
    .join('recipes', 'recipes.id', 'steps.recipe_id')
    .orderBy('step_number')
}