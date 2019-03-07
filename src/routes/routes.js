import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import SignUp from '../components/Signup/signup';
import Login from '../components/login/login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const Routes = () => (
    <div>
        <BrowserRouter>
            <div>
            <ToastContainer/>
                <Route exact path="/" component={SignUp} />
                <Route exact path="/login" component={Login} />
            </div>
        </BrowserRouter>
    </div>

);

export default Routes
