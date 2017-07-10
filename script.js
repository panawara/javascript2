

function getTriangleArea(a, h) {
	if (a>0 && h>0) {
		return (a*h/2)
	} else if (a<0 && h<0) {
		return "Nieprawidłowe dane"
	}
}

console.log(getTriangleArea(10,6));


var triangleArea = getTriangleArea(10,15);
console.log(triangleArea);