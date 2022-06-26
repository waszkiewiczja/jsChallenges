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
