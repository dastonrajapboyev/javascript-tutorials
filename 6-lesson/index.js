// string 
// let str = 'webbrain \n academy'; => new line
// let str = 'webbrain \t academy'; => tab
// let str = 'webbrain \r academy'; => right

// String:
// index => xar doim 0 dan boshlanadi
// length => xar doim 1 dan boshlanadi

// console.log(str.substr(0, 3)); => kesib beradi, 2 ta qiymat oladi, 1-index, 2-length
// console.log(str.slice(1, 5)); =>  kesib beradi, 2 ta qiymat oladi, 1-index, 2-index
// console.log(str.substring(3, 5)); => kesib beradi, 2 ta qiymat oladi, 1-index, 2-index
// console.log(str.toLowerCase()); => kichkina xarfga ugiradi
// console.log(str.toUpperCase()); => katta xarfga ugiradi
// console.log(str.trim().length); => white space ni uchiradi, faqat 2 yondagi
// console.log(str.startsWith('W')); => birinchi xarfni tekshiradi, boolean qiymat qaytaradi
// console.log(str.endsWith('y')); => oxirgi xarfni tekshiradi, boolean qiymat qaytaradi
// console.log(str.padStart(12, 'a')); => string boshidan malumot qushadi, 1-qiymat: nechta qushish, 2-qiymat nima qushish
// console.log(str.padEnd(70, '.')); => string oxiridan malumot qushadi, 1-qiymat: nechta qushish, 2-qiymat nima qushish
// console.log(str.replace('brain', 'IT')); => stringni uzgartirish, 1-nimani uzgartirish, 2-nimaga uzgartirish
// console.log(str.repeat(10)); => stringni takrorlash
// console.log(str.concat(str2, 'IT maktab')); => qushish
// console.log(str.includes('bbrain')); => boolean qaytardi, bor yuqligin tekshiradi
// console.log(str.indexOf('b')); => malum qiymatni indexini korsatadi
// console.log(str.lastIndexOf('b')); => oxirida kelgan elementni indexini korsatadi
// console.log(str.charAt(3)); => malum indexdagi elementni qaytardi