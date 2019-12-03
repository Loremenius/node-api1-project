import React, {useState} from "react";
import { addSmurf } from "../actions"
import { connect } from "react-redux";


const SmurfForm = (props)=>{
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');

    const handleNameChange = event => {
        setName(event.target.value);
      };
    const handleAgeChange = event => {
        setAge(event.target.value);
      };
    const handleHeightChange = event => {
        setHeight(event.target.value);
      };

      const handleSubmit = (e) =>{
        e.preventDefault();
        const newSmurf = {
            name: name,
            age: parseInt(age, 10),
            height: height,
            id: new Date()
        }
        props.addSmurf(newSmurf);
        setName('');
        setAge('');
        setHeight('');
      }

    return(
        <div className="smurfForm">
            <form>
                <label>
                    <p>Name:</p>
                    <input type="text" name="name" value={name} onChange={handleNameChange}/>
                </label>
                <label>
                    <p>Age:</p>
                    <input type="text" name="age" value={age} onChange={handleAgeChange}/>
                </label>
                <label>
                    <p>Height:</p>
                    <input type="text" name="height" value={height} onChange={handleHeightChange}/>
                </label>
                <br></br>
                <button onClick={handleSubmit}>Create new smurf</button>
            </form>
        </div>
    )
}


function mapStateToProps(state){
    return {};
}
export default connect(mapStateToProps,{addSmurf})(SmurfForm);