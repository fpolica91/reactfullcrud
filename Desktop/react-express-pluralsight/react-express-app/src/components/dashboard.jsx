import React, { Component } from 'react';
import { connect } from "react-redux"
import { ConnectedTasklist } from './tasklist';


// {connect } connects the {store} props with the component

// 1. group.name renders three things, To Do, Doing and Done -> tasklist will include the activities that need to be done or are being done, or have been done


export const Dashboard = ({ groups }) => (
    <div>
        <h2>Dashboard</h2>
        {groups.map(group => (
            // ------ CONNECTED LIST IS A COMPONENT AND IT RECEIVES GROUP ID AND GROUP NAME AS PROPS
            // --- THOSE PROPS ARE AS FOLLOWS:
            //                     Object
            // id: "G1"
            // name: "To Do",

            // id: "G2"
            // name: " Doing",
            // id: "G3"
            // name: " Done"
            <ConnectedTasklist
                key={group.id}
                id={group.id}
                name={group.name}
            />
        ))}
    </div>
)

function mapStateToProps(state) {
    return {
        groups: state.groups
    }
}


export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
