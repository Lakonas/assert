const assertEqual = require("../assertEqual");

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

  const eqArrays = function(arr1, arr2) {
  
    if (arr1.length !== arr2.length) {
      return false;
    }
    
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  const takeUntil = function(array, callback) {
    const result = []; 
    
    for (let i = 0; i < array.length; i++) {
      
      if (callback(array[i])) {
        break;
      }
      
      result.push(array[i]);
    }
    return result; 
  };
  
