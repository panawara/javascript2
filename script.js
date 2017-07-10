var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."
var dinosaur = "triceratops"

var nameUpperCased = dinosaur.toUpperCase();
console.log(nameUpperCased);

var textCharsAfter = text.replace("Velociraptor", nameUpperCased);
console.log(textCharsAfter);

var partOftext = textCharsAfter.slice(0,72)
console.log(partOftext);