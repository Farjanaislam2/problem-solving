
//1. convert radian to degree...........
function radianToDegree(radian) {
//give error messege
if (typeof radian !== 'number') {
return 'please set a number';
}
//convert
let degree = radian * 57.2958;
let getDegreeValue = degree.toFixed(2);
degree = parseFloat(getDegreeValue);
return degree;
}
//2. check js file or not........................
const file = 'index.js';
function isJavaScriptFile(file) {
//give error messege
if (typeof file !== 'string') {
return 'please enter a string';
}
//check javascript file
let isExist = file.includes('.js');
return isExist;
}
//3. oil price.............................
function oilPrice(diesel, petrol, octane) {
//give error messege
if (typeof diesel !== "number" || typeof petrol !== "number" || typeof octane !== "number") {
return 'please enter a number';
}
// total oil price
const dieselPricePerLit = 114;
const petrolPricePerLit = 130;
const octanePricePerLit = 135;
dieselPrice = dieselPricePerLit * diesel;
petrolPrice = petrolPricePerLit * petrol;
octanePrice = octanePricePerLit * octane;
const totalPrice = dieselPrice + petrolPrice + octanePrice;
return totalPrice;
}
// 4. public bus fare................
function publicBusFare(peoples) {
//give error messege
if (typeof peoples !== 'number') {
return 'please set a number';
}
// total cost return
let busNeed = peoples % 50;
let mircroNeed = busNeed % 11;
let totalCost = mircroNeed * 250;
return totalCost;
}
//5. Is bestfriend or not...........
const person1 = { name: 'abul', friend: 'babul' }
const person2 = { name: 'babul', friend: 'abul' }
function isBestFriend(person1, person2) {
if (person1.name === person2.friend && person2.name === person1.friend) {
return true;
}
else if (typeof person1.name !== 'string') {
return 'please set a string'
}
else {
return false;
}
}