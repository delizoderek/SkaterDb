import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import Auth from '../utils/auth';
// import { removeSkaterId } from '../utils/localStorage';}

const SavedSkater = () => {
  const [userData, setUserData] = useState({});

  // use this to determine if `useEffect()` hook needs to run again
  const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
        const token = Auth.loggedIn() ? Auth.getToken() : null;

        if (!token) {
          return false;
        }
        // Load User Profile
        // const response = await getMe(token);

        // if (!response.ok) {
        //   throw new Error('something went wrong!');
        // }

        // const user = await response.json();
        // setUserData(user);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [userDataLength]);

  // create function that accepts the Skater's mongo _id value as param and deletes the Skater from the database
  const handleDeleteSkater = async (SkaterId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      // Might not need this
      
      console.log("Welcome");
      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // const updatedUser = await response.json();
      // setUserData(updatedUser);
      // upon success, remove Skater's id from localStorage
      removeSkaterId(skaterId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (!userDataLength) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved Skaters!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {userData.SavedSkater.length
            ? `Viewing ${userData.SavedSkater.length} saved ${userData.SavedSkater.length === 1 ? 'skater' : 'skaters'}:`
            : 'You have no saved skaters!'}
        </h2>
        <CardColumns>
          {userData.SavedSkater.map((skater) => {
            return (
              <Card key={skater.skaterId} border='dark'>
                {skater.image ? <Card.Img src={skater.image} alt={`The cover for ${skater.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{skater.title}</Card.Title>
                  <p className='small'>Skaters {skater.skaters}</p>
                  <Card.Text>{skater.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteSkater(skater.skaterId)}>
                    Delete this skater!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedSkater;
