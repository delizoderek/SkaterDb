import React from 'react';
import MovieTime from '../components/VideoContent';

const VideoPage = () => {
  return (
    <div className="d-flex flex-grow-1 m-auto bg-transparent">
      <div className="bg-dark">
        {/*Render a YouTube video player*/}
        <MovieTime />
      </div>
    </div>
  );
};

export default VideoPage
