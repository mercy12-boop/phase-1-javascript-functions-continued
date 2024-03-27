// code your solution here

function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
// notice the non use of brackets when using the return function

// When we write a function without a name, embrace it using brackets
// as you would a math operations so that JS interprets it as one thing
// (function () {
//   console.lo("Yippie");
// });

function mondayWork(toDo = "go to the office") {
  return `This Monday, I will ${toDo}.`;
}
// console.log(mondayWork());

// Immediately-Invoked Function Expression
// console.log(
//   (function basenumber(number) {
//     return number + 3;
//   })(2)
// );

// Function-Level Scope
function outer(greeting, msg = "It's a fine day to learn") {
  return function (name, lang = "Python") {
    return `${greeting}, ${name}! ${msg} ${lang}`;
  };
}

// outer("Hello")("student", "JavaScript");

function demoChain(name) {
  const part1 = "hi";
  return function () {
    const part2 = "there";
    return function () {
      console.log(`${part1.toUpperCase()} ${part2} ${name}`);
    };
  };
}

// demoChain("Dr. Stephen Strange")()();
// The inner child can access the outer things

function wrapAdjective(flair = "*") {
  return function inner(activity = "special") {
    return `You are ${flair}${activity}${flair}!`;
  };
}
console.log(wrapAdjective("!")("awesome"));
