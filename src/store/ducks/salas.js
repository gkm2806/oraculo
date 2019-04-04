import Axios from "axios";

//@ts-check

export const Types = {
    ADD: "sala/ADD",
    UPDATE: "sala/UPDATE",
    REMOVE: "sala/REMOVE"
};

const initialState = [
    {
        id: "cjrr5xtfi00003a5qu7lvn55d",
        nome: "Sala 1",
    },
    {
        id: "cjrr5xu3k00013a5qymu6gn3k",
        nome: "Sala 2",
    },
    {
        id: "cjrr5xu3k00613a5qymu6gn3k",
        nome: "Lab A",
    },
    {
        id: "cjrr5xu3k09013a5qymu6gn3k",
        nome: "Lab Quimica",
    }
];


export default function salas(state = initialState, action) {
    switch (action.type) {
        case Types.ADD:
            return [...state, Object.assign({}, {"nome" : action.payload.sala})]
        case Types.UPDATE:
            return [...state.filter(sala => sala.id !== action.payload.sala.id), Object.assign({}, action.payload.sala)]
        case Types.REMOVE:
            return [...state.filter(sala => sala.id !== action.payload.salaId)]
        default: return state
    }
}

export const Creators = {

    createSala: (sala) => ({
        type: Types.ADD,
        payload: {
            sala
        }
    }),

    updateSala: (sala) => ({
        type: Types.UPDATE,
        payload: {
            sala
        }
    }),

    deleteSala: (salaId) => ({
        type: Types.REMOVE,
        payload: {
            salaId
        }
    })
}