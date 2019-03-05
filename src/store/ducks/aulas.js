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
        materia: "Matematica",
        turma: "2024",
        horario: "13:00",
        dia: 1, //segunda
        continuo: true
    },
    {
        id: "cjrr5xu3k00013a5qymu6gn3k",
        sala: "LabA",
        materia: "LP2",
        turma: "3750",
        horario: "Alo",
        dia: 2 //terça
    }
];


export default function aulas(state = initialState, action) {
    switch (action.type) {
        case Types.ADD:
            return [...state, Object.assign({}, action.payload.aula)]
        case Types.UPDATE:
            return [...state.filter(aula => aula.id !== action.payload.aula.id), Object.assign({}, action.payload.aula)]
        case Types.REMOVE:
            return [...state.filter(aula => aula.id !== action.payload.materiaId)]
        default: return state
    }
}

export const Creators = {

    createMateria: (aula) => ({
        type: Types.ADD,
        payload: {
            aula
        }
    }),

    updateMateria: (aula) => ({
        type: Types.UPDATE,
        payload: {
            aula
        }
    }),

    deleteMateria: (aulaId) => ({
        type: Types.REMOVE,
        payload: {
            aulaId
        }
    })
}