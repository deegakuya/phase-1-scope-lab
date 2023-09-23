// Write your solution in this file!
// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob';

// Write a function that accesses the global customerName variable and uppercases it. 2
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// Write a function called overwriteBestCustomer() that changes the value of the global bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer and assign it some initial value.
const leastFavoriteCustomer = 'Rose';

// Write a function that attempts to change the constant leastFavoriteCustomer.
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Kate'; // This will throw an error due to reassigning a constant.
}


