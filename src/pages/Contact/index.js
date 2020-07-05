import React from 'react';
import ToggleButton from '../../components/SideDrawer/ToggleButton';
// import Drawer from '../../components/SideDrawer/Drawer';
import { Link } from 'react-router-dom';
import { SocialMediaIconsReact } from 'social-media-icons-react';
import './styles.scss';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

// import Logo from './../../assets/logo.png';

const Contact = props => {
    return (

<header className="toolbar">
    <nav className="toolbar_navigation">
        <div style={{height: '100%'}}>
            <ToggleButton />
            <SideDrawer />
        </div>

        <div className='toolbar_logo'><a href="/"> HOME </a></div>
        <div className='spacer' />
        <div className='toolbar_navigation_items'>
            <br />
            <br />
            <br />
            <ul>
                <li>
                    {/* <SocialMediaIconsReact icon="twitter" url */}
                    <a href="https://twitter.com/your-twitter-handle"> Twitter</a> 
                </li>
                <li>
                    {/* <SocialMediaIconsReact icon="facebook" url */}
                    <a href="https://facebook.com/Dashingco">Facebook</a>
                </li>
                <li>
                    {/* <SocialMediaIconsReact icon="instagram" url */}
                    <a href="https://instagram.com/Dashingco">Instagram</a>
                </li>
            </ul>

            <main style={{ marginTop: '20px' }}> 
                <p> Contact Us  </p>
            </main>
        </div>
    </nav>
</header>
);
}

export default Contact;