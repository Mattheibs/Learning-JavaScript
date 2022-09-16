/*
// alert("Hello World");

let js = "amazing";

// if (js === "amazing") alert("JavaScript is fun");

console.log(40 + 8 + 23 - 10);

console.log("Matthew");
console.log(23); // Numbers don't need the inverted commas

let firstName = "Matthew";
console.log(firstName);
console.log(firstName);

//Variable naming must be: Camel Case (firstNamePerson), can't start with a number(3years), there are a few reserved keywords as well (new; function;math), name can be used but don't use it rather use (firstName), don't start with uppercase letter

let myFirstJob = "Programmer";
let myCurrentJob = "Teahcer"; // Use specific variable names

console.log(myFirstJob);

let country = "South Africa";
let continent = "Africa";
let population = 4000000;

console.log(country);
console.log(continent);
console.log(population);

//Primitive Data Types are;
// Numbers(let age = "23";)
// String(let firstName = "Matthew";)
// Boolean(Can only be true or false, let fullAge = true;)
//  Undefined(Value of veriable that isn't defined yet, let children;)
true;


console.log("hello")

true;
console.log(true) // Notes Booleans don't need inverted commas 
let javascriptIsFun = true;
console.log(javascriptIsFun)

console.log(typeof true) // Notes typeof tells you the type of the value 
console.log(typeof javascriptIsFun)
console.log(typeof 23)
console.log(typeof "Matthew")

// Notes (Let javascriptIsFun - this is the variable)(=true - this is the value if the variable)

javascriptIsFun = "Yes" // Notes, you don't use the word let when you want to change the value of the variable 
console.log(typeof javascriptIsFun)

let year; // Notes, when you declare an empty variable, the value will be undefined 
console.log(year)
console.log(typeof year)
year = 1995;
console.log(typeof year)


let age = 30; //Notes, let allows you to change the value of the variable. It is called reassigning or mutated
age = 31;
console.log(age)

const birthYear = 1995; //Notes, const creates a variable that can't be reassigned, immutable variable 
//Notes, you can't create an empty const variable (const birthYear;) will not work
//Notes, use const by default and let if you are 100% know it will need to be changed

var job = "Programer"; //Notes, var is old and should never be used, it is similar to let
console.log(job)
job = "Teacher";
console.log(job)


const now = 2022;
const ageMatt = now - 1995;
const ageGareth = now - 1997;
console.log(ageMatt, ageGareth) //Notes, you can console.log multiple values at the same time

console.log(ageMatt * 2, ageMatt / 2, 2 ** 3) //Notes, 2 ** 3 means 2 to the power of 3 (2 * 2 * 2)

const firstName = "Matthew"
const lastName = "Heiberg"
console.log(firstName + " " + lastName)
console.log(`${firstName} ${lastName}`)

//Assignment Operators
let x = 10 + 5;// Notes, this equals 15 
x +=10;//Notes, x = x(Which is aleady 15 from the line of code above) + 10
x *= 4; //Notes, this would then be x(Which is 25 now) * 4
x++; //Notes, this would then be x(Which is 100 now) + 1
console.log(x)

//Comparison Operators
console.log(ageMatt > ageGareth);
console.log(ageGareth >= 18)
const fullAge = ageGareth >= 18;

let z, y;// Notes, you can declare to variables at the same time 
z = y = 25 - 10 -5;
console.log(z, y)

const averageAge = ((ageMatt + ageGareth) / 2)
console.log(averageAge)


//Coding Challenge 1

const massMark = 78;
const massJohn = 92;

const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn)
console.log(markHigherBMI)
//End of coding challenge 1

const firstName ="Matthew"
const lastName ="Heiberg"
const birthYear = 1995;
const currentYear = 2022

const matthew = `I'm ${firstName} ${lastName}, and I am ${currentYear - birthYear} years old`;
console.log(matthew)

console.log(`string
with multiple
lines`)//Notes, how to add multiple lines of code


const age = 15;

if(age >= 18){
console.log("Matthew is old enough")
}else {
const yearsLeft = 18 - age;
console.log(`Matthew still needs to wait ${yearsLeft} years`)
}


const birthYear = 2012;
let century;

if(birthYear <= 2000){
 century = 20;
}else { century = 21;}
console.log(century)


//Coding Challenge 2

const massMark = 78;
const massJohn = 92;

const heightMark = 1.69;
const heightJohn = 1.95;

const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

const markHigherBMI = bmiMark > bmiJohn;
console.log(bmiMark, bmiJohn)
console.log(markHigherBMI)

if(bmiMark > bmiJohn) {
console.log(`Marks BMI ${bmiMark} is higher than Johns BMI ${bmiJohn}`)
}else{
console.log(`Johns BMI is higher than Marks`)
}


//Convertion
const inputYear = "1991"
console.log(Number(inputYear))
console.log(Number(inputYear) + 18)//Notes, Number converts the string into a number than can be used 

console.log(Number("Matthew"))
console.log(String(23))//Notes, String converts number into a string


//Coercion
console.log("I am " + 23 + " Years old")
console.log("23" - "10" - 3)
//Notes, + converts the values to a string
//Notes, - * / converts the values to numbers


//falsy falues are; 0, ' ', undefined, nulln NaN

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean("Matthew"))

const money = 0;
if(money){
console.log("Don't spend it all")
}else{
console.log("You should get a job")
}

let height;

if(height) {
console.log("Height is defined")
}else{
console.log("Height is not defined")
}
*/
