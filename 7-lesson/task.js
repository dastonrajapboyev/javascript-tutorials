// object
// creating empty object and adding key, value, updating and removing element from object

// let user = {};

// adding property name: with value
// user.name = "John";
// user.surName = "Smith";

// update value of object's key
// user.name = "Pete";

// removing the property name from object
// delete user.name;

// console.log(user);
// =================================

// checking object true if obj is empty / false if obj is not empty

// let schedule = {name: 'jhon'}

// const isEmpty = (obj) =>{
//   if((Object.keys(obj) == 0))  return true
//   else return false;
// }
// console.log(isEmpty(schedule));

// =========================

// find the total sum

// let salaries = {
//   Jhon: 100,
//   Ann: 160,
//   Pete: 130
// }
// let sum = 0;
// for(key in salaries){
//   sum += salaries[key]
// }
// console.log(sum);

// ===========================

// multiplyNumeric object's value multiply to 2

// let menu = {
//   width: 200,
//   height: 300,
//   title: "my menu",
// };

// function multiplyNumeric(list) {
//   for (let key in list) {
//     if (typeof list[key] === "number") {
//       list[key] = list[key] * 2;
//     }
//   }
//   return list;
// }
// console.log(multiplyNumeric(menu));