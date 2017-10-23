const cuisineList = [
  { key: '', display: '' },
  { key: 'african', display: 'African' },
  { key: 'chinese', display: 'Chinese' },
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
  { key: 'latin american', display: 'Latin American' },
];

const dietList = [
  { key: '', display: '' },
  { key: 'vegan', display: 'Vegan' },
  { key: 'lacto vegetarian', display: 'No Eggs' },
  { key: 'ovo vegetarian', display: 'No Dairy' },
];

const allergyList = [
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
];

const mealTypeList = [
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
];

const filterData = [
  { key: 'includeIngredients', displayName: 'Ingredient', btn: { text: 'With', style: 'btn-success' }, altKey: 'excludeIngredients', altBtn: { text: 'Without', style: 'btn-danger' }, text: true },
  { key: 'cuisine', displayName: 'Cuisine', dropdown: cuisineList },
  { key: 'diet', displayName: 'Diet', dropdown: dietList, unique: true },
  { key: 'intolerances', displayName: 'Allergy', dropdown: allergyList },
  { key: 'type', displayName: 'Meal Type', dropdown: mealTypeList, unique: true },
];

module.exports = filterData;