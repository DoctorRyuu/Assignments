
//var result = document.querySelectorAll("ul#usernames > li")
//console.log(Array.from(result))

//var text = document.getElementById("header").textContent
//document.getElementById("para").textContent = text

//var header = document.getElementById("header")
//console.log(typeof header.style)
//header.style.color = "red"

//var className = document.querySelector("#header").className += " new-class"

//document.querySelector("#header").classList.add("new-class")
//document.querySelector("#header").classList.remove("another")
//document.querySelector("#header").classList.toggle("another")
//console.log(document.querySelector("#header").className)

//var inputBox = document.getElementById("text-input")
//console.log(inputBox.value)

//var newLi = document.createElement("li")
//newLi.textContent = "3"
//var mylist = document.getElementById("usernames")
//mylist.append(newLi)
//var newP = document.createElement("p")
//newP.textContent = "So here's the new paragraph after the list."
//newP.style.textAlign = "center"
//newP.style.fontSize = "30px"
//document.body.append(newP)

var myList = document.getElementById("usernames")
myList.innerHTML += "<li>3</li>"
document.body.innerHTML += "<p>So here's the new element.</p>"
