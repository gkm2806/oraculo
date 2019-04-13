export const Types = {
    UPDATE: "search/UPDATE"
}

const initalState = {searched:""}

export default function search(state = initalState, action){
    switch(action.type){
        case  Types.UPDATE:
            return {...state, searched: action.payload}
        default:
            return state
    }
}

export const Creators = {
    updateSearch: (searchItem) => ({
        type: Types.UPDATE,
        payload: searchItem
    })
}