const express = require("express");
const db = require("./recipes-model.js");

const router = express.Router();

// - `GET /api/recipes/`: all recipes (without details about ingredients or steps)
router.get("/", async (req, res, next) => {
  const recipes = await db.getRecipes();
  if (recipes) {
    res.status(200).json(recipes);
  } else {
    next({
      status: 500,
      message: "The recipes could not be retrieved."
    });
  }
});

// - `GET /api/recipes/:id/shoppingList`: a list of ingredients and quantites for a single recipe
router.get("/:id/shoppingList", validateRecipeId, async (req, res) => {
  const shoppingList = await db.getShoppingList(req.recipe.id);
  if (shoppingList) {
    res.status(200).json(shoppingList);
  } else {
    next({
      status: 500,
      message: "The shopping list could not be retrieved."
    });
  }
});

// - `GET /api/recipes/:id/instructions`: a correctly ordered list of how to prepare a single recipe
router.get("/:id/instructions", validateRecipeId, async (req, res) => {
  console.log(req.recipe.id);
  const instructions = await db.getInstructions(req.recipe.id);
  if (instructions) {
    res.status(200).json(instructions);
  } else {
    next({
      status: 500,
      message: "The instructions could not be retrieved."
    });
  }
});

async function validateRecipeId(req, res, next) {
  try {
    const { id } = req.params;
    const recipe = await db.getRecipe(id);
    if (recipe) {
      req.recipe = recipe;
      next();
    } else {
      next({
        status: 404,
        message: "The recipe with the specified ID does not exist."
      });
    }
  } catch {
    next({
      status: 500,
      message: "The recipe information could not be retrieved."
    });
  }
}

module.exports = router;
