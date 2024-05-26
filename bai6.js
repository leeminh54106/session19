let product = [
    {
        id: 1,
        name: "A",
        price: 2000,
    },
    {
        id: 3,
        name: "B",
        price: 5000,
    },
    {
        id: 2,
        name: "C",
        price: 4000,
    }
]

// for (let i = 0; i < product.length - 1; i++) {
//     for (let j = i + 1; j < product.length; j++) {
//         if (product[i].price > product[j].price) {
//             const temp = product[i]
//             product[i] = product[j]
//             product[j] = temp
//         }
//     }
// }
console.log(product);
product.sort((a, b) => a.price - b.price)