
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { schedulesShow } from "../schedules/show.js"

const selectedDate = document.getElementById("date")
const chosingDate = document.getElementById("date-schedule")


export async function schedulesDay(){
    
    const date = selectedDate.value

    const dailySchedules = await scheduleFetchByDay({date})

    schedulesShow({dailySchedules})
}