function findEven(num){

    if(num % 2== 0){
      return num;
    }
  }
  
  function  addTwo(num){
      return num+2;
  }
  
  function sum(a,b){
    return a+b;
  }
  
  let arr = [1,6,8,34,5];
  
  Array.prototype.myfilter = function(fun){
        let output = [];
        for(let i = 0 ; i<this.length; i++){
            if(fun(this[i])){
              output.push(this[i]);
            }
        }
        return output;
  }
  
  Array.prototype.mymap = function(fun){
      let output = [];
      for(let i=0; i<this.length;i++){
         let outputValue = fun(this[i]);
         output.push(outputValue);
      }
      return output;
  }
  
  Array.prototype.myreduce = function(fun, initialValue){
     let iniVal = initialValue ? initialValue : 0 ;
     let output = iniVal;
     for(let i=0; i < this.length;i++){
        output = fun(output,this[i]);
     }
     return output;
  }
  
  
  const evenArr = arr.myfilter(findEven);
  //console.log(evenArr);
  
  const addedArray = arr.mymap(addTwo);
  //console.log(addedArray);
  
  const sumOfArray = arr.myreduce(sum);
  console.log(sumOfArray);