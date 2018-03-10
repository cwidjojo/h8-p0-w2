// EXERCISE 12


function konversiMenit(num) {
    h = Math.floor(num/60);
    m = num%60;
    if (m < 10) {
      m = "0" + m
    }
    return h + ":" + m
}

console.log(konversiMenit(63)); 
console.log(konversiMenit(124));
console.log(konversiMenit(53)); 
console.log(konversiMenit(88));
console.log(konversiMenit(120)); 
