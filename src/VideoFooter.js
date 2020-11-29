import React from 'react';
import './VideoFooter.css';
import { Button, Avatar } from "@material-ui/core";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Ticker from 'react-ticker'

export default function VideoFooter({song, url, likes, shares, channel, avatarSrc}) {
    

    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <Avatar src={avatarSrc} />
                <h3> {channel} . <Button>follow</Button></h3>
            </div>
            <div className="videoFooter_ticker">
                <MusicNoteIcon className="videoFooter_icon" />
                <Ticker>
                    {({ index }) => (
                        <>
                            <h1>{song}</h1>
                            
                        </>
                    )}
                </Ticker>
            </div>
            <div className="videoFooter_action">
                <div className="videoFooter_actionLeft">
                    <FavoriteIcon />
                    <ChatBubbleIcon />
                    <SendIcon />
                    <MoreHorizIcon />    
                </div>
                <div className="videoFooter_actionRight">
                    <div className="videoFooter_stat">
                        <FavoriteIcon />
                        <p>{likes}</p>
                    </div>
                    <div className="videoFooter_stat">
                        <ChatBubbleIcon />
                        <p>{shares}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
