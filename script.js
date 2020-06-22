/* do {num = +prompt('введите количество ступеньков')}
while(isNaN(num) || num == 0 );
do {otstup = prompt('Введите символ отступа')}
while(otstup == 0 )
do {last = prompt('введите конечный символ')}
while (last == 0)
alert('откройте консоль ')
for(i = 0; i < num; i++){
if(i == 0){
    last = last
}else{ last = otstup + last }
console.log(last);}
 */

 // Возвраст
/* function age (){
  age = Currentyear - yearofbirth;
  return age;
}
let name = prompt('Введите своё имя');
while (!isNaN(name) || name == 0) {
    name = prompt('Введите свое имя заново');
}

let yearofbirth = prompt('Введите  год рождения');
while (isNaN(yearofbirth) || yearofbirth == 0) {
    yourAge = prompt('Введите год рождения заново');
}

let Currentyear = prompt('Введите нынешний год');
if (isNaN(Currentyear) || Currentyear == 0) {
    Currentyear = 2020
};
let Age = age();
alert(name + ', Ваш возраст: ' + Age); */


/* Рандом пример */
function random(min, max){
    return Math.floor(Math.random() *  (max + 1 - min) + min)
}
let num = +prompt('kol-vo primerov');
for(let i = 0; i < num; i++){
    let num1 = random(1, 10);
    let num2 = random(1, 10);
    let symbol = random(1, 5);
    let answer = 0;
    let symbolstr = ''
    if(symbol == 1){

      answer = num1 + num2;
      symbolstr =  '+'  
    }else if(symbol == 2){
        answer = num1 - num2;
        symbolstr = '-'
    }else if(symbol == 3){
        answer = num1 * num2;
        symbolstr = '*';
    }else if (symbol == 4){
        answer = num1 / num2;
        symbolstr = ' / ' 
    }else{
        answer = num1 % num2;
        symbolstr = ' % '
    }
    let answerUser = +prompt(num1 + symbolstr + num2 + ' = ')
   
    if  (answerUser == answer){
        answerUser ='  Правильно '

    }else(answerUser = ' Ошибка ')
    alert(num1 + symbolstr + num2 + ' = ' + answer + ' vash otvet ' + answerUser);

    }

 