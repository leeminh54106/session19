
let staff = [
    {
    id: 1,
    name: "ABC",
    price: 20000,
    quantity: 2,
},
{
    id: 2,
    name: "DCV",
    price: 40000,
    quantity: 4,
},
{
    id: 3,
    name: "BÁC",
    price: 50000,
    quantity: 1,
}
];



for (let i in staff) {
    console.log("---------------");
    console.log("Id:", staff[i].id);
    console.log("Name:", staff[i].name);
    console.log("Phone:", staff[i].price);
    console.log("Address:", staff[i].quantity);
}