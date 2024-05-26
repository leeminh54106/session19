
let book=[{
    author:"A",
    name:"ABC1"
},
{
    author:"B",
    name:"ABC2"
},
{
    author:"C",
    name:"ABC3"
}
]

let authorNew= prompt("Mời nhập tác giả");

let findBook=book.findIndex((e)=>e.author===authorNew)

if(findBook<0){
    console.log("K tìm thấy sách");
}else{
    console.log(book[findBook]);
}


