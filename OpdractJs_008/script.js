// Checking if a number is bigger than 100
const overHundred = function (number) {
    const getal = number;
    if (getal > 100) {
        return "true";
    }
    return "false"
    }
//const uitkomst= overHundred(50);
const uitkomst = overHundred(120);
console.log(uitkomst);

// Bouncer at a club
 const entranceCheck = function (crowd, age){
 const amount = crowd;
 const person = age;


 if (amount < 500 && person >= 18) {
     return "come in"
 }
 if (amount >= 500 && person >=18) {
     return "it's too busy now, come back later"
 } 
if (person <18) {
     return "this is a club for adults"
 } 
}
const BrendaSays = entranceCheck (400, 17);
console.log(BrendaSays)

// A function that is calculating the average
const calculateAverage = function (number1, number2, number3, number4, number5) {
    const average = (number1 + number2 + number3 + number4 + number5)/5 ;
    return average
    
}
const result1 = calculateAverage (1,2,3,4,5);
console.log(result1);
const result2 = calculateAverage (10,20,30,40,50);
console.log(result2);
const result3 = calculateAverage (4,4, 10, 18, 89);
console.log(result3);
const result4 = calculateAverage (2, 2, 2, 3, 3);
console.log(result4)
// this is afunction that produces something
