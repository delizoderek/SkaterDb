import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import Display from  '../components/Display'
const SearchBrand = () => {
  // create state for holding returned google api data
  // Needs to be changed for searching brand
  const [searchedBrand, setSearchedBrand] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');

  // create method to search for brand and set state on form submit
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

  // create function to handle saving a brand to our database
  const handleSaveBrand = async (brandId) => {
    // find the brand in `searchedbrand` state by the matching id
    const brandToSave = searchedBrand.find((brand) => brand.brandId === brandId);
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }



    try {
      console.log(brandToSave);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Container>
      <h2>
        {searchedBrand.length
          ? `Viewing ${searchedBrand.length} results:`
          : 'Search for a brand'}
      </h2>
      <CardColumns>
        {searchedBrand.map((brand) => {
          return (
            <Card key={brand.brandId} border='dark'>
              {brand.image ? (
                <Card.Img src={brand.image} alt={`${brand.skateVideos}`} variant='top' />
              ) : null}
              <Card.Body>
                <Card.Title>{brand.skateVideos}</Card.Title>

                <Card.Text>{brand.description}</Card.Text>
                {Auth.loggedIn() && (
                  <Button
                    className='btn-block btn-info'
                    onClick={() => handleSaveBrand(brand.brandId)}>
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

export default SearchBrand;