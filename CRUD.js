const contacts = [
    {
        id: 1,
        name: "Khắc Tiệp",
        phone: "0968888888",
        email: "khactiep@gmail.com",
    },
    {
        id: 2,
        name: "Ngọc Trinh",
        phone: "0969999999",
        email: "ngoctrinh@gmail.com",
    },
];

while (true) {
    let userInput = prompt(`Please input C/R/U/D/E
  - C: Create new contact
  - R: Display all contacts
  - U: Update contact
  - D: Delete contact
  - E: Exit`);

    if (userInput === "C") {
        // Thêm mới một contact vào danh sách contacts
        let name = prompt("Please input contact name");
        let phone = prompt("Please input contact phone");
        let email = prompt("Please input contact email");

        addContact(name, phone, email);

        displayContacts();
    } else if (userInput === "R") {
        // Hiển thị toàn bộ contact trong ds contacts
        displayContacts();
    } else if (userInput === "U") {
        // Cập nhật lại một contact trong ds contacts
        let name = prompt("Please input contact name u want to update");
        // Tìm kiếm đối tượng contact trong danh sách contacts qua trường
        // name
        let findIndex = findContactByName(name);
        if (findIndex === -1) {
            console.log("Contact not found");
        } else {
            // Cho người dùng nhập vào các thông tin cập nhật
            let newName = prompt("Please input contact name");
            let newPhone = prompt("Please input contact phone");
            let newEmail = prompt("Please input contact email");
            // Tiến hành cập nhật lại thông tin contact
            updateContactByInfo(findIndex, {
                name: newName,
                phone: newPhone,
                email: newEmail,
            });
        }
    } else if (userInput === "D") {
        // Xoá một contact khỏi danh sách contacts
        let name = prompt("Please input contact name u want to delete");
        // Tìm kiếm đối tượng contact trong danh sách contacts qua trường
        // name
        let findIndex = findContactByName(name);
        if (findIndex === -1) {
            console.log("Contact not found");
        } else {
            // Xoá đối tượng contact trong danh sách contacts
            contacts.splice(findIndex, 1);
        }
        displayContacts();

    } else if (userInput === "E") {
        // Thoát khỏi chương trình
        console.log("Exit contact list successfully !!!");
        break;
    } else {
        console.log("Invalid command");
    }
}

function addContact(name, phone, email) {
    let contact = {
        id: contacts.length === 0 ? 1 : contacts[contacts.length - 1].id + 1,
        //   id: Math.random() // Tạo ra 1 đại lượng ngẫu nhiên,
        name: name,
        phone: phone, // ES6 syntax
        email: email,
    };

    contacts.push(contact);
}

function displayContacts() {
    console.log("-- Phone List --");
    for (let element of contacts) {
        console.log(`Name: ${element.name}`);
        console.log(`Phone: ${element.phone}`);
        console.log(`Email: ${element.email}`);
        console.log("----------------");
    }
}

function findContactByName(name) {
    // Tìm kiếm đối tượng contact trong danh sách contacts qua trường
    // name
    let updateIndex = contacts.findIndex(function (el, i) {
        return el.name === name;
    });
    return updateIndex;
}

function updateContactByInfo(index, info) {
    contacts[index].name = info.name;
    contacts[index].email = info.email;
    contacts[index].phone = info.phone;

    displayContacts();
}