import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Admin.css';
// import { matchPath, matchRoutes } from 'react-router';



function Admin(props) {

    let { userData, setUserData } = props;

    const [userList, setUserList] = useState([]);

    const [commentsData, setCommentsData] = useState([]);

    let navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const response = await fetch(`/api/admin`);
        const data = await response.json();
        setUserList(data);
    }


    async function ViewProfile(name) {
        console.log(`${name}`)

        const response = await fetch(`/api/admin/${name}`, {
            method: 'post',
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const body = await response.json();
        console.log(body);
        setUserData(body);
        navigate(`/api/admin/${name}`);
    }

    // const UserAdd = () => {
    //     navigate('/api/admin/adduser');
    // }


    return (
        <div className='"w3-light-grey"'  >
            {/* <!-- !PAGE CONTENT! --> */}
            <div className="w3-main" style={{ "marginLeft": "2%", "marginTop": "2%", "marginRight": "2%" }}>

                {/* <!-- Header --> */}
                <header className="w3-container" style={{ "paddingTop": "22px", "marginLeft": "40%" }}>
                    <h5><b><i className="fa fa-dashboard"></i> Admin Dashboard</b></h5>
                </header>

                <div className="adminProps">
                    <div className="w3-row-padding w3-margin-bottom">
                        <div className="w3-quarter">
                            <div className="w3-container w3-red w3-padding-16">
                                <div className="w3-left"><i className="fa fa-comment w3-xxxlarge"></i></div>
                                <div className="w3-right">
                                    <h3>52</h3>
                                </div>
                                <div className="w3-clear"></div>
                                <h4>Testimonial</h4>
                            </div>
                        </div>

                        <div className="w3-quarter">
                            <div className="w3-container w3-teal w3-padding-16">
                                <div className="w3-left"><i className="fa fa-download w3-xxxlarge"></i></div>
                                <div className="w3-right">
                                    <h3>23</h3>
                                </div>
                                <div className="w3-clear"></div>
                                <h4>Download</h4>
                            </div>
                        </div>
                        <div className="w3-quarter">
                            <div className="w3-container w3-orange w3-text-white w3-padding-16">
                                <div className="w3-left"><i className="fa fa-users w3-xxxlarge"></i></div>
                                <div className="w3-right">{
                                    <h3>{commentsData.length}</h3>
                                }

                                </div>
                                <div className="w3-clear"></div>
                                <h4>Users</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='adminButton'>
                    <Link to="/api/admin/adduser" target="_blank" className='addUserLink'><button className='addUser'> Add user</button></Link><span />
                    <button className='removeUser'>Remove user</button><span />
                    <button>Users List</button>
                </div>

                <hr />
                <div className="w3-container">
                    <h5>General Stats</h5>
                    <p>New Visitors</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-center w3-padding w3-green" style={{ "width": "25%" }}>+25%</div>
                    </div>

                    <p>New Users</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-center w3-padding w3-orange" style={{ "width": "50%" }}>50%</div>
                    </div>

                    <p>Bounce Rate</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-center w3-padding w3-red" style={{ "width": "75 % " }}>75%</div>
                    </div>
                </div>
                <hr />

                <div className="w3-container">
                    <h5>Users List</h5>
                    <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                        {
                            userList?.map((i, key) => (
                                <tbody key={key}>
                                    <tr >
                                        <td>{i.firstname}</td>
                                        <td><Button onClick={(e) => ViewProfile(i.firstname)}>ViewProfile</Button></td>
                                    </tr>
                                </tbody>
                            )
                            )
                        }

                    </table><br />
                    <button className="w3-button w3-dark-grey">More Users <i className="fa fa-arrow-right"></i></button>
                </div>
                <hr />

                <br />

                <div className="w3-container">
                    <Link to={'/api/user/feedback'}>
                        <h5>Recent Comments</h5>

                    </Link>

                    <div className="w3-row">
                        <div className="w3-col m2 text-center">
                        </div>
                        {/* <div className="w3-col m10 w3-container">
                            {
                                commentsData.map((i,key) =>
                                    // {
                                        // if (key>commentsData.length-3)
                                            // ( 
                                                // comments_array.push(
                                                <React.Fragment key={key}>
                                                <h4 style={{"color":"white"}}>{i.name}<span className="w3-opacity w3-medium">{i.date}</span></h4>
                                                <h4 style={{"color":"white"}}>{i.comments}</h4>
                                                </React.Fragment>
                                                // )
                                            // )
                                            // return comments_array;
                                    // }
                                    )                          
                            }
                 
                        </div> */}
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}

export default Admin;