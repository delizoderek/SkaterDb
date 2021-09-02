// import React from 'react';
// import { Card, VideoCard } from './profileCard';
// import { useQuery, useEffect, useState } from '@apollo/client';
// import { GET_SKATERS, GET_VIDEOS } from '../utils/queries';


// export function Display() {
//   const { loading, data } = useQuery(GET_SKATERS)
//   const skaters = data?.skaters || [];
//   if (loading) return (
//     <div>
//       <h1>loading</h1>
//     </div>
//   );
//   if (error) return `Error! ${error.message}`;
//   return (
//     <div>
//       {skaters.map((user) => {
//         <Card name={user.firstName} pronouns={user.pronouns} key={user.id} stance={user.stance} totalVideos={user.videos} />
//       })}
//     </div>
//   );
// }


// export function VideoDisplay() {
//   const { loading, data } = useQuery(GET_VIDEOS)
//   const videos = data?.videos || [];
//   if (loading) return (
//     <div>
//       <h1>loading</h1>
//     </div>
//   );
//   if (error) return `Error! ${error.message}`;
//   return (
//     <div>
//       {videos.map((user) => {
//         <VideoCard title={user.title} skaters={user.skaters} releasedate={user.releasedate} brand={user.brand} vidLink={user.vidLink} soundtrack={user.soundtrack} />
//       })}
//     </div>
//   );
// }