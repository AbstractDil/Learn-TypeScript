/*
TYpe Annotations

@Author: Sagar Nandy
@Date: 23/07/2023
*/

/*
* Number Type
*/

let apples: number = 5; // isValid = true
let speed: number = 10.5; // isValid = true
let hasName: boolean = true; // isValid = true
let nothingMuch: null = null; // isValid = true
let nothing: undefined = undefined; // isValid = true

//let myFavNum:number= 7 + "Sagar"; // isValid = false because myFavNum is number type 

// console.log(myFavNum); // Output: 7Sagar but typescript will show error

let totalApples = apples + 5; // isValid = true because totalApples is number type

console.log(totalApples);

/*
* String Type
*/

let myName: string = "Sagar"; // isValid = true

let sentence: string = `My name is ${myName}`; // isValid = true

console.log(sentence); // Output: My name is Sagar

let myFirstName = "Sagar";
let myLastName = "Nandy";

let myFullName = myFirstName + myLastName; // isValid = true

console.log(myFullName); // Output: SagarNandy


/*
* HomeWork 
*/

// String Initialization

let message: string = "Hello TypeScript"; // isValid = true

// Concatenation

let myMessage = message + " " + "Welcome to TypeScript"; // isValid = true

console.log(myMessage); // Output: Hello TypeScript Welcome to TypeScript

// string length

let messageLength = message.length; // isValid = true

console.log(messageLength); // Output: 17

console.log(myMessage.length); // Output: 32

// string to uppercase

let upperCaseMessage = message.toUpperCase(); // isValid = true

console.log(upperCaseMessage); // Output: HELLO TYPESCRIPT

// string to lowercase

let lowerCaseMessage = message.toLowerCase(); // isValid = true

console.log(lowerCaseMessage); // Output: hello typescript

//Substring

let subStringMessage = message.substring(0, 5); // isValid = true

console.log(subStringMessage); // Output: Hello

// string comparison

let firstMessage = "Hello";

let secondMessage = "Hello";

let thirdMessage = "hello";

let fourthMessage = "Hello TypeScript";

let fifthMessage = "Hello TypeScript";

let sixthMessage = "Hello TypeScript";



console.log(firstMessage == secondMessage); // Output: true

console.log(firstMessage == thirdMessage); // Output: false

console.log(fourthMessage == fifthMessage); // Output: true

console.log(fourthMessage == sixthMessage); // Output: true

console.log(fifthMessage == sixthMessage); // Output: true

console.log(firstMessage == fourthMessage); // Output: false

console.log(firstMessage == fifthMessage); // Output: false

console.log(firstMessage == sixthMessage); // Output: false

console.log(secondMessage == thirdMessage); // Output: false

console.log(secondMessage == fourthMessage); // Output: false

// string Template

let myMessageTemplate = `Hello TypeScript Welcome to TypeScript`; // isValid = true

console.log(myMessageTemplate); // Output: Hello TypeScript Welcome to TypeScript

