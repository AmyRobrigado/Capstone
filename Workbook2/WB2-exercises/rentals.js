var tourPassengers = 38;
var charterSeats = 15;
var vanCost = 250;
var vanAmount = (tourPassengers / charterSeats);
var rentCost = (Math.round(vanAmount)) * (vanCost);
var personCost = (rentCost / tourPassengers);
var splitCost = parseFloat(personCost.toFixed(2));

// Van Amount
console.log("You will need " + Math.round(vanAmount) + " vans");

// Rent Cost 
console.log("The cost to rent the vans is " + rentCost + " dollars");

// If you split it per person
console.log("The cost to split it per person is " + splitCost + " dollars");
