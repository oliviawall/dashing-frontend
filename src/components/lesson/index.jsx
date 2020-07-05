import React, { useState } from 'react';
import './styles.scss';
import ResponsivePlayer from '../Videos';

const Lesson = () => {

    const [watchComplete, setWatchComplete] = useState(false)
    
    const handleWatchComplete = ({ played }) => {
        if (played >= 0.8 && !watchComplete) {
            setWatchComplete(true)
        };
    }

    return (
    <div>
        <ResponsivePlayer 
        url='https://www.youtube.com/channel/UCoLn2MBLXmxZQNBBURSOg5Q/featured'
        onProgress={handleWatchComplete}
        />
        <div className={watchComplete ? 'marker marker--is-complete' 
        : 'marker marker--not-complete'}
        >
            Completed
        </div>
    </div>
    )
}

export default Lesson;