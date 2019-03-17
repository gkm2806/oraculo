//@ts-check

export const Types = {
    ADD: "aula/ADD",
    UPDATE: "aula/UPDATE",
    REMOVE: "aula/REMOVE"
};

const initialState = [
    {
        id: "cjrr5xtfi04003a5qu7lvn55d",
        sala: "Sala 2",
        materia: "Matematica",
        turma: "2024",
        horaInicio: "7:00",
        horaFim:"7:45",
        dia: "Quarta",
        professor:"Mauro",
        continuo: true
    },
    {
        id: "cjrr5xu3k00013aqqymu6gn3k",
        sala: "Lab A",
        materia: "LP2",
        turma: "2024",
        horaInicio: "7:45",
        horaFim:"8:30",
        dia: "Quarta",
        professor:"Jimenez"
    },
    {
        id: "cjrr5xu3k00013a5qyuu6gn3k",
        sala: "Lab Quimica",
        materia: "Quimica",
        turma: "2024",
        horaInicio: "8:30",
        horaFim:"9:15",
        dia: "Quarta",
        professor:"Daisy"
    },
    {
        id: "cjrr5xu3k00013a5wymu6gn3k",
        sala: "Lab Quimica",
        materia: "Quimica",
        turma: "2024",
        horaInicio: "13:45",
        horaFim:"14:30",
        dia: "Quinta",
        professor:"Daisy"
    }
];


export default function aulas(state = initialState, action) {
    switch (action.type) {
        case Types.ADD:
            return [...state, Object.assign({}, action.payload.aula)]
        case Types.UPDATE:
            return [...state.filter(aula => aula.id !== action.payload.aula.id), Object.assign({}, action.payload.aula)]
        case Types.REMOVE:
            return [...state.filter(aula => aula.id !== action.payload.AulaId)]
        default: return state
    }
}

export const Creators = {

    createAula: (aula) => ({
        type: Types.ADD,
        payload: {
            aula
        }
    }),

    updateAula: (aula) => ({
        type: Types.UPDATE,
        payload: {
            aula
        }
    }),

    deleteAula: (aulaId) => ({
        type: Types.REMOVE,
        payload: {
            aulaId
        }
    })
}