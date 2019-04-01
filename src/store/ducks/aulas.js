import axios from "axios"
export const Types = {
    ADD: "aula/ADD",
    UPDATE: "aula/UPDATE",
    REMOVE: "aula/REMOVE",
    BEGIN: 'FETCH_PRODUCTS_BEGIN',
    SUCCESS: 'FETCH_PRODUCTS_SUCCESS',
    FAILURE: 'FETCH_PRODUCTS_FAILURE'
};

const initialState = {
    error: null,
    loading: null,
    aulas: []
}

export default function aulas(state = initialState, action) {
    switch (action.type) {
        case Types.BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case Types.SUCCESS:
            console.log(action.payload)
            return {
                ...state,
                loading: false,
                aulas: action.payload
            }
        case Types.FAILURE:
            return{
                ...state,
                error: action.payload.error
            }
        case Types.ADD:
            let a = axios.post('http://localhost:4000/api/aulas/', action.payload.aula)
            return {
                ...state,
                aulas: [...state.aulas, Object.assign({}, action.payload.aula)]
            }
        case Types.UPDATE:
            return {
                ...state,
                aulas: [...state.aulas.filter(aula => aula.id !== action.payload.aula.id), Object.assign({}, action.payload.aula)]
            }
        case Types.REMOVE:
            return {
                ...state,
                aulas: [...state.aulas.filter(aula => aula.id !== action.payload.AulaId)]
            }
        default: return state
    }
}

export const Creators = {
    fetchBeginAula: () => ({
        type: Types.BEGIN
    }),

    fetchSuccessAula: (aulas) => ({
        type: Types.SUCCESS,
        payload: {
            aulas
        }
    }),

    fetchFailureAula: (error) => ({
        type: Types.FAILURE,
        payload: {
            error
        }
    }),

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