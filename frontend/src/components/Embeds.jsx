import React, {useEffect} from 'react'
import ProjectList from './ProjectList'
export default function Embeds(props) {
    const [redirect] = props.info
    useEffect(() => {
        console.log(redirect)
    }, [])
    return (
        <div>
            <h1> Branch </h1>
            <div className="task-outer">
            <div className="project-card">
                <div className="todos-header">
                    <h1> Tasks </h1>
                </div>
               
            </div>
        </div>
        </div>
    )
}
