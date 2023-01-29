let horizontal = document.querySelector(".horizontal")
let vertical = document.querySelector(".vertical")
let spread = document.querySelector(".spread")
let blur = document.querySelector(".blur")
let color = document.querySelector(".color")
let box = document.querySelector(".box")

let inputs =Array.from(document.querySelectorAll("input"))
let boxShadowValue = document.querySelector(".box-shadow__value")

const boxShadow = (el) => {
    return el.addEventListener ("input", (e) => {
        box.style.boxShadow = `${horizontal.value}px ${vertical.value}px ${spread.value}px ${blur.value}px ${color.value} `
        boxShadowValue.innerText = `box-shadow: ${box.style.boxShadow}`
    })
}

inputs.forEach((el) => {
    console.log(boxShadow(el))
})