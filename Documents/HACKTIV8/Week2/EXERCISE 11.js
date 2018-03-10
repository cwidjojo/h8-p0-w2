// EXERCISE 11


function balikKata(kata) {
  var newString = "";
  for (var i = kata.length - 1; i >= 0; i--) {
     newString += kata[i]
  }
  return newString;
}

console.log(balikKata('Hello World and Coders')); 
console.log(balikKata('John Doe')); 
console.log(balikKata('I am a bookworm')); 
console.log(balikKata('Coding is my hobby')); 
console.log(balikKata('Super')); 