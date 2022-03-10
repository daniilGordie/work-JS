'use strict'

let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');


let appData = {
    budget: money,
    expenses: { },
    optionalExpenses: { },
    income: { },
    timeData: time,
    savings: false
    };

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце" , ''),
        b = prompt("Во сколько обойдется?" , '');
        
        if ((typeof(a)) === 'string' && (typeof(a)) != null ) {
           appData.expenses[a] = b; 
        }
        
}

alert(appData.budget / 30);

//console.log (time);