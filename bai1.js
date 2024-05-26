
let id = prompt("Mời nhập id")
let nameperson = prompt("Mời nhập tên")
let phone = +prompt("Mời nhập số điện thoại")
let address = prompt("Mời nhập số địa chỉ")
let staff = {
    id,
    nameperson,
    phone,
    address,
};
let information=[];
information.push(staff);


for (let i in information) {
    console.log("---------------");
    console.log("Id", information[i].id);
    console.log("Name", information[i].nameperson);
    console.log("Phone", information[i].phone);
    console.log("Address", information[i].address);
}

delete staff.address;
staff.gmail = prompt("Mời nhập gmail")


for (let i in information) {
    console.log("---------------");
    console.log("Id", information[i].id);
    console.log("Name", information[i].nameperson);
    console.log("Phone", information[i].phone);
    console.log("Address", information[i].address);
    console.log("Email", information[i].gmail);
}
