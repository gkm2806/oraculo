//@ts-check

export const Types = {
    ADD: "turma/ADD",
    UPDATE: "turma/UPDATE",
    REMOVE: "turma/REMOVE"
};

const initialState = [
    {
        id: "cjrr5xtfi00003a5qu7lvn55d",
        nome: "2024",
        alunos: ["Gabriel Kukiel", "Gustavo Ferri"],
    }
];


export default function turmas(state = initialState, action) {
    switch (action.type) {
        case Types.ADD:
            return [...state, Object.assign({}, action.payload.turma)]
        case Types.UPDATE:
            return [...state.filter(turma => turma.id !== action.payload.turma.id), Object.assign({}, action.payload.turma)]
        case Types.REMOVE:
            return [...state.filter(turma => turma.id !== action.payload.turmaId)]
        default: return state
    }
}

export const Creators = {

    createTurma: (turma) => ({
        type: Types.ADD,
        payload: {
            turma
        }
    }),

    updateTurma: (turma) => ({
        type: Types.UPDATE,
        payload: {
            turma
        }
    }),

    deleteTurma: (turmaId) => ({
        type: Types.REMOVE,
        payload: {
            turmaId
        }
    })
}