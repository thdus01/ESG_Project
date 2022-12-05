import React from "react";
import './Footer.css';
import esg_2 from '../../assets/esg_2.png';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer_div">
                <hr></hr>
                <footer className="footer1">
                    <div><a href='https://blog.naver.com/lbamiraean' style={{ textDecoration: 'none', color: 'rgb(146, 146, 146)' }}>
                        © lbamiraean
                    </a>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Footer;