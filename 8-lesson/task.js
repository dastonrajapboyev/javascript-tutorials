// object advanced

// homeworks

// No1 finding object's keys

// let obj = {
//   id: 1,
//   name: "WebBrain",
// };
// const func = (input) => {
//   for (key in input) {
//     console.log(key);
//   }
//   return input;
// };
// func(obj);

// =========================================

// no2
// finding value which is a number

// let obj = {
//   id: 1,
//   name: "WebBrain",
//   age: 28 // I added age to check is function work dynamic or not
// };

// function func(par) {
//     for(let key in par) {
//       if (typeof par[key] == "number") {
//         console.log(key);
//       }
//     }
//     return par
//   }
//   func(obj);

// =================================

// finding object's value that equal to boolean

// let obj = {
//   id:1,
//       name:"WebBrain",
//       offline:true,
//       online:true,
//       individual:false
// }
// function func(par) {
//   for(let key in par) {
//     if (typeof par[key] == "boolean") {
//         console.log(`${key}: ${par[key]}`);
//     }
//   }
//   return par
// }
// func(obj);

// ==================================
// finding amount of ages with nested object's ages

// let person = {
//   id: 1,
//   name: "Odil",
//   age: 78,
//   child: {
//     id: 1,
//     name: "Ali",
//     age: 48,
//     child: {
//       id: 1,
//       name: "Umar",
//       age: 20
//     },
//   },
// };

// function func(par) {
//   let sum = 0;
//   while(par){
//     sum+=par.age
//   par = par.child
//   }
//   return sum;
// }
// console.log(func(person));

// ===================================

// checking student's name and parol

// person = {
//   id: 1,
//   name: "Umar",
//   surname: "Ismoilov",
//   ielts: 5.5,
//   student: true,
//   parol: 101,
// };
// function Kirish(parol, name) {
//   for(key in person){
//     if(parol === person.parol && name === person.name) return "xush kelibsiz"
//     else return "parol yoki login xato"
//   }
// }
// console.log(Kirish(101, "Umar"));