const projectID = 12345

let projectEmail = "brahma@google.com"

var projectPassword = "123456"

let projectName; // here, value is undefined 

// projectID = 234  // const variable not changeable or not allowed

projectEmail = "bn@bn.com"
projectPassword = "2024"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(projectID);

// new way to print the value in JS, Here print all variable in a line at a time

console.table([projectID, projectEmail, projectPassword, projectName])