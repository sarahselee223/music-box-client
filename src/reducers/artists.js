import { ADD_ARTIST, REMOVE_ARTIST, GET_ARTIST } from '../action/artists'

const initialState = []

function artists(state = initialState, action){
    switch(action.type){
        case ADD_ARTIST:
            return [...state, action.payload]

        case GET_ARTIST:
            return action.payload

        case REMOVE_ARTIST:
            return state.filter(a => a.id !== action.payload)
        
        default:
            return state
    }
}

export default artists