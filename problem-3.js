//  Delete from Array

function deleteInvalids(myArray) {
  
    if(Array.isArray(myArray)){
        const newArray = myArray.filter(function (value) {
            return !Number.isNaN(value) && value !== undefined && value !== null && typeof value !== 'string' && typeof value !== 'object'});
            
      return newArray;
    } 
    else {
        return 'Invalid Array'
    }
        
    }
    
    // const myArr = [NaN,1,12,0,-1,undefined];
    const myArray = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
    // const myArr = {num: [ 1 , 2 , 3 ]}
    const res = deleteInvalids(myArray);
    console.log(res);