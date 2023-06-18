// finding odd and even numbers
// let num1 = 40
// let num2 = 51

// if(num1 % 2 ===0)console.log("juft son");
// else console.log("toq son");

// // finding ball

// let ball = 44

// if(ball > 86 && ball <100) console.log("A");
// else if(ball >= 61 && ball <= 85) console.log("B");
// else if(ball >= 50 && ball <= 60) console.log("C");
// else if(ball <= 50) console.log("failed");

// // finding fruit prices

// let meva = "tarvuz"

// meva == "olma" && console.log(10000);
// meva == "nok" && console.log(12000);
// meva == "tarvuz" && console.log(20000);
// meva == "pomidor" && console.log("unday meva yo'q");

//==========

// if(-1 || 0) console.log( 'first' )
// if(-1 && 0) console.log( 'second' )
// if(null || -1 && 1) console.log( 'third' )

// let num = 5;
// switch (num) {
//   case 0:
//     console.log("nol");
//     break;
//   case 1:
//     console.log("bir");
//     break;
//   case 2:
//     console.log("ikki");
//     break;
//   case 3:
//     console.log("uch");
//     break;
//   case 4:
//     console.log("to`rt");
//     break;
//   case 5:
//     console.log("besh");
//     break;
//   case 6:
//     console.log("olti");
//     break;
//   case 7:
//     console.log("yetti");
//     break;
//   case 8:
//     console.log("sakkiz");
//     break;
//   case 9:
//     console.log("to`qqiz");
//     break;
// }
// let num = 11;

// let nol = 0,
//   bir = 1,
//   ikki = 2,
//   uch = 3,
//   tort = 4,
//   besh = 5,
//   olti = 6,
//   yetti = 7,
//   sakkiz = 8,
//   toqqiz = 9;

// let on = 10,
//   yigirma = 20,
//   ottiz = 30,
//   qirq = 40,
//   ellik = 50,
//   otmish = 60,
//   yetmish = 70,
//   sakson = 80,
//   toqson = 90,
//   yuz = 100;

// if(num == `${nol}`){
//   console.log("nol");
// }else if(num == `${bir}`){
//   console.log("bir");
// }else if(num == `${on}` && `${bir}`){
//   console.log("on bir");
// }

//=================== find ball

// let ball = 95

// switch (ball <100 && ball > 86) {
//   case ball <100 && ball > 86:
//     console.log("A");
//     break;

//   default:
//     break;
// }

// ----------------------

/*let meva = 'olma'

switch (meva) {
  case 'olma':
    console.log(10000);
    break;
    case 'nok':
      console.log(12000);
      break;
      case 'tarvuz':
        console.log(20000);
        break;
    default :
    console.log('bunday meva yoq')
}*/
/*
let num = 15;

if (num % 3 == 0 && num % 5 == 0){
  console.log('3 ga xam 5 ga xam bolinadi')
}else if(num % 3 == 0){
  console.log('3 ga bolinadi')
}else if (num % 5 == 0){
  console.log('5 ga bolinadi')
}else {
  console.log('3 ga xam 5 ga xam bolinmaydigan son')
}*/

// Rewrite the 'switch' into an 'if'

// let browser = 'Safari'

// if (browser == 'Edge'){
//   console.log("you've got the Edge");
// }else if (browser == 'chrome' ||  browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
//   console.log('okay we support these browsers too');
// }else {
//   console.log( 'we hope that this page looks ok!' )
// }

//=======================
// if (-1 || 0) console.log('first'); // first
// if (-1 && 0) console.log('second');
// if (null || -1 && 1)console.log('third'); // third

// =======================

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