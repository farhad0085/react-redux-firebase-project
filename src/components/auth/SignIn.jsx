import React, { Component } from 'react'


class SignIn extends Component {

    state = {
        email: '',
        password: ''
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
                    <h5 className="grey-text text-darken-3">Sign in</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.changeHandler} type="email" name="email" id="email" value={this.state.email} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.changeHandler} type="password" name="password" id="password" value={this.state.password} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}


export default SignIn