import React, {Link} from 'react';
import './styles.scss';
import VideoGrid from './../VideoGrid';
// import Button from './../../../../


// import QRcodes from '../../components/QRCodes';
// import Lesson from '../../components/lesson';
// import Videos from '../../components/Videos';

const Dashboard = props => {
    return (
        <div className='dash'>
            <h1>
                Welcome to your dashboard!
            <ul>
                    <li>
                        <Link to='/videogrid'>
                            Applicants Video Resumes
                        </Link>
                    </li>
                </ul>
          
                    <VideoGrid />
                
                
                {/* <QRcodes /> */}
                {/* <Lesson />     */}
                {/* <Videos />        */}
            </h1>
        </div>
    );
};

export default Dashboard;