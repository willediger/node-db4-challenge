exports.seed = function(knex) {
  return knex("recipe_steps").insert([
    {
      recipe_id: 1,
      step_number: 1,
      instruction: "put the bread in the toaster for 2 minutes"
    },
    {
      recipe_id: 1,
      step_number: 2,
      instruction: "take the toast out of the toaster and butter the bread"
    },
    {
      recipe_id: 2,
      step_number: 1,
      instruction:
        "place the two slices of bread down on a plate next to each other"
    },
    {
      recipe_id: 2,
      step_number: 2,
      instruction:
        "spread peanut butter on one slice, and jelly on the other slice"
    },
    {
      recipe_id: 2,
      step_number: 3,
      instruction:
        "put the two slices of bread together, with the peanut and butter and jelly sides facing each other"
    }
  ]);
};
