import { apiConfig } from "./api-config.js";

export async function scheduleNew({id,nameTutor,namePet,celphone,service,when}){
    try{
        await fetch(`${apiConfig.baseURL}/schedules`,{
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                id,
                nameTutor,
                namePet,
                celphone,
                service,
                when
            })
        })

        alert("Agendamento realizado com sucesso")
    }catch(error){
        console.log(error)
        alert("Não foi possível agendar. Tente novamente mais tarde")
    }
}