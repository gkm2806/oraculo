export const Types = {
    END: "FETCH_ALL_END"
}
const initialState ={
    minutoAula: 45,
    timeStamps: ["07:00","07:45","08:30","09:30","10:15","11:00","11:45","12:30","13:00","13:45","14:30","15:30","16:15","17:00","17:45","18:30"],
    dias: ["Domingo","Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
    globalLoading: true
}
export default (state = initialState, action) => {
    switch(action.type){
        case Types.END:
            return {...state, globalLoading: false}
        default:
            return state
    }
    
}
export const Creators = {
    fetchAllEnd: () => ({
        type: Types.END
    })
}