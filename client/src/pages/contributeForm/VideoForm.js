// see SignupForm.js for comments
import React, { useState } from "react";
import { Form, Button, Alert, Row, Col, ListGroup } from "react-bootstrap";
import {useQuery,useMutation} from '@apollo/client'
// import { useMutation, useQuery } from "@apollo/client";
import { GET_VIDWITHID } from "./formQueries";

export function VideoForm() {
  const [videoData,setVideoData] = useState({});
  const [brandList, setBrandList] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [soundtrackList, setSoundtrackList] = useState([]);
  const { loading, error, data } = useQuery(GET_VIDWITHID);

  const handleBrandClick = (e) => {
    e.preventDefault();
    setBrandList(["Text", ...brandList]);
  };

  const handleVideoClick = (e) => {
    e.preventDefault();
    setVideoList(["Text", ...videoList]);
  };

  const handleSoundtrackClick = (e) => {
    e.preventDefault();
    setSoundtrackList(["Text", ...soundtrackList]);
  };

  return (
    <Form className="w-100 second-bg m-auto py-2 px-5 rounded">
      <Row className="d-flex align-items-center justify-content-between">
        <Col lg={7}>
        <Form.Label>Action Type</Form.Label>
        <select className="m-3">
          <option value="Add">Add</option>
          <option value="Update">Update</option>
          <option value="Delete">Delete</option>
        </select>
        </Col>
        <Col lg={2}>
        <Button variant="outline-secondary" type="submit">
          Submit
        </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={5}>
          <Form.Label>Video Title</Form.Label>
          <Form.Control placeholder="Derek's Skate Palace" />
        </Col>
        <Col lg={5}>
          <Form.Label>Link to Cover Image</Form.Label>
          <Form.Control placeholder="https://derpicdn.net/img/2012/11/26/163895/large.png" />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={5}>
          <Form.Label>Link to Video</Form.Label>
          <Form.Control placeholder="https://youtu.be/rEkt8VDfoTI" />
        </Col>
        <Col lg={3}>
          <Form.Label>Release Date</Form.Label>
          <Form.Control placeholder="2019" />
        </Col>
      </Row>
      <Row className="d-flex justify-content-around mt-3">
        <Col className="text-center">
          <Form.Label>Brands</Form.Label>
          <Button
            variant="outline-secondary"
            onClick={handleBrandClick}
            className="w-100"
          >
            +
          </Button>
          <ListGroup className="listHeight">
            {brandList.map((item, i) => {
              return <ListGroup.Item key={i}>{`${item}${i}`}</ListGroup.Item>;
            })}
          </ListGroup>
        </Col>
        <Col className="text-center">
          <Form.Label>Videos</Form.Label>
          <Button
            variant="outline-secondary"
            onClick={handleVideoClick}
            className="w-100"
          >
            +
          </Button>
          <ListGroup className="listHeight">
            {videoList.map((item, i) => {
              return <ListGroup.Item key={i}>{`${item}${i}`}</ListGroup.Item>;
            })}
          </ListGroup>
        </Col>
        <Col className="text-center">
          <Form.Label>Soundtrack</Form.Label>
          <Button
            variant="outline-secondary"
            onClick={handleSoundtrackClick}
            className="w-100"
          >
            +
          </Button>
          <ListGroup className="listHeight">
            {loading?<ListGroup.Item>Loading your data</ListGroup.Item>:data.skateVideos.map((item, i) => {
              return <ListGroup.Item key={i}>{item.title}</ListGroup.Item>;
            })}
          </ListGroup>
        </Col>
      </Row>
    </Form>
  );
}
