const express = require('express');

const recipes = require('./recipes-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
})

router.get('/:id/shoppinglist', (req, res) => {
    const { id } = req.params;
    recipes.getShoppingList(id)
    .then(list => {
        res.json(list)
    })
})

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
    recipes.getInstructions(id)
    .then(instructions => {
        res.json(instructions)
    })
})

module.exports = router;