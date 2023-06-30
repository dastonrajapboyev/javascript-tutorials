// if last letter is "l" output true otherwise false

// function checkingLastLetter(str) {
//   str = str.trim();
//   (str.endsWith("l") || str.endsWith("L")) ? console.log(true) : console.log(false);;
//   return str;
// }
// checkingLastLetter("     fozil    ");
// done

// =============================

// change value of two variables

// 1st way without using function
// let str1 = "web";
// let str2 = "Brain";
// let str3 = str2
// str2 = str1
// str1 = str3
// console.log(str1);
// console.log(str2);

// 2nd way using function
// function changeValue(a, b) {
//   let c = "";
//   c = b;
//   b = a;
//   a = c;
//   return [a, b].join(" ")
// }
// console.log(changeValue("web", "brain"));

// =====================

// let year = 2024

// if(year % 4 == 0){
//   console.log('kabisa yili');
// }else console.log('kabisa yili emas');

// function kabisaYil (yil){
//   (yil % 4 === 0) ? console.log('kabisa yili') : console.log('kabisa yili emas')
// }
// kabisaYil(2020)

// ================

// convert "#" to "()"
// let str =  '#Fozil#web#brain#'

// for (let i = 0; i < str.length; i++) {
//   str = str.replace('#', '(')
//   str = str.replace('#', ')')
// }

// console.log(str);

// =================

// collect capital letters

// function capitalLetters(str) {
//   let newStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toUpperCase()) {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }
// console.log(capitalLetters("WeBbraIN"));

// ===================

// Multiply by 10 and change the word "web" to "IT"

// function multiplyWords(str){
//   str = str.replaceAll("Web", "IT")
//   return str
// }
// console.log(multiplyWords('WebBrain'));

// =============================