// 1-getting sum of nested obj age
// 2-finding sum of n
// n = 5
// 5 + 4 + 3 + 2 + 1 => 15
// 3-removing duplicates without using new Set() [1, 1, 2, 2] => [1, 2]

// nested obj da child ni ichida age buladi, shuni sum ini recursion bilan topish.

// let person = {
//   id: 1,
//   name: "Odil",
//   age: 30,
//   child: {
//     id: 1,
//     name: "Ali",
//     age: 20,
//     child: {
//       id: 1,
//       name: "Umar",
//       age: 10,
//     },
//   },
// };
// let sum = 0;
// function func(person) {
//   sum += person.age;
//   if (person.child) {
//     return func(person.child)
//   } else {
//     console.log(sum);
//     return sum;
//   }
// }
// func(person);

// =================================


// console.log(calculateSum(person));
// ========  2-finding sum of n  ===========
// let sum =0;
// function func(n){
//   if(n === 0){
//     return n
//   }
//   else{
//     console.log(n);
//     sum += n
//      func(n-1)
//   }
//   return sum
// }
// console.log(func(5));

// ==========================

// 3-removing duplicates without using new Set() [1, 1, 2, 2] => [1, 2]

// const removeDup =  (n) =>{
//   let filtered = n.filter((val,index, n)=>{
//     return n.indexOf(val) === index
// })
// return console.log(filtered);
// }
// removeDup([1, 1, 2, 2]);
