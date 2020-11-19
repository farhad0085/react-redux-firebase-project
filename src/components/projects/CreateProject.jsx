import React, { Component } from 'react'


class CreateProject extends Component {

    state = {
        title: '',
        content: ''
    }

    submitHandler = event => {
        event.preventDefault()

        console.log(this.state);

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
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default CreateProject