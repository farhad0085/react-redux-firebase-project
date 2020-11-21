import React, { Component } from 'react'
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";


class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    submitHandler = event => {
        event.preventDefault()

        // console.log(this.state);
        this.props.createProject(this.state)
        this.props.history.push("/")
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Create new project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input onChange={this.changeHandler} type="text" name="title" id="title" value={this.state.title} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea
                            value={this.state.content}
                            onChange={this.changeHandler}
                            name="content"
                            id="content"
                            rows="30"
                            className="materialize-textarea"
                        />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}


export default connect(null, mapDispatchToProps)(CreateProject)