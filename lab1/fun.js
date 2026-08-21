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
  