const express = require("express");
const db = require("./ingredients-model.js");

const router = express.Router();

// - `GET /api/ingredients/`: all ingredients
router.get("/", async (req, res, next) => {
  const ingredients = await db.getIngredients();
  if (ingredients) {
    res.status(200).json(ingredients);
  } else {
    next({
      status: 500,
      message: "The ingredients could not be retrieved."
    });
  }
});

// - `GET /api/ingredients/:id/recipes`: all recipes in the system that utilize a single ingredient
router.get("/:id/recipes", validateIngredientId, async (req, res) => {
  const recipeList = await db.getRecipeListIncludingIngredient(
    req.ingredient.id
  );
  if (recipeList) {
    res.status(200).json(recipeList);
  } else {
    next({
      status: 500,
      message: "The recipe list could not be retrieved."
    });
  }
});

async function validateIngredientId(req, res, next) {
  try {
    const { id } = req.params;
    const ingredient = await db.getIngredient(id);
    if (ingredient) {
      req.ingredient = ingredient;
      next();
    } else {
      next({
        status: 404,
        message: "The ingredient with the specified ID does not exist."
      });
    }
  } catch {
    next({
      status: 500,
      message: "The ingredient information could not be retrieved."
    });
  }
}

module.exports = router;
