import { useEffect, useState } from 'react';
import './App.css';
import db from './firebase';
import VideoCard from './VideoCard';

function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    db.collection("reels").onSnapshot((snapshot)=> (
      setReels(snapshot.docs.map(doc=>doc.data()))
    ))
  }, [])
  console.log(reels);
  
  return (
    <div className="app">
      
      <div className="app_top" >
        <img className="app_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1024px-Instagram_logo_2016.svg.png"
        alt=""
        />
        <h1>Reels</h1>
      </div>
      <div className="app_videos">
        {reels.map((reel) => (
          <VideoCard
          channel={reel.channel}
          avatarSrc={reel.avatarSrc}
          song={reel.song}
          url={reel.url}
          likes={reel.likes}
          shares={reel.shares}
        />
        ))}
      </div>
    </div>
  );
}

export default App;
