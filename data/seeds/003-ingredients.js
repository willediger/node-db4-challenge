exports.seed = function(knex) {
  return knex("ingredients").insert([
    {
      name: "bread",
      measurement_type_id: 1
    },
    {
      name: "butter",
      measurement_type_id: 2
    },
    {
      name: "peanut butter",
      measurement_type_id: 2
    },
    {
      name: "jelly",
      measurement_type_id: 2
    }
  ]);
};
