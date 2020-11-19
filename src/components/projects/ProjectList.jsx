import React from 'react'
import ProjectSummary from './ProjectSummary'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectList = ({projects}) => {

    return (
        <div className="project-list section">
            { projects && projects.map(project => <ProjectSummary project={project} key={project.id} />)}
        </div>
    )

}


const mapStateToProps = state => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'projects'}]),
)(ProjectList)