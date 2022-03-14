import React, { useState, useContext } from 'react';
import "./Login.css"
// import Validation from './Validation';
// import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from "../../components/context/Context";
// import Design from './design';
// import { Link } from 'react-router-dom';
// import Articlelist from '../article/Articlelist';



function LogIn(props) {

    let navigate = useNavigate();
    const { user, dispatch, isFetching } = useContext(Context);

    //manage form filed's values
    const [formValues, setFormValues] = useState({ username: "", pwd: "" });

    //flag for successful submit
    // const [isSubmit, setIsSubmit] = useState(false)

    //handle change in form fields
    const handleChange = (event) => {
        // console.log(event.target);
        //destructure values of name and value from the input field...input field is in event.target
        const { name, value } = event.target;
        //...spread syntax = append new values i,.e, if username given after mail, both values shud b present here
        //[name] : value => name in [] tell it to store value in the key - name
        setFormValues({ ...formValues, [name]: value });
    }

    const username = formValues.username;
    const pwd = formValues.pwd;

    //Manage form submit
    const handleSubmit = async (event) => {
        //prevent refresh of form b4 submit
        event.preventDefault();
        dispatch({ type: "LOGIN_START" });

        const response = await fetch('/api/auth/login', {
            method: 'post',
            // taking comments from body and convert to json and put in username & txt in backend
            body: JSON.stringify({ username, pwd }),
            headers: {
                'Content-Type': 'application/json'
            },
        })

        const body = await response.json()
        console.log(body)

        if (body.success && body.IsAdmin === false) {
            //     localStorage.setItem('token', body.accessToken)
            alert("User Login success")
            dispatch({ type: "LOGIN_SUCCESS", payload: body });
            console.log("success")
            navigate('/user-home');
        }
        else if (body.success && body.IsAdmin) {
            //     localStorage.setItem('token', body.accessToken)
            alert("Admin Login success")
            dispatch({ type: "LOGIN_SUCCESS", payload: body });
            console.log("success")
            navigate('/api/admin');
        }
        else {
            alert("Username or password incorrect")
            dispatch({ type: "LOGIN_FAILURE" });

        }

        setFormValues({ username: "", pwd: "" })
    }

    return (
        <div>
            <div className="user">
                <header className="user__header">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHbXthDd8zdbAFYNjJ76BqtdD6f-0sMyEEUA&usqp=CAU" alt="" />
                    <h3 className="user__title">Welcome! Please login to your account</h3>
                </header>

                <form onSubmit={handleSubmit} className="form">
                    <div className="form__group">
                        <input id="Username" type="text" placeholder="Username" className="form-input" name='username' required value={formValues.username} onChange={handleChange} />
                        <p className='error' />
                    </div>

                    <div className="form__group">
                        <input id="password" type="password" placeholder="Password" className="form-input" name='pwd' required value={formValues.pwd} onChange={handleChange} />
                        <p className='error' />
                    </div>
                    <button className="btn" type="submit">LogIn</button>
                    {/* <button className="btn" type="submit"disabled={isFetching}>LogIn</button> */}

                    <a href='/api/auth/forgotpassword'>Forgot Password?</a>
                </form>
                <br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </div>


    )
}

export default LogIn;