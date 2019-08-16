const db = require("../data/dbConfig.js");

module.exports = {
  getIngredients: function() {
    return db("ingredients as i")
      .join("measurement_types as mt", "i.measurement_type_id", "mt.id")
      .select("i.id", "i.name", "mt.name as measurement");
  },

  getIngredient: function(id) {
    return db("ingredients as i")
      .where("i.id", id)
      .first();
  },

  getRecipeListIncludingIngredient: function(ingredient_id) {
    return db("recipe_ingredients as ri")
      .join("recipes as r", "r.id", "ri.recipe_id")
      .select("r.*")
      .where("ri.ingredient_id", ingredient_id);
  }
};
