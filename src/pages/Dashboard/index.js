import React, { Link } from 'react';
import './styles.scss';
// import VideoGrid from './../VideoGrid';
// import Button from './../../../../


// import QRcodes from '../../components/QRCodes';
import Lesson from '../../components/lesson';
// import Videos from '../../components/Videos';

const Dashboard = props => {
    return (

        <div className='dash'>
            <h1 >
                Welcome to your dashboard!
             </h1>
             <div>
         
             <h2>
                - - Applicants videos go here - - 
                {/* <Videos />  */}
             </h2>
             </div>

            {/* <VideoGrid /> */}


            {/* <QRcodes /> */}
            <Lesson />    
                  

        </div>
    );
};

export default Dashboard;