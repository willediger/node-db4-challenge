exports.seed = function(knex) {
  return knex("ingredients").insert([
    {
      name: "bread",
      measurement_types_id: 1
    },
    {
      name: "butter",
      measurement_types_id: 2
    },
    {
      name: "peanut butter",
      measurement_types_id: 2
    },
    {
      name: "jelly",
      measurement_types_id: 2
    }
  ]);
};
