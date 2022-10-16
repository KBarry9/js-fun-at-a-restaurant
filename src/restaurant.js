function createRestaurant(name, menu) {
  var pizzaRestaurant = {
    name: name,
    menu = {
      breakfast: menu,
      lunch: menu,
      dinner: menu
    }
  }
  //console.log(pizzaRstaurant.name)
  return pizzaRestaurant
}

function addMenuItem() {

}

function removeMenuItem() {

}

module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}