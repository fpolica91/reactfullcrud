import React from 'react';
import { connect } from "react-redux";
import { requestTaskCreation } from '../store/mutation';


export const TaskList = ({ tasks, name, createNewTask, id }) => {
    return (

        <div>
            <h3>{name}</h3>
            {tasks.map(task => (<div key={task.id} > {task.name} </div>))}
            <button
                onClick={() => createNewTask(id)} >Create New Task  </button>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    let groupID = ownProps.id;
    return {
        // HERE OWN PROPS ARE WHAT IS PASSED FROM DASHBOARD: TO DO, DOING, DONE
        name: ownProps.name,  // THIS IS TODO, DOING DONE
        id: groupID, // THIS IS G1, G2, OR G3
        // TASK.GROUP  WILL EITHER MATCH G1,G2,OR G3
        // TASKS WILL BE FILTERED THE FOLLOWING WAY IF TASK.GROUP == THE PROPS.ID THE IT IS TASK
        tasks: state.tasks.filter(task => task.group === groupID)
    }
}


// THESE ALLOWS TASKLIST TO HAVE ACCESSS TO CREATENEWTASKS, AND CREATENEWTASK IS ALSO TO CONNECTED TO THE STORE
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createNewTask(id) {
            console.log("blah blah", id)
            dispatch(requestTaskCreation(id))
        }
    }
}

// MAPDISPATCHTPROPS IS PASSED AS A SECOND ARGUMENT OF CONNECT
export const ConnectedTasklist = connect(mapStateToProps, mapDispatchToProps)(TaskList);

