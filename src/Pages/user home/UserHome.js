import React from 'react';
import "./UserHome.css";
import { Link } from 'react-router-dom';

function UserHome(props) {
    return (
        <div className='userHome'>

            {/* Header */}
            <div className='userHomeHeader'>
                <h1>Welcome to SleekCVs!</h1>
            </div>
            <br /><br />

            {/* Home Intro */}
            <div className='userPara'>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <br /><br /><br /><br />
            {/* Carousel */}
            <div className='userCarousel'>
                <section className="carousel" aria-label="Gallery">
                    <ol className="carousel__viewport">
                        <li id="carousel__slide1"
                            tabindex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper">
                                <a href="#carousel__slide4"
                                    className="carousel__prev">Go to last slide</a>
                                <a href="#carousel__slide2"
                                    className="carousel__next">Go to next slide</a>
                            </div>
                        </li>
                        <li id="carousel__slide2"
                            tabindex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                            <a href="#carousel__slide1"
                                className="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide3"
                                className="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide3"
                            tabindex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                            <a href="#carousel__slide2"
                                className="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide4"
                                className="carousel__next">Go to next slide</a>
                        </li>
                        <li id="carousel__slide4"
                            tabIndex="0"
                            className="carousel__slide">
                            <div className="carousel__snapper"></div>
                            <a href="#carousel__slide3"
                                className="carousel__prev">Go to previous slide</a>
                            <a href="#carousel__slide1"
                                className="carousel__next">Go to first slide</a>
                        </li>
                    </ol>
                    <aside className="carousel__navigation">
                        <ol className="carousel__navigation-list">
                            <li className="carousel__navigation-item">
                                <a href="#carousel__slide1"
                                    className="carousel__navigation-button">Go to slide 1</a>
                            </li>
                            <li className="carousel__navigation-item">
                                <a href="#carousel__slide2"
                                    className="carousel__navigation-button">Go to slide 2</a>
                            </li>
                            <li className="carousel__navigation-item">
                                <a href="#carousel__slide3"
                                    className="carousel__navigation-button">Go to slide 3</a>
                            </li>
                            <li className="carousel__navigation-item">
                                <a href="#carousel__slide4"
                                    className="carousel__navigation-button">Go to slide 4</a>
                            </li>
                        </ol>
                    </aside>
                </section>
            </div>
            {/* End of Carousel */}
            <br /><br /><br /><br /><br /><br /><br />

            {/* button */}
            <div className='userHomeBtn'>
                <Link to='/choose-template' className='btnText'><button> Create Resume</button></Link>
            </div >
            <br /><br /><br /><br />

        </div >
    );
}

export default UserHome;