import React, { useState, useRef} from 'react'
import VideoHeader from './VideoHeader.js'
import VideoFooter from './VideoFooter.js'
import './VideoCard.css';

export default function VideoCard({song, url, likes, shares, channel, avatarSrc}) {
    const [isVideoPlayingin, setIsVideoPlaying] = useState(false);
    const videoRef=useRef(null);
    const onVideoPress= () => {
        if(isVideoPlayingin){
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }else {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }

    return (
        <div className='videoCard'>
          <VideoHeader />  
          <video
          ref={videoRef}
          onClick={onVideoPress}
          className="video_player"
          src={url}
          alt=""
          loop
          />  
          <VideoFooter 
            channel={channel}
            url={url}
            avatarSrc={avatarSrc}
            likes={likes}
            shares={shares}
            song={song}
          />
        </div>
    )
}
