// Problem 2 -->> Check Name

function checkName(name){
    if (typeof name === 'string'){
        const textName = name.split('');
        const letters = 'aeiouwy';
        const lastLetter = textName[textName.length-1];
        if(letters.includes(lastLetter)){
            return 'Good Name';
        }else{
            return 'Bad Name';
        }
    }
        else {
        return "Invalid"
    }
    
}

const output = checkName('tonur');
console.log(output);