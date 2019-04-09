//@ts-check

export const Types = {
    ADD: "professores/ADD",
    UPDATE: "professores/UPDATE",
    REMOVE: "professores/REMOVE",
    BEGIN: 'FETCH_PROFS_BEGIN',
    SUCCESS: 'FETCH_PROFS_SUCCESS',
    FAILURE: 'FETCH_PROFS_FAILURE'
};

const initialState = {
    professores: [
        {
            id: "cjrr5xtfi00003a5qu7lvn55d",
            nome: "Jimenez"
        },
        {
            id: "cjrr5xu3k00013a5qymu6gn3k",
            nome: "Rogers"
        }
    ],
    loading: false,
    error: null
};


export default function professores(state = initialState, action) {
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
            professores: action.payload
        }
    case Types.FAILURE:
        return {
            ...state,
            error: action.payload.error
        }
        case Types.ADD:
            return {
                ...state,
                professores:[...state.professores, Object.assign({}, { "nome": action.payload.professor })],
            }
        case Types.UPDATE:
            return {
                ...state,
                professores: [...state.filter(professor => professor.id !== action.payload.professor.id), Object.assign({}, action.payload.professor)]
            }
        case Types.REMOVE:
            return {
                ...state,
                professores: [...state.filter(professor => professor.id !== action.payload.professorId)]
            }
        default: return state
    }
}

export const Creators = {
    fetchBeginProf: () => ({
        type: Types.BEGIN
    }),

    fetchSuccessProf: (aulas) => ({
        type: Types.SUCCESS,
        payload: {
            aulas
        }
    }),

    fetchFailureProf: (error) => ({
        type: Types.FAILURE,
        payload: {
            error
        }
    }),

    createProfessor: (professor) => ({
        type: Types.ADD,
        payload: {
            professor
        }
    }),

    updateProfessor: (professor) => ({
        type: Types.UPDATE,
        payload: {
            professor
        }
    }),

    deleteProfessor: (professorId) => ({
        type: Types.REMOVE,
        payload: {
            professorId
        }
    })
}