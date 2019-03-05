//@ts-check

export const Types = {
    ADD: "sala/ADD",
    UPDATE: "sala/UPDATE",
    REMOVE: "sala/REMOVE"
};

const initialState = [
    {
        id: "cjrr5xtfi00003a5qu7lvn55d",
        nome: "Sala1",
        aulas:[
            ["LP1","ProjInt3"],
            ["LP1","ProjInt3"],
            ["LP1","ProjInt3"],
            ["LP1","ProjInt3"],
            ["LP1","ProjInt3"],
            ["LP1","ProjInt3"],
            ["LP1","ProjInt3"]
        ]
    },
    {
        id: "cjrr5xu3k00013a5qymu6gn3k",
        nome: "sala2",
        aulas:[
            ["matematica","quimica"],
            ["matematica","quimica"],
            ["matematica","quimica"],
            ["matematica","quimica"],
            ["matematica","quimica"],
            ["matematica","quimica"],
            ["matematica","quimica"]
        ]
        
    }
];


export default function salas(state = initialState, action) {
    switch (action.type) {
        case Types.ADD:
            return [...state, Object.assign({}, action.payload.sala)]
        case Types.UPDATE:
            return [...state.filter(sala => sala.id !== action.payload.sala.id), Object.assign({}, action.payload.sala)]
        case Types.REMOVE:
            return [...state.filter(sala => sala.id !== action.payload.materiaId)]
        default: return state
    }
}

export const Creators = {

    createMateria: (sala) => ({
        type: Types.ADD,
        payload: {
            sala
        }
    }),

    updateMateria: (sala) => ({
        type: Types.UPDATE,
        payload: {
            sala
        }
    }),

    deleteMateria: (salaId) => ({
        type: Types.REMOVE,
        payload: {
            salaId
        }
    })
}