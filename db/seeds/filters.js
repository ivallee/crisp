const filters = [
  { type: 'Ingredient', key: 'includeIngredients', btn: 'With', exclude_key: 'excludeIngredients', exclude_btn: 'Without', text: true },
  { type: 'Cuisine', key: 'cuisine', dropdown: true },
  { type: 'Diet', key: 'diet', dropdown: true, unique: true },
  { type: 'Allergy', key: 'intolerances', dropdown: true },
  { type: 'Meal Type', key: 'type', dropdown: true, unique: true },
];

const filterOptions = {
  Cuisine: [
    { key: '', display: '' },
    { key: 'african', display: 'African' },
    { key: 'chinese', display: 'Chinese' },
    { key: 'japanese', display: 'Japanese' },
    { key: 'korean', display: 'Korean' },
    { key: 'vietnamese', display: 'Vietnamese' },
    { key: 'thai', display: 'Thai' },
    { key: 'british', display: 'British' },
    { key: 'irish', display: 'Irish' },
    { key: 'french', display: 'French' },
    { key: 'italian', display: 'Italian' },
    { key: 'mexican', display: 'Mexican' },
    { key: 'spanish', display: 'Spanish' },
    { key: 'middle eastern', display: 'Middle Eastern' },
    { key: 'jewish', display: 'Jewish' },
    { key: 'american', display: 'American' },
    { key: 'cajun', display: 'Cajun' },
    { key: 'southern', display: 'Southern' },
    { key: 'greek', display: 'Greek' },
    { key: 'german', display: 'German' },
    { key: 'nordic', display: 'Nordic' },
    { key: 'eastern european', display: 'Eastern European' },
    { key: 'caribbean', display: 'Caribbean' },
    { key: 'latin american', display: 'Latin American' }
  ],
  Diet: [
    { key: '', display: '' },
    { key: 'vegan', display: 'Vegan' },
    { key: 'lacto vegetarian', display: 'No Eggs' },
    { key: 'ovo vegetarian', display: 'No Dairy' },
  ],
  Allergy: [
    { key: '', display: '' },
    { key: 'dairy', display: 'Dairy' },
    { key: 'egg', display: 'Egg' },
    { key: 'gluten', display: 'Gluten' },
    { key: 'peanut', display: 'Peanut' },
    { key: 'sesame', display: 'Sesame' },
    { key: 'seafood', display: 'Seafood' },
    { key: 'shellfish', display: 'Shellfish' },
    { key: 'soy', display: 'Soy' },
    { key: 'sulfite', display: 'Sulfite' },
    { key: 'tree nut', display: 'Tree Nut' },
    { key: 'wheat', display: 'Wheat' },
  ],
  'Meal Type': [
    { key: '', display: '' },
    { key: 'main course', display: 'Main Course' },
    { key: 'side dish', display: 'Side Dish' },
    { key: 'dessert', display: 'Dessert' },
    { key: 'appetizer', display: 'Appetizer' },
    { key: 'salad', display: 'Salad' },
    { key: 'bread', display: 'Bread' },
    { key: 'breakfast', display: 'Breakfast' },
    { key: 'soup', display: 'Soup' },
    { key: 'beverage', display: 'Beverage' },
    { key: 'sauce', display: 'Sauce' },
    { key: 'drink', display: 'Drink' },
  ]
};

function saveFilter(knex, Promise) {
  return filter => {
    return knex('filters').insert(filter).returning('id')
      .then(([id]) => {
        if(filter.dropdown) {
          const options = filterOptions[filter.type];
          return Promise.all(options.map(saveFilterOption(knex, id)));
        }
        else return Promise.resolve;
      });
  };
}

function saveFilterOption(knex, filter_id) {
  return ({ key, display }) => {
    return knex('filter_options').insert({ key, display, filter_id });
  };
}


exports.seed = function(knex, Promise) {
  return Promise.all([
    knex('filters').del(),
    knex('filter_options').del()
  ])
    .then(() => {
      return Promise.all(filters.map(saveFilter(knex, Promise)));
    });
};
