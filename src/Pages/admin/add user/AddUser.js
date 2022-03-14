import React, { useState } from 'react';
import './AddUser.css';
import AddUserValidation from './AddUserValidation';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function AddUser(props) {

    let navigate = useNavigate();


    //manage form filed's values
    const [formValues, setFormValues] = useState({ username: "", pwd: "", email: "" });

    const [formErrors, setFormerrors] = useState({})

    //flag for successful submit
    const [isSubmit, setIsSubmit] = useState(false)

    //handle change in form fields
    const handleChange = (event) => {
        console.log(event.target);
        //destructure values of name and value from the input field...input field is in event.target
        const { name, value } = event.target;
        //...spread syntax = append new values i,.e, if username given after mail, both values shud b present here
        //[name] : value => name in [] tell it to store value in the key - name
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    }

    //Manage form submit
    const handleSubmit = (event) => {
        //prevent refresh of form b4 submit
        event.preventDefault();
        //store errors returned from validation.js to update formerrors
        setFormerrors(AddUserValidation(formValues));
        //set upon submitting, submit as true
        setIsSubmit(true)
    }

    // Successful signup
    // successful validn alert when zero errors and isSubmit is tru
    // always keep on checking whenever error value changes
    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // alert("Signup Successful");
            fetchUser()
        }
    }, [formErrors]);

    async function fetchUser() {
        // const isadmin = false;
        const username = formValues.username;
        const pwd = formValues.pwd;
        const email = formValues.email;

        const response = await fetch('/api/auth/register', {
            method: 'post',
            // taking comments from body and convert to json and put in username & txt in backend
            body: JSON.stringify({ username, pwd, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const body = await response.json();
        console.log(body);
        if (response.status === 201) {
            alert("User Added Successfully!!!")
        }
        else if (response.status === 400) {
            alert(body.msg)
        }
        else {
            alert(body.error)
        }
        // 
        setFormValues({ username: "", pwd: "", email: "" });
    }


    return (
        <div>

            <div className="user">
                <header className="user__header">
                    <img src="https://www.kindpng.com/picc/m/164-1649803_add-group-icon-png-download-add-user-group.png" alt="" />
                    <h1 className="user__title">Add new user!!</h1>
                </header>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="form__group">
                        <input type="text" id="Username" placeholder="Username" className="form-input" name='username' required value={formValues.username} onChange={handleChange} />
                        <p className='error'>{formErrors.username}</p>
                    </div>

                    <div className="form__group">
                        <input id="email" type="email" placeholder="Email" className="form-input" name='email' required value={formValues.email} onChange={handleChange} />
                        <p className='error'>{formErrors.email}</p>

                    </div>

                    <div className="form__group">
                        <input type="password" id="password" placeholder="Password" className="form-input" name='pwd' required value={formValues.pwd} onChange={handleChange} />
                        <p className='error'>{formErrors.password}</p>
                    </div>

                    <button className="btn" type="submit" >Register</button>

                </form>
                <br /><br /><br /><br /><br /><br /><br />
            </div>

        </div>
    )
}

export default AddUser;