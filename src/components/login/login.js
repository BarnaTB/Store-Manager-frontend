import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchLogin from '../../redux/actions/login/loginActions';
// import '../../css/signup.css';

export class Login extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    onSubmit = (event) => {
        event.preventDefault()
        
        this.props.fetchLogin(this.state.username, this.state.password)

    };

    onUsernameChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    };

    onPasswordChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        
    };

    render() {
        return (
        <div className="">
            <a href="/"><h1>Store Manager</h1></a>
            <p>Welcome to your store Please log in!</p>
            <div className="">
                <form className="email-form" onSubmit={this.onSubmit}>
                    <input onChange={this.onUsernameChange} type="text" name='username' placeholder="Username . . ." id="username" required/><br /><br />
                    <input onChange={this.onPasswordChange} type="password" name='password' placeholder="Password . . ." id="password" required/><br /><br />
                    <input type="submit" value="Log in" id="submit-btn"/><br /><br />
                </form>
                <p>Don't have an account? <a href="/">Register</a></p>
            </div>
        </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return state.loginReducer
}

export default connect(mapStateToProps, { fetchLogin })(Login);