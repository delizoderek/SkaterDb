import React from "react";
import {
  Jumbotron,
  Container,
  Col,
  Form,
  Button,
  Card,
  CardColumns,
} from "react-bootstrap";

function InfoCard({ id, imageLink, title, bodyText, links }) {
  const handleCardClick = () => {};
  return (
    <Card key={id} border="dark">
      {imageLink ? (
        <Card.Img
          src={imageLink}
          alt={title}
          variant="top"
        />
      ) : null}
      <Card.Body>
        <Card.Title>
          {title}
        </Card.Title>
        {/* <p className='small'>Authors: {skater.authors}</p> */}
        <Card.Text>{bodyText}</Card.Text>
        {Auth.loggedIn() && (
          <Button
            // disabled={savedskaterIds?.some((savedskaterId) => savedskaterId === skater.skaterId)}
            className="btn-block btn-info"
            onClick={() => handleCardClick}
          >
            {/* {savedskaterIds?.some((savedskaterId) => savedskaterId === skater.skaterId)
                        ? 'This skater has already been saved!'
                        : 'Save this skater!'} */}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default InfoCard;
