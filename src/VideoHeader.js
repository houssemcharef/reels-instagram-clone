import React from 'react';
import ArrowBackIosSharpIcon from "@material-ui/icons/ArrowBackIosSharp";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import './VideoHeader.css';

export default function Videoheader() {
    

    return (
        <div className='videoHeader'>
            <ArrowBackIosSharpIcon />
            <h3>Reels</h3>
            <CameraAltOutlinedIcon />
        </div>
    )
}
