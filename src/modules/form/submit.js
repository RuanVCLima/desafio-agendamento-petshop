import dayjs from "dayjs"
import { scheduleNew } from "../../services/schedule-new.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"
import { schedulesDay } from "./hours-load.js"

const form = document.querySelector("form")
const btNewSchedule = document.getElementById("bt-new-schedule")
const modal = document.getElementById("modal")
const closeModal = document.getElementById("close-modal")
const personalDate = document.getElementById("date")
const chosingDate = document.getElementById("date-schedule")
const time = document.getElementById("time")

const nameOfTutor = document.getElementById("name-of-tutor")
const nameOfPet = document.getElementById("name-of-pet")
const phone = document.getElementById("phone")
const service = document.getElementById("service")

const actualDate = dayjs(new Date()).format("YYYY-MM-DD")

personalDate.value = actualDate
chosingDate.value = actualDate

personalDate.min = actualDate
chosingDate.min = actualDate

export async function validatingTime(){
    const actualDate = dayjs().startOf("day")
    const chosenDate = dayjs(chosingDate.value)

    let  date = chosenDate
    
    const dailySchedules = await scheduleFetchByDay({date})
    date = dayjs(chosingDate.value).format("DD")


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

        dailySchedules.forEach(element => {
            const storedHour = dayjs(element.when).format("HH")
            const storedDay = dayjs(element.when).format("DD")
            if(storedHour == hour && storedDay == date ){
                option.disabled = true
                console.log("disabled")
            }
        });


        time.appendChild(option)
    }
    
}




chosingDate.addEventListener("change",()=>{
    validatingTime()
})

personalDate.addEventListener("change",async()=>{
    const date = personalDate.value
    const dailySchedules = await scheduleFetchByDay({date})
    
    schedulesShow({dailySchedules})
})

closeModal.addEventListener("click",(event)=>{
    event.preventDefault()
    modal.style.display = "none"
})

btNewSchedule.addEventListener("click",(event)=>{
    event.preventDefault()
    modal.style.display = "flex"
    validatingTime()
}
)
form.onsubmit = async (event)=>{
    try{
        event.preventDefault()
        const name = nameOfTutor.value.trim()
        const namePet = nameOfPet.value.trim()
        const celphone = phone.value.trim()
        const descriptionService = service.value.trim()

        const hourSelected = time.value
        const [hour] = hourSelected.split(":")

        const when = dayjs(chosingDate.value).add(hour, "hour")
        
        const id = new Date().getTime()

        console.log(id,name,namePet,celphone,descriptionService,when)
        await scheduleNew({
            id,
            nameTutor: name,
            namePet,
            celphone,
            service: descriptionService,
            when
        })

        schedulesDay()
        nameOfPet.value = ""
        nameOfTutor.value = ""
        phone.value = ""
        service.value = ""
    }catch(erro){
        alert("Não foi possível realizar o agendamento.")
        console.log(error)
    }
}

validatingTime()