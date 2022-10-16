function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
}

function refundOrder(orderNumber, deliveryOrders) {
  for(var i = 0; i < deliveryOrders.length; i ++) {
    if(deliveryOrders[i].orderNumber === orderNumber) {
      deliveryOrders.splice(i, 1);
    }
  }
}

function listItems(deliveryOrders) {
  var orderNames = "";
  for(var i = 0; i < deliveryOrders.length; i ++) {
    if(i === deliveryOrders.length - 1) {
      orderNames = orderNames + deliveryOrders[i].item
  } else {
    orderNames = orderNames + deliveryOrders[i].item + ", "
  }
}
return orderNames
}

function searchOrder(deliveryOrders, item) {
  var searchItem = false
  for(var i = 0; i < deliveryOrders.length; i ++) {
    if(deliveryOrders[i].item === item) {
      searchItem = true
    } 
  }
  return searchItem
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}