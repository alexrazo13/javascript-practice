// C.R.U.D.
// Create
h2 = document.createElement('h2') // Create a new element
h2.innerHTML = 'Create'; // write text in element
document.body.apprendChild(h2); // place element on the body

// Read
h1 = document.querySelector('h1'); // select element
h1.innerHTML = 'Now it is at the bottom'; // write in text element
document.body.apprendChild(h1); // place element on the body

// Update
h2.style.color = 'purple'; // change style
h2.innerHTML = 'Create Elements'

// Delete
h2.remove(); // remove elements
document.body.apprend(h2);