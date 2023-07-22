// ======== CRUD =========

// CREATE =================

// let laptops = [
//   { id: 1, name: "macbook", color: "black", price: 1000 },
//   { id: 2, name: "acer", color: "brown", price: 600 },
//   { id: 3, name: "hp", color: "blue", price: 750 },
//   { id: 4, name: "msi", color: "red", price: 700 },
//   { id: 5, name: "victus", color: "white", price: 800 },
//   { id: 6, name: "samsung", color: "grey", price: 900 },
// ];

// ---------- create element ----------

// const createItem =(laptop)=>{
//   return laptops = [...laptops, {...laptop}]
// }
// console.log(createItem({id: laptops.length + 1, name: "Dell", Price: 1100}));

// ---------- create element ----------

// =====================================

// READ==============

// let laptops = [
//   { id: 1, name: "macbook", color: "black", price: 1000 },
//   { id: 2, name: "acer", color: "brown", price: 600 },
//   { id: 3, name: "hp", color: "blue", price: 750 },
//   { id: 4, name: "msi", color: "red", price: 700 },
//   { id: 5, name: "victus", color: "white", price: 800 },
//   { id: 6, name: "samsung", color: "grey", price: 900 },
// ];
// ---------------read and sorting by price----------
// const read = () => {
//   let readCrud = laptops.sort((a, b) => a.price - b.price);
//   laptops = readCrud;
// }; // 
// ---------------read and sorting by price----------

// ---------------read and sorting by name----------
// const read = () => {
//   let readCrud = laptops.sort((a, b) => a.name.localeCompare(b.name));
//   laptops = readCrud;
// }; 
// ---------------read and sorting by name----------
// read();
// console.log(laptops);

// ===================================================

// UPDATE ==============================

// let laptops = [
//   { id: 1, name: "macbook", color: "black", price: 1000 },
//   { id: 2, name: "acer", color: "brown", price: 600 },
//   { id: 3, name: "hp", color: "blue", price: 750 },
//   { id: 4, name: "msi", color: "red", price: 700 },
//   { id: 5, name: "victus", color: "white", price: 800 },
//   { id: 6, name: "samsung", color: "grey", price: 900 },
// ];
// ------------- update data ------------
// const updateItem = (info)=>{
//   let res = laptops.map((value)=> 
//     value.id === info.id ? {...value, [info.key] : info.value}: value
//   )
//   laptops =res 
// }
// // ------------- update data ------------
// updateItem({id: 3, key: "name", value: "nokia"});
// console.log(laptops);

// ====================================================

// DELETE ========================

// let laptops = [
//   { id: 1, name: "macbook", color: "black", price: 1000 },
//   { id: 2, name: "acer", color: "brown", price: 600 },
//   { id: 3, name: "hp", color: "blue", price: 750 },
//   { id: 4, name: "msi", color: "red", price: 700 },
//   { id: 5, name: "victus", color: "white", price: 800 },
//   { id: 6, name: "samsung", color: "grey", price: 900 },
// ];

// ---------------delete by id----------

// const deleteItem = (id)=>{
//   let res = laptops.filter(value=> value.id !== id)
//   laptops = res
// }
// deleteItem(3);
// console.log(laptops);

// ---------------delete by id----------

// ============================================