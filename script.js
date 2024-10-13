let input = document.querySelector("#Password")
let input1 = document.querySelector("#showInput")
let copy = document.querySelector("#copy")
let showDiv = document.querySelector("#showpassword")
let p = document.querySelector("p")

console.log(input)
let btn = document.querySelector("button")



btn.addEventListener("click", function () {

    let pattern = 'aZ9Xx8bB7cC6dD5eE4fF3gG2hH1iI0jJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ'

    let str = ''
    for (let i = 0; i < input.value; i++) {

        str += pattern[Math.floor(Math.random() * pattern.length)]

    }

    input1.value = str

    showDiv.style.display = "flex"

})


copy.addEventListener("click", function () {


    navigator.clipboard.writeText(input1.value)
    copy.innerHTML = `<i class="fa-solid fa-check-double"></i>`
    p.style.display = "block"

    setTimeout(() => {
        copy.innerHTML = `<i class="fa-regular fa-copy"></i>`
        p.style.display = "none"

    }, 2200);



})


