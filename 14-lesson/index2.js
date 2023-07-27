// it will not be a problem when 2 variables declare with the same name
(function (){
  let display = ()=>{
    console.log('index2.js');
  }
  display()
})()

// ==========================

// it will be a problem when 2 variables declare with the same name

// let display = ()=>{
//   console.log('index2.js');
// }
// display()