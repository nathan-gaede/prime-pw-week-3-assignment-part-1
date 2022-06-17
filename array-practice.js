console.log('****** Array Practice *******');

// 1. Creating arrays
//console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
    let foods=[ 'chips','salsa', 'chili', 'guac', 'wings', 'red curry', 'omelettes', 'burritos', 'chicken vindaloo'];

    
// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
    
console.log('Favorite foods are:',foods);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');


// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('Array length is:',foods.length);

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0])

// 3.a. TODO: Log the second animal in the array 
console.log('Second animal is:',animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('Last animal is:',animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log('Last animal is:',animalArray[animalArray.length-1]);


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
foods.push('sushi');
console.log('Updated favorite foods to include sushi',foods);


// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedFood = foods.pop();

console.log('Removed last food item:', removedFood)
console.log('Favorite foods are now:', foods)


// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
foods.unshift('hummus');
console.log('Added new food to  beginning of list. Updated list is as follows:',foods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift()
console.log('Removed the first animal', removedAnimal)
console.log('The animals are now', animalArray)

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
let removedMoreFood = foods.shift();

console.log('Removed another food item:',removedMoreFood);
console.log(`The updated foods list is: ${foods}`);
// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.

console.log('Replaced', foods[1], 'with spring rolls')
let replacedFood = foods[1] = 'spring rolls';
console.log(`Favorite foods are now ${foods}`);
// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.
foods.sort();
foods.reverse();
console.log(`Sorted favorite foods in alphabetical order, then reversed the list order. Here is the new list:${foods}.`)
// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.

// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']