import { useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import { GET_SINGLE_VIDEO } from '../utils/queries';

const VideoPage = () => {
  const {id} = useParams();
  const queryObj = useQuery(GET_SINGLE_VIDEO,{variables:{skateVideo: id}});
  console.log(queryObj)
  const video = queryObj.data?.skateVideo || {};
  return (
    <div className="d-flex flex-column container justify-content-center align-items-center mt-3">
        {/*Render a YouTube video player*/}
        <h3>The Theatre</h3>
        {queryObj.loading?<h1>Loading</h1> : <VideoPlayer link={video.vidLink} />}
    </div>
  );
};

export default VideoPage
