//@ts-check

export const Types = {
    LOGIN: "user/LOGIN",
    LOGOUT: "user/LOGOUT"
};

const initialState = {
    userName:"",
    permission: 0
};

export default function turmas(state = initialState, action) {
    switch (action.type) {
        case Types.LOGIN:
            return {...action.payload.user}
        case Types.LOGOUT:
            return {
                initialState
            }
        default: return state
    }
}

export const Creators = {
    logoutUser: () => ({
        type: Types.LOGOUT,
        payload: {}
    }),

    loginUser: (user) => ({
        type: Types.LOGIN,
        payload: {
            user
        }
    }),
}