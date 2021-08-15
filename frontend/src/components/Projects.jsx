import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Branches from './Branches'
import BranchList from './BranchList'
import Popups from './Popups'
import ProjectList from './ProjectList'
export default function Projects(props) {
    // Tasks
    const [open, setOpen] = useState(false)
    const [taskName, setTask] = useState('Project Name')
    const [startDate, setStart] = useState('MM-DD-YYYY')
    const [endDate, setEnd] = useState('MM-DD-YYYY')
    const [priority, setPriority] = useState('Low, Medium, High')
    const [category, setCategory] = useState('Coding, school project...')
    const [collaborators, setCollaborators] = useState('Emails of collaborators')
    const [branch, setBranch] = useState(false)
    const [id, setId] = useState(0)
    const [hover, setHover] = useState(false)
    // Branch
    const [branchName, setBranchName] = useState('')
    const [branchTag, setBranchTag] = useState('')
    
    const [project, setProject] = useState([
        {
            name: taskName,
            start: startDate,
            end: endDate,
            taskPriority: priority,
            taskCategory: category,
            id: id
        }
    ])

    const [setRedirect] = props.link

    const [branches, setBranches] = useState([
        {
            name:  branchName,
            tag: branchTag
        }
    ])

    const handleOpen = () => {
        setOpen(!open)
        setTask('')
        setStart('')
        setEnd('')
        setPriority('')
        setCategory('')
        setCollaborators('')
    }

    const handleBranch = () => {
        setBranch(!branch)
    }
    return (
        <>
            <div className="project-navbar">
                <div className="project-nav-flex-right">
                    <input type="text" placeholder="Search for a project or branch" className="project-input" />
                    <Link className="project-nav-links" onClick={handleOpen}>Add Projects</Link>
                    <Link className="project-nav-links" onClick={handleBranch}>Add Branches</Link>
                    <Link className="project-nav-links" onClick={() => setHover(!hover)}>View Branches</Link>
                </div>
                {open || branch ? <Popups state={[open, setOpen, branch, setBranch, startDate, setStart, endDate, setEnd, priority, setPriority, category, setCategory, taskName, setTask, project, setProject, id, setId, branches, setBranches, branchName, setBranchName, branchTag, setBranchTag, setRedirect, collaborators, setCollaborators]} /> : null} 
            </div>
            <div className="branch-list"> {hover && <BranchList content={[branches, setRedirect]}/>}</div>
            <Branches taskInfo={[taskName, startDate, endDate, priority, category, project, setProject, id, setId, branchName, collaborators, setCollaborators]}/>
        </>
    )
}


// Completion counter
//email sender
//search bar
//goal help
//display counter on branches