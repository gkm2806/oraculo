//@ts-check

export const Types = {
    ADD: "materia/ADD",
    UPDATE: "materia/UPDATE",
    REMOVE: "materia/REMOVE"
};

const initialState = [
    {
        id: "cjrr5xtfi00003a5qu7lvn55d",
        nome: "historia"
    },
    {
        id: "cjrr5xu3k00013a5qymu6gn3k",
        nome: "Matematica"
    }
];


export default function materias(state = initialState, action) {
    switch (action.type) {
        case Types.ADD:
            return [...state, Object.assign({}, action.payload.materia)]
        case Types.UPDATE:
            return [...state.filter(materia => materia.id !== action.payload.materia.id), Object.assign({}, action.payload.materia)]
        case Types.REMOVE:
            return [...state.filter(materia => materia.id !== action.payload.materiaId)]
        default: return state
    }
}

export const Creators = {

    createMateria: (materia) => ({
        type: Types.ADD,
        payload: {
            materia
        }
    }),

    updateMateria: (materia) => ({
        type: Types.UPDATE,
        payload: {
            materia
        }
    }),

    deleteMateria: (materiaId) => ({
        type: Types.REMOVE,
        payload: {
            materiaId
        }
    })
}