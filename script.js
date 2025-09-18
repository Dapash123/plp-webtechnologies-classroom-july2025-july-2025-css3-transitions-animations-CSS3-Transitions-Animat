/* -------------------------------
   Part 2: JavaScript Functions
   Scope, Parameters, Return Values
----------------------------------- */

// Global variable
let globalCounter = 0;

// Function with parameter + return value
function multiplyByTwo(num) {
  return num * 2;
}

// Function to show/hide box (uses parameter)
function toggleBox(show) {
  const box = document.querySelector('.box');
  if (show) {
    box.classList.add('show');
  } else {
    box.classList.remove('show');
  }
}

// Function demonstrating local vs global scope
function increaseCounter() {
  let localCounter = 5; // local variable
  globalCounter++; // modifies global variable
  console.log("Local:", localCounter, "Global:", globalCounter);
}

// Example usage
console.log("Double of 4 is:", multiplyByTwo(4));
increaseCounter();


/* -------------------------------
   Part 3: Combining CSS + JS
   Triggering Animations Dynamically
----------------------------------- */

const toggleBtn = document.getElementById('toggleBoxBtn');
const box = document.querySelector('.box');

// Reuse toggleBox() to animate box on button click
toggleBtn.addEventListener('click', () => {
  toggleBox(!box.classList.contains('show'));
});