console.log("Hallo Welt!")

let age = 6;
console.log(age);
console.log("--------------");

for (let i = 0; i < age; i++) {
    console.log(i)
}
console.log("--------------");

if (age > 18){
    console.log("Older than 18")
} else {
    console.log("Under 18")
}

let score: number = 1;

if (score){
    console.log("Score is available")
} else {
    console.log("No score available")
}

let username: string = "";
if (username){
    console.log("Username is available")
} else {
    console.log("Username is evaluated as falsy")
}

let isAdmin: boolean = false;
if (isAdmin){
    console.log("isAdmin is considered truthy")
} else {
    console.log("isAdmin is considered false")
}


function getChristmasTree(n: number): string{
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




