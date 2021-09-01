import React from 'react';
import Card from './profileCard';
import { useQuery } from '@apollo/client';
import { GET_SKATERS } from '../utils/queries';



export default function Display() {
const {loading, data} = useQuery(GET_SKATERS)
const skaters = data?.skaters || [];
  return (
    <div>
      {loading?<h1>loading</h1>:skaters.map((user) => (
        <Card name={user.firstName} pronouns={user.pronouns} key={user.id} stance={user.stance} totalVideos={user.videos} />
      ))}
    </div>
  );
}