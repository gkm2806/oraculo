//@ts-check

export const Types = {
    ADD: "materias/ADD",
    UPDATE: "materias/UPDATE",
    REMOVE: "materias/REMOVE",
    BEGIN: 'materias/FETCH_BEGIN',
    SUCCESS: 'materias/FETCH_SUCCESS',
    FAILURE: 'materias/FETCH_FAILURE'
};

const initialState = {
    materias: [],
    loading: false,
    error: null
};


export default function materias(state = initialState, action) {
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
                materias: action.payload
            }
        case Types.FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        case Types.ADD:
            return {
                ...state,
                materias: [...state.materias, ...action.payload.materia]
            }
        case Types.UPDATE:
            return {
                ...state,
                materias: [...state.materias.filter(aula => aula._id !== action.payload.id), Object.assign({}, action.payload)]
            }
        case Types.REMOVE:
            return {
                ...state,
                materias: [...state.materias.filter(aula => aula._id !== action.payload.id)]
            }
        default: return state
    }
}

export const Creators = {
    fetchBeginMateria: () => ({
        type: Types.BEGIN
    }),

    fetchSuccessMateria: (materias) => ({
        type: Types.SUCCESS,
        payload: {
            materias
        }
    }),

    fetchFailureMateria: (error) => ({
        type: Types.FAILURE,
        payload: {
            error
        }
    }),
    createMateria: (materia) => ({
        type: Types.ADD,
        payload: {
            materia
        }
    }),

    updateMateria: (id) => ({
        type: Types.UPDATE,
        payload: {
            id
        }
    }),

    deleteMateria: (id) => ({
        type: Types.REMOVE,
        payload: {
            id
        }
    })
}