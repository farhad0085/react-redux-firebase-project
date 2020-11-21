import React from 'react'
import ProjectSummary from './ProjectSummary'
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Link } from 'react-router-dom';
import Loading from '../others/Loading'


const ProjectList = ({ projects, loading }) => {

    return (
        <div className="project-list section">
            {loading && (
                <div>
                    <br/>
                    <br/>
                    <br/>
                    <Loading color="#FF0000" />
                </div>
            ) }
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
        projects: state.firestore.ordered.projects,
        loading: state.firestore.status.requesting.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }]),
)(ProjectList)