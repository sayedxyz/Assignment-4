// Problem 1-->> Calculate Money

function calculateMoney(ticketSale) {
        let ticketSaleCost = ticketSale ;
        const ticketPrice = 120; 
        const guardFee = 500 ;
        const staffAllowance = 50 ;
        const numberOfStaff = 8 ; 

    if( ticketSale > 0 ) {
        const total = ( ticketSaleCost * ticketPrice ) - ( guardFee + ( staffAllowance * numberOfStaff ));
       return total ;
    }
    else{
        return "Invalid Number" ; 
        }
    }
    const x = calculateMoney(10);
    console.log(x);

