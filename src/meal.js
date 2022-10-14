function nameMenuItem(food) {
  var Yum = `Delicious ${food}`
  return Yum
}

function createMenuItem() {
  var menuItem = {
    name: nameMenuItem("French Toast"),
    price: 10.99, 
    type: "breakfast",
  }
return menuItem 
}

function addIngredients(food, ingredients) {
  var ingredients = [];
    return ingredients.push();
  
}

function formatPrice() {
  var initialPrice = "$" + createMenuItem.menuItem.price()
  return initialPrice;
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  // decreasePrice,
  // createRecipe
}


