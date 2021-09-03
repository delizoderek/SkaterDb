import React, { useState } from "react";
import { BrandCard } from "../components/profileCard";
import { useQuery } from "@apollo/client";
import { GET_BRANDS } from "../utils/queries";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import Auth from "../utils/auth";
// const SearchBrand = () => {
//   const [searchedBrand , setSearchedBrand ] = useState([]);
//   // create state for holding our search field data
//   const [searchInput, setSearchInput] = useState('');
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     if (!searchInput) {
//       return false;
//     }
//     try {
//       setSearchInput('');
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <>
//       <Jumbotron fluid className='text-light bg-dark'>
//         <Container>
//           <h1>Search for Brands!</h1>
//           <Form onSubmit={handleFormSubmit}>
//             <Form.Row>
//               <Col xs={12} md={8}>
//                 <Form.Control
//                   name='searchInput'
//                   value={searchInput}
//                   onChange={(e) => setSearchInput(e.target.value)}
//                   type='text'
//                   size='lg'
//                   placeholder='Search for a Brand'
//                 />
//               </Col>
//               <Col xs={12} md={4}>
//                 <Button type='submit' variant='success' size='lg'>
//                   Submit Search
//                 </Button>
//               </Col>
//             </Form.Row>
//           </Form>
//         </Container>
//       </Jumbotron>
//       <Container>
//         <h2>
//           {searchedBrand.length
//             ? `Viewing ${searchedBrand.Brand.length} results:`
//             : 'Search for a Brand to begin'}
//         </h2>
//         <CardColumns>
//           {searchedBrand .map((Brand) => {
//             return (
//               <Card key={Brand.BrandId} border='dark'>
//                 {Brand.image?(
//                   <Card.Img src={Brand.image} alt={Brand.title} variant='top' />
//                 ):null}
//                 <Card.Body>
//                   <Card.Title>{Brand.brandName}</Card.Title>
//                   <p className='small'>Brands:{Brand.skateVideos}</p>
//                   <Card.Text>{Brand.description}</Card.Text>
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
// };

// export default SearchBrand;

const SearchBrand = () => {
  // create state for holding returned google api data
  // Needs to be changed for searching skaters
  const [searchedBrand, setSearchedBrand] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  const queryObj = useQuery(GET_BRANDS);
  // const brands = data?.brands || [];

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
      setSearchInput("");
    } catch (err) {
      console.error(err);
    }
  };

  // create function to handle saving a skater to our database
  const handleSaveSkater = async (brandId) => {
    // find the skater in `searchedSkater` state by the matching id
    const brandToSave = searchedBrand.find(
      (brand) => brand.brandId === brandId
    );
    // get token
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      console.log(brandToSave);
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

  console.log(queryObj);

  return (
    <>
      <Container>
        <CardColumns>
          {queryObj.loading ? (
            <h1>Hello World</h1>
          ) : (
            queryObj.data.brands.map((item,i) => {
              {
                  return (
                    <Card key={i} border="dark">
                      {item.logo ? (
                        <Card.Img
                          src={item.logo}
                          alt={item.brandName}
                          variant="top"
                        />
                      ) : ''}
                      <Card.Body>
                        <Card.Title>{item.brandName}</Card.Title>
                        <p className="small">Videos:{item.skateVideos.length}</p>
                        <Card.Text>{item.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  );
              }
            })
          )}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchBrand;
