//@ts-check

export const Types = {
    ADD: "professores/ADD",
    UPDATE: "professores/UPDATE",
    REMOVE: "professores/REMOVE"
};

const initialState = [
    {
        id: "cjrr5xtfi00003a5qu7lvn55d",
        nome: "Jimenez"
    },
    {
        id: "cjrr5xu3k00013a5qymu6gn3k",
        nome: "Rogers"
    }
];


export default function professores(state = initialState, action) {
    switch (action.type) {
        case Types.ADD:
            return [...state, Object.assign({}, action.payload.professor)]
        case Types.UPDATE:
            return [...state.filter(professor => professor.id !== action.payload.professor.id), Object.assign({}, action.payload.professor)]
        case Types.REMOVE:
            return [...state.filter(professor => professor.id !== action.payload.materiaId)]
        default: return state
    }
}

export const Creators = {

    createMateria: (professor) => ({
        type: Types.ADD,
        payload: {
            professor
        }
    }),

    updateMateria: (professor) => ({
        type: Types.UPDATE,
        payload: {
            professor
        }
    }),

    deleteMateria: (professorId) => ({
        type: Types.REMOVE,
        payload: {
            professorId
        }
    })
}