"use strict";
/*
//Section 2

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


const age = "18";
if (age === "18") {
	console.log("You are old enough");
}
//Notes, strict version === says if something is equal to something else, only returns true if both are exaclty the same. If you say 18(Number) === '18'(String) if will come back false
//Notes, loose version == does type coersion, meaning if you say 18(Number) == '18'(String) it will come back true

const favourite = Number(prompt("What is you favorite number"));
console.log(favourite);

if (favourite === 23) {
	console.log("23 is the best number");
} else if (favourite === 7) {
	console.log("7 is an average number");
} else {
	console.log("Number is neither 23 or 7");
}

if (favourite !== 23) {
	console.log("Why not 23");
}
//Notes, !== is the strict version
//Notes, != is the loose version

//Notes, AND (&&) - return true only if all come back true
//Notes, OR (||) - returns true if only one comes back true
//Notes, NOT (!) - inverts the answer (So if the answer was true it is changed to false)


const hasDrivers = true;
const hasGoodVision = true;

console.log(hasDrivers && hasGoodVision);
console.log(hasDrivers || hasGoodVision);
console.log(!hasDrivers);

// const shouldDrive = hasDrivers && hasGoodVision;

if (hasDrivers && hasGoodVision) {
	console.log("You can drive");
} else {
	console.log("You should not be driving");
}

const isTired = true;

console.log(hasDrivers || hasGoodVision || isTired);

if (hasDrivers && hasGoodVision && !isTired) {
	console.log("You can drive");
} else {
	console.log("You should not be driving");
}


//Coding Challenge 3

//Test 1
const dolAverageScore = (96 + 108 + 89) / 3;
const koaAverageScore = (88 + 91 + 110) / 3;

if (dolAverageScore > koaAverageScore) {
	console.log("Dolphins win");
} else if (koaAverageScore > dolAverageScore) {
	console.log("Koalas win");
} else if (dolAverageScore === koaAverageScore) {
	console.log("This was a draw");
}


const day = prompt("What day is it");

switch (day) {
	case "Monday":
		console.log("This is Monday");
		console.log("Monday is a horrible day");
		break;
	case "Tuesday":
		console.log("This is Tuesday");
		break;
	case "Wednesday":
	case "Thursday":
		console.log("This is Wednesday and Thursday");
		break;
	case "Friday":
		console.log("This is Friday");
		break;
	case "Sunday":
		console.log("This is the weekend");
		break;
	case "Saturday":
		console.log("This is the weekend");
		break;
	default:
		console.log("Not a valid day");
}


const age = 17;

age >= 18
	? console.log("I am old enough to drink")
	: console.log("I am not old enough to drink");

const drink =
	age >= 18 ? "I am old enough to drink" : "I am not old enough to drink";
console.log(drink);
//Notes, ternary operator - it is similar to if statement

console.log(`I like to drink ${age >= 18 ? "Wine" : "Water"}`);


//Coding Challenge 4
const bill = 275;
let tip;

if (bill > 50 && bill < 300) {
	let tip = bill * 0.15;
	console.log(
		`The bill was ${bill}, the tip was ${tip} and the total value is ${
			bill + tip
		}`
	);
} else if (bill > 300) {
	let tip = bill * 0.2;
	console.log(
		`The bill was ${bill}, the tip was ${tip} and the total value is ${
			bill + tip
		}`
	);
}

let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
	`The bill was ${bill}, the tip was ${tip} and the total value is ${
		bill + tip
	}`
);

//End of Coding Challenge 4


//Part 1 test
const country = "South Africa";
const continent = "Africa";
let population = 1000000;

console.log(country, continent, population);

const isIsland = false;

let language;

console.log(
	typeof isIsland,
	typeof country,
	typeof continent,
	typeof population
);

language = "English";

console.log(population / 2);
population++;
console.log(population);
const finlandPop = 6000000;
console.log(population > finlandPop);
const popAvergae = 33000000;
console.log(popAvergae > population);

console.log(
	`${country} is in ${continent}, and it's ${population} million people speak ${language}`
);

if (population > popAvergae) {
	console.log(`${country} population is above average`);
} else {
	console.log(
		`${country} population is ${popAvergae - population} below average`
	);
}

const numNeighbours = Number(
	prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
	console.log("Only 1 border");
} else if (numNeighbours > 1) {
	console.log("More than 1");
} else {
	console.log("No bordering countries");
}

if (population < 50000000 && language === "English" && !isIsland) {
	console.log("Matthew Should live in South Africa");
}

const language2 = "hindi";
switch (language2) {
	case "english":
		console.log("3rd place");
		break;
	case "chinese":
		console.log("Most number of native speakers");
		break;
	case "spanish":
		console.log("2nd place in number of native speakers");
		break;
	case "hindi":
		console.log("Number 4");
		break;
	case "arabic":
		console.log("5th most spoken language");
		break;
	case "arabic":
		console.log("5th most spoken language");
		break;
	default:
		console.log("Great language too :D");
}

console.log(
	`${country} population is ${population > 33000000 ? "Above" : "Below"}`
);

//End of Part 1 test


"use strict"; //Notes, activates strict mode, needs to be the first line of code in the file

let hasDriversLicesnse = false;

const passTest = true;

if (passTest) {
	hasDriversLicesnse = true;
}

if (hasDriversLicesnse) {
	console.log("I can drive :D");
}


//Notes, parametes are places in the yellow brackets below
function logger() {
	console.log("My name is Matthew");
}

//Notes, Calling / Running / Envoking the function is below
logger();
logger();
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	const juice = `Juice with ${apples} apples and ${oranges} oranges`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0); //Notes, when the function is called the values placed in here will be used as the parameters. These are called arguments

console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Notes, below is a function declaratio
function calcAge1(birthYear) {
	//const age = 2022 - birthYear;
	return 2022 - birthYear;
}


//Notes, below is a functional expression
const age1 = calcAge1(1995);
console.log(age1);

const calcAge2 = function (birthYear) {
	return 2022 - birthYear;
};
const age2 = calcAge2(1997);
console.log(age2);


function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} million people in it's capital city ${capitalCity}`;
}

const country1 = describeCountry("Country1", 1, "City1");
const country2 = describeCountry("Country2", 2, "City2");
const country3 = describeCountry("Country3", 3, "City3");

console.log(country1, country2, country3);

function percentageOfWorld(population) {
	return (population / 7900) * 10;
}

const africaPop = percentageOfWorld(6);
const fricaPop = percentageOfWorld(60);
const ricaPop = percentageOfWorld(900);
console.log(africaPop, fricaPop, ricaPop);

const percentageOfWorld2 = function () {
	return (population / 7900) * 10;
};

const pop1 = percentageOfWorld(6);
const pop2 = percentageOfWorld(60);
const pop3 = percentageOfWorld(900);
console.log(pop1, pop2, pop3);

//Notes, arrow function below 

const calcAge3 = birthYear => 2022 - birthYear;//Notes, return doesn't need to be added if there is only one liner function

const age3 = calcAge3(1995)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
const age = 2022 - birthYear;
const retirement = 65 - age;
//return retirement;
return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1995, "Matthew Heiberg"));
console.log(yearsUntilRetirement(1990, "Gareth Heiberg"));

//Notes, one function calling another function
function cutFruitPieces(fruit){
return fruit * 4;
}

function fruitProcessor(apples, oranges){
const applePieces = cutFruitPieces(apples);
const orangePieces = cutFruitPieces(oranges);

const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
return juice;
}

console.log(fruitProcessor(2, 3))



function percentageOfWorld1(percentage){
return (percentage / 7900) * 100;
}

function describePopulation(country, population){
const percentage1 = percentageOfWorld1(population);
const description =  `${country} has ${population} million people, which is about ${percentage1}of the world`
console.log(description)
}
describePopulation("South Africa", 8)


function age1(birthYear) {
	return 2022 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
	const age = age1(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		return retirement;
	} else {
		return -1;
	}

	// return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(1995, "Matthew Heiberg"));
console.log(yearsUntilRetirement(1950, "Gareth Heiberg"));


const calcAverage = (score1, score2, score3) => {
	return (score1 + score2 + score3) / 3;
};

function checkWinner(avgDolphins, avgKoalas) {
	if (avgDolphins > avgKoalas * 2) {
		console.log(`Dolphins win by (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas > avgDolphins * 2) {
		console.log(`Koalas win by (${avgKoalas} vs. ${avgDolphins})`);
	} else {
		console.log("No team wins");
	}
	// return checkWinner;
}

const scoreDolphins = calcAverage(44, 23, 71);
const scoreKoalas = calcAverage(65, 54, 49);

const scoreDolphins2 = calcAverage(85, 54, 41);
const scoreKoalas2 = calcAverage(23, 34, 27);

checkWinner(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins2, scoreKoalas2);


const friend1 = "Matthew";
const friend2 = "Gareth";
const friend3 = "Andrew";

//Notes, Arrays start at 0 when reading the elements

const friends = ["Matthew", "Gareth", "Andrew"];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2022);
console.log(years);

console.log(friends[0]); //Notes, retrieving an element from an array
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jen"; //Notes, this is how an element in an array can be changed
console.log(friends);

const firstName = "Matthew";
const matthew = [firstName, "Heiberg", 2022 - 1995, friends];
console.log(matthew);

const calcAge = function (birthYear) {
	return 2022 - birthYear;
};

const brtyears = [1990, 1996, 2018, 1568];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[3]);

console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[2]), calcAge(years[3])];
console.log(ages);


const friends = ["Matthew", "Gareth", "Andrew"];
//Notes, Array methods
//Notes, push adds elements to the end of an array
const newLenght = friends.push("Nicholas");
console.log(friends);
console.log(newLenght);

//Notes, unshift adds element to the beginning of the array
friends.unshift("Shannon");
console.log(friends);

//Notes, pop removes elements from the end of the array
friends.pop();
const removed = friends.pop();
console.log(friends);
console.log(removed);

//Notes, shift removes elements from the beginning of the array
friends.shift();
console.log(friends);

//Notes, indexof tells us where an element is in the array
console.log(friends.indexOf("Gareth"));

//Notes, includes tell us if the element is in the array(true) or not(false)
console.log(friends.includes("Robert"));
console.log(friends.includes("Gareth"));

if (friends.includes("Peter")) {
	console.log("You know a Peter");
} else {
	console.log("You don't know a Peter");
}


function calcTip(bill) {
	if (bill > 50 && bill < 300) {
		let tip = bill * 0.15;
		return tip;
	} else if (bill < 50 || bill > 300) {
		let tip = bill * 0.2;
		return tip;
	}
}

const bills = [125, 556, 44];
const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [tip[0] + bills[0], tip[1] + bills[1], tip[2] + bills[2]];
console.log(totals);


//Notes, objects hold properties

const matthew = {
	firstName: "Matthew",
	lastName: "Heiberg",
	age: 2022 - 1995,
	job: "Operator",
	friends: ["Matthew", "Gareth", "Andrew"],
};

console.log(matthew);

//Notes, dot and bracket notation to get property from an object

console.log(matthew.lastName);
console.log(matthew["lastName"]);

const nameKey = "Name";
console.log(matthew["first" + nameKey]);
console.log(matthew["last" + nameKey]);

const interstedIn = prompt(
	"What do you want to know about matthew? Choose between firstName, lastName, age, job and friends"
);
console.log(matthew[interstedIn]);

if (matthew[interstedIn]) {
	console.log(matthew[interstedIn]);
} else {
	console.log("That isn't known");
}

matthew.location = "Cape Town";
matthew["twitter"] = "Twitter Name";
console.log(matthew);


const matthew = {
	firstName: "Matthew",
	lastName: "Heiberg",
	age: 2022 - 1995,
	job: "Operator",
	friends: ["Matthew", "Gareth", "Andrew"],
};

console.log(
	`${matthew.firstName} has ${matthew.friends.length} friends, and his best friends name is ${matthew.friends[0]}`
);

const matthew = {
	firstName: "Matthew",
	lastName: "Heiberg",
	birthYear: 1995,
	job: "Operator",
	friends: ["Matthew", "Gareth", "Andrew"],
	hasDrivers: true,

	//calcAge: function (birthYear) {
	//	return 2022 - birthYear;
	//},

	// calcAge: function () {
	// 	return 2022 - this.birthYear; //Notes, the word 'this' is used for when you want to access a property in the object
	// },

	calcAge: function () {
		this.age = 2022 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.age} year old ${
			this.job
		} and he has ${this.hasDrivers ? "a" : "no"} drivers license`;
	},
};
//Notes, a function in an object is called a method

matthew.calcAge();
console.log(matthew.getSummary());


const mark = {
	fullName: "Mark Miller",
	height: 1.69,
	weight: 78,
	calcBMI: function () {
		this.bmi = this.weight / this.height ** 2;
		return this.bmi;
	},
};

const john = {
	fullName: "John Smith",
	height: 1.95,
	weight: 912,
	calcBMI: function () {
		this.bmi = this.weight / this.height ** 2;
		return this.bmi;
	},
};

mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
	console.log(
		`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI which is ${john.bmi}`
	);
} else {
	console.log(
		`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI which is ${mark.bmi}`
	);
}

//Notes, loops
console.log("Lifting weights rep 1");
console.log("Lifting weights rep 2");
console.log("Lifting weights rep 3");
console.log("Lifting weights rep 4");

//Notes, for loop keeps running while condition is true(second part of the loop). The first part of the for loop is what number to start at. The third part is how many to increase by
for (let rep = 0; rep <= 10; rep++) {
	console.log(`Lifting weights repetition ${rep}`);
}

//Notes, looping through arrays
const matthew = [
	"Matthew",
	"Heiberg",
	2022 - 1995,
	"Operator",
	["Matthew", "Gareth", "Jen"],
	true,
];

const types = [];

for (let i = 0; i < matthew.length; i++) {
	console.log(`${matthew[i]} which has a type of ${typeof matthew[i]}`);
	//Notes, creating new array using another array
	//types[i] = typeof matthew[i];
	types.push(typeof matthew[i]);
}
console.log(types);

const birthYears = [1991, 2002, 1556, 1998];
const ages = [];

for (let i = 0; i < birthYears.length; i++) {
	ages.push(2022 - birthYears[i]);
}


//Notes, continue and break statements

const matthew = [
	"Matthew",
	"Heiberg",
	2022 - 1995,
	"Operator",
	["Matthew", "Gareth", "Jen"],
	true,
];

//Notes, conitnue basically means skipped
for (let i = 0; i < matthew.length; i++) {
	if (typeof matthew[i] !== "string") continue; //Notes, only strings will be printed
	console.log(`${matthew[i]} which has a type of ${typeof matthew[i]}`);
}

//Notes, break stops the loop completely
for (let i = 0; i < matthew.length; i++) {
	if (typeof matthew[i] === "number") break; //Notes, loop will stop when the first number is found
	console.log(`${matthew[i]} which has a type of ${typeof matthew[i]}`);
}

const matthew = [
	"Matthew",
	"Heiberg",
	2022 - 1995,
	"Operator",
	["Matthew", "Gareth", "Jen"],
	true,
];

//Notes, loop backwards
for (let i = matthew.length - 1; i >= 0; i--) {
	console.log(`${i} , ${matthew[i]} has the type of ${typeof matthew[i]}`);
}

//Notes, loop inside a loop

for (let exercise = 1; exercise <= 3; exercise++) {
	console.log(`-------------exercise ${exercise}`);
	for (let rep = 1; rep <= 5; rep++) {
		console.log(`exercise${exercise}: rep ${rep}`);
	}
}


//Notes, while loop
let rep = 1;
while (rep <= 10) {
	console.log(`While loop:Lifting weights repetition ${rep}`);
	rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) {
		console.log("You rolled a 6");
	}
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

function calcTip(bill) {
	if (bill > 50 && bill < 300) {
		let tip = bill * 0.15;
		return tip;
	} else if (bill < 50 || bill > 300) {
		let tip = bill * 0.2;
		return tip;
	}
}

for (let i = 0; i < bills.length; i++) {
	tips.push(calcTip(bills[i]));
	totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);

let average;
let sum = 0;
for (let i = 0; i < totals.length; i++) {
	//sum = sum + totals[i];
	sum += totals[i];
	average = sum / totals.length;
}


const myCountry = {
	country: "South Africa",
	capital: "Cape Town",
	language: "English",
	population: 1,
	neighbours: ["neigh1", "neigh2", "neigh3"],
	describe: function () {
		console.log(`${this.country} has a population of ${this.population}`);
	},
};

myCountry.describe();
console.log(
	`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

myCountry.population = myCountry.population + 2;
console.log(
	`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);
myCountry.population = myCountry["population"] - 2;
console.log(
	`${myCountry.country} has ${myCountry.population} ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`
);

for (let i = 1; i <= 50; i++) {
	console.log(`Voter numver ${i} has voted `);
}


const populations = [10, 1441, 332, 83];
const percentage2 = [];

function percentageOfWorld(population) {
	return (population / 7900) * 10;
}

for (let i = 0; i < populations.length; i++) {
	percentage2.push(percentageOfWorld(populations[i]));
}

const listOfNeighbours = [
	["Canada", "Mexico"],
	["Spain"],
	["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++)
	for (let y = 0; y < listOfNeighbours[i].length; y++)
		console.log(`${listOfNeighbours[i][y]}`);

const matthew = [1, 2, 3, 4, 5];
console.log(matthew);
let gareth = [];

function reverse(rev) {
	for (let i = rev.length - 1; i > -1; i--) {
		gareth.push(rev[i]);
	}
	console.log(gareth);
	return rev;
}

reverse(matthew);

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 14, 9, 5];

//Notes, when trying to find min and max in an array 

const calcTempAmplitude = function(temps){
	let max = temps[0];
let min = temps[0];
	for(let i = 0; i < temps.length; i++){

if(typeof temps[i] !== "number") continue;
		if(temps[i] > max){
			max = temps[i];
					}
if(temps[i] < min){
			min = temps[i];
					}
}
	console.log(max, min)
return max -min;

}

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);


const temps1 = [1,2,3,4]
const temps2 = [5,6,7]

//Notes, concat is used to combine arrays
const calcTempAmplitudeNew = function(temp1, temp2){
const temps3 = temp1.concat(temp2);
console.log(temps3)
	let max = temps3[0];
let min = temps3[0];
	for(let i = 0; i < temps3.length; i++){

if(typeof temps3[i] !== "number") continue;//Notes, using continue to skip any "errors" in the array
 		if(temps3[i] > max){
			max = temps3[i];
					}
if(temps3[i] < min){
			min = temps3[i];
					}
}
	console.log(max, min)
return max -min;

}
const amplitudeNew = calcTempAmplitudeNew(temps1, temps2);
console.log(amplitudeNew);


console.log("Hello")


const measureKelvin = function(){
const measurement = {
type: "temp",
unit: "cels",
value: prompt("degress"),
};

console.warn("Warning")
console.error("Error")
console.table(measurement)//Notes, displays aan object in table form 
const kelvin = Number(measurement.value) + 273;
return kelvin;
}


console.log(measureKelvin())
//Notes, debugging
//First find the bug, then use console.log in different areas to see if all the parameters are working 
//Notes, can use the Sources tab on googles inspect 
*/

const test1 = [17, 21, 23];

const printForecast = function (arr) {
	let str = "";
	for (let i = 0; i < arr.length; i++) {
		str = str + `${arr[i]}C in ${i + 1} days ... `;
		console.log(str);
	}
	console.log("..." + str);
};

printForecast(test1);

let number = Number(prompt("Set the number"));
let guess = Number(prompt("Guess a number"));

for (let i = 0; i < 10; i++) {
	if (guess < number) {
		console.log("Too low");
		guess = Number(prompt("Guess again"));
	} else if (guess > number) {
		console.log("Too high");
		guess = Number(prompt("Guess again"));
	} else {
		console.log("You got it");
	}
}
