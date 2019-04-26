import moment from "moment"
export const Types = {
    END: "FETCH_ALL_END",
    MINUTES: "UPDATE_MINUTES",
    HORAINICIO: "UPDATE_HORA_INICIO",
    HORAFIM: "UPDATE_HORA_FIM"
}

const minutoAula = 45
const comeco = moment("7:00","HH:mm")
const fim = moment("23:00","HH:mm")
const timeStamps = [];

function calculaTimeStamps(time){
    while(time.diff(fim) < 0){
        if((time.format("HH:mm")) == "09:15" || (time.format("HH:mm") == "15:15")){
            time.add(15,"minutes") //intervalos
        }else if((time.format("HH:mm")) == "12:30"){
            time.add(30,"minutes") //mudança de turno    
        }
        
        timeStamps.push(time.format("HH:mm"))
        time.add(minutoAula, "minutes")
    }
}
calculaTimeStamps(comeco)

const initialState ={
    minutoAula,
    timeStamps,
    comeco: comeco.format("HH:mm"),
    fim: fim.format("HH:mm"),
    dias: ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
    globalLoading: true
}
export default (state = initialState, action) => {
    switch(action.type){
        case Types.MINUTES:
            return {...state, minutoAula: action.payload.minute}
        case Types.END:
            return {...state, globalLoading: false}
        default:
            return state
    }
    
}
export const Creators = {
    fetchAllEnd: () => ({
        type: Types.END
    }),
    updateMinutes: (minute) => ({
        type: Types.MINUTES,
        payload: {minute}
    })
}