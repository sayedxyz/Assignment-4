// Problem 5 --> Savings Money

function monthlySavings(arr,livingCost) {
    if(Array.isArray(arr)){
        let tax = 0;
        let earn = 0;
        for (const iterator of arr) {
            // console.log(iterator);
            earn = earn + iterator;
            // console.log(earning);
    
    
            if (iterator >= 3000) {
                bankTax = iterator * (20/100)
               
                tax = bankTax + tax;
                //  console.log(allTax);
            }
            
        }
    
        let savings =  earn - (tax + livingCost);
    
        // return savings;
        
        if ( savings < 0){
            return "Earn More"
        }
        else{
            return savings;
        }
    }else
    {
        return 'invalid input'
    }
       
    }
    
    const result = monthlySavings([900,2700, 3400], 10000);
    console.log(result);