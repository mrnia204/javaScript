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

console.log(summariseUser(name, age, hasHobbies));
