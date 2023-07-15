// array advanced methods
// 1
// findin sum from nested array
// let arr = [1, [3, [5]], [10]];
// let flatting = arr.flat(Infinity).reduce((initial, total) => {
//   return initial + total;
// });
// console.log(flatting);

// ==================================

// 2
// let users = [
//   { id: 1, year: 1998, engine: 1, name: "Tico" },
//   { id: 2, year: 2005, engine: 1.2, name: "Matiz" },
//   { id: 3, year: 2010, engine: 1.6, name: "Gentra" },
//   { id: 4, year: 2010, engine: 1.5, name: "Cobalt" },
//   { id: 5, year: 2012, engine: 2, name: "Malibu" },
//   { id: 6, year: 2000, engine: 1.2, name: "Damas" },
//   { id: 7, year: 2018, engine: 2.4, name: "Tracker" },
// ];

// let filtered = users.filter((val,ind,arr) => val.year < 2000 )
// console.log(filtered); // 1 shart 2000 yildan oldingilarni chiqarish
// ----------------------------------------------------------
// let filtered = users.filter((val,ind,arr) => val.year > 2010)
// console.log(filtered); // 1 shart 2010 yildan keyingi chiqqanlarni chiqarish
// ----------------------------------------------------------
// console.log(users.sort((a,b) => a.engine- b.engine)); // engine kuchiga qarab sort qilish
// --------------------------------------------------------------
// console.log(users.sort((a,b) => a.year- b.year)); // chiqarilgan yiliga qarab sort qilish
// --------------------------------------------------------
// console.log(users.sort((a,b) => a.name.localeCompare(b.name))); // namelarni alphabet tarzda sort qilish
// ------------------------------------------------------
// let filtered = users
//   .filter((val, ind, arr) => val.year < 2000)
//   .map((val) => ({
//     ...val,
//     status: "eski",
//   }));
// console.log(...filtered); // // 2000 yilda oldin chiqqan mashinalarga Status : eski malumot qoshish
// -------------------------------------------------
// let filtered = users
//   .filter((val, ind, arr) => val.year >= 2000 && val.year <= 2010)
//   .map((val) => ({
//     ...val,
//     status: "o'rta",
//   }));
// console.log(...filtered); // // 2000-2010 yilda chiqqan mashinalarga Status : 'orta malumot qoshish
// ----------------------------------------------------------
// let filtered = users
//   .filter((val, ind, arr) => val.year >= 2010 && val.year <= 2022)
//   .map((val) => ({ 
//     ...val,
//     status: "yangi",
//   }));
// console.log(...filtered); // // 2010-2022 yilda oldin chiqqan mashinalarga Status : 'yangi malumot qoshish



// ================================================