let d = new Date().toISOString().split('')
d.splice(-2,1)
let e = d.join("")
console.log(e)