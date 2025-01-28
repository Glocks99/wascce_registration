window.addEventListener("DOMContentLoaded", e => {

    document.querySelector(".fa-bars").addEventListener("click", e => {
        document.querySelector("nav").classList.add("active")
    })

    document.querySelector(".close").addEventListener("click", e => {
        document.querySelector("nav").classList.remove("active")
    })

    document.querySelectorAll(".menu ul li").forEach(link => {
        link.addEventListener("click", e => {
            document.querySelector("nav").classList.remove("active")
        })
    })

    document.getElementById("photo").addEventListener("change", e => {
        const file = e.target.files[0]
        const blob = URL.createObjectURL(file)
        const image = document.createElement("img")
        image.src = blob
        document.querySelector(".pic-container").innerHTML = ""
        document.querySelector(".pic-container").append(image)
    })
})