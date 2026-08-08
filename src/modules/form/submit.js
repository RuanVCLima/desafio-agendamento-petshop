const form = document.querySelector("form")
const btNewSchedule = document.getElementById("bt-new-schedule")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("close-modal")

closeModal.addEventListener("click",(event)=>{
    event.preventDefault()
    modal.style.display = "none"
})

btNewSchedule.addEventListener("click",(event)=>{
    event.preventDefault()
    modal.style.display = "flex"
}
)
form.onsubmit = (event)=>{
    event.preventDefault()
    console.log("Enviado")
}