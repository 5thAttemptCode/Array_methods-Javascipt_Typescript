type Order = {
    orderId: number
    customer: string
    amount: number
}

const websiteOrders: Order[] = [
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

const mobileAppOrders: Order[] = [
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

const allOrders: Order[] = websiteOrders.concat(mobileAppOrders)

console.log(allOrders)