import React, { useState } from "react";
import { Link } from "react-router-dom";
import { InfoCard } from "../components/profileCard";
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

const SearchBrand = () => {
  // create state for holding returned google api data
  // Needs to be changed for searching skaters
  const [searchedBrand, setSearchedBrand] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  const queryObj = useQuery(GET_BRANDS);

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

  return (
    <>
      <Container>
        <CardColumns className="my-4">
          {queryObj.loading ? (
            <h1>Loading</h1>
          ) : (
            queryObj.data.brands.map((item, i) => {
              {
                return (
                  <InfoCard
                    key={i}
                    name={item.brandName}
                    link={`/brand/${item._id}`}
                    content={''}
                    numVideos={item.skateVideos.length}
                  />
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
