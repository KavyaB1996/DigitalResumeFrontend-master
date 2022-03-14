import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import "./ViewProfile.css";

function ViewProfile(props) {

    const { userData } = props;



    console.log(userData);

    return (
        <div className="viewprofile">
            <div className='vpInline'>
                <div className="vp-left-box">
                    <div className="vp-top-left">
                        <img
                            id="vp-img"
                            src="http://images2.fanpop.com/images/photos/4700000/Codeman-cody-lambert-4776780-500-375.jpg"
                            /*src={formData.photo}*/
                            alt="profile pic"
                        />
                        <div className="vp-name">
                            {/* Code Man */}
                            {userData.firstname}
                        </div>
                        <div className="vp-phone">
                            <img
                                className="vp-objective-img"
                                src="http://icons.iconarchive.com/icons/icons8/android/512/Mobile-Phone-2-icon.png"
                                alt="icon"
                            />
                            <div className="vp-phone-text">{userData.phone}</div>
                        </div>
                        <div className="vp-email">
                            <img
                                className="vp-objective-img"
                                src="http://static.wixstatic.com/media/d822a6_af29afe70e1a4e9891f94a627914b6ec.png"
                                alt="icon"
                            />
                            <div className="vp-email-text">{userData.email}</div>
                        </div>
                    </div>
                </div>
                <div className='vpResumeBody'>
                    <div className="vp-work-experience">

                        <h1>Work Experience</h1>
                        <div className="vp-job-title">
                            Job @{userData.fdjob}
                        </div>
                        <div className="vp-job-date">
                            Jan 2015 - Present {/*formData.fdjob*/}
                        </div>
                        <div className="vp-job-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae
                            laoreet diam. {/*formData.fdjob*/}
                        </div>
                    </div>
                    <div className="vp-education">

                        <h1>Education</h1>
                        <div className="vp-education-box">
                            <div className="vp-education-title">
                                {userData.degreeug} @{userData.universityug}
                            </div>
                            <div className="vp-education-date">
                                Jan 2015 - Present {/*formData.yearsug*/}
                            </div>
                            <div className="vp-education-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                vitae laoreet diam.
                                {/*formData.achievementsug*/}
                            </div>
                        </div>
                        <div className="vp-education-box">
                            <div className="vp-education-title">
                                Job @Employername {/*formData.schoolXII*/} @{" "}
                                {/*formData.boardXII*/}
                            </div>
                            <div className="vp-education-date">
                                Jan 2015 - Present {/*formData.yearsXII*/}
                            </div>
                            <div className="vp-education-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                vitae laoreet diam.
                                {/*formData.achievementsXII*/}
                            </div>
                        </div>
                        <div className="vp-education-box">
                            <div className="vp-education-title">
                                Job @Employername {/*formData.schoolX*/} @ {/*formData.boardX*/}
                            </div>
                            <div className="vp-education-date">
                                Jan 2015 - Present {/*formData.yearsX*/}
                            </div>
                            <div className="vp-education-description">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                                vitae laoreet diam.
                                {/*formData.achievementsX*/}
                            </div>
                        </div>
                    </div>
                    <div className="vp-skills">

                        <h1>Skills</h1>
                        <div>
                            {
                                userData?.skill?.map((i, key) => (
                                    <React.Fragment key={key}>
                                        <ul className="vp-skill-ul">
                                            <li className="vp-skill-li" key={key}>{i}</li>
                                        </ul>
                                    </React.Fragment>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProfile;