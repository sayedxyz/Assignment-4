// Problem 4--> Password

function password(object) {
   let names = object.name;
   let birthDate = object.birthYear;
   let websiteName = object.siteName;
   let password = websiteName+'#'+names+'@'+birthDate;
 

    let propertyLength = Object.keys(object).length;
    

    let textLength = birthDate.toString().length;

    if(textLength<4 || propertyLength < 3){
        return 'invalid'
    }
    else{
    return password;
    }
}





const called = password({ name: 'sayed', birthYear: 1992, siteName: 'Facebook'});

console.log(called);