<<<<<<< HEAD
//Waf to take any digit (0-9) and return its in digitToword
//like 0-One
// 2 - two

function digitToword(a){
    const words = [
        "Zero",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine"
]
    
return words(a);
}
// function digitToword(a){
//     if(a === 1 ){
//         console.log("One");
//     }
//     else if(a === 2 ){
//         console.log("Two");
//     }
//     else if(a === 3 ){
//         console.log("Three");
//     }
//     else if(a === 4 ){
//         console.log("Four");
//     }
//     else if(a === 5 ){
//         console.log("Five");
//     }
//     else if(a === 6 ){
//         console.log("Six");
//     }
//     else if(a === 7 ){
//         console.log("Seven");
//     }
//     else if(a === 8 ){
//         console.log("Eight");
//     }
//     else if(a === 9 ){
//         console.log("Nine");
//     }
// }

digitToword(9);
=======
// waf to take any digit (0-9) and
// return its in word
// 0 - One
//5 - Five

const toWords = (digit) => {
    const words = [
      "Zero",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
    ];
    return words[digit];
  };
  console.log(toWords(5));
  console.log(toWords(3));
  console.log(toWords(6));
  
  // ------course-------
  // frontend - [reactjs, vuejs, angularjs];
  // css[ bootstrap, tailwind ];
  // backend - [nodejs, springboot, fastAPI, djaango, php];
  
>>>>>>> 38fdb2a (new commit)
