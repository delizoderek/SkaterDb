import React from 'react';
import {useParams} from 'react-router-dom'
import {Card, VideoCard, BrandCard} from './profileCard';
import { useQuery } from '@apollo/client';
import { GET_SKATERS, GET_VIDEOS, GET_BRANDS } from '../utils/queries';



function Display(props) {
let {id} = useParams();
const {loading, data} = useQuery(GET_SKATERS)
const skaters = data?.skaters || [];
  return (
    <div>
      {loading?<h1>loading</h1>:skaters.map((skater,i) => (
        <Card name={skater.firstName +" " + skater.lastName} pronouns={skater.pronouns} key={i} skaterId={skater._id} stance={skater.stance} totalVideos={skater.videos} />
      ))}
    </div>
  );
}


function VideoDisplay(props) {
  const {loading, data} = useQuery(GET_VIDEOS)
  const videos = data?.videos || [];
    return (
      <div>
        {loading?<h1>loading</h1>:videos.map((user) => (
          <VideoCard title={user.title} skaters={user.skaters} releasedate={user.releasedate} brand={user.brand} vidLink={user.vidLink} soundtrack={user.soundtrack}/>
        ))}
      </div>
    );
  }


  function Brand(props) {
    const {loading, data} = useQuery(GET_BRANDS)
    const brands = data?.brands || [];
      return (
        <div>
          {loading?<h1>loading</h1>:brands.map((user) => (
            <BrandCard name={user.brandName} description={user.description} key={user._id}  totalVideos={user.skateVideos} url={user.skateVideos.vidLinks[0]}/>
          ))}
        </div>
      );
    }

export {Display, VideoDisplay, Brand};