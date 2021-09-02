import React from 'react';
import {Card, VideoCard, BrandCard} from './profileCard';
import { useQuery } from '@apollo/client';
import { GET_SKATERS, GET_VIDEOS, GET_BRANDS } from '../utils/queries';


export function Display() {
const {loading, data} = useQuery(GET_SKATERS)
const skaters = data?.skaters || [];
  return (
    <div>
      {loading?<h1>loading</h1>:skaters.map((user) => (
        <Card name={user.firstName +" " + user.lastName} pronouns={user.pronouns} key={user.id} stance={user.stance} totalVideos={user.videos} />
      ))}
    </div>
  );
}


export function VideoDisplay() {
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


  export function Brand() {
    const {loading, data} = useQuery(GET_BRANDS)
    const brands = data?.brands || [];
      return (
        <div>
          {loading?<h1>loading</h1>:brands.map((user) => (
            <BrandCard name={user.brandName} description={user.description} key={user._id}  totalVideos={user.skateVideos} />
          ))}
        </div>
      );
    }

  export default Display;