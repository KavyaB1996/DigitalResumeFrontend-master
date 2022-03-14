// import './PersonInfo.css';
import React, { useState } from 'react';
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useParams } from 'react-router-dom';



function Project({ formData, setFormData }) {

    const { templateNum } = useParams();
    const [projectinfos, setProjectinfos] = useState(formData.title, formData.description);
    // const [project,setProject]=useState([{title:"",domain:"",duration:"",description:""},]); 

    const handleAddFields = () => {

        setProjectinfos([...projectinfos, { title: "", description: "" }]);
        // projectinfos.push(project);
        console.log(projectinfos);

    }

    const handleRemoveFields = (index) => {
        const values = [...projectinfos];
        values.splice(index, 1);
        setProjectinfos(values);
    }
    const handleChangeInput = (index, event) => {
        const values = [...projectinfos];
        values[index][event.target.name] = event.target.value;
        setProjectinfos(values);
        const newobj = { ...formData, [event.target.name]: projectinfos };
        setFormData(newobj);

    }

    async function handleSubmit(event) {
        event.preventDefault();
        const isadmin = false;
        const title = formData.title;
        const description = formData.description;
        const fdduration = formData.fdduration;
        const fddescription = formData.fddescription;


        const response = await fetch(`/api/user/resume/${templateNum}`, {
            method: 'post',
            body: JSON.stringify({ title, description, fdduration, fddescription }),
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


            <AiOutlinePlus onClick={() => handleAddFields()} style={{ 'color': 'black' }}></AiOutlinePlus>
            <form method="post" onSubmit={handleSubmit}>
                {/* Project details */}

                {
                    projectinfos.map((projectinfo, index) => (
                        <div key={index}>


                            <div className='formInline'>
                                <label htmlFor="title" className='labelFname'>Project Title</label>
                                <input type="text" id="fname" name="title" placeholder="Project title.." value={projectinfo.title} onChange={event => handleChangeInput(index, event)} />


                            </div>

                            <label htmlFor="description" className='labelLname'>Project description</label>

                            <textarea className="review" name="description" rows="4" cols="50" value={projectinfo.description} onChange={event => handleChangeInput(index, event)} maxLength='100'>
                            </textarea>

                            {/* </div> */}

                            <AiOutlinePlus onClick={() => handleAddFields()} style={{ "color": "black" }} ></AiOutlinePlus>
                            <AiOutlineMinus onClick={() => handleRemoveFields()} style={{ "color": "black" }} ></AiOutlineMinus>
                        </div>))

                }
                <button style={{ "color": "blue", "backgroundColor": "grey" }} type='submit'>Save Your data</button>
            </form>

        </div>

    );


}

export default Project;