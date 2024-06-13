// concat() - combines at least to arrays into one
// Scenario: an e-commerce store need to create a combined list of customer orders from 
// two different sales channels: the website and the mobile app. Each sales channel records its 
// orders separately in arrays. Finally these arrays need to get merged to get a complete list 
// of all orders for processing.

const websiteOrders = [
    { 
      orderId: 1, 
      customer: 'Henry', 
      amount: 250 
    },
    { 
      orderId: 2, 
      customer: 'Anna', 
      amount: 150 
    },
]

const mobileAppOrders = [
    { 
      orderId: 3, 
      customer: 'Phillip', 
      amount: 300 
    },
    { 
      orderId: 4, 
      customer: 'Kassandra', 
      amount: 100 
    },
]

const allOrders = websiteOrders.concat(mobileAppOrders)

console.log(allOrders)