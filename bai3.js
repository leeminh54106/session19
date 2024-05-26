let id = 0;
while (true) {
    let input = prompt("Nhập C hoặc E")
    if (input === "C") {
        let nameStudent = prompt("Mời nhập tên")
        let classStudent = {
            id: ++id,
            nameStudent,
        }

        let arr = [];
        arr.push(classStudent);
        for (let i in arr) {
            console.log("--------");
            console.log("ID", arr[i].id);
            console.log("Name", arr[i].nameStudent);
        }
    } else if (input === "E") {
        break;
    }
}