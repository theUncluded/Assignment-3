// Assignment 3

//1 Select the section with an id of container without using querySelector.

document.getElementById("container")

//2 Select the section with an id of container using querySelector.

document.querySelector("container")

//3 Select all of the list items with a class of "second".

document.querySelectorAll(".second")

//4 Select a list item with a class of third, but only the list item inside of the ol tag

document.querySelector("ol.third")

//5 Give the section with an id of container the text "Hello!".

const menu = document.querySelector("#container")
const subMenu = document.createElement("h1")
subMenu.textContent = "Hello!"
menu.append(subMenu)


//6 Add the class main to the div with a class of footer.

const menu2 = document.querySelector(".footer")
menu2.classList.add("main")

//7 Remove the class main on the div with a class of footer.

const 
