const btnSingUp = document.querySelector(".btn-singUp")

const modal = document.querySelector("#modalForm")


/* Close the modal */
document.querySelector(".close").addEventListener("click", ()=> {
    modal.style.display="none"
})

/* Open the modal */
btnSingUp.addEventListener("click", () => {
    modal.style.display="block"
})