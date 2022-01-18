import React from 'react';

const Tasks = (props) => {

    const strike = {
        textDecoration: props.strike
    }
    return (
        <div>

                <div style={strike}>
                    {props.text}
                </div>
                <button onClick={(event) => {props.onDeleteHandler(props.index);}}> Delete </button>
                <input type="checkbox" name="checked" checked={props.checked} 
                onChange={(event) => {props.onCheckedHandler(props.index);}}/>

        </div>
    )
}


export default Tasks;