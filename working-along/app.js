
var result = document.querySelectorAll("ul#usernames > li")
console.log(Array.from(result))

var ryuu = document.getElementById("me")
var sis = document.getElementById("sis")
var pruitt = document.getElementById("pruitt")
var jewell = document.getElementById("jewell")

var clan = {
    ryuu:true,
    sis:true,
    pruitt:true,
    jewell:true
}

console.log([ryuu, sis, pruitt, jewell])

for (i = 0; i < result.length; i++){
    console.log(result[i])
}

var person = {name: "Phillip"}
person.name = "Daniel"
console.log(person)

var header = document.getElementById("header").textContent
    console.log(header)
document.getElementById("para").textContent = header
