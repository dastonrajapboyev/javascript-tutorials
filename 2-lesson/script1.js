// hoisting

// console.log(test);
// var test = 'Hey';
// let test = 'Hey';
// const test = 'Hey';

// typeof

// let num = 10;
// let str = 'hey';
// let test = null;
// let test1 = undefined;
// let bool = true;
// let obj = {};
// let arr = [];

// console.log(typeof obj);

// type conversion => malum data typedan boshqa turga utkazish
// 1-Implicit conversion => Automatic conversion
// 2-Explicit conversion => Manual conversion

// implicit to string

// let result = '5' + 10;
// let result = '5' + true;
// let result = '5' + undefined;

// implicit to number

// let result = '4' - '2';
// let result = '4' - 2;
// let result = '4' * 2;
// let result = '4' / 2;

// implicit to boolean
// false => 0
// true => 1
// falcy value => 0, null, undefined, false, ''
// truthy value => 1, "v", 

// let result = '4' - true;
// let result = '4' - false;
// let result = '4' - null;

// undefined with another types => NaN(not a number)

// let result = 4 + undefined;
// let result = 4 - undefined;
// let result = true + undefined;
// let result = null + undefined;


// EXPLICIT CONVERSION

// to number

// let result = Number('200');
// let result = Number(true);
// let result = Number(false);
// let result = Number(true);
// let result = Number(null);
// let result = Number('');
// let result = Number('Hello');
// let result = parseInt('200');

// to string

// let result = String(200);
// let result = String(3 + 2);
// let result = String(true);

// to boolean 

// let result = Boolean('');
// let result = Boolean('Hello');
// let result = Boolean(0);
// let result = Boolean(1);
// let result = Boolean(100);

// console.log(result );

// Conditional and logical operators

// conditional => ==, ===, <, >, <=, >=

// console.log(4 == '4'); => true,  faqat value ni tekshiradi, va boolean qiymat qaytaradi
// console.log(4 === '4'); => false, xam value ni xam data type ni teskshiradi, va boolean qaytardi
// console.log(4 === 4); => true

// =========================

// console.log(5 < 4);
// console.log(5 > 4);
// console.log(5 <= 5);
// console.log(5 >= 5);

// Logical operators => &&(and), ||(or), !(not)

// let mashina1 = 'Cobalt';
// let mashina2 = 'Jentra';

// mashina1 === 'Cobal' && mashina2 === 'Jentra' && console.log(10000);


// let checking = 4 === 5 || 5 === 5 || 6 === 9;

// console.log(checking);

// let parol = 'hello';
// let login = 'salom';
// let age = 25;

// if(parol === 'hell' || login === 'salo' || age === 25){
//     console.log('Saxifangizga xush kelipsiz');
// }else{
//     console.log('Login yoki parol xato!');
// }

// && => bitta false xolat bulsa false ga yurib ketadi
// || => bitta true xolat bulsa true ga yurib ketadi
// ! => true ni false ga, false ni true ga uzgartiradi

// ! not

// let meva = 'ol';

// meva === 'olma' && console.log(1000);
// meva !== 'olma' && console.log('Bunday meva yuq');

// console.log(!false);
// console.log(!true);

// console.log(10 % 6);



