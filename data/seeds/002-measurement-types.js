exports.seed = function(knex) {
  return knex("measurement_types").insert([
    {
      name: "slice"
    },
    {
      name: "tbsp"
    }
  ]);
};
