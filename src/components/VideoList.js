import React from 'react'
import VideoItems from "./VideoItems";

const VideoList = ({videos, onVideoSelect}) => {
    const video_item = videos.map((videoItem) => {
        return <VideoItems key={videoItem.id.videoId} video={videoItem} onVideoSelect={onVideoSelect}/>
    })
   return (
       <div className='ui relaxed divided list'>
           {video_item}
       </div>
   )
}

export default VideoList