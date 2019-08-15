exports.seed = async function(knex) {
  try {
    await knex.truncate("recipe_steps");
    await knex.truncate("recipe_ingredients");
    await knex.truncate("ingredients");
    await knex.truncate("measurement_types");
    await knex.truncate("recipes");
  } catch (err) {
    console.log(err);
  }
};
