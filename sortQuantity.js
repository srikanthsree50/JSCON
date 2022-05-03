const arr = [1,1,1,2,3,4,4,5,5,5]

const output = arr.reduce((acc,curr) => {
if(acc[curr]){
acc[curr] = ++acc[curr]
}
else{
    acc[curr] = 1;
}
return acc;
},{})

console.log(output)
keysSorted = Object.keys(output).sort(function(a,b){return output[a]-output[b]})

console.log(keysSorted)