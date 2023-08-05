// callback / promise / async / await

// calback

// let userData = {
//   id: 1,
//   userName: "Doston",
//   password: 1234,
// };

// this way without callback -------------------------
// function facebook(password, userName) {
//   setTimeout(() => {
//     return userData.password === password && userData.userName === userName
//       ? "welcome to facebook"
//       : "login or password is wrong";
//   }, 2000);
// }

// console.log(facebook(1234, "Doston"));

// -------------------------------------

// this the way with callback =======================

// function facebook(password, userName, callback) {
//   setTimeout(() => {
//     if (userData.password === password && userData.userName === userName) {
//       callback("welcome to facebook");
//     } else {
//       callback("login or password is wrong");
//     }
//   }, 2000);
// }

// let user = facebook (1234, "Doston", (data)=>{
//   console.log(data);
// })
// ================================