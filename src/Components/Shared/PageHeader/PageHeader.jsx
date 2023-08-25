import { useEffect, useState } from 'react';
import './PageHader.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeHigh, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';
const PageHeader = ({video}) => {
    const [scrollY, setScrollY] = useState(0);
    const [muteVideo, setMuteVideo] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="parallax-container">
            <video
                src={video}
                autoPlay
                loop
                muted={muteVideo}
                style={{
                    transform: `translateY(-${scrollY * 0.5}px)` // Adjust the parallax effect speed
                }}
                className="parallax-video"
            />
            { muteVideo ?
               <button onClick={() => setMuteVideo(false)} className='absolute bottom-0 right-0 p-5'><FontAwesomeIcon className='text-white' icon={faVolumeHigh} /></button>
                :
                <button onClick={() => setMuteVideo(true)} className='absolute bottom-0 right-0 p-5'><FontAwesomeIcon className='text-white' icon={faVolumeXmark} /></button>
            }
        </div>
    );
};

export default PageHeader;