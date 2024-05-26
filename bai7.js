const users = [];

const switchFn = true
let choose
do {
    choose = prompt(
        `
        1. A: Add user
        2. E: Exit
        `

    )
    choose = choose.toLowerCase();
    switch (choose) {
        case "a":
            addUser()
            break
        case "e":
            console.log(users)
            break
    }
} while (choose.toLowerCase() !== "e");

function addUser() {
    let id = 1
    if (users.length > 0) {
        id = users[users.length - 1].id + 1
    }
    const user = {
        id,
        name: "",
        email: "",
        password: ""
    }
    let name, email, password

    do {
        name = prompt("Enter name: ")
    } while (!isNaN(name) || name.length < 3)

    do {
        email = prompt("Enter email: ")
    } while (!/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(email))

    do {
        password = prompt("Enter password: ")
    } while (password.length < 8)

    user.name = name
    user.email = email
    user.password = password

    users.push(user)
}