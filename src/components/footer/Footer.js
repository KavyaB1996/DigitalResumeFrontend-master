import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer id="footer">
            <ul className="icons">
                <li><Link to="#" className="icon brands fa-twitter"><span className="label">Twitter</span></Link></li>
                <li><Link to="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></Link></li>
                <li><Link to="#" className="icon brands fa-instagram"><span className="label">Instagram</span></Link></li>
                <li><Link to="#" className="icon solid fa-envelope"><span className="label">Email</span></Link></li>
            </ul>
            <ul className="copyright">
                <li>&copy; ICTAK</li><li>Design: <Link to="/">BATCH 1 - Group 6</Link></li>
            </ul>
        </footer>
    );
}

export default Footer;