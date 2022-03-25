function nanopractice(){
var input = document.getElementById("input").value
	console.log(input)
	if (input === "Hello") {
		alert("Hello World!");
		console.log("They said Hello.")
	}
	if (input === "Hey") {
		alert("Hey World!");
		console.log("They said Hey.")
	}
	if (input === "") {
		alert("You could say Hello. Or at least Hey.");
		console.log("Rude")
	}
	event.preventDefault();
}
document.getElementById("form").addEventListener("submit", nanopractice)