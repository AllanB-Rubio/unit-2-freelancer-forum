/*Build your website according to this user story:

A visitor enters the website and finds a list of available freelancers. 
Each freelancer has a name, an occupation, and a starting price for their services. 
They observe on the list Alice, the writer with a starting price of $30, and Bob, who is a teacher, has a starting price of $50.

The visitor also finds a message that displays the average starting price of all the freelancers. 
In this example, the average starting price is $40.

A few seconds later, a new listing appears for a freelancer named Carol, who is a programmer and has a starting price of $70. The average starting price is updated to $50.

New freelancers continue to appear every few seconds, and the average starting price is updated accordingly.

*/

// Arrays of possible names and occupations
const possibleNames = [
  "Alex",
  "Barbara",
  "Carol",
  "David",
  "Eve",
  "John",
  "Molly",
  "Steve",
  "Emma",
  "Mr.Anderson",
];
const possibleOccupations = [
  "writer",
  "teacher",
  "programmer",
  "designer",
  "the chosen one",
  "developer",
  "hacker",
];

// Freelancers array
let freelancers = [
  { name: "Alice", price: 30, occupation: "writer" },
  { name: "Bob", price: 50, occupation: "teacher" },
];

// Function to render freelancers onto the page
function render() {
  const availFreelancers = document.querySelector("#freelancer-list");
  const averagePriceDisplay = document.querySelector("#average-price");

  availFreelancers.innerHTML = ""; // Clear previous content

  let totalPrices = 0;
  for (const freelancer of freelancers) {
    const element = document.createElement("div"); //creates the HTML element specified by tagName

    element.textContent = `${freelancer.name} - ${freelancer.occupation}, $${freelancer.price}`; 
    //.text content gets the content of all elements 

    availFreelancers.appendChild(element);
    totalPrices += freelancer.price;
  }

  const averagePrice = totalPrices / freelancers.length;
  averagePriceDisplay.textContent = `The average starting price is: $${averagePrice.toFixed(2)}`; 
                                    //toFixed(2) is the number of digits to appear after the decimal point
}

// Function to calculate average starting price
function calculateAveragePrice() {
  let totalPrices = 0;
  
  for (const freelancer of freelancers) {
    totalPrices += freelancer.price;
  }
  return totalPrices / freelancers.length;
}

// Function to generate a random freelancer
function generateRandomFreelancer() {
  const randomName =
    possibleNames[Math.floor(Math.random() * possibleNames.length)];

  const randomOccupation =
    possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];

  const randomPrice = Math.floor(Math.random() * 100) + 30; // Random price between 30 and 100

  return {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  };
}

// Add a new freelancer every few seconds
setInterval(() => {
  const newFreelancer = generateRandomFreelancer();
  freelancers.push(newFreelancer);
  render();
}, 3000); // Add a new freelancer every 3 seconds

// Initial rendering
render();
