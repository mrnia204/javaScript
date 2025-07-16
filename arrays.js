const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies) {
   console.log(hobby);
}

hobbies.push('Programming');
console.log(hobbies);


// copied entire array
const copiedArray = hobbies.slice();
console.log(copiedArray)

// new array, inside the another array
const arrayNested = ['Photograher', hobbies]
console.log(arrayNested)

// spread operator
const arraySpread = [... hobbies, 'Fishing']
console.log(arraySpread)


// rest operator
const toArray = (...args) => {
   return args;
}

console.log(toArray(1, 2, 4, 5, 8, 9));