import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import Pic01 from '../images/pic01.jpg';
import Pic02 from '../images/pic02.jpg';
import Pic03 from '../images/pic03.jpg';
import { Context } from "../context/Context";
import { useNavigate } from 'react-router-dom';


function Home(props) {

    let navigate = useNavigate();
    const { user, dispatch, isFetching } = useContext(Context);

    const handleClick = () => {
        if (user) {
            navigate('/user-home');
        } else {
            navigate('/api/auth/register')
        }
    }

    return (
        <div>

            {/* Page Wrapper */}
            <div id="page-wrapper">

                {/* Banner */}
                <section id="banner">
                    <div className="inner">
                        <h2 style={{ "fontWeight": "bold" }}>Sleekcvs</h2>

                        <p style={{ "fontWeight": "normal" }}> Boost your chances-<br />
                            to land that<br />
                            dream job</p>

                        <ul className="actions special">
                            <li><div onClick={handleClick} className="button primary">Create your resume</div></li>
                        </ul>
                    </div>
                    <Link to="one" className="more scrolly" smooth={true} duration={1000}>Learn More</Link>
                </section>

                {/* One */}
                <section id="one" className="wrapper style1 special">
                    <div className="inner">
                        <header className="major">
                            <h2>WE CAN HELP YOUR CAREER GROW<br />
                                Get your Resume in 3 easy steps</h2>
                            <p>Who have you always dreamt of becoming? We bet a resume writer didn’t make it to that list.<br />
                                So don’t let a piece of paper turn your dreams into nightmares.With Sleekcvs, we<br />
                                take care of the details, so you can focus on what really matters: your career..</p>
                        </header>
                        <ul className="icons major">
                            <li><span className="icon fa-gem major style1"><span className="label">Lorem</span></span></li>
                            <li><span className="icon fa-heart major style2"><span className="label">Ipsum</span></span></li>
                            <li><span className="icon solid fa-code major style3"><span className="label">Dolor</span></span></li>
                        </ul>
                    </div>
                </section>

                {/* Two */}
                <section id="two" className="wrapper alt style2">
                    <section className="spotlight">
                        <div className="image"><img src={Pic01} alt="" /></div>
                        <div className="content">
                            <h2>Pick a template<br />
                                of your choice</h2>
                            <p>Our professional resume templates are designed strictly following all industry guidelines and best practices employers are looking for.</p>
                        </div>
                    </section>
                    <section className="spotlight">
                        <div className="image"><img src={Pic02} alt="" /></div>
                        <div className="content">
                            <h2>Fill in the blanks</h2>
                            <p>Type in basic information. Use suggestions from recruitment pros for everything else.</p>
                        </div>
                    </section>
                    <section className="spotlight">
                        <div className="image"><img src={Pic03} alt="" /></div>
                        <div className="content">
                            <h2>Download your resume</h2>
                            <p>Start impressing employers. Download your awesome resume and land the job you are looking for, effortlessly.</p>
                        </div>
                    </section>
                </section>

                {/* Three */}
                <section id="three" className="wrapper style3 special">
                    <div className="inner">
                        <header className="major">
                            <h2>Benefits of using Sleekcvs</h2>
                            <p>From avoiding common CV mistakes like inconsistencies or forgetting important data…<br />
                                Here’s why you should consider using an online CV Builder!</p>
                        </header>
                        <ul className="features">
                            <li className="icon fa-paper-plane">
                                <h3>Save hours of time</h3>
                                <p>Our resume builder will save you time creating your resume. Simply choose a template, and our software will help you fill out each section and bullet point.</p>
                            </li>
                            <li className="icon solid fa-laptop">
                                <h3>Make matching application documents</h3>
                                <p>Pair your resume template with a matching cover letter template to make your application more memorable and leave a stronger impression on employers.</p>
                            </li>
                            <li className="icon solid fa-code">
                                <h3>Build a resume with the power of AI</h3>
                                <p>Our resume builder takes information from real job ads, then modifies it with AI to create unique bullet points for your work experience section.</p>
                            </li>
                            <li className="icon solid fa-headphones-alt">
                                <h3>Enjoy a huge range of free templates</h3>
                                <p>Resume Genius boasts the largest, most diverse selection of resume and cover letter templates on the internet. And they’re all free to download.</p>
                            </li>
                            <li className="icon fa-heart">
                                <h3>Create an ATS-friendly resume</h3>
                                <p>All of our templates were designed to be fully compatible with the Applicant Tracking System (ATS) software companies use to filter candidates.</p>
                            </li>
                            <li className="icon fa-flag">
                                <h3>More likely to land a job</h3>
                                <p>With a representative and professional CV, you will stand out amongst all other applicants. You are also up to 65% more likely to be invited to an interview.</p>
                            </li>
                        </ul>
                    </div>
                </section>

            </div >
        </div >
    );
}

export default Home;