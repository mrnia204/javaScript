// object destructing
const person = {
   name: "Benzonii",
   age: 29,
   greet() {
      console.log("Hi, I am " + this.name);
   }
};

const printName = (personData) => {
   console.log(personData.name)
}

printName(person)

// destructing
const printNames = ({ name }) => {
   console.log(name);
}

printNames(person);

const { name, age} = person;
console.log(name, age)


// array destructing
const hobbies = ['Sports', 'Cooking'];

let [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2)