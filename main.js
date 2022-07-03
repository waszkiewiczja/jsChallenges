//Reverse string
const reverseString = (text) => {
  const text_array = text.split("");
  text_array.reverse();
  const reversed = text_array.join("");
  return reversed;
};
// console.log(reverseString("dom"));

const reverseString2 = (text) => {
  let reversed = "";
  for (let i = 0; i < text.length; i++) {
    reversed = text[i] + reversed;
  }
  return reversed;
};
// console.log(reverseString2("dom"));

//
// Polidrome
const isPolidorme = (word) => {
  return word === word.split("").reverse().join("") ? true : false;
};
// console.log(isPolidorme("kajak"));

const isPolidorme2 = (word) => {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - i - 1]) {
      console.log(word[i], word[word.length - 1]);
      return false;
    }
  }
  return true;
};
// console.log(isPolidorme2("kajakk"));

//
// Reverse int
const reverseInt = (number) => {
  let belowZero = number < 0 ? true : false;
  let word = String(Math.abs(number));
  word = word.split("").reverse().join("");
  return belowZero ? `-${Number(word)}` : Number(word);
};
// console.log(reverseInt(-90));

//
//Make object
const makeObject = (text) => {
  const chars = {};
  for (let i = 0; i < text.length; i++) {
    if (chars[text[i]]) {
      chars[text[i]] += 1;
    } else {
      chars[text[i]] = 1;
    }
  }

  let max = 0;
  let maxChar = "";

  for (let key in chars) {
    let value = chars[key];
    if (value > max) {
      max = value;
      maxChar = key;
    }
  }
  return maxChar;
};
// console.log(makeObject("taakkk"));

//
// Delete vowels
function disemvowel(str) {
  let cojest = str.match(/[^ua]/gi);
  if (cojest) {
    return str.match(/[^aeiou]/gi).join("");
  } else {
    return "";
  }
}

//
// Fizz buzz
const fizzBuz = (number) => {
  for (let i = 1; i < number + 1; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
};
// fizzBuz(16);

//git push -u origin main
