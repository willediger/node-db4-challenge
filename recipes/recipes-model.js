const db = require("../data/dbConfig.js");

module.exports = {
  getRecipes: function(id) {
    return db("recipes");
  },

  getShoppingList: function(recipe_id) {
    return db("recipe_ingredients as ri")
      .join("ingredients as i", "i.id", "ri.ingredient_id")
      .join("measurement_types as mt", "mt.id", "i.measurement_type_id")
      .select("i.name as ingredient", "ri.quantity", "mt.name as measure")
      .where("ri.recipe_id", recipe_id);
  },

  getInstructions: function(recipe_id) {
    return db("recipe_steps as rs")
      .select("rs.step_number", "rs.instruction")
      .where("rs.recipe_id", recipe_id)
      .orderBy("rs.step_number");
  }
};
