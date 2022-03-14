import React from "react";
import "./AboutUs.css";


export default function App() {
  return (
    <div>

      {/* START SECTION SERVICES */}
      <section className="section-services">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h3 className="title">Exclusive Features</h3>
                <p className="description">
                  SleekCV's has no cost, no ads and no limitations. Access
                  features that will help you get hired
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    <i className="fab fa-artstation" />
                  </span>
                  <h3 className="title">Sign Up</h3>
                  <p className="description">
                    Simply signup to our resume maker tool with your name and
                    email address.
                  </p>
                </div>
                <span className="circle-before" />
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    <i className="fas fa-chart-pie" />
                  </span>
                  <h3 className="title">Create</h3>
                  <p className="description">
                    Choose from smart resume templates that highlight your best
                    qualities.
                  </p>
                </div>
                <span className="circle-before" />
              </div>
            </div>
            {/* / End Single Service */}
            {/* Single Service */}
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="content">
                  <span className="icon">
                    <i className="fas fa-laptop-code" />
                  </span>
                  <h3 className="title">Download</h3>
                  <p className="description">
                    Print, download and share your resume instantly in flexible
                    formats like PDF.
                  </p>
                </div>
                <span className="circle-before" />
              </div>
            </div>
            {/* / End Single Service */}
          </div>
        </div>
      </section>
      {/* / END SECTION SERVICES */}

      <section className="section-team">
        <div className="container">
          {/* Start Header Section */}
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header-section">
                <h3 className="small-title">Our Experts</h3>
                <h3 className="title">Let's meet with our team members</h3>
              </div>
            </div>
          </div>
          {/* / End Header Section */}
          <div className="row">
            {/* Start Single Person */}
            <div className="col-sm-6 col-lg-4 col-xl-3 ">
              <div className="single-person">
                <div className="person-image">
                  <img
                    src="https://i.pinimg.com/474x/05/c3/59/05c359cd010df3e7f1ea3cb6f6f54fad.jpg"
                    style={{ "width": "12rem" }}
                    alt="avatar"
                  />
                  <span className="icon">
                    <a href="https://www.linkedin.com/in/saragmohanp/"><i className="fab fa-linkedin" /></a>
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">Sarag Mohan P</h3>
                </div>
              </div>
            </div>
            {/* / End Single Person */}
            {/* Start Single Person */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="single-person">
                <div className="person-image">
                  <img
                    src="https://i.etsystatic.com/18054961/r/il/082a6a/2659899402/il_340x270.2659899402_65xk.jpg"
                    style={{ "width": "12rem" }}
                    alt=""
                  />
                  <span className="icon">
                    <a href="https://www.linkedin.com/in/2919bssaranya/"><i className="fab fa-linkedin" /></a>
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">Saranya B.S</h3>
                </div>
              </div>
            </div>
            {/* / End Single Person */}
            {/* Start Single Person */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="single-person">
                <div className="person-image">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4m1HgE-AdiW_U9ug9xYMd7Lzf9VKrRH5WEXIvKGEuh0dDdXarKRci6ytQ2abCE9erdA&usqp=CAU"
                    style={{ "width": "12rem" }}
                    alt=""
                  />
                  <span className="icon">
                    <a href="https://www.linkedin.com/in/kavya-b-0374bb148/"><i className="fab fa-linkedin" /></a>
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">Kavya B</h3>
                </div>
              </div>
            </div>
            {/* / End Single Person */}
            {/* Start Single Person */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="single-person">
                <div className="person-image">
                  <img
                    src="https://media.istockphoto.com/vectors/avatar-icon-of-girl-in-a-baseball-cap-vector-id542940830?k=20&m=542940830&s=170667a&w=0&h=se4mS6kwTS4RlEoaqK2H3Z0nEdqIPia7C-BtiCZ_Ays="
                    style={{ "width": "12rem" }}
                    alt=""
                  />
                  <span className="icon">
                    <a href="https://www.linkedin.com/in/blessy-mathew-2229b7b4"><i className="fab fa-linkedin" /></a>
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">Blessy Mathew</h3>
                </div>
              </div>
            </div>
            {/* / End Single Person */}
            {/* Start Single Person */}
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="single-person">
                <div className="person-image">
                  <img
                    src="https://2.bp.blogspot.com/-tSO_ScmARNA/WsBq7fvxnOI/AAAAAAAAALw/5jfPNU9lhg0LLsA2othaXec4xbGE_pcDwCLcBGAs/w0/ImageFactory1521001459332.png"
                    style={{ "width": "12rem" }}
                    alt=""
                  />
                  <span className="icon">
                    <a href="/"><i className="fab fa-linkedin" /></a>
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">Abhiram</h3>
                </div>
              </div>
            </div>
            {/* / End Single Person */}
          </div>
        </div>
      </section>
    </div>
  );
}