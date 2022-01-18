let number = prompt ('Введите количество переменных');
let symbol = prompt ('Введите символ');
let lastsymbol = prompt ('Введите последний символ');
for( let i = 0; i < number ; i++ ) {
 if (i == 0){
    symbol;
}else{
    lastsymbol = symbol + lastsymbol ;
}console.log(lastsymbol);
}


