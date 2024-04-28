const container = document.querySelector(".container")
const share = document.querySelector(".right-section")

share.addEventListener('click', () => {
    container.classList.toggle("open-share")
})

