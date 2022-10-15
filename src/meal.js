function nameMenuItem(food) {
  var Yum = `Delicious ${food}`
  return Yum;
}

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name, 
    price: price, 
    type: type,
  }
  return menuItem;
}

function addIngredients(food, ingredients) {
  if (ingredients.includes(food) === false) {
      return ingredients.push(food);
  }
}

function formatPrice(price) {
  let formattedPrice = "$" + price;
  return formattedPrice;
}

function decreasePrice(price) {
  var lowerPrice = price - (price * 0.1);
  return lowerPrice;
}

function createRecipe(title, ingredients, type) {
  var recipe = {title, ingredients, type};
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