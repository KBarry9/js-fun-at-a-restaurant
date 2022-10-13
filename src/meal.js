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

function addIngredients(ingredients) {
  var ingredients = [];
  for( var i = 0; i < ingredients.length; i++) {
    return ingredients.push();
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


