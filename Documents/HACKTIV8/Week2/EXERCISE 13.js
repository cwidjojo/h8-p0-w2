function xo(str) {
    var x = str.match(/x/g)
    var o = str.match(/o/g)
    var lx = x.length
    var lo = o.length
    if (lx===lo)
    {
        return true
    }
    else {
        return false
    }
}

console.log(xo('xoxoxo')); 
console.log(xo('oxooxo')); 
console.log(xo('oxo')); 
console.log(xo('xxxooo')); 
console.log(xo('xoxooxxo')); 
