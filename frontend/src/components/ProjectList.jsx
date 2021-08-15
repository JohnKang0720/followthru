import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function ProjectList(props) {
    const [taskName, startDate, endDate, priority, category, project, setProject, id, setId, branchName, collaborators, setCollaborators] = props.taskInfo
    const [status, setStatus] = useState('In progress')
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)
    const [msg, setMsg] = useState('')

    //create completed state
    useEffect(() => {
        let num = project.length
        setCounter2(num)
    }, [project])

    const handleSubmit = () => {
        setProject(project.filter(name => name.id !== id))
        setStatus('Completed')
        setCounter(counter => counter + 1)

    }

    const handleReminder = () => {
        let data = {
            user: 'kangjohn00000@gmail.com'
        }

        axios.post('/email', data)
        .then(res => {
            setMsg('Succesfully Sent!')
        }).catch((err) => {
            setMsg('Failed to send.')
        })

    }

    return (
        <div className="task-outer">
            <div className="project-card">
                <div className="todos-header">
                    <h1> Tasks </h1>
                    <p> Completed Tasks: {counter} </p>
                    <p> Incompleted Tasks: {counter2} </p>
                </div>
                {project.map(({ name, start, end, taskPriority, taskCategory, id }) => {
                    return (
                        <>
                            <div className="projects">
                                <h1> {name} </h1>
                                <h3> Assigned: <strong> {start} </strong> </h3>
                                <h3> Due: <strong> {end} </strong> </h3>
                                <div className="task-priority"> {taskPriority} </div>
                                <div className="task-category"> {taskCategory} </div>
                                <p style={{color: 'green'}}> {status} </p>
                                <div className="task-btns">
                                    <button onClick={() => setProject(project.filter(name => name.id !== id))}> Delete Task </button>
                                    <button onClick={handleReminder}> Set Deadline Reminder </button>
                                    <p> {msg} </p>
                                    <button onClick={handleSubmit}> Completed </button>
                                </div>

                            </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}
