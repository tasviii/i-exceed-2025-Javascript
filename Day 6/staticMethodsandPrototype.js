// prototype object (cart)
const Cart = {
    articles: [1, 2, 3, 4, 5, 6],

    buy(articleNo) {
        if (this.articles.includes(articleNo)) {
            console.log("the item is available. you can buy it.");
            this.canPurchase = true;
        } else {
            console.log("item not available.");
        }
    },

    billing(amount) {
        console.log(`pay ₹${amount}`);
    }
};

let customer1 = Object.create(Cart, {
    name: {
        value: "Naina",
        writable: true,
        enumerable: true,
        configurable: true
    },
    id: {
        value: "23",
        writable: false,
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

// create customer2
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
        configurable: false
    },
    canPurchase: {
        value: false,
        writable: true,
        enumerable: false,
        configurable: true
    }
});

console.log("customer1 has own property 'name':", Object.hasOwn(customer1, 'name'));

console.log("descriptor of 'id' in customer1:", Object.getOwnPropertyDescriptor(customer1, 'id'));

console.log("all descriptors of customer2:", Object.getOwnPropertyDescriptors(customer2));

console.log("all property names of customer1:", Object.getOwnPropertyNames(customer1));

const secret = Symbol('secretCode');
customer1[secret] = "xyz123";
console.log("symbols in customer1:", Object.getOwnPropertySymbols(customer1));

console.log("entries of customer2:", Object.entries(customer2));
console.log("values of customer2:", Object.values(customer2));

console.log("keys of customer1:", Object.keys(customer1));

console.log("are customer1 and customer2 the same?", Object.is(customer1, customer2));
console.log("object.is(nan, nan):", Object.is(NaN, NaN)); // true

console.log("is customer1 extensible?", Object.isExtensible(customer1));
Object.preventExtensions(customer1);
console.log("is customer1 extensible after preventextensions?", Object.isExtensible(customer1));

Object.freeze(customer2);
console.log("is customer2 frozen?", Object.isFrozen(customer2));

let tempObj = { test: 123 };
Object.seal(tempObj);
console.log("is tempObj sealed?", Object.isSealed(tempObj));

let newProto = {
    support: () => console.log("customer support available.")
};
Object.setPrototypeOf(customer2, newProto);
customer2.support(); // now has support method

console.log("prototype of customer2:", Object.getPrototypeOf(customer2));

let updated = Object.assign({}, customer1, { location: "delhi" });
console.log("updated object using assign:", updated);

let arrEntries = [['x', 1], ['y', 2]];
let objFromEntries = Object.fromEntries(arrEntries);
console.log("object from entries:", objFromEntries);

console.log("customer1.hasownproperty('name'):", customer1.hasOwnProperty('name'));
console.log("cart.isprototypeof(customer1):", Cart.isPrototypeOf(customer1));
console.log("is 'name' enumerable?", customer1.propertyIsEnumerable('name'));
console.log("customer1.tolocalestring():", customer1.toLocaleString());
console.log("customer1.tostring():", customer1.toString());
console.log("customer1.valueof():", customer1.valueOf());

console.log("\n customer 1 tries to buy");
customer1.buy(4);
if (customer1.canPurchase) {
    customer1.billing(100);
}

console.log("\n customer 2 tries to buy");
customer2.buy(10); // not available
if (customer2.canPurchase) {
    customer2.billing(500);
}
