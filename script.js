const board =document.querySelector("#board")
const input = document.createElement("input")
input.style.outline="none"
input.style.border= "3px solid yellow"
input.style.padding= "5px 15px"
input.style.color= "blue"

const btn1 = document.createElement("button")
btn1.innerText= "включить"
btn1.style.margin = "20px 10px"
btn1.style.background = "red"
btn1.style.color= "white"
btn1.style.padding= "10px 25px"
btn1.style.border= "solid 2px white"
btn1.style.borderRadius= "25px"
btn1.style.cursor= "pointer"


const btn2 = document.createElement("button")
btn2.innerText= "выключить"
btn2.style.margin = "20px 10px"
btn2.style.background = "#7EFFB2"
btn2.style.color= "white"
btn2.style.padding= "10px 25px"
btn2.style.border= "solid 2px white"
btn2.style.borderRadius= "25px"
btn2.style.cursor= "pointer"

btn1.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".square")
    boxes.forEach(square =>{
        setColor(square)
    })
    btn1.style.scale= "1.1"
    btn1.style.transition= "1s"
})


btn2.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".square")
    boxes.forEach(square =>{
        removeColor(square)
    })
    btn2.style.scale= "1.1"
    btn2.style.transition= "1s"
})

const colorNames = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGray",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "DarkOrange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGray",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DimGrey",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Gray",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGray",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGray",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "RebeccaPurple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGray",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen",
];


for (let i =0;i<304;i++){
    const square = document.createElement("div")
    board.append(square)
    square.setAttribute("class","square")
    square.addEventListener("mouseover", () =>{
        setColor(square)
    })
    square.addEventListener("mouseout", () =>{
        removeColor(square)
    })
}
function setColor(box){
    const color = getRandomColor()
    box.style.background = color
    box.style.transform = "scale(1.1)"
    box.style.transform = "rotateY(-180deg)"
    box.style.boxShadow = `2px 2px 4px ${color}, 0 0 10px ${color}`
}
function removeColor(box){
    box.style.background = "#424242"
    box.style.transform = "scale(1)"
    box.style.boxShadow = "0 0 2px #000"
}
function getRandomColor(){
    const idx = Math.floor(Math.random() * colorNames.length)
    return colorNames[idx]
}
console.log(getRandomColor())


board.append(btn1,btn2)

