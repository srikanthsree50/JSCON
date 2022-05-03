// const multiply = function(x,y){
// console.log(x*y);
// }

// const multiply2 = multiply.bind(this,2)

// multiply2(3)

let obj = {
    firstName:'srikanth',
    lastName:'goud'
}
   let getFullName = function(hometown,state){
console.log(this.firstName + ' '+ this.lastName + ' from ' + hometown +' '+ state)
    }
//getFullName.apply(obj,['hyderabad','telangana'])
Function.prototype.mybind = function(params,...args){
    let context = this;
   // params = args.slice[1];
   // console.log(...args)
    return function () {
        context.apply(params,...args)
    }
}
let newObj = getFullName.mybind(obj,['hyderabad','telangana'])
newObj()
