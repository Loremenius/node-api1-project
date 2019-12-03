import React from "react";
import {useDispatch} from "react-redux";
import {removeSmurf} from "../actions";

const SmurfCard = ({name,bio, id}) => {
    const dispatch = useDispatch();
    return(
        <div className="smurf">
            <h1>{name}</h1>
            <p>{bio}</p>
            <button onClick={()=>dispatch(removeSmurf(id))}>Remove</button>
        </div>
    )
}

export default SmurfCard;