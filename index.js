//Task 1 sentence capitalization
let sentence = prompt("Please enter a sentence:");
let words = sentence.split(" ");
let capitalizedWords = [];

for (let i = 0; i < words.length; i++) {
 let word = words[i];
 let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
 capitalizedWords.push(capitalizedWord);
}

let capitalizedSentence = capitalizedWords.join(" ");
alert("Task 1: The modified sentence is: " + capitalizedSentence);
console.log("Task 1: The modified sentence is: " + capitalizedSentence)

// Task 2 string truncation
// Prompt user to enter a long string
var originalString = prompt("Please enter a long string:");

// Use slice to truncate the string to specific length (e.g., 100 characters)
var truncatedString = originalString.slice(0, 100) + "...";

// Display the truncated string and original string
console.log("Task 2: Original String:", originalString);
console.log("Task 2: Truncated String:", truncatedString);


// Task 3 string search
let paragraph = "The quick brown fox jumps over the lazy dog. It was the best of times, it was the worst of times.";

let wordToSearch = prompt("Please enter a word to search for:");

let index = paragraph.indexOf(wordToSearch);

if (index !== -1) {
    console.log("Task 3: The first occurrence of the word was found at index:", index);
} else {
    console.log("Task 3: Word not found");
}


// Task 4 character count
let sentences = prompt("Please enter a sentence:");
let char = prompt("Please enter a character to count:");
let count = 0;

for (let i = 0; i < sentences.length; i++) {
    if (sentences.charAt(i) === char) {
        count++;
    }
}

console.log(`Task 4: The character "${char}" appears ${count} times in the sentence.`);


// Task 5 word replacement
let senTence = "The [noun] is [adjective].";

let noun = prompt("Please enter a noun:");
let adjective = prompt("Please enter an adjective:");

senTence = senTence.replace("[noun]", noun);
senTence = senTence.replace("[adjective]", adjective);

console.log("Task 5:" + senTence);


// Task 6 calculate the area of a circle
let radius = prompt("Please enter the radius of the circle:");
let area = 3.14159 * Math.pow(radius, 2);

console.log("Task 6: The area of the circle is: " + area);


// Task 7 temperature conversion
let celsius = prompt("Please enter the temperature in celsius:");

let rounded = Math.round(celsius);
let ceiling = Math.ceil(celsius);
let floor = Math.floor(celsius);

console.log("Task 7: The temperature rounded to the nearest whole number is: " + rounded);
console.log("Task 7: The temperature rounded up to the nearest whole number is: " + ceiling);
console.log("Task 7: The temperature rounded down to the nearest whole number is: " + floor);

// Task 8 discount calculator
let originalPrice = parseFloat(prompt("Please enter the item's original price:"));

let discountPercentage = Math.random() * (50 - 10) + 10;
discountPercentage = Math.round(discountPercentage * 100) / 100;

let discount = originalPrice * (discountPercentage / 100);
let finalPrice = originalPrice - discount;

console.log("Task 8: The original price is: " + originalPrice);
console.log("Task 8: The discount percentage is: " + discountPercentage + "%");
console.log("Task 8: The final price is: " + finalPrice);


// Task 9 number to currency
var inputamount = parseFloat(prompt("Please enter a money amount (e.g., 12345.67):"));
var formattedCurrency = "$" + inputamount.toFixed(2);
console.log("Task 9: Formatted Currency: " + formattedCurrency);


// Task 10 array sorting
let names = ['Emma', 'Alex', 'Matthew', 'Olivia', 'Michael', 'Charlotte', 'Jacob', 'Harper', 'Ava', 'Ethan'];
names.sort();
console.log("Task 10: Sorted list of names:", names);

