// array

// first way  

// finding first pair 
// let str = "ABBACC";
// let pair1 = "";
// for (let i = 0; i < str.length -1 ; i++) {
//   if(str)
//   // if (str[i] === str[i + 1]) {
//   //   if (pair1 === "") {
//   //     pair1 = str[i];
//   //   }
//   // }
// }
// console.log(`first pair ${pair1}`);

// second way

// let str = "ABBACC";
// let res = []
// for (let i = 0; i < str.length ; i++) {
//   if(str.indexOf(str[i]) !== i) res.push(str[i])
// }
// console.log(res[0]);

// ===========================

// ===============================

// finding object's value inside array whis is includes letter "o"

// let arr = [
//   { id: 1, name: "Fozil" },
//   { id: 2, name: "Odil" },
//   { id: 3, name: "Alibek" },
//   { id: 4, name: "Elyor" },
// ];
// let newArr = []
// function func(text){
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i].name.toLowerCase().includes(text)){
//       newArr.push(arr[i])
//     }
//   }
//   return newArr
// }
// console.log(func("o"));
