var a = 1,
	b = 2,
	value = (a * a) - (2 * a * b) + (b * b);

if(value > 0) {
	console.log("wynik dodatni");
} else if (value < 0) {
	console.log("wynik ujemny");
} else if (value == 0) {
	console.log("wynik jest równy zero");
} else {
	console.log("coś poszło nie tak");
}