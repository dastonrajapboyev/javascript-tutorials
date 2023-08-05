

// promise =============================

//  states=>,
// panding - waiting for data,
// fullfilled - when there is data,
// rejected - errors

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   setTimeout(() => {
//     if (!error) {
//       resolve("resolve the promise");
//     } else {
//       reject("rejected promise");
//     }
//   }, 2000);
// });

// ++++++++++++++++++++++

// let userData = {
//   id: 1,
//   userName: "Doston",
//   password: 1234,
// };

// function facebook(password, userName) {
//   const user = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (userData.password === password && userData.userName === userName) {
//         resolve("welcome to facebook");
//       } else {
//         reject("login or password is wrong");
//       }
//     }, 2000);
//   });
//   user
//     .then(function (value) {
//       console.log(value);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// }

// facebook(1234, "Doston");

// ----------promise