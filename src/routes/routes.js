import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from '../components/Signup/signup'

const Routes = () => (
    <BrowserRouter>
        <Route to="/signup" component={SignUp}/>
    </BrowserRouter>
);

export default Routes
