import { DELETE_PROJECT, GET_PROJECT, GET_PROJECTS} from "../actions/types";


const initialState = {
    projects: [], 
    project: {},
    loading: true
   
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PROJECTS:
            return{
                ...state,
                projects: action.payload,
                loading: false
            };

        case GET_PROJECT:
            return{
                ...state,
                project: action.payload,
                loading: false
            }

        case DELETE_PROJECT:
            return{
                ...state,
                projects: state.projects.filter(project => project.id !== action.payload)
            }
        
            default:
                return state;
    }
}