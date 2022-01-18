let users = [
    {name:"Вася", surname:" Пупкин",id:1},
    {name:"Петя", surname:" Иванов",id:2},
    {name:"Маша", surname:" Петрова",id:3}
];


let answer = users.map((item) => {
    let ds = {
        fullname: (item.name + item.surname),
        id:item.id
    }
    console.log(ds);
});
alert('Зайдите в консоль разработчика');