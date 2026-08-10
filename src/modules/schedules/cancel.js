import { scheduleCancel } from "../../services/schedule.cancel"
import { schedulesDay } from "../form/hours-load"
export function cancelSchedules(){

    const periods = document.querySelectorAll(".period")
    
   periods.forEach((period)=>{
        period.addEventListener("click", async (event)=>{
            if(event.target.classList.contains("remove")){
                const item = event.target.closest("li")

                const {id} = item.dataset

                if(id){
                    const iscConfirm = confirm("Tem certeza que deseja cancelar esse agendamento?")
                    if(iscConfirm){
                        await scheduleCancel({id})
                        schedulesDay()
                    }
                }
            }
        })
   })
}
