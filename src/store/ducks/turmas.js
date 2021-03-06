//@ts-check

export const Types = {
    ADD: "turmas/ADD",
    UPDATE: "turmas/UPDATE",
    REMOVE: "turmas/REMOVE",
    BEGIN: 'turmas/FETCH_BEGIN',
    SUCCESS: 'turmas/FETCH_SUCCESS',
    FAILURE: 'turmas/FETCH_FAILURE'
};

const initialState = {
    turmas: [],
    loading: false,
    error: null
};


export default function turmas(state = initialState, action) {
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
                turmas: action.payload
            }
        case Types.FAILURE:
            return {
                ...state,
                error: action.payload.error
            }
        case Types.ADD:
            return {
                ...state,
                turmas: [...state.turmas, Object.assign({}, { "nome": action.payload.turma })],
            }
        case Types.UPDATE:
            return {
                ...state,
                turmas: [...state.turmas.filter(turma => turma.id !== action.payload.turma.id), Object.assign({}, action.payload.turma)]
            }
        case Types.REMOVE:
            return {
                ...state,
                turmas: [...state.turmas.filter(turma => turma.id !== action.payload.turmaId)]
            }
        default: return state
    }
}

export const Creators = {
    fetchBeginTurma: () => ({
        type: Types.BEGIN
    }),

    fetchSuccessTurma: (aulas) => ({
        type: Types.SUCCESS,
        payload: {
            aulas
        }
    }),

    fetchFailureTurma: (error) => ({
        type: Types.FAILURE,
        payload: {
            error
        }
    }),

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