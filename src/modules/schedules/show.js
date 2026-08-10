import dayjs from "dayjs"
import { cancelSchedules } from "./cancel"

const morning = document.getElementById("morning") 
const afternoon = document.getElementById("afternoon") 
const night = document.getElementById("night") 

export function schedulesShow ({dailySchedules}){
    try{

        morning.innerHTML = ""
        afternoon.innerHTML = ""
        night.innerHTML = ""

        if (dailySchedules.length ===0){
            morning.innerHTML = ""
            afternoon.innerHTML = ""
            night.innerHTML = ""
        } else {
            dailySchedules.forEach((schedule) => {
                const item = document.createElement("li")
                item.classList.add("period")
                item.dataset.id = schedule.id

                const time = document.createElement("span")
                time.classList.add("time")
                time.textContent = dayjs(schedule.when).format("HH:mm")

                const name = document.createElement("span")
                name.classList.add("name")
                name.textContent = schedule.namePet

                const nameGray = document.createElement("span")
                nameGray.classList.add("gray")
                nameGray.textContent = `/${schedule.nameTutor}`
                name.append(nameGray)

                const service = document.createElement("span")
                service.classList.add("service")
                service.classList.add("gray")
                service.textContent = schedule.service

                const remove = document.createElement("span")
                remove.classList.add("remove")
                remove.classList.add("tertiary")
                remove.textContent = "Remover agendamento"

                item.append(time,name,service,remove)

                const hour = dayjs(schedule.when).hour()

                if(hour<=12){
                    morning.appendChild(item)
                } else if(hour<18){
                    afternoon.appendChild(item)
                }else{
                    night.appendChild(item)
                }
            });
        }

        cancelSchedules()
    }catch(error){
        alert("Não foi possível exibir os agendamentos")
        console.log(error)
    }
}