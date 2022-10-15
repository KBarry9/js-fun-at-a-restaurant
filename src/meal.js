function nameMenuItem(name) {
  let menuItemName = 'Delicious ' + name;

  return menuItemName;
}

function createMenuItem(name, price, type) {
  let createMenuItem = {
    name, price, type
  };

  return createMenuItem;
}

function addIngredients(ingredient, ingredients) {

  if (ingredients.includes(ingredient) === false) {
    ingredients.push(ingredient);
  }

  return ingredients;
}

function formatPrice(price) {
  let formattedPrice = '$' + price;

  return formattedPrice;
}

function decreasePrice (price) {
  decreasedPrice = price - (price * 0.1);

  return decreasedPrice;
}

function createRecipe(title, ingredients, type) {
  let recipe = {
    title, ingredients, type
  };

  return recipe;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}














