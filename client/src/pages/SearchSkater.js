import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
// import Alphabet from '../components/Alphabet'
import {Display, Brand} from  '../components/Display'


import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
// import { saveSkaterIds, getFavoriteSkaters } from '../utils/localStorage'; Use local storage if we need to

const SearchSkater = () => {
  // create state for holding returned google api data
  // Needs to be changed for searching skaters
  const [searchedSkater, setSearchedSkater] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create state to hold saved bookId values
  // const [savedBookIds, setSavedBookIds] = useState(getSavedBookIds());

  // set up useEffect hook to save `savedBookIds` list to localStorage on component unmount
  // learn more here: https://reactjs.org/docs/hooks-effect.html#effects-with-cleanup
  // useEffect(() => {
  //   return () => saveBookIds(savedBookIds);
  // });

  // create method to search for Skater and set state on form submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {

      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a skater to our database
  const handleSaveSkater = async (skaterId) => {
    // find the skater in `searchedSkater` state by the matching id
    const skaterToSave = searchedSkater.find((skater) => skater.skaterId === skaterId);
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }



    try {
      console.log(skaterToSave);
      // const response = await saveBook(bookToSave, token);

      // if (!response.ok) {
      //   throw new Error('something went wrong!');
      // }

      // // if book successfully saves to user's account, save book id to state
      // setSavedBookIds([...savedBookIds, bookToSave.bookId]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Container>
        <h2>
          {searchedSkater.length
            ? `Viewing ${searchedSkater.length} results:`
            : 'Search for a skater'}
        </h2>
        <CardColumns>
          {searchedSkater.map((skater) => {
            return (
              <Card key={skater.skaterId} border='dark'>
                {skater.image ? (
                  <Card.Img src={skater.image} alt={`${skater.firstName}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{skater.firstName} {skater.lastName}</Card.Title>
                  {/* <p className='small'>Authors: {skater.authors}</p> */}
                  <Card.Text>{skater.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      // disabled={savedskaterIds?.some((savedskaterId) => savedskaterId === skater.skaterId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveSkater(skater.skaterId)}>
                      {/* {savedskaterIds?.some((savedskaterId) => savedskaterId === skater.skaterId)
                        ? 'This skater has already been saved!'
                        : 'Save this skater!'} */}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
          {/* <Alphabet /> */}
          <Container>
            <CardColumns>
          <Display className="flex-row" />
          </CardColumns>
        
          </Container>
    </>
  );
};

export default SearchSkater;
