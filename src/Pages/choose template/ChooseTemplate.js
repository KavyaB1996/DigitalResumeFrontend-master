import React from 'react';
import './ChooseTemplate.css';
import { useNavigate } from 'react-router-dom';
import tempTwoImage from './image/Template Two.png'
import tempThreeImage from './image/Template Three.png'


let ChooseTemplate = (props) => {

  let { templateNum } = props;

  let navigate = useNavigate();

  return (
    <div className='chooseTemp'>
      <div className="slider">
        <div className="chooseHeader">
          <h1>Choose Your Template</h1>
        </div>
        <br /><br />

        <a href="#slide-1" className='slideButton'>1</a>
        <a href="#slide-2" className='slideButton'>2</a>
        <a href="#slide-3" className='slideButton'>3</a>



        <div className="slides">
          <div id="slide-1">
            <img src="https://www.linkpicture.com/q/photo_2022-03-08_13-37-04.jpg" alt="" />
          </div>
          <div id="slide-2">
            <img src={tempTwoImage} style={{ 'height': 'fit-content' }} alt="" />
          </div>
          <div id="slide-3">
            <img src={tempThreeImage} style={{ 'height': 'fit-content' }} alt="" />
          </div>


        </div>


        <div className='resumeButtons'>
          <div className='tempButtonOne'>
            <button onClick={(e) => {
              props.setTemplateNum(1);
              navigate(`/api/user/resume/${templateNum}`);

            }}>Click here for Template 1</button>
          </div>

          <div className='tempButtonTwo'>
            <button onClick={(e) => {
              props.setTemplateNum(2);
              navigate(`/api/user/resume/${templateNum}`);
            }}>Click here for Template 2</button>
          </div>

          <div className='tempButtonThree'>
            <button onClick={(e) => {
              props.setTemplateNum(3);
              navigate(`/api/user/resume/${templateNum}`);
            }}>Click here for Template 3</button>
          </div>
        </div>

        <br /><br />
      </div>
    </div>

  );
}

export default ChooseTemplate;