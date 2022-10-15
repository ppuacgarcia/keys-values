//13-10-2022
//Author Pablo David Puac Garcia
//this program make an array of the keys and values of a object 
//declaration of variables
let keys=[]
let values1=[]
const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
    d: 42,
    f: false
  };
//assignation to array keys and array values and number of columns
keys=Object.keys(object1)
values1=Object.values(object1)
columns=keys.length
//concatenate keys and values in one array/matrix
function keysAndValues(object1){ 
  let array=[keys,values1]
  return array
}
//function to print the matrix in a format 
function printMatrix(matrix){
  strg="["
    for(var i=0;i<2;i++){
      strg+="["
      for(var j=0;j<columns;j++){
        strg+=matrix[i][j]
        if(j<columns-1) strg+=",";
      }
      strg+="]"
      if(i<1)strg+=",";
    }
    strg+="]"
    return strg
}
console.log(printMatrix(keysAndValues(object1)))