var text = "Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period."
var dinosaur = "triceratops"

var nameUpperCased = dinosaur.toUpperCase();
console.log(nameUpperCased);

var sliced = text.split(" ")[0];

var textCharsAfter = text.replace(sliced, nameUpperCased);
console.log(textCharsAfter);

var letter = text.length;
var partOftext = textCharsAfter.slice(0, letter / 2);
console.log(partOftext);
