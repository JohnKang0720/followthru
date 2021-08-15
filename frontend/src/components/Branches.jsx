import React from 'react'
import ProjectList from './ProjectList'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Branches(props) {
    const [taskName, startDate, endDate, priority, category, project, setProject, id, setId, branchName, collaborators, setCollaborators] = props.taskInfo
    return (
        <>
            <div className="project-header">
                <h1> Project </h1>
            </div>
            <div className="project-lists">
                <ProjectList taskInfo={[taskName, startDate, endDate, priority, category, project, setProject, id, setId, branchName, collaborators, setCollaborators]} />
            </div>
        </>
    )
}
