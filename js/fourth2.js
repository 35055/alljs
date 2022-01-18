let quanity = +prompt('Сколько примеров вы хотите решить?');

    function random(min,max){
        return Math.floor(Math.random() * (max - min) + min)
    }
    
    let maxNumber = 10;
    let minNumber = 1;
    function choose(ac1, ac2){
    let ds = Math.floor( Math.random() * (ac2 - ac1 + 1) + ac1 )
    return ds;
    }let ac1 = 1;
     let ac2 = 4;

for( let i = 0 ; i <= quanity ; i++){
if( choose(ac1, ac2) == 1){
       let number1 = random(minNumber, maxNumber);
       let number2 = random(minNumber, maxNumber);
       let primer = +prompt( number1 + '*' + number2 + '=' + '?');
       let answer = (number1 * number2) == primer ? 'Молодец' : 'Ошибка';
    alert( number1 + '*' + number2 + ' = ' + (number1 * number2) + ' Ваш ответ ' + primer + ' ' + answer + ' !'  );
    }else if( choose(ac1, ac2) == 2){
       let number1 = random(minNumber, maxNumber);
       let number2 = random(minNumber, maxNumber);
       let primer = +prompt( number1 + '-' + number2 + '=' + '?');
       let answer = (number1 - number2) == primer ? 'Молодец' : 'Ошибка';
    alert( number1 + '-' + number2 + ' = ' + (number1 - number2) + ' Ваш ответ ' + primer + ' ' + answer + ' !'  );
    }else if( choose(ac1, ac2) == 3){
       let number1 = random(minNumber, maxNumber);
       let number2 = random(minNumber, maxNumber);
       let primer = +prompt( number1 + '+' + number2 + '=' + '?');
       let answer = (number1 + number2) == primer ? 'Молодец' : 'Ошибка';
    alert( number1 + '+' + number2 + ' = ' + (number1 + number2) + ' Ваш ответ ' + primer + ' ' + answer + ' !'  );
    }else if( choose(ac1, ac2) == 4){
       let number1 = random(minNumber, maxNumber);
       let number2 = random(minNumber, maxNumber);
       let primer = +prompt( number1 + '/' + number2 + '=' + '?');
       let answer = (number1 / number2) == primer ? 'Молодец' : 'Ошибка';
    alert( number1 + '/' + number2 + ' = ' + (number1 / number2) + ' Ваш ответ ' + primer + ' ' + answer + ' !'  );
}
}