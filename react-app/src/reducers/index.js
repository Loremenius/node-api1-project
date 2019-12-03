import { FETCH_SMURFS_FAILED, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_LOADING, 
         POST_SMURFS_LOADING, POST_SMURFS_SUCCESS, POST_SMURFS_FAILED,
         DELETE_SMURFS_FAILED, DELETE_SMURFS_LOADING, DELETE_SMURFS_SUCCESS} from "../actions"
export const reducer = (state = initialState, action) =>{
    switch(action.type){
        case FETCH_SMURFS_FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FETCH_SMURFS_LOADING:
            return{
                ...state,
                isLoading:true,
                error: null
            }
        case FETCH_SMURFS_SUCCESS:
            return {
                ...state,
                smurfList: action.payload,
                isLoading:false,
                error:null
            }
        case POST_SMURFS_FAILED:
            return{
                ...state,
                error: action.payload
            }
        case POST_SMURFS_LOADING:
            return {
                ...state,
                error:null
            }
        case POST_SMURFS_SUCCESS:
            return {
                ...state,
                smurfList: action.payload,
                error: null
            }
        case DELETE_SMURFS_FAILED:
            return {
                ...state,
                error: action.payload
            }
        case DELETE_SMURFS_LOADING:
            return {
                ...state,
                error: null
            }
        case DELETE_SMURFS_SUCCESS:
            return{
                ...state,
                smurfList:action.payload,
                error:null
            }
        default:
            return state;
    }
}

const initialState = {
    smurfList: [],
    isLoading: false,
    error: null
}