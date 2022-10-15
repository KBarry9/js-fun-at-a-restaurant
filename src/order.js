function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
}

function refundOrder(order, deliveryOrders) {
  for(var i = 0; i < deliveryOrders.length; i ++) {
    if(deliveryOrders[i].orderNumber === order) {
      //console.log(deliveryOrders[i].orderNumber);
      deliveryOrders.slice(order);
    }
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  // listItems,
  // searchOrder
}