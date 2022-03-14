import React, { useRef } from 'react';
import './TemplateOne.css';
import { useReactToPrint } from "react-to-print";
import { RWebShare } from "react-web-share";
import { useParams } from 'react-router-dom';


function TemplateOne(props) {

    const { templateNum } = useParams;
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });


    let { formData } = props;

    // console.log(formData.firstname);
    // console.log(formData.photo);


    async function handleSave(event) {
        const firstname = formData.firstname;
        const lastname = formData.lastname;
        const email = formData.email;
        const phone = formData.phone;
        const jobtitle = formData.jobtitle;
        const objective = formData.objective;
        const state = formData.state;
        const dob = formData.dob;
        const linkedin = formData.linkedin;
        const github = formData.github;
        const degreeug = formData.degreeug;
        const universityug = formData.universityug;
        const yearsug = formData.yearsug;
        const achievementsug = formData.achievementsug;
        const schoolXII = formData.schoolXII;
        const boardXII = formData.boardXII;
        const yearsXII = formData.yearsXII;
        const achievementsXII = formData.achievementsXII;
        const schoolX = formData.schoolX;
        const boardX = formData.boardX;
        const yearsX = formData.yearsX;
        const achievementsX = formData.achievementsX;
        const fdjob = formData.fdjob;
        const fdcompany = formData.fdcompany;
        const fdduration = formData.fdduration;
        const fddescription = formData.fddescription;

        console.log(firstname, lastname, email)


        const response = await fetch(`/api/user/resume/${templateNum}`, {
            method: 'post',
            body: JSON.stringify({ firstname, lastname, email, phone, jobtitle, objective, state, dob, linkedin, github, degreeug, universityug, yearsug, achievementsug, schoolXII, boardXII, yearsXII, achievementsXII, schoolX, boardX, yearsX, achievementsX, fdjob, fdcompany, fdduration, fddescription }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        console.log(body)
        alert(body.msg)
    }


    return (

        <div className='templateOne'>

            <div id="doc2" className="yui-t7">
                <div id="inner" className='innerOne' ref={componentRef}>

                    <div id="hd">
                        <div className="yui-gc">
                            <div className='resumeHeader'>
                                <div className="yui-u first">
                                    <h1>{formData.firstname}</h1><h1>{formData.lastname}</h1>
                                    <h2>{formData.jobtitle}</h2>
                                </div>
                                <div className='resumeImage'>
                                    <img src={formData.photo} alt="profile pic" />
                                </div>
                            </div>

                            <div className="yui-u">
                                <div className="contact-info">
                                    {/* <h3><a id="pdf" href="/">Download PDF</a></h3> */}
                                    <h3><a href={formData.email}>{formData.email}</a></h3>
                                    <h3>{formData.phone}</h3>
                                    <div className='socialLinks'>
                                        <a href={formData.linkedin}><h3>{formData.linkedin ? <i className="fab fa-linkedin fa-2x" /> : ''}</h3></a>
                                        <a href={formData.github}><h3>{formData.github ? <i className="fab fa-github fa-2x" /> : ''}</h3></a>
                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>

                    <div id="bd">
                        <div id="yui-main">
                            <div className="yui-b">

                                <div className="yui-gf lineBottom   ">
                                    <div className="yui-u first ">
                                        <h2>Objective</h2>
                                    </div>
                                    <div className="yui-u objectivePara">
                                        <p className="enlarge bottomLine">
                                            {formData.objective}
                                        </p>
                                    </div>
                                </div>
                                <div className='skillBorder'>

                                    <div className="yui-gf  ">
                                        <div className="yui-u first">
                                            <h2>Skills</h2>
                                        </div>

                                        <div className="yui-u ">
                                            <ul className="talent oneSkillList">
                                                {formData.skill.map((i, key) => (
                                                    <li key={key}>{i.skill}</li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                                <div className="yui-gf">

                                    <div className="yui-u first">
                                        <h2>Experience</h2>
                                    </div>

                                    <div className="yui-u ">

                                        <div className="job">
                                            <h2>{formData.fdjob}</h2>
                                            <h3>{formData.fdcompany}</h3>
                                            <h4>{formData.fdduration}</h4>
                                            <p>{formData.fddescription}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='bottomExperience'></div>



                                <div className="yui-gf bottomExperience">
                                    <div className="yui-u first">
                                        <h2>Project</h2>
                                    </div>
                                    <div className="yui-u">

                                        <div className="honors">

                                            <table className='table' style={{ "width": "100%" }}>
                                                <thead>
                                                    <tr>
                                                        <th>Title</th>
                                                        <th>Description</th>
                                                    </tr>
                                                </thead>
                                                <tbody className='tableBody'>
                                                    <tr className="tableList" style={{ 'rowspan': 2 }}>
                                                        <td>{formData.title.map((i, key) => (
                                                            <ul key={key}><li>{i.title} </li></ul>
                                                        ))}</td>
                                                        <td>{formData.description.map((i, key) => (
                                                            <ul key={key}><li>{i.description}</li></ul>
                                                        ))}</td>
                                                    </tr>



                                                </tbody>

                                            </table>
                                        </div>
                                    </div>
                                </div>


                                <div className="yui-gf last">
                                    <div className="yui-u first">
                                        <h2>Education</h2>
                                    </div>
                                    <div className="project">
                                        <h2>{formData.degreeug}</h2>
                                        <h3>{formData.universityug}</h3>
                                        <h4>{formData.yearsug}</h4>
                                        <p>{formData.achievementsug}</p>
                                    </div>

                                    <div className="project">
                                        <h2>{formData.schoolXII}</h2>
                                        <h3>{formData.boardXII}</h3>
                                        <h4>{formData.yearsXII}</h4>
                                        <p>{formData.achievementsXII}</p>
                                    </div>

                                    <div className="project">
                                        <h2>{formData.schoolX}</h2>
                                        <h3>{formData.boardX}</h3>
                                        <h4>{formData.yearsX}</h4>
                                        <p>{formData.achievementsX}</p>
                                    </div>
                                </div>


                                <div className="yui-gf last">
                                    <div className="yui-u first">
                                        <h2>Honours & Certifications</h2>
                                    </div>
                                    <div className="honors">
                                        <div><h3>Title</h3><h3>{formData.certificationTitle.map((i, key) => (
                                            <div key={key}>{i.certificationTitle}</div>
                                        ))}</h3></div>
                                        <div><h3>Authority</h3><h3>{formData.authorityOfCertification.map((i, key) => (
                                            <div key={key}>{i.authorityOfCertification}</div>
                                        ))}</h3></div>
                                        <div><h3>Date</h3><h3>{formData.date.map((i, key) => (
                                            <div key={key}>{i.date}</div>
                                        ))}</h3></div>


                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div id="ft">
                        <p>{formData.firstname} {formData.lastname} &mdash; <a href={formData.email}>{formData.email}</a> &mdash; {formData.phone}</p>
                    </div>

                </div>

                <div className='pdfButtons'>
                    <button onClick={handlePrint}>Download Resume</button>

                    <RWebShare
                        data={{
                            text: "Sleekcv's Resume",
                            url: window.location.href,
                            title: "Resume Link",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        <button>Share on Web</button>
                    </RWebShare>

                    <button onClick={(e) => handleSave()}>Save Data</button>


                </div>

            </div>

        </div>
    );
}

export default TemplateOne;