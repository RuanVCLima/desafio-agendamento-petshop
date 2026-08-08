import dayjs from "dayjs"

const form = document.querySelector("form")
const btNewSchedule = document.getElementById("bt-new-schedule")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("close-modal")
const personalDate = document.getElementById("date")
const chosingDate = document.getElementById("date-schedule")
const time = document.getElementById("time")

personalDate.value = dayjs(new Date()).format("YYYY-MM-DD")
chosingDate.value = dayjs(new Date()).format("YYYY-MM-DD")
time.value = dayjs().format("HH:mm")

personalDate.min = dayjs(new Date()).format("YYYY-MM-DD")
chosingDate.min = dayjs(new Date()).format("YYYY-MM-DD")
time.min = dayjs().format("HH:mm")


function validatingTime(){
    time.min = dayjs().format("HH:mm")
}

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
    validatingTime()
    console.log("Enviado")
}