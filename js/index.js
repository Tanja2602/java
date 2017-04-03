// var greetings ='Hello World!';
// alert(greetings);
// document.write (greetings);
// console.log (greetings);

// var userName=prompt('Your Name:');
// var greetings='Hello ' + userName;
// document.write (greetings);
// document.write ('<br>');

// var userAge=Number(prompt('Your Age:'));
// var nextAge=userAge + 1;
// document.write (' Soon you will be ' + nextAge);

// function  sum(a, b){
//     var result = a + b;
//     return result;
// }
// var calc = (42, 56);
// document.write (calc)

// var num1 = Number(prompt('Num1'));
// var num2 = Number(prompt('Num2'));
// var calc = sum(1, 2);
// document.write(calc);

function tellAge(age) {
    if (age < 18) {
        return 'Kid';
    } else {
        return 'Adult';
    }
}
var age = Number(prompt('Your age'));
document.write(tellAge(age));

var result = Math.sqrt(16);
document.write(result);
