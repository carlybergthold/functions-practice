// PRACTICE ONE
// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

function printNumbers() {
    
    for (let i = 1; i <= 100; i++) {
        
        if ( i % 5 === 0 && i % 7 ==0) {
            console.log('ChickenMonkey');
        }
        else if ( i % 5 === 0) {
            console.log('chicken');
        }
        else if ( i % 7 === 0) {
            console.log('monkey');
        }
        else {
            console.log(i);
        }
    }
}

printNumbers();







// PRACTICE TWO
// A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.

// Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.

let bandNumber = 0;

const takeNumber = (bandName) => {
    bandNumber += 1;
    console.log(`${bandNumber}. ${bandName}`);
}

takeNumber("Underdogs");
takeNumber("Galactic Scum");
takeNumber("Paring Knives");





// PRACTICE THREE

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

function grill (currentObject) {
    // Modify the food so that it is cooked
    currentObject.cooked = true;

    // Put the cooked food into the appropriate array
    cookedFood.push(currentObject);
};

// Your task is to iterate over the array of foods and invoke the function for each item so that the cookedFood array contains all of the items after they are cooked.

foods.forEach(element => {
    grill(element);
});

console.log(cookedFood);



// PRACTICE FOUR

// For this exercise, you need to create a single JavaScript function named addExcitement that will use console.log() to print out a sentence to the browser console.

const addExcitement = (sentence) => {
    console.log(sentence);
}

addExcitement('This is so exciting!');
addExcitement('I like cannot even');


// PRACTICE FIVE

// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];
let otherSentence = ["I", "would", "also", "like", "to", "see", "this", "sentence", "make", "a", "tree"];

function addWords (theWordArray) {
    // Each time the for loop executes, you're going to add one more word to this string
    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        // Concatenate the new word onto buildMeUp
        buildMeUp += `${theWordArray[i]} `;
        // Print buildMeUp to the console
        console.log(buildMeUp);
    }
}

// Invoke the function and pass in the array
addWords(sentence);

// PRACTICE SIX

// Add an explamation point to the end of every third word in your sentence

function exclaim (theWordArray) {

    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        
        if ( i % 3 === 0 ) {
            buildMeUp += `${theWordArray[i]}! `;
        }

        else {
            buildMeUp += `${theWordArray[i]} `;
        }

        console.log(buildMeUp);

    }
}

exclaim(otherSentence);


// PRACTICE SEVEN

// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

function exclaimOrNot (theWordArray, character) {

    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        
        if ( i % 3 === 0 ) {
            buildMeUp += `${theWordArray[i]}${character} `;
        }

        else {
        buildMeUp += `${theWordArray[i]} `;
        }

        console.log(buildMeUp);
    }
}

exclaimOrNot(sentence, '?');



// CHALLENGE ONE
// Add a new argument to the function so that a developer can specify how many times the special character should be added.

function exclaimWhatForHowLong (theWordArray, character, times) {

    let buildMeUp = "";

    for (let i = 0; i < theWordArray.length; i++) {
        
        if ( i % 3 === 0 ) {
            buildMeUp += `${theWordArray[i]}${character.repeat(times)} `;
        }

        else {
            buildMeUp += `${theWordArray[i]} `;
        }

        console.log(buildMeUp);
    }
}

exclaimWhatForHowLong(otherSentence, '?', 4);