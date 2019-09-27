import React from 'react';
import { Link } from 'react-router-dom'
import { myProjects } from './Projects';


const projectDetails = (props) => {

    const getProject = (id) => {
        const theProject = oneProject => {
            return oneProject.id === id;
        }
        return myProjects.find(theProject)
    }
    const { params } = props.match
    console.log(params)
    const foundProject = getProject(params.id)
    console.log(foundProject)

    return (
        <div>
            <h2> {foundProject.name} </h2>
            <h4>Used Technologies: {foundProject.technologies}</h4>
            <p>{foundProject.description}</p>
            <Link to="/projects"> back</Link>
        </div>
    );
}

export default projectDetails;

