// Functions
// function declaration => hoisting buladi,
// function expression => hoisting bulmaydi,
// arrow function => hoisting bulmaydi, agar gulli qavs {} bolmasa avto return xususiyati mavjud
// !!! Agar function return ga qaytmasa qiymati undefined ga teng buladi
// !!! Function nimani return qilsa, ushanga teng buladi
// parametr => uzgaruvchi desak buladi, function yaratilganda beriladi
// argument => parametrga qiymat sifatida function chaqirilganda beriladi

// Math built in methods

// console.log(Math.pow(3, 2)); => sonni darajaga kotarish, 2ta qiymat oladi, 1-son, 2-nechchi darajaga kotarish
// console.log(Math.sqrt(25)); => sonni ildiz ostida chiqarish
// console.log(Math.cbrt(64)); => sonni uchinchi darajali ildiz ostidan chiqaradi
// console.log(Math.min(20, 45, 2)); => minimum sonni oladi
// console.log(Math.max(20, 45, 2)); => maximum sonni oladi
// console.log(Math.abs(-100)); => faqat musbat son qaytardi
// console.log(parseInt(Math.random() * 100)); => tasodifit son qaytaradi
// console.log(Math.round(10.4)); => sonni yaxlitlaydi, qoldiq qism 5 va undan yuqori bulsa, 1 qushib beradi
// console.log(Math.floor(5.10)); => faqat butun qismni qaytaradi
// console.log(Math.ceil(10.0000001));  => qoldiq qism bulsa, songa bir qushadi

// number methods

// console.log(Number.isInteger(son)); => son butun yoki butun emasligini tekshiradi, boolean qiymat qaytaradi
// console.log(typeof Number.parseInt(son)); => sonni faqat butun qismini qaytaradi va typeof ni xar doim numberga ugiradi
// console.log(parseInt(son)); => sonni faqat butun qismini qaytaradi va typeof ni xar doim numberga ugiradi
// console.log(typeof +son); => faqatgina typeof ni number ga ugiradi
// console.log(typeof +son.toFixed(2)); => sonni yaxlitlaydi, va xar doim typeof string qaytaradi, qoldiq qismdan xoxlagan qismni ajratib olishimiz mumkin
// console.log((son.toFixed()));

// console.log(typeof 12345);
// console.log(10 + 10);
// console.log(10 - 5);
// console.log(10 / 5);
// console.log(10 * 5);
// console.log(11 % 5);
// console.log(2  4);
// console.log(64  (1/2));
// console.log(64 ** 0.5);
// console.log(son++);
// console.log(++son);


//  math methods
// pow method
// function g22pow (son, daraja){
//   return son ** daraja
// }
// console.log(g22pow(5,2));

//===============

// sqrt method

// function g22Sqrt(son)  {
//   return son ** 0.5
// }
// console.log(g22Sqrt(25));

// ==============

// cbrt method

// function cbrt (son){
//   return son ** (1/3)
// }
// console.log(cbrt(64));
// console.log(Math.ceil(cbrt(64)));

// ======================

// abs method 

// function abs(son) {
//   son = son * -1;
//   return son
// }
// console.log(abs(-10));

// =========================


