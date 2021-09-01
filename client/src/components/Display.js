import React from 'react';
import Card from './profileCard';

const skaters = [
  {
    firstName: '',
    lastName: '',
    pronouns: '',
    stance: '',
    videos: '',
    id: 1,
  },
  {
    firstName: '',
    lastName: '',
    pronouns: '',
    stance: '',
    videos: '',
    id: 2,
  },
  {
    firstName: '',
    lastName: '',
    pronouns: '',
    stance: '',
    videos: '',
    id: 3,
  },
];

export default function Display() {
  return (
    <div>
      {skaters.map((user) => (
        <Card name={user.firstName} pronouns={user.pronouns} key={user.id} stance={user.stance} totalVideos={user.videos} />
      ))}
    </div>
  );
}