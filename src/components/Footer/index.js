import React from 'react';
import './styles.scss';
// import QRCode from '../QRCodes';


const Footer = props => {
    return (
        <footer className= 'footer'>
            <div className='wrap'>
             © Dashing 2020
             <br></br>
             <br></br>

             {/* <QRCode /> */}
            </div> 
        </footer>
    );
}

export default Footer;