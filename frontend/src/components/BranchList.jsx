import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function BranchList(props) {
    const [branches,  setRedirect] = props.content
    useEffect(() => {
        setRedirect(branches[0].name)
    }, [branches])
    return (
        <div className="branch-outer">
            <div className="branch-navbar">
                <h4> Branches </h4>
                <div className="branch-nav-flex-right">
                    {branches.map(({name, tag}) => {
                        return(
                            <>
                            <Link className="project-nav-links" to={`/${name}`}> {name} <span> {tag} </span> </Link>
                            </>
                        )
                    })} 
                </div>
            </div>
        </div>
    )
}

// add a to="/" on Link to relocate them onto a new branch
