//@ts-check

export const Types = {
    ADD: "aula/ADD",
    UPDATE: "aula/UPDATE",
    REMOVE: "aula/REMOVE"
};

const initialState = [
    {
        id: "cjrr5xtfi00003a5qu7lvn55d",
        sala: "Sala2",
        Aula: "Matematica",
        turma: "2024",
        horario: "13:00",
        dia: 1, //segunda
        continuo: true
    },
    {
        id: "cjrr5xu3k00013a5qymu6gn3k",
        sala: "LabA",
        Aula: "LP2",
        turma: "3750",
        horario: "Alo",
        dia: 2 //terça,
        
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