import React from 'react';
import { connect } from "react-redux"

export const TaskList = ({ tasks, name }) => {
    return (

        <div>
            <h3>{name}</h3>
            {tasks.map(task => (<div> {task.name} </div>))}
        </div>
    );
}

const mapStateToProps = (state, ownProps) => {
    let groupId = ownProps.id;
    console.log(ownProps)
    return {
        // HERE OWN PROPS ARE WHAT IS PASSED FROM DASHBOARD: TO DO, DOING, DONE
        name: ownProps.name,  // THIS IS TODO, DOING DONE
        id: groupId, // THIS IS G1, G2, OR G3
        // TASK.GROUP  WILL EITHER MATCH G1,G2,OR G3
        // TASKS WILL BE FILTERED THE FOLLOWING WAY IF TASK.GROUP == THE PROPS.ID THE IT IS TASK
        tasks: state.tasks.filter(task => task.group === groupId)
    }
}

export const ConnectedTasklist = connect(mapStateToProps)(TaskList);
