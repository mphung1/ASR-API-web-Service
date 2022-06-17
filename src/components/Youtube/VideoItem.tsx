import React from 'react';

// .video-item {
//     display: flex !important;
//     align-items: center !important;
//     cursor: pointer;
// }

// .video-item.item img {
//     max-width: 200px;
//     max-height: 250px ;
// }

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className='video-item item'>
            <img className='ui image' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
            <div className='content'>
                <div className='header'>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;