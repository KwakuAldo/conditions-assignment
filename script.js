// Convert this switch statement to an if-else statement:
// let day = "Monday";
// switch (day) {
//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     default:
//         console.log("It's neither Monday nor Tuesday");
// }
let day = "Wednesday";

if (day === "Monday") {
    console.log('today is Monday');
} else {
    if (day === "Tuesday") {
        console.log('today is Tuesday');
    } else {
        console.log('It neither Monday nor Tuesday')
    }
}



// Rewrite this if-else statement using a ternary operator
// let age = 20;
// let status;
// if (age >= 18) {
//     status = "Adult";
// } else {
//     status = "Minor";
// }
// console.log(status);
let age = 1;
let status = (age >= 20) ? "Adult" : "Minor";
console.log(status);


// Change this ternary operator to a switch statement
// let grade = 80;
// let result = grade >= 60 ? "Pass" : "Fail";
// console.log(result);
let grade = 59;
let result;

switch(true) {
    case grade >= 60:
        result = 'Pass';
        break;
    default:
        result = 'Fail';
}
console.log(result)


// Convert this switch statements to a series of if-else statements
// let color = "red";
// switch (color) {
//     case "red":
//         console.log("The color is red");
//         break;
//     case "blue":
//         console.log("The color is blue");
//         break;
//     default:
//         console.log("Unknown color");
// }
let color = "green"

if (color === "red") {
    console.log("The color is red")
} else if (color === "blue") {
    console.log("The color is blue")
} else {
    console.log("Unknown color")
}



// Rewrite this if-else statement using a ternary operator
// let num = 10;
// let output;
// if (num % 2 === 0) {
//     output = "Even";
// } else {
//     output = "Odd";
// }
// console.log(output);


let num = 13;
let output = (num % 2 === 0) ? "Even" : "Odd";
console.log(output);



// Change this ternary operator to a switch statement
// let type = "fruit";
// let message = type === "fruit" ? "It's a fruit" : "It's not a fruit";
// console.log(message);
let type = "fruit";

switch (true) {
    case type === "fruit":
        console.log("It's a fruit");
        break;
    default:
        console.log("It's not a fruit");
}



// Convert this switch statement to an if-else statement
// let month = "January";
// switch (month) {
//     case "January":
//     case "February":
//     case "March":
//         console.log("It's the first quarter");
//         break;
//     case "April":
//     case "May":
//     case "June":
//         console.log("It's the second quarter");
//         break;
//     default:
//         console.log("Unknown quarter");
// }
let month = "september";
if (month === "January" || month === "February" || month === "March") {
    console.log("It's the first quarter");
} else if (month === "April" || month === "May" || month === "June") {
    console.log("It's the second quarter");
} else {
    console.log("Unknown quarter");
}


// Rewrite this if-else statement using a ternary operator 
// let x = 5;
// let y = 10;
// let result1;
// if (x > y) {
//     result1 = "X is greater";
// } else {
//     result1 = "Y is greater";
// }
// console.log(result1);
let x = 5;
let y = 4;
let result1 = (x > y) ? "X is greater" : "Y is greater";
console.log(result1);



// Change this ternary operator to a switch statement
// let dayOfWeek = 3;
// let dayName = dayOfWeek === 1 ? "Sunday" : dayOfWeek === 2 ? "Monday" : "Invalid Day";
// console.log(dayName);
let dayOfWeek = 1;
switch(dayOfWeek) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    default:
        console.log("Invalid Day");
}



// Convert this switch statement to a series of if-else statements
// let score = 85;
// switch (true) {
//     case score >= 90:
//         console.log("A grade");
//         break;
//     case score >= 80:
//         console.log("B grade");
//         break;
//     default:
//         console.log("C grade or below");
// }
let score = 95;
if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else {
    console.log("C grade or below");
}