// Data types 2 turga bo'linadi

// primitive => number, string, boolean, null, undefined, symbol, bigInt
// non-primitive => object (object, array, function)

// primitive => qiymatlar call stack memoryda saqlanadi

// non primitive heap memoryda saqlanadi. va call stackda o'sha heapdagi qiymatga bo'lga reference(korsatkich) saqlanadi



// variables in js => var, let, const
// var 
// var num = 10;
// num = 20

// var num = 30;
// console.log(num);

// let 

// let num = 10
// num = 20
// // let num = 30 /// cannot create 2 variables with smae name

// console.log(num);

// const 

// const num = 10

// num = 20 // cannot update data
// console.log(num);

// =================

// var=> qiymatni update qilsa bo'ladi va bir xil nom bilan ozgaruvchi yaratsa boladi

// let => update qilsa boladi bir xil nom bilan yaratsa bomidi

// const update xam qilib bomida bir xil nom bilan ozgaruvchi elon qilib xam bomidi



// var empty = null;
// var empty;
// var symbol = Symbol("id")
// console.log(symbol);

// var num = 3215555788809144325n;
// console.log(num);

// var num = 1000;
// var str = "hello"
// console.log(num);
// console.log(str);

// number

// console.log(10+10);

// String '', "", ``

// console.log("hey");
// console.log('hey');
// console.log(`hey`);

// boolean => true/ false

// object

// var car = {
//   name: "cobalt",
//   year: 2010,
//   color: "red"
// }

// console.log(car);
// console.log(car.name);

// array

// var container = [
//   {
//     name: "cobalt",
//     year: 2010,
//     color: "red",
//   },
//   100,
//   "hello",
//   [1, 2, 3],
//   null,
//   undefined,
//   function () {},
// ];
// console.log(container);

// function 

// function example (){
//   console.log("hello");
// }
// example()

//  ctrl + ` open terminal
// ctrl + l clear terminal