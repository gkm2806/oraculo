//@ts-check

export const Types = {
    ADD: "salas/ADD",
    UPDATE: "salas/UPDATE",
    REMOVE: "salas/REMOVE",
    BEGIN: 'salas/FETCH_BEGIN',
    SUCCESS: 'salas/FETCH_SUCCESS',
    FAILURE: 'salas/FETCH_FAILURE'
};

const initialState = {
    locais: [
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
    ],
    loading: false,
    error: null
}
    ;


export default function salas(state = initialState, action) {
    switch (action.type) {
        case Types.BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case Types.SUCCESS:
            return {
                ...state,
                loading: false,
                locais: action.payload
            }
        case Types.FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        case Types.ADD:
            return {
                ...state,
                locais: [...state.Locaises, Object.assign({}, { "nome": action.payload.Locais })],
            }
        case Types.UPDATE:
            return {
                ...state,
                locais: [...state.filter(Locais => Locais.id !== action.payload.Locais.id), Object.assign({}, action.payload.Locais)]
            }
        case Types.REMOVE:
            return {
                ...state,
                locais: [...state.filter(Locais => Locais.id !== action.payload.LocaisId)]
            }
        default: return state
    }
}

export const Creators = {
    fetchBeginLocais: () => ({
        type: Types.BEGIN
    }),

    fetchSuccessLocais: (aulas) => ({
        type: Types.SUCCESS,
        payload: {
            aulas
        }
    }),

    fetchFailureLocais: (error) => ({
        type: Types.FAILURE,
        payload: {
            error
        }
    }),

    createLocais: (Locais) => ({
        type: Types.ADD,
        payload: {
            Locais
        }
    }),

    updateLocais: (Locais) => ({
        type: Types.UPDATE,
        payload: {
            Locais
        }
    }),

    deleteLocais: (LocaisId) => ({
        type: Types.REMOVE,
        payload: {
            LocaisId
        }
    })
}