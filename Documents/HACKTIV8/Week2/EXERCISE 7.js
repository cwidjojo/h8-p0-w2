// EXERCISE 7



// 1.)

var rows = 5

for (var i=1; i<=rows; i++) {
    console.log ('*')
}



// 2.)

rows2 = 5

for (rows1 = 0; rows1 < 5; rows1++) {
    var star = '';
    for (rows2 = 0; rows2 < 5; rows2++) {
        star += '*';
    }
    console.log(star)
}



// 3.)

for (rows3 = 0; rows3 < 5; rows3++) {
    var star = '';
    for (row = 0; row <= rows3; row++){
        star += '*';
    }
    console.log(star)
}
