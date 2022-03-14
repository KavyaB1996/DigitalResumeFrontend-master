import React, { useRef } from 'react';
import './TemplateThree.css';
import { useReactToPrint } from "react-to-print";
import { RWebShare } from "react-web-share";

function TemplateThree(props) {

    const { formData } = props;

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div>
            <div className='resumeTemplateThree'>
                <div className='threeContainer' ref={componentRef}>
                    <div className='twoBody'>

                        {/* Side Section- START */}
                        <div className='sideSectionThree'>

                            {/* Peronsal Details */}
                            <div>

                                <div className='photoBg'>
                                    {/* Name */}
                                    <div className='threeName'>
                                        <h2>{formData.firstname}</h2>
                                        <h2>{formData.lastname}</h2>
                                    </div>
                                </div>

                                {/* Profile Photo */}
                                <div className='threeImage'>
                                    <img src={formData.photo} alt="profile pic" />
                                </div>

                                <br />


                                {/* Job Title */}
                                <br />
                                <div className='threeTitle'>
                                    <p>{formData.jobtitle}</p>
                                </div>

                                {/* Email  */}
                                <div className='threeEmail'>
                                    <p>{formData.email}</p>
                                </div>

                                {/* Phone  */}
                                <div className='threePhone'>
                                    <p>{formData.phone}</p>
                                </div>

                                {/* Social Links */}
                                <div className='threeSocial'>
                                    <div className='socialIconsThree'>
                                        <a href={formData.linkedin}><h3>{formData.linkedin ? <i className="fab fa-linkedin fa-1x three" /> : ''}</h3></a>
                                        <a href={formData.github}><h3>{formData.github ? <i className="fab fa-github fa-1x three" /> : ''}</h3></a>
                                    </div>
                                </div>
                            </div>
                            {/* <div className='threeLine'></div> */}

                            <br />

                            {/* Skills */}
                            <div className='threeSkills'>
                                <div className='threeSkill-title'>
                                    <h3>Skills</h3>
                                    <div className='threeLine'></div>
                                </div>

                                <ul className='threeSkill-list'>
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
                            <div className='threeObjective-title'>
                                <h3>Objective</h3>
                                <div className='threeLine'></div>
                            </div>

                            <div className='threeObjective-Descrption'>
                                <p>{formData.objective}</p>
                            </div>

                            {/* Experience */}
                            <div className='threeExp-Title'>
                                <h3>Experience</h3>
                                <div className='threeLine'></div>
                            </div>
                            <div className='threeExp-Details'>
                                <h6>{formData.fdjob}</h6>
                                <div className='expInlineThree'>
                                    <p className='expComapnyThree'>{formData.fdcompany}</p>
                                    <span />
                                    <p className='expDuartionThree'>({formData.fdduration})</p>
                                </div>
                                <div className='expDescriptionThree'>
                                    <p>{formData.fddescription}</p>
                                </div>

                            </div>

                            {/* Project */}
                            <div className='threeProject'>
                                <div className='threeProTitle'>
                                    <h3>Projects</h3>
                                    <div className='threeLine'></div>
                                </div>
                                <br />
                                <div>
                                    <table className='threeTable' style={{ "width": "100%" }}>
                                        <thead>
                                            <tr className='threeHead'>
                                                <th>Title</th>
                                                <th>Description</th>
                                            </tr>
                                        </thead>
                                        <tbody className='threeTableBody'>
                                            <tr className='threeRow' style={{ 'rowspan': 2 }}>
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
                                <div className='eduTitleThree'>
                                    <h3>Education</h3>
                                    <div className='threeLine'></div>
                                </div>
                                <div className="underGradThree">
                                    <p>College Degree:<span />{formData.degreeug}</p>
                                    <p className='eduDurationThree'>({formData.yearsug})</p>
                                </div>
                                <div className="higherSecThree">
                                    <p>Plus Two:<span />{formData.schoolXII}</p>
                                    <p className='eduDurationThree'>({formData.yearsXII})</p>
                                </div><br />
                                <div className="schoolThree">
                                    <p>10th:<span />{formData.schoolX}</p>
                                    <p className='eduDurationThree'>({formData.yearsX})</p>
                                </div>
                            </div>

                            {/* Honours & Certifications */}

                            <div className='honourSection'>
                                <div className='honourTitleThree'>
                                    <h3>Honours & Certifications</h3>
                                    <div className='threeLine'></div>
                                </div>
                                <div className='honoursListThree'>
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

export default TemplateThree;