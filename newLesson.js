let x=0
function c(){
    let y=0
    return {
        inc:()=>{x++;y++},
        getX:()=>x,
        getY:()=>y
    }
}

console.log( c().inc())  // x=1 y =1
console.log(c().inc()) // x=2 y=1
console.log(c().getX())
console.log(c().getY())

// const obj = {
//     a: 1,
//     foo(){
//         return this.a;
//     },
//     baz: () => this.a
// }
// console.log(obj.foo())
// console.log(obj.baz())