/* 
   Copyright (c) 2023 Promineo Tech
   Author:  Promineo Tech Academic Team
   Subject:  JavaScript and DOM Manipulation 
   FE Lab Week 10
*/

/* ----------------------------------------------------- */
// Key Term List:
// DOM (Document Object Model)
// Element/node
// CSS Selector (class/id/node)
// Event Listener
//.createElement
//.getElementBy___
//.querySelector
//.append
//.prepend
// element.style.____ = ''
// .innerHTML = 'Hello World'
//

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/*------------------------ Creating a website with only JS ------------------------*/
console.log(`-------------------------- 
Part 1: Create a form with only JavaScript`)

/** 
 *
 * Step 1: Uncomment out the 'console.log(myForm)' at the bottom of the section.
 * Step 2: Using let, make a new variable called 'myForm'.
 * Step 3: Set it to be equal to document.createElement('form') // check the result in the console.
 * Step 4: Repeat steps 2 and 3, but with: myLabel, myInput . This input will be used to enter a name.
 * Step 5: Set the .innerHTML of myLabel to be equal to 'Name'
 * Step 6: Append myLabel to myForm, then append myInput to myForm
 * Step 7: Append myForm to document.body
           You should now have a label and a input on your website.
           Do the same steps, appending a label/input for Email, and a submit button to your form.
 * ↓ YOUR CODE HERE ↓ */

// Uncomment the following line after creating myForm
// console.log(myForm);

// Step 2
let myForm = document.createElement('form');

// Steps 4 & 5 for Name label and input
let myLabel = document.createElement('label');
let myInput = document.createElement('input');
myLabel.innerHTML = 'Name';

// Step 6
myForm.append(myLabel);
myForm.append(myInput);

// Repeat steps for Email label and input
let emailLabel = document.createElement('label');
let emailInput = document.createElement('input');
emailLabel.innerHTML = 'Email';
myForm.append(emailLabel);
myForm.append(emailInput);

// Submit button
let submitButton = document.createElement('input');
submitButton.type = 'submit';
submitButton.value = 'Submit';
myForm.append(submitButton);

// Step 7
document.body.append(myForm);    

console.log(myForm)
//Question: Besides changing the innerHTML, what other HTML things can we change using JavaScript?
//Answer: In JavaScript, we can alter more than just the .innerHTML. This includes modifying attributes such as id and class, adjusting styles via the style property, changing properties like the src for images or the href for links, among various other modifications.

/*------------------------ Styling a form with only JavaScript------------------------*/
console.log(`-------------------------- 
Part 2: Styling our form with only JavaScript`)

/**
 *  Hint: element.style.cssProperty = ''
 *
 *  Step 1: Change the background color of your form to your favorite color.
 *         (you can use an accepted string, hex (ex: #DBF9FC) or rgb, (ex: rgb(255,122,89)))
 *  Step 2: Change the font color so it's readable over your background color
 *  Step 3: Give your form a display of flex, a flex-direction of column, and a max-width of 250px
 *
 * ↓ YOUR CODE HERE ↓ */

myForm.style.backgroundColor = '#DBF9FC'; // Change to your favorite color
myForm.style.color = 'black'; // Ensure readability
myForm.style.display = 'flex';
myForm.style.flexDirection = 'column';
myForm.style.maxWidth = '250px';

//Question: Do you prefer styling with JavaScript or CSS?
//Answer: Choosing between CSS and JavaScript for styling hinges on the specific situation. CSS is typically favored for static styling because it offers enhanced performance and maintains a clear division between styling and scripting. However, for styles that need to adapt dynamically to user actions or data, JavaScript's capabilities become invaluable.

/*------------------------ Creating a table with only JavaScript ------------------------*/
console.log(`-------------------------- 
Part 3: Creating a table with only JavaScript`)

/*
 * Note: Most of these steps are similar to Part 1.

 * Step 1: Uncomment out the console.log(myTable) below.       
 * Step 2: Create 4 new table elements: <table>, <tr>, <td>, <td>. Store them in variables using let
 * Step 3: One of your TD elements innerHTML should be 'Name', the other should be 'Email'.
 * Step 4: Append them in the same way that we create a table with HTML.
 * Step 5: Append the finished <table> to your <body>. It should now be on your website. 
          As an added challenge, try to create a complete table with 2 rows, name/email and append it to the body.

 * Final Step: Style your table using JavaScript starting with a border. You may need to target more element/nodes than we did with myTable.
 * ↓ YOUR CODE HERE ↓ */

// Uncomment the following line after creating myTable
// console.log(myTable);

let myTable = document.createElement('table');
let tr = document.createElement('tr');
let td1 = document.createElement('td');
let td2 = document.createElement('td');
td1.innerHTML = 'Name';
td2.innerHTML = 'Email';

tr.append(td1);
tr.append(td2);
myTable.append(tr);

// Repeat for another row (optional for added challenge)
let tr2 = document.createElement('tr');
let td3 = document.createElement('td');
let td4 = document.createElement('td');
td3.innerHTML = 'John Doe';
td4.innerHTML = 'john@example.com';
tr2.append(td3);
tr2.append(td4);
myTable.append(tr2);

document.body.append(myTable);

// Style the table
myTable.style.border = '1px solid black';

console.log(myTable)
//Question: While this is clearly a more round-about way of making a table, how can using JavaScript in this way
//          more beneficial than HTML?
//Answer: Leveraging JavaScript for the dynamic generation and adjustment of tables is advantageous when dealing with variable data sources, user interactions, or intricate user interfaces that require content updates without refreshing the page.

/*------------------------ Changing our body background on click ------------------------*/
console.log(`-------------------------- 
Part 4: Changing our background on click`)
/**
 * Documentation: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
 *
 * Step 1: In our HTML, uncomment out the <button> element.
 * Step 2: Read through the documentation up through the first block of code.
 *         We're going to use rgb (ex: rgb(0,125,255) ) to change the color of our body's background when we click the button
 * Step 3: Create a variable called myButton that uses getElementById() to target the button in step 1.
 * Step 4: Use the 'addEventListener' method on myButton.
 *         addEventListener is a method takes in two arguments: an event listener type, and a function.
 * Step 5: For the first argument, add 'click'. For the second argument, add a function body... (ex: function (){})
 * Step 6: Inside of the function body, change the backgroundColor of our body element.
 *         Let's use rgb(0,125,255) to change the color, and Math.random() to change the values inside rgb().
 * Step 7: Click the button in your index.html and see the background change!
 *
 * ↓ YOUR CODE HERE ↓ */

// Assume a button with id 'myButton' exists in the HTML
let myButton = document.getElementById('myButton');

myButton.addEventListener('click', function () {
    document.body.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
});

//Question: What other event listeners are there?
//             Try them out by replacing 'click' in your function above!
//Answer:In addition to 'click', a variety of event listeners such as 'mouseover', 'mouseout', 'keydown', 'keyup', 'submit', and several others are available. These event listeners enable diverse user interactions to activate JavaScript functions.

console.log(`-----------Finished------------`)

/**
 * Extra Project Ideas:
 *
 * 1: Create a button that changes the innerHTML of a div back and forth from 'Hello' to 'World'
 * 2: Create an image that disappears when you hover over it, and reappears when you hover off.
 * 3: When you click your form button, get the input values of your name/email input,
 *    and append a new <tr> containing those values to your tBody element.
 *    Look into event.preventDefault(). Buttons inside of forms have a default setting to refresh the page.
 */

// Create button
let toggleButton = document.createElement('button');
toggleButton.innerHTML = 'Toggle';
document.body.appendChild(toggleButton);

// Create div
let toggleDiv = document.createElement('div');
toggleDiv.innerHTML = 'Hello';
document.body.appendChild(toggleDiv);

// Add click event listener to button
toggleButton.addEventListener('click', function() {
    toggleDiv.innerHTML = toggleDiv.innerHTML === 'Hello' ? 'World' : 'Hello';
});

// Create image
let hoverImage = document.createElement('img');
hoverImage.src = 'HoverEffect.jpg'; // Replace with your image URL
hoverImage.alt = 'Hover me';
document.body.appendChild(hoverImage);

// Add hover event listeners to image
hoverImage.addEventListener('mouseover', function() {
    hoverImage.style.opacity = '0'; // Makes the image disappear on hover
});

hoverImage.addEventListener('mouseout', function() {
    hoverImage.style.opacity = '1'; // Makes the image reappear when not hovered
});

let formButton = document.querySelector('input[type="submit"]'); // Adjust if your submit button selector differs

// Event listener for form submission
formButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    // Assuming you have inputs with ids or names
    let nameInput = document.querySelector('input[name="name"]').value; // Adjust the selector as necessary
    let emailInput = document.querySelector('input[name="email"]').value; // Adjust the selector as necessary

    // Create new table row and data cells
    let newRow = document.createElement('tr');
    let nameCell = document.createElement('td');
    let emailCell = document.createElement('td');

    // Assign input values to cells
    nameCell.innerHTML = nameInput;
    emailCell.innerHTML = emailInput;

    // Append cells to row, and row to tbody
    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    document.querySelector('tbody').appendChild(newRow); // Adjust if your tbody selector differs
});