var name = 'max';
var age = 29;
var hasHobbies = true;

function summariseUser(userName, userAge, userHasHobby) {
   return (
      'UserName is ' + 
      userName + 
      ', age is ' + 
      userAge + 
      ' and user has hobbies: ' + 
      userHasHobby 
   );
}


const summariseUserArrow = (userName, userAge, userHasHObby) => {

   return (
      'Name is ' + 
      userName +
      ', age is ' +
      userAge +
      ' and the user has hobbies: ' +
      userHasHObby
   );
}

const add = (a, b) => a + b;
const addRandom = () => 1 + 3;


//console.log(summariseUser(name, age, hasHobbies));
console.log(summariseUserArrow(name, age, hasHobbies));

console.log(add(3, 4));


