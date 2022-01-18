alert('Зайдите в консоль в разработчика')
let obj = receipt();
let delivery = 9000;
let menu = 'Вы заказали ';

for(let key in obj){
    menu = menu + `${key}`;
    for(let newkey in obj[key]){
        menu = newkey == 'info' ? menu + `${obj[key][newkey]}` : menu;
        delivery = newkey == 'price' ? delivery + obj[key][newkey] : delivery;
    }
}
console.log(`${menu} | Общая стоимость ${delivery} сумм с доставкой (9000)`);