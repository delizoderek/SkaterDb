import React from 'react';
import  VideoPlayer  from './VideoPlayer';
import { useQuery } from '@apollo/client';
import { GET_VIDEOS } from '../utils/queries';
import CLog from './Consolelog';

export default function MovieTime () {
    const {loading, data} = useQuery(GET_VIDEOS);
    const skateVideos = data?.skateVideos || [];
    return(
        <div>
        <h1>hi this is working</h1>
        {loading?<h1>loading</h1>:skateVideos.map((skateVideos, i) => ( 
        <CLog key={i} link={skateVideos.vidLink}/>))}
        </div>
    );
}