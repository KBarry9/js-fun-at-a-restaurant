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



module.exports = {
  nameMenuItem,
  createMenuItem,
  // addIngredients,
  // formatPrice,
  // decreasePrice,
  // createRecipe
}


