import React from 'react';
import {useState, useContext} from 'react'
import "./Forgotpassword.css"
import { Context } from "../../components/context/Context"


function ForgotPassword(props) {

    const [formValues, setFormValues] = useState({email:""});
    const { user,dispatch, isFetching } = useContext(Context);

    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormValues({[name] : value});
        
        console.log(formValues);
    }

    async function fetchUser() {

    const email = formValues.email;
    console.log(email)

        const response = await fetch('/api/auth/forgotpassword', {
            method: 'post',
            // taking comments from body and convert to json and put in username & txt in backend
            body: JSON.stringify({email}),
            headers: {
                'Content-Type': 'application/json'
            }     
        })
        console.log(response) 
    }   

    //Manage form submit
    const handleSubmit = (event) =>{
         //prevent refresh of form b4 submit
        event.preventDefault();
        fetchUser();    
    }
    
     
    
    return (
      <div className='user'>
          <header className="user__header">
                    <img className="logo" src="data:image/png;base64,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" alt="" />
                    <h3 className="user__title">Please enter your email id for password reset</h3>
          </header>

          <form onSubmit={handleSubmit} className="form">
            <div className="form__group">
                <input required  type="email" placeholder="Email" className="form-input" name='email'  value={formValues.email} onChange={handleChange} />
             </div>
             <button className="btn-fp" type="submit" >Submit</button>
            </form>
        </div>
    );
}

export default ForgotPassword;