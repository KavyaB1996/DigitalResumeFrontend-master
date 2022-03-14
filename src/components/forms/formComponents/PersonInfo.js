import React, { useEffect } from 'react';
import './PersonInfo.css';





function PersonInfo({ formData, setFormData }) {

    const changeHandler = (event) => {
        const data = {
            photo: URL.createObjectURL(event.target.files[0]), photoname: event.target.files[0].name
        };
        setFormData({ ...formData, ...data });
    }; console.log(formData);

    return (
        <div className="container">
            <form>
                {/* Person Name */}

                <div className='formInline'>
                    <label htmlFor="fname" className='labelFname'>First Name</label>
                    <input type="text" id="fname" name="firstname" placeholder="Your name.." value={formData.firstname} onChange={(event) => { setFormData({ ...formData, firstname: event.target.value }) }} />

                    <label htmlFor="lname" className='labelLname'>Last Name</label>
                    <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={formData.lastname} onChange={(event) => { setFormData({ ...formData, lastname: event.target.value }) }} />
                </div>

                {/* Upload Image */}

                <label htmlFor="image">Upload Photo</label><label htmlFor="image">{formData.photoname}</label>
                <input type="file" id="img" name="photo" accept="image/*" onChange={changeHandler}
                />
                <br />

                {/* Email   */}
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="Your email.." value={formData.email} onChange={(event) => { setFormData({ ...formData, email: event.target.value }) }} />

                <br />

                {/* Phone */}
                <label htmlFor="text">Phone</label>
                <input type="text" name="phone" placeholder="Your phone no.." value={formData.phone} onChange={(event) => { setFormData({ ...formData, phone: event.target.value }) }} />


                {/* role */}
                <div>
                    <label htmlFor="lname">Job Title</label>
                    <input type="text" name="jobtitle" placeholder="Your job title.." value={formData.jobtitle} onChange={(event) => { setFormData({ ...formData, jobtitle: event.target.value }) }} />
                </div>

                {/* Objective */}
                <div>
                    <label htmlFor="objective">Objective</label>
                    <textarea name="objective" placeholder="Write your objective.." style={{ "height": '100px' }} value={formData.objective} onChange={(event) => { setFormData({ ...formData, objective: event.target.value }) }}></textarea>
                </div>


                <div className="selectOption">

                    {/* Select location */}
                    <label htmlFor="state" className='labelState'>Select your location</label>
                    <select name="location" className="state" value={formData.location} onChange={(event) => { setFormData({ ...formData, location: event.target.value }) }}>
                        <option value="Select">Select</option>
                        <option value="kerala">Kerala</option>
                        <option value="karnataka">Karnataka</option>
                        <option value="tamilnadu">Tamilnadu</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <br />

                {/* DOB */}
                <label htmlFor="date">Select your date of birth</label>
                <input type="date" name="dob" className="selectOption" value={formData.dob} onChange={(event) => { setFormData({ ...formData, dob: event.target.value }) }} />

                {/* Social Links */}
                <div>
                    {/* LinkedIn */}
                    <label htmlFor="lname">LinkedIn URL</label>
                    <input type="url" name="linkedin" placeholder="Paste your LinkedIn url.." value={formData.linkedin} onChange={(event) => { setFormData({ ...formData, linkedin: event.target.value }) }} />

                    {/* GitHub */}
                    <label htmlFor="lname">GitHub URL</label>
                    <input type="url" name="github" placeholder="Paste your GitHub url.." value={formData.github} onChange={(event) => { setFormData({ ...formData, github: event.target.value }) }} />
                </div>
            </form>
        </div>
    )


}

export default PersonInfo;