import React from 'react'
import ProjectSummary from './ProjectSummary'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {

    return (
        <div className="project-list section">
            { projects && projects.map(project => {
                return (
                    <Link to={`/project/${project.id}`} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                )
            }
            )}
        </div>
    )

}


const mapStateToProps = state => {
    // console.log(state);
    return {
        projects: state.firestore.ordered.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }]),
)(ProjectList)