import React, { useState, useEffect } from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";
import { InfoCard} from "../components/profileCard";
import { useQuery } from '@apollo/client';
import { GET_SKATERS} from '../utils/queries';

const SearchSkater = () => {
  const [searchedSkater, setSearchedSkater] = useState([]);
  // create state for holding our search field data
  const [searchInput, setSearchInput] = useState("");

  const { loading, data } = useQuery(GET_SKATERS);
  const skaters = data?.skaters || [];

  return (
    <>
      <Container>
        <h2>
          {skaters.length
            ? `Viewing ${skaters.length} results:`
            : "Whoops something happened on our end"}
        </h2>
        <CardColumns>
          {skaters.map((skater,i) => {
            return (
              <InfoCard
                key={i}
                name={`${skater.firstName} ${skater.lastName}`}
                link={`/skater/${skater._id}`}
                content={`Stance: ${skater.stance}`}
                numVideos={skater.videos.length}
              />
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SearchSkater;
