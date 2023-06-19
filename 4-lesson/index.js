// finding odd and even numbers

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 === 0) console.log(i, "juft son");
//   else console.log(i, "toq son");
// }

// ===========================

// finding uppercase letters of string
// let str = 'WebBraIn'
// let str2 = ''
// for (let i = 0; i < str.length; i++) {
//   if(str[i] == str[i].toUpperCase())str2 += str[i]
// }
// console.log(str2);

// ====================

// finding letter "a" from string

// let str = "Assalom alAykum"
// let res = ""
// let str2 = ""

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === "A" || str[i] === "a") res += str[i]
//   if(str[i] === "A".toUpperCase()) str2 += str[i]

// }
// console.log(`${res} 'harflarining umumiy soni' ${- res.length}
// 'katta harfli "a" larning soni - ${str2.length}'`);

// ==============================

// spell the word backwards

// let str = "notsoD";
// let newStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   newStr += str[i];
// }
// console.log(newStr);

//  ======================

// multiplication table 

// let num = 0;

// for (let i = 1; i < 10; i++) {
//   for(let j=1; j<10;j++){
//   num +=i * j
//   console.log(`${i} * ${j} = `,i*j);
//   }
//   console.log("======================");
// }