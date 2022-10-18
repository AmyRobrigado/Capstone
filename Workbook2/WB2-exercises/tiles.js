var roomDimensions = 300;
var boxofTiles = 12;
var additionalTiles = 0.1;
var boxes = Math.ceil(roomDimensions / boxofTiles);
var extraBoxes = Math.ceil(roomDimensions / boxofTiles) + (additionalTiles * boxes);



console.log("I will need " + boxes + " boxes");
console.log("I will need " + extraBoxes + " extra boxes")
