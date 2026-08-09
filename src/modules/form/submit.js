import dayjs from "dayjs"

const form = document.querySelector("form")
const btNewSchedule = document.getElementById("bt-new-schedule")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("close-modal")
const personalDate = document.getElementById("date")
const chosingDate = document.getElementById("date-schedule")
const time = document.getElementById("time")

const actualDate = dayjs(new Date()).format("YYYY-MM-DD")

personalDate.value = actualDate
chosingDate.value = actualDate

personalDate.min = actualDate
chosingDate.min = actualDate

function validatingTime(){
    const actualDate = dayjs().startOf("day")
    const chosenDate = dayjs(chosingDate.value)

    time.innerHTML = ""
    const currentHour = dayjs().hour()
    const currentMinute = dayjs().minute()

    for (let hour = 9; hour <= 21; hour++) {

        const timeRange = `${String(hour).padStart(2, "0")}:00`
        

        const option = document.createElement("option")
        option.value = timeRange
        option.textContent = timeRange

        if (chosenDate.isSame(actualDate,"day") &&
            (hour<currentHour || currentHour === hour && currentMinute>0)) {
            option.disabled = true
        }

        time.appendChild(option)
    }
}


chosingDate.addEventListener("change",()=>{
    validatingTime()
})

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

validatingTime()