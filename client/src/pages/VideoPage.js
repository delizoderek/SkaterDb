import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

const VideoPage = () => {
  return (
    <div className="container m-auto align-items-center mt-3">
        {/*Render a YouTube video player*/}
        <VideoPlayer link={"https://vimeo.com/4753710"} />
    
    </div>
  );
};

export default VideoPage
