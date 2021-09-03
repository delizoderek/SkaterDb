import React from 'react';
import { BrandCard} from './PopulateBrands';
import { useQuery } from '@apollo/client';
import { GET_BRANDS } from '../utils/queries';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

const SearchBrand = () => {
  const [searchedBrand , setSearchedBrand ] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState('');
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
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Search for Brands!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name='searchInput'
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type='text'
                  size='lg'
                  placeholder='Search for a Brand'
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
          {searchedBrand.length
            ? `Viewing ${searchedBrand.Brand.length} results:`
            : 'Search for a Brand to begin'}
        </h2>
        <CardColumns>
          {searchedBrand .map((Brand) => {
            return (
              <Card key={Brand.BrandId} border='dark'>
                {Brand.image?(
                  <Card.Img src={Brand.image} alt={Brand.title} variant='top' />
                ):null}
                <Card.Body>
                  <Card.Title>{Brand.brandName}</Card.Title>
                  <p className='small'>Brands:{Brand.skateVideos}</p>
                  <Card.Text>{Brand.description}</Card.Text>
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
