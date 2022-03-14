import React from 'react';
import './Pdf.css';
import Addcomment from '../user comments/Addcomment';


function Pdf(props) {
    return (
        <div className='pdfBody'>
            <h1>Your feedbacks are important for us</h1>
            <br /><br />
            <div className='addComment'>
                <Addcomment />
            </div>
            <br /><br />
        </div>
    );
}

export default Pdf;