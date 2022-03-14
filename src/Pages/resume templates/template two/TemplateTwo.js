import React, { useRef } from 'react';
import './TemplateTwo.css';
import { useReactToPrint } from "react-to-print";
import { RWebShare } from "react-web-share";

function TemplateTwo(props) {

    const { formData } = props;

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <div className='resumeTemplateTwo'>
                <div className='twoContainer' ref={componentRef}>
                    <div className='twoBody'>

                        {/* Side Section- START */}
                        <div className='sideSection'>

                            {/* Peronsal Details */}
                            <div>
                                {/* Profile Photo */}
                                <div className='twoImage'>
                                    <img src={formData.photo} alt="profile pic" />
                                </div>

                                {/* Name */}
                                <div className='twoName'>
                                    <h4>{formData.firstname}</h4><span /><h4>{formData.lastname}</h4>
                                </div>
                                <br />

                                {/* Job Title */}

                                <div className='twoTitle'>
                                    <p>{formData.jobtitle}</p>
                                </div>

                                {/* Email  */}
                                <div className='twoEmail'>
                                    <p>{formData.email}</p>
                                </div>

                                {/* Phone  */}
                                <div className='twoPhone'>
                                    <p>{formData.phone}</p>
                                </div>

                                {/* Social Links */}
                                <div className='twoSocial'>
                                    <div className='socialIcons'>
                                        <a href={formData.linkedin}><h3>{formData.linkedin ? <i className="fab fa-linkedin fa-1x" /> : ''}</h3></a>
                                        <a href={formData.github}><h3>{formData.github ? <i className="fab fa-github fa-1x" /> : ''}</h3></a>
                                    </div>
                                </div>
                            </div>
                            <div className='twoLine'></div>

                            <br /><br /><br />

                            {/* Skills */}
                            <div className='twoSkills'>
                                <div className='twoSkill-title'>
                                    <h3>Skills</h3>
                                </div>

                                <ul className='twoSkill-list'>
                                    {formData.skill.map((i, key) => (
                                        <li key={key}>{i.skill}</li>
                                    ))}
                                </ul>
                            </div>

                        </div>
                        {/* Side Section- END */}

                        {/* Main Section- START */}
                        <div className='mainSection'>

                            {/* Objective */}
                            <div className='twoObjective-title'>
                                <h3>Objective</h3>
                            </div>

                            <div className='twoObjective-Descrption'>
                                <p>{formData.objective}</p>
                            </div>

                            {/* Experience */}
                            <div className='twoExp-Title'>
                                <h3>Experience</h3>
                            </div>
                            <div className='twoExp-Details'>
                                <h6>{formData.fdjob}</h6>
                                <div className='expInline'>
                                    <p className='expComapny'>{formData.fdcompany}</p>
                                    <span />
                                    <p className='expDuartion'>({formData.fdduration})</p>
                                </div>
                                <div className='expDescription'>
                                    <p>{formData.fddescription}</p>
                                </div>

                            </div>

                            {/* Project */}
                            <div className='twoProject'>
                                <div className='twoProTitle'>
                                    <h3>Projects</h3>
                                </div>
                                <div>
                                    <table className='twoTable' style={{ "width": "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>Title</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className='twoTableBody'>
                                            <tr style={{ 'rowspan': 2 }}>
                                                <td>{formData.title.map((i, key) => (
                                                    <ul key={key}><li>{i.title} <br /><br /><br /></li></ul>
                                                ))}</td>

                                                <td>{formData.description.map((i, key) => (
                                                    <ul key={key}><li>{i.description}</li></ul>
                                                ))}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Education */}
                            <div className='educationSection'>
                                <div className='eduTitle'>
                                    <h3>Education</h3>
                                </div>
                                <div className="underGrad">
                                    <p>College Degree:<span />{formData.degreeug}</p>
                                    <p className='eduDuration'>({formData.yearsug})</p>
                                </div>
                                <div className="higherSec">
                                    <p>Plus Two:<span />{formData.schoolXII}</p>
                                    <p className='eduDuration'>({formData.yearsXII})</p>
                                </div>
                                <div className="school">
                                    <p>10th:<span />{formData.schoolX}</p>
                                    <p className='eduDuration'>({formData.yearsX})</p>
                                </div>
                            </div>

                            {/* Honours & Certifications */}

                            <div className='honourSection'>
                                <div className='honourTitle'>
                                    <h3>Honours & Certifications</h3>
                                </div>
                                <div className='honoursList'>
                                    <div><h4>Title</h4><p>{formData.certificationTitle.map((i, key) => (
                                        <div key={key}>{i.certificationTitle}</div>
                                    ))}</p></div>
                                    <div><h4>Authority</h4><p>{formData.authorityOfCertification.map((i, key) => (
                                        <div key={key}>{i.authorityOfCertification}</div>
                                    ))}</p></div>
                                    <div><h4>Date</h4><p>{formData.date.map((i, key) => (
                                        <div key={key}>{i.date}</div>
                                    ))}</p></div>

                                </div>

                            </div>


                        </div>
                        {/* Main Section- END */}
                    </div>
                </div>


            </div >
            <br />
            <div className='pdfButtons'>
                <button onClick={handlePrint}>Download Resume</button>

                <RWebShare
                    data={{
                        text: "Sleekcv's Resume",
                        url: "http://localhost:3000",
                        title: "Resume Link",
                    }}
                    onClick={() => console.log("shared successfully!")}
                >
                    <button>Share on Web</button>
                </RWebShare>
            </div>
        </div>
    );
}

export default TemplateTwo;