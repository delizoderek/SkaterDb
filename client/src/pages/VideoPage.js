import React from 'react';
import VideoPlayer from '../components/VideoPlayer';

const VideoPage = () => {
  return (
    <div className="container bg-dark">
      <h1>Here Are Some of Our Favorite Videos:</h1>
        {/*Render a YouTube video player*/}
      
        <VideoPlayer link = {"https://vimeo.com/4753710"} />
    
    </div>
  );
};

export default VideoPage
