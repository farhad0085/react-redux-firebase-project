import React from 'react'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import Loading from '../others/Loading'
import moment from 'moment'


const ProjectDetails = (props) => {

    const { project } = props

    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{project.title}</span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>{moment(project.createdAt.toDate()).calendar()}</div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title"><Loading /></span>
                    </div>
                    <div className="card-action gret lighten-4 grey-text">
                        <div><Loading /></div>
                    </div>
                </div>
            </div>
        )
    }

}


const mapStateToProps = (state, prevProps) => {

    const id = prevProps.match.params.id
    const projects = state.firestore.data.projects
    const project = projects ? projects[id] : null

    return {
        project: project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }]),
)(ProjectDetails)