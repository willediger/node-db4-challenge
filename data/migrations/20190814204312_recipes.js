exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .text("name")
        .unique()
        .notNullable();
    })

    .createTable("measurement_types", tbl => {
      tbl.increments();
      tbl
        .text("name")
        .unique()
        .notNullable();
    })

    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .text("name")
        .unique()
        .notNullable();
      tbl
        .integer("measurement_type_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("measurement_types")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.float("quantity").notNullable();
      tbl.unique(["recipe_id", "ingredient_id"]);
    })

    .createTable("recipe_steps", tbl => {
      tbl.increments();
      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("step_number")
        .notNullable()
        .unsigned();
      tbl.text("instruction").notNullable();
      tbl.unique(["recipe_id", "step_number"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipe_steps")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("measurement_types")
    .dropTableIfExists("recipes");
};
