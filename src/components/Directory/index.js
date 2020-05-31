import React from 'react';
// import JobSeekers from './../../assets/jobSeekers.png';
// import Employers from './../../assets/employers.png';
// import Background from './../../assets/redBackground.png';

import './styles.scss';

const Directory = props => {
    return (
        <div className='directory'>
            <div className='wrap'>
                <div
                    className='item'
                    // style={{
                    //     backgroundImage: `url(${Background})`
                    // }}
                >
                    <div className='jobSearch'>
                    <a>
                    © Dashing 2020
           </a>
           </div>
                </div>
                {/* <div className='item'
                    style={{
                        backgroundImage: `url(${Employers})`
                    }}
                >
                    <a>
                        Employers
              </a>
                </div> */}
            </div>
        </div>
    );
};

export default Directory;