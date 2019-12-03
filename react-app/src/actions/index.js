import axios from "axios";

export const FETCH_SMURFS_LOADING = 'FETCH_SMURFS_LOADING';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILED = 'FETCH_SMURFS_FAILED';

export const POST_SMURFS_FAILED = 'POST_SMURFS_FAILED';
export const POST_SMURFS_LOADING = 'POST_SMURFS_LOADING';
export const POST_SMURFS_SUCCESS = 'POST_SMURFS_SUCCESS';

export const DELETE_SMURFS_FAILED = 'DELETE_SMURFS_FAILED';
export const DELETE_SMURFS_LOADING = 'DELETE_SMURFS_LOADING';
export const DELETE_SMURFS_SUCCESS = 'DELETE_SMURFS_SUCCESS';


export const smurfsLoading = () => ({ type: FETCH_SMURFS_LOADING });
export const smurfsLoadSuccess = data => ({ type: FETCH_SMURFS_SUCCESS, payload: data});
export const smurfsLoadFailure = error =>({ type: FETCH_SMURFS_FAILED, payload: error});

export const smurfsPostFailure = error =>({ type: POST_SMURFS_FAILED, payload:error });
export const smurfsPostLoading = () =>({ type: POST_SMURFS_LOADING });
export const smurfsPostSuccess = data => ({ type: POST_SMURFS_SUCCESS, payload: data});

export const smurfsDeleteFailure = error =>({ type: DELETE_SMURFS_FAILED, payload:error });
export const smurfsDeleteLoading = () =>({ type: DELETE_SMURFS_LOADING });
export const smurfsDeleteSuccess = data => ({ type: DELETE_SMURFS_SUCCESS, payload: data});

export function fetchSmurfs(){
    return function(dispatch){
        dispatch(smurfsLoading());
        return axios.get('http://localhost:4000/api/users')
            .then((response)=>{
                //console.log(response);
                dispatch(smurfsLoadSuccess(response.data));
            })
            .catch((error)=>{
                dispatch(smurfsLoadFailure(error));
            })
    }
}

export function addSmurf(smurf){
    return function(dispatch){
        dispatch(smurfsPostLoading());
        return axios.post('http://localhost:4000/api/users',smurf)
            .then((response)=>{
                console.log(`posting new smurf ${response.data}`)
                dispatch(smurfsPostSuccess(response.data));
            })
            .catch((error)=>{
                dispatch(smurfsPostFailure(error));
            })
    }
}

export function removeSmurf(id){
    return function(dispatch){
        dispatch(smurfsDeleteLoading());
        return axios.delete(`http://localhost:4000/api/users/${id}`)
            .then((response)=>{
                dispatch(smurfsDeleteSuccess(response.data));
            })
            .catch((error)=>{
                dispatch(smurfsDeleteFailure(error));
            })
    }
}