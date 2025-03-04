import {Student} from "./Student.ts";

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

//Objekte definieren
const x: { name: string, age: number } = {
    name: "test",
    age: 50
}
console.log(x)

//Objekte definieren mit "Klasse Person"
type Person = {
    name: string,
    favoriteColor: string,
    age: number
}

const y: Person = {
    name: "Max",
    favoriteColor: "blue",
    age: 30
}
console.log(y)


//Typen definieren

type Example = number | string
const a: Example = 5.3
const b: Example = "Hallo Welt"

console.log(a)
console.log(b)

type Example2 = "Max" | "Linda"
const c: Example2 = "Max"
console.log(c)

type Example3 = {
    name: "Max" | "Linda"
}
const d: Example3 = {
    name: "Max"
}
console.log(d)


//Bonus
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

let tree = getChristmasTree(7);
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
let sum = otherNumbers.reduce((sum, number) => sum + number, 0)
console.log(sum)

// Step 4
let anotherNumbers: number[] = [2, 4, 6, 8, 10, 12]
let isSomeLarger10 = anotherNumbers.some(number => number > 10)
console.log(isSomeLarger10)

//Bonus
const list = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194];

//Sort descending
console.log("Sort descending")
console.log([...list].sort((a, b) => b - a));

//Square numbers
console.log("Square numbers")
console.log(list.map(number => number * number));

//Remove the lowest two and highest 4
console.log("Remove 2 lowest and highest 4")
console.log([...list].sort((a, b) => a - b)
    .slice(2, -4));

//Remove all numbers divisible by 4
console.log("Remove all divisible by 4")
console.log(list.filter(number => number % 4 !== 0));

//Sum of all numbers
console.log("Sum of all")
console.log(list.reduce((sum, number) => sum + number, 0));

//Prüfen, ob das original unverändert ist
console.log(list)

//Arrays
type MixedArray = (number | string)[]

const mixedArray: MixedArray = [1, 15, "Hallo Welt"]
console.log(mixedArray)

//In Typescript wird bei Operatoren && bzw. || geprüft, ob b zurückgegben wird oder a
const a1 = true
const b1 = "Hallo"

console.log(a1 && b1)

const a2 = false
const b2 = "Hallo"

console.log(a2 || b2)

const a3 = "1"
const b3 = "Hallo"

console.log(a3 || b3)

console.log("---------------------------------")
console.log("---------------------------------")
console.log("------Typescript Part 3----------")
console.log("---------------------------------")
console.log("---------------------------------")

const student1: Student = {
    firstName: "Max",
    lastName: "Wilmes",
    age: 30,
    reportCard: {
        English: ["A", "A", "A", 2, 3, undefined],
        Math: ["B", 1, 1],
        Chemistry: ["A", "A", "B", undefined, 6]
    }
}
const student2: Student = {
    firstName: "Linda",
    lastName: "Witte",
    age: 31,
    reportCard: {
        English: ["A", 5, 6, 1, 3, undefined],
        Math: ["B", undefined, 1, 1, undefined],
        Chemistry: ["A", undefined, 4, "B", undefined, 6]
    }
}

let studentArray: Student[] = [student1, student2]

console.log(student1)

function printStudent(student: Student) {
    let numberOfCharacters: number = student.firstName.length + student.lastName.length + student.age.toString().length + 4

    console.log(`${student.firstName} ${student.lastName} (${student.age})`)
    console.log("=".repeat(numberOfCharacters))
    console.log("Noten: ")

    for (const subject in student.reportCard) {
        let grades = student.reportCard[subject]
            .map(grade => grade === undefined ? "*" : grade)

        console.log(`${subject}: ${grades}`)
    }
    //Average Grades
    let totalSum: number = 0
    let totalCount: number = 0

    console.log("=".repeat(numberOfCharacters))
    for (const subject in student.reportCard) {
        let sumOfGrades: number = student.reportCard[subject]
            .filter(grade => grade !== undefined)
            .map(grade => {
                if (grade === "A") {
                    return 1
                }
                if (grade === "B") {
                    return 2
                }
                if (grade === "C") {
                    return 3
                }
                if (grade === "D") {
                    return 4
                }
                if (grade === "E") {
                    return 5
                }
                if (grade === "F") {
                    return 6
                } else {
                    return grade
                }
            })
            .reduce((sum, number) => sum + number, 0)
        let numberOfGrades: number = student.reportCard[subject]
            .filter(grade => grade !== undefined)
            .length
        let averageGrade: number = sumOfGrades / numberOfGrades
        console.log(`Average Grade ${subject}: ${averageGrade.toFixed(1)}`)

        totalSum += sumOfGrades
        totalCount += numberOfGrades
    }

    let overalAverage: number = totalSum / totalCount
    console.log(`Overall Average Grade: ${overalAverage.toFixed(1)}`)
}

printStudent(student1)
console.log("----------")
studentArray.forEach(student => printStudent(student))
