// prototype object
const Cart = {
    articles: [1, 2, 3, 4, 5, 6],

    buy: function (articleNo) {
        if (this.articles.includes(articleNo)) {
            console.log("The item is available. You can buy it.");
            this.canPurchase = true;
        } else {
            console.log("Item not available.");
        }
    },

    billing: function (amount) {
        console.log(`pay ${amount}`);
    }
};

// customer1 with property descriptors
let customer1 = Object.create(Cart, {
    name: {
        value: "Naina",
        writable: true,
        enumerable: true,
        configurable: true
    },
    id: {
        value: "23",
        writable: false, // cannot be changed
        enumerable: true,
        configurable: true
    },
    canPurchase: {
        value: false,
        writable: true,
        enumerable: false, 
        configurable: true
    }
});

customer1.buy(4);
if (customer1.canPurchase) {
    customer1.billing(100);
}

// customer2 with different descriptors
let customer2 = Object.create(Cart, {
    name: {
        value: "Amyra",
        writable: true,
        enumerable: true,
        configurable: true
    },
    id: {
        value: "87",
        writable: true,
        enumerable: true,
        configurable: false // can't delete or redefine
    },
    canPurchase: {
        value: false,
        writable: true,
        enumerable: false,
        configurable: true
    }
});

customer2.buy(56);
if (customer2.canPurchase) {
    customer2.billing(1007);
}

console.log(Object.keys(customer1));
console.log(customer1.canPurchase);