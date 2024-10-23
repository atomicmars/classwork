let person = {
  name: 'Mars',
  age: 25
};
console.log(person)

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

let selectedColors = ['red', 'blue'];
selectedColors[2] = 'green';
console.log(selectedColors);

// Display greeting to me
function greet(name, lastName) {
  console.log('Hello ' + name + ' ' + lastName);
}
greet('Mars', 'Livingston');

// calculating a value
function square(number) {
  return number * number;
}
console.log(square(2));

// Button Feature
const buttonA = document.querySelector("#buttonA");
const headingA = document.querySelector("#headingA");
const insertParty = ['Laios', 'Marcille','Chilchuck', 'Senshi', 'Izutsumi', 'Falin'];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const nameresult = randomValueFromArray(insertParty)

buttonA.onclick = () => {
  buttonA.textContent = 'Congrats!';
  headingA.textContent = 'Your party member is ' + nameresult;
}

// Function -- log hello / goodbye -- call function / return

function helloClass (){
  console.log('Hello');
  console.log('Goodbye')
}