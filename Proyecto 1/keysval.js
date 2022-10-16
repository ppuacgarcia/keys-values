//13-10-2022
//Author Pablo David Puac Garcia
//this program make an array of the keys and values of a object 
//declaration of variables
let keys=[]
let values1=[]
const object1 = {
    c: false,
    d: 42,
    f: false,
    a: 'somestring',
    b: 42
    
  };
//assignation to array keys and array values and number of columns
keys=Object.keys(object1)
values1=Object.values(object1)
columns=keys.length
//concatenate keys and values in one array/matrix
function keysAndValues(object1){ 
  var aux,auxv;
  for(var i=0;i<columns;i++){
    for(var j=0;j<columns;j++){
      if(keys[j]>keys[j+1]){
        aux=keys[j+1]
        auxv=values1[j+1]
        keys[j+1]=keys[j]
        values1[j+1]=values1[j]
        keys[j]=aux
        values1[j]=auxv
      }
    }
  }
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