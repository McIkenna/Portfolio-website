import { DELETE_WORK, GET_WORK, GET_WORKS } from "../actions/types";

const initialState = {
    works: [],
    work: {},
    loading: true
}

export default function(state=initialState, action){
    switch(action.type){

        case GET_WORKS:
            return{
                ...state,
                works: action.payload,
                loading: false
            }

        case GET_WORK:
            return{
                ...state,
                work: action.payload,
                loading: false
            }

        case DELETE_WORK:
            return {
                ...state,
                works:state.works.filter(
                    work => work.id !== action.payload
                )
            }
        default:
            return state;
    }
}