import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchSignUp from '../../redux/actions/signup/signupActions';
import '../../css/signup.css';

export class SignUp extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    onSubmit = (event) => {
        event.preventDefault()
        
        let slug = this.props.match.params.slug;
        this.props.fetchSignUp(this.state.email, this.state.username, this.state.password)
        
        
    };

    onEmailChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        
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
            <p>Welcome to your store!</p>
            <div className="">
                <form className="email-form" onSubmit={this.onSubmit}>
                    <input onChange={this.onEmailChange} type="email" name='email' placeholder="Email . . ." id="new-email" /><br /><br />
                    <input onChange={this.onUsernameChange} type="text" name='username' placeholder="Username . . ." id="new-username" /><br /><br />
                    <input onChange={this.onPasswordChange} type="password" name='password' placeholder="Password . . ." id="new-password" /><br /><br />
                    <input type="submit" value="Register" id="submit-btn"/><br /><br />
                </form>
            </div>
        </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return state.signupReducer
}

export default connect(mapStateToProps, { fetchSignUp })(SignUp);
