const names = [
	"John",
	"Jane",
	"Bob",
	"Samantha",
	"Tom",
	"Alice",
	"David",
	"Emily",
	"Michael",
	"Olivia"
];

// Function to generate a random name
function generateName() {
	const randomIndex = Math.floor(Math.random() * names.length);
	const randomName = names[randomIndex];
	document.getElementById("output").textContent = randomName;
}
