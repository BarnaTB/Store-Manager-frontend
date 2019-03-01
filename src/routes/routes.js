import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from '../components/Signup/signup';

const Routes = () => (
    <div>
        <BrowserRouter>
            <Route exact path='/signup' component={SignUp}/>
        </BrowserRouter>
    </div>
)

export default Routes;
