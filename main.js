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
console.log(isPolidorme("kajak"));

const isPolidorme2 = (word) => {
  for (let i = 0; i < Math.floor(word.length / 2); i++) {
    if (word[i] !== word[word.length - i - 1]) {
      console.log(word[i], word[word.length - 1]);
      return false;
    }
  }
  return true;
};
console.log(isPolidorme2("kajakk"));

//git push -u origin main
