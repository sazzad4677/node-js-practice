const name = 'Sazzad'
const age = 27;
const user = {
    name,
    age,
    location: 'Dhaka'
}

console.log(user)

// object destructuring

const product = {
    label: 'Notebook',
    price: 10,
    stock: 200,
    salePrice: undefined,
}

const {label, stock} = product
console.log(label, stock)

