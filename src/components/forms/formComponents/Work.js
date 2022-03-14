import React from "react";
// import "./Work.css"
import { useParams } from 'react-router-dom';





function Work({ formData, setFormData }) {

  const { templateNum } = useParams();


  async function handleSubmit(event) {
    event.preventDefault();
    const isadmin = false;
    const fdjob = formData.fdjob;
    const fdcompany = formData.fdcompany;
    const fdduration = formData.fdduration;
    const fddescription = formData.fddescription;


    // console.log(firstname, lastname, email)


    const response = await fetch(`/api/user/resume/${templateNum}`, {
      method: 'post',
      body: JSON.stringify({ fdjob, fdcompany, fdduration, fddescription }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const body = await response.json();
    console.log(body)
    alert(body.msg)
  }


  return (
    <div className="container">
      <form method="post" onSubmit={handleSubmit}>
        <div className="formInline">
          <label htmlFor="fname" className="labelFname">
            Job Title
          </label>
          <input
            type="text"
            name="fdjob"
            placeholder="Enter your job title"
            value={formData.fdjob}
            onChange={(event) => { setFormData({ ...formData, fdjob: event.target.value }) }}
            required
          />
        </div>
        <div className="formInline">
          <label htmlFor="fname" className="labelFname">
            Company Name
          </label>
          <input
            type="text"
            name="fdcompany"
            placeholder="Enter your company name"
            value={formData.fdcompany}
            onChange={(event) => { setFormData({ ...formData, fdcompany: event.target.value }) }}
            required
          />
        </div>
        <div className="formInline">
          <label htmlFor="Sdate" className="labelFname">
            Years of experience
          </label>
          <input type="text" id="sdate" name="fdduration" placeholder="Years of experience (start date - end date).." value={formData.fdduration}
            onChange={(event) => { setFormData({ ...formData, fdduration: event.target.value }) }} />

        </div>
        <label htmlFor="description">Description</label>
        <textarea
          name="fddescription"
          placeholder="Write about your responsibilities and achievements"
          style={{ height: "100px" }}
          value={formData.fddescription}
          onChange={(event) => { setFormData({ ...formData, fddescription: event.target.value }) }}
        />
        <button style={{ "color": "blue", "backgroundColor": "grey" }} type='submit'>Save Your data</button>
      </form>
    </div>
  );
}

export default Work;
