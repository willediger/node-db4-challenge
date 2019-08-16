exports.seed = function(knex) {
  return knex("recipes").insert([
    {
      name: "toast"
    },
    {
      name: "peanut butter & jelly sandwich"
    }
  ]);
};
