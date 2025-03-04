console.log("Hallo Welt!")

let age = 6;
console.log(age);
console.log("--------------");

for (let i = 0; i < age; i++) {
    console.log(i)
}
console.log("--------------");

if (age > 18) {
    console.log("Older than 18")
} else {
    console.log("Under 18")
}

let score: number = 1;

if (score) {
    console.log("Score is available")
} else {
    console.log("No score available")
}

let username: string = "";
if (username) {
    console.log("Username is available")
} else {
    console.log("Username is evaluated as falsy")
}

let isAdmin: boolean = false;
if (isAdmin) {
    console.log("isAdmin is considered truthy")
} else {
    console.log("isAdmin is considered false")
}


function getChristmasTree(n: number): string {
    let tree: string[] = [];

    for (let i = 0; i < n; i++) {
        let spaces: string = " ".repeat(n - i - 1);
        let stares: string = "*".repeat(2 * i + 1);
        tree.push(spaces + stares);
    }

    let trunk = " ".repeat(n - 1) + "*";
    for (let i = 0; i < n; i++) {
        tree.push(trunk)
    }

    return tree.join("\n");
}

let tree = getChristmasTree(40);
console.log(tree)

console.log("-------Typescript Day 2--------")
//Step 1
let numbers: number[] = [1, 3, 5, 7, 9, 11, 13]

let newNumbers = numbers.map(number => [number, number * 2])
console.log(newNumbers)
let newNumbersFlat = numbers.flatMap(number => [number, number * 2])
console.log(newNumbersFlat)

//Step 2
let words: string[] = ["Hallo", "Welt"]
let newWords = words.filter(word => word.length >= 5)
console.log(newWords)

// Step 3
let otherNumbers: number[] = [2, 4, 6, 8, 10, 12]
let sum = otherNumbers.reduce((a, b) => a + b)
console.log(sum)

// Step 4
let anotherNumbers: number[] = [2, 4, 6, 8, 10, 12]
let isSomeLarger10 = anotherNumbers.some(number => number > 10)
console.log(isSomeLarger10)

//Bonus
const list = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194];

//Sort descending
console.log("Sort descending")
console.log(list.sort((a, b) => a - b));

//Square numbers
console.log("Square numbers")
console.log(list.map(number => number * number));

//Remove lowest two and highest 4
console.log("Remove 2 lowest and highest 4")
console.log(list.sort((a, b) => a - b)
    .slice(2, 9));

//Remove all numbers divisible by 4
console.log("Remove all divisible by 4")
console.log(list.filter(number => number % 4 !== 0));

//Sum of all numbers
console.log("Sum of all")
console.log(list.reduce((a, b) => a + b));