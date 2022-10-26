let input = document.querySelector("input")
let button = document.querySelector("button")

button.onclick = () => {
    if (input.value == 121) {
        document.querySelector(".imagen").classList.remove("hide")
        document.querySelector(".candado").classList.add("hide")
        document.querySelector(".imagen").classList.add("visible")
    }
}
