
let product = {
    "id": 1
}
console.log(product)

//Object augmentation
//add new property
product.name = 'Phone'
console.log(product)

//update existing property
product.name = 'TV'
console.log(product)

//add and update.
/**
 * if property exits, then update else add.
 */
product.qty = 100;
product.price = 1000
console.log(product)

//delete property
delete product.qty;
console.log(product)

//iterate
for (const key in product) {
    console.log(`${key} ${typeof key}`)
}

for (const key in product) {
    console.log(`${key} ${product[key]}`)
}