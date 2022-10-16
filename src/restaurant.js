function createRestaurant(restaurantName) {
  var pizzaRestaurant = {
    name: restaurantName,
  }

  console.log(`"${pizzaRestaurant.name}"`)
  return `"${pizzaRestaurant.name}"`
}


module.exports = {
  createRestaurant, 
  // addMenuItem,
  // removeMenuItem
}