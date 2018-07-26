var people = [
	{
		name: "Bob",
		coolnessScore: 23
	},
	{
		name: "Jen",
		coolnessScore: 40
	},
	{
		name: "James",
		coolnessScore: 15.6
	},
	{
		name: "Isolde",
		coolnessScore: 17
	}
];

// Your code here!

// Write code that uses the filter function, 
// and the below isCool function to return a list of people who are cool.

var isCool = people.filter(function(person) {
	return person.coolnessScore > 20;
});

isCool.forEach(function(person){
	console.log(person.name, "is cool");
})

// console.log(isCool);

// Example results:
//
// Bob is cool
// Isolde is cool
