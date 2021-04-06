import React from "react";

const VideoDetail = ({video}) => {
    if(!video){
        return (
            <div>
                Loading...
            </div>
        )
    }
  return (
      <div>
          <div className='ui embed'>
              <iframe title='video player' src={process.env.REACT_APP_YOUTUBE_VIDEO_URL + video.id.videoId} />
          </div>
              <div className='ui segment'>
                  <h4 className='ui header'>
                        {video.snippet.title}
                  </h4>
                  <p>{video.snippet.description}</p>
              </div>
      </div>
  )
}

export default VideoDetail