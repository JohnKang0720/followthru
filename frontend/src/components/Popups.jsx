import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Branches from './Branches'
export default function Popups(props) {
    const [open, setOpen, branch, setBranch, startDate, setStart, endDate, setEnd, priority, setPriority, category, setCategory, taskName, setTask, project, setProject, id, setId, branches, setBranches, branchName, setBranchName, branchTag, setBranchTag,  setRedirect, collaborators, setCollaborators] = props.state

    function addProject() {
        setId(id => id + 1)
        if (taskName !== '' && startDate !== '' && endDate !== '' && priority !== '' && category !== '') {
            
            setProject([...project, {
                name: taskName,
                start: startDate,
                end: endDate,
                taskPriority: priority,
                taskCategory: category,
                id: id
            }])
            setTask('')
            setStart('')
            setEnd('')
            setPriority('')
            setCategory('')
            setCollaborators('')
        }
    }

    function addBranch(){
        if(branchName !== ''){
            setBranches([...branches, {
                name: branchName,
                tag: branchTag,
            }])

            
        }
    }


    return ReactDOM.createPortal(
        <>
            {open ? <div className="modal-container">
                <div className="modal-frame">
                    <button className="close-btn" onClick={() => setOpen(!open)}> X </button>
                    <div className="modal-info">
                        <div className="modal-text">
                            <div className="modal-header">
                                <h1> New Task </h1>
                            </div>
                            <div className="modal-inputs">
                                <input type="text" placeholder="Task name" onChange={e => setTask(e.target.value)} value={taskName} />
                                <div className="date-inputs"> <input type="text" placeholder="Start Date" onChange={e => setStart(e.target.value)} value={startDate} /> <input type="text" placeholder="Due Date" onChange={e => setEnd(e.target.value)} value={endDate} /> </div>
                                <input type="text" placeholder="Task category" onChange={e => setCategory(e.target.value)} value={category} />
                                <input type="text" placeholder="Your email" onChange={e => setCollaborators(e.target.value)} value={collaborators}/>
                                <select onChange={e => setPriority(e.target.value)} value={priority}>
                                    <option value="" select hidden> --Priority-- </option>
                                    <option value="low"> Low </option>
                                    <option value="medium"> Medium </option>
                                    <option value="high"> High </option>
                                </select>
                                <div className="popup-btn">
                                    <button className="log-in-btn" onClick={addProject} > Create Task </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : branch ? <div className="modal-container">
                <div className="modal-frame">
                    <button className="close-btn" onClick={() => setBranch(!branch)}> X </button>
                    <div className="modal-info">
                        <div className="modal-text">
                            <div className="modal-header">
                                <h1> New Branch </h1>
                            </div>
                            <div className="modal-inputs">
                                <input type="text" placeholder="Branch name" onChange={e => setBranchName(e.target.value)} value={branchName}/>
                                <input type="text" placeholder="Branch Tags" onChange={e => setBranchTag(e.target.value)} value={branchTag}/>
                                <div className="popup-btn">
                                    <button className="log-in-btn" onClick={addBranch} > Create Branch </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : null}
        </>,
        document.getElementById('react-modal')
    )
}