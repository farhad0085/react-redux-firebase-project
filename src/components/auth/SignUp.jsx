import React, { Component } from 'react'
import { signUp } from "../../store/actions/authActions";
import { connect } from 'react-redux'
import ErrorMessage from '../others/ErrorMessage';


class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    submitHandler = event => {
        event.preventDefault()

        this.props.signUp(this.state);

    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        
        const {authError} = this.props

        return (
            <div className="container">
                <form onSubmit={this.submitHandler} className="white">
                    <h5 className="grey-text text-darken-3">Create an account</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input onChange={this.changeHandler} type="email" name="email" id="email" value={this.state.email} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input onChange={this.changeHandler} type="password" name="password" id="password" value={this.state.password} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="firstName">First Name</label>
                        <input onChange={this.changeHandler} type="text" name="firstName" id="firstName" value={this.state.firstName} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={this.changeHandler} type="text" name="lastName" id="lastName" value={this.state.lastName} />
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Signup</button>
                        {authError && <ErrorMessage message={authError}/>}
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
   return {
       authError: state.auth.authError
   }
}

const mapDispatchToProps = dispatch => {
   return {
       signUp: (newUser) => dispatch(signUp(newUser))
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)