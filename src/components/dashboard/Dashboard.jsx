import React, { Component } from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import { firestoreConnect } from "react-redux-firebase";
import { connect } from 'react-redux'
import { compose } from "redux";
import Loading from '../others/Loading'

class Dashboard extends Component {

    state = {}

    render() {
        console.log(this.props);
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        {this.props.loading && (
                            <div className="m5">
                                <br/>
                                <br/>
                                <br/>
                            <Loading color="#FF0000" />
                            </div>
                        ) }
                        <ProjectList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.firestore.status.requesting.projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'projects' }]),
)(Dashboard)