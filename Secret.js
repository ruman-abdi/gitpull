let n = 5;

function PrintingN (){
    for(var i =0;i<n; i++){
        console.log(i)
    }
    
}

PrintingN(n)


function ArrayIndex(){
    let arr= [10,20,40,50,60,80]
    
    console.log(arr[0])
    
}
ArrayIndex()


// Algorithm A: Takes 2n operations
function algorithmA(arr) {
    for (var i = 0; i < 2 * arr.length; i++) {
      // Some operations
    }
  }
  
  // Algorithm B: Takes 5n operations
  function algorithmB(arr) {
    for (var i = 0; i < 5 * arr.length; i++) {
      // Some operations
    }
  }
  
  var array = [1, 2, 3, 4, 5];
  
  console.time("Algorithm A");
  algorithmA(array);
  console.timeEnd("Algorithm A");
  
  console.time("Algorithm B");
  algorithmB(array);
  console.timeEnd("Algorithm B");


  function Constant(n) {
var count = 0;
for(var i = 0;i<n; i++){
    count+=1
}
return count
  }
console.log(n)
  