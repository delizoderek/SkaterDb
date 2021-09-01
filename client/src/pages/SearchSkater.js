import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

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

  // create function to handle saving a book to our database
  const handleSaveSkater = async (skaterId) => {
    // find the book in `searchedSkater` state by the matching id
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
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Skater!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a skater'
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type='submit' variant='success' size='lg'>
                  Submit Search
                </Button>
              </Col>
            </Form.Row>
          </Form>
        </Container>
      </Jumbotron>

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
                  <Card.Img src={skater.image} alt={`The cover for ${skater.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  <Card.Title>{skater.title}</Card.Title>
                  <p className='small'>Authors: {skater.authors}</p>
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
    </>
  );
};

export default SearchSkater;
