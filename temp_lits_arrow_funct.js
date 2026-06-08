let name = "Lionel Messi"
let age =  36
let occupation = "Professional Footballer"
let isRetired = false
console.log(`His name is ${name}, he is ${age} years old, and he is a ${occupation}. Is he retired? ${isRetired}`)

function myProfile(name, age, occupation , isRetired) {
    return `
    <div class="profile">
        <h1>${name}</h1>
        <p>Age: ${age}</p>
        <p>Occupation: ${occupation}</p>
        <p>Is Retired: ${isRetired}</p>
    </div>
    `;
}

//referenced arrow function from w3schools.com//
const sum = (a, b) => a + b;
console.log(sum(5, 7))
const multiply = (a, b) => a * b;
console.log(multiply(5, 7))

const evenNumbers = [1, 2, 3, 4, 5, 6].filter(num => num % 2 === 0);
console.log(evenNumbers)
const squaredNumbers = [1, 2, 3, 4, 5].map(num => num * num);
console.log(squaredNumbers)
