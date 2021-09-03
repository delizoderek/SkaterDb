// see SignupForm.js for comments
import React, { useState } from "react";
import {
  Form,
  Button,
  Alert,
  Row,
  Col,
  ListGroup,
  Modal,
} from "react-bootstrap";
import { useQuery, useMutation } from "@apollo/client";
// import { useMutation, useQuery } from "@apollo/client";
import {
  GET_VIDWITHID,
  GET_BRANDWITHID,
  GET_SKATERWITHID,
} from "./formQueries";

import 

export default function VideoForm() {
  const [videoData, setVideoData] = useState({});
  const [brandList, setBrandList] = useState([]);
  const [videoList, setVideoList] = useState([]);
  const [soundtrackList, setSoundtrackList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState({ title: "", list: [] });
  const skaterQuery = useQuery(GET_SKATERWITHID);
  const brandQuery = useQuery(GET_BRANDWITHID);
  const loading = brandQuery.loading && skaterQuery.loading;

  const handleBrandClick = (e) => {
    e.preventDefault();
    setModalProps({
      title: "Brands",
      list: brandQuery.data.brands.map((item) => {
        return {
          _id: item._id,
          title: item.brandName,
        };
      }),
    });
    setShowModal(true);
  };
  const handleSkatersClick = (e) => {
    e.preventDefault();
    setModalProps({
      title: "Skaters",
      list: skaterQuery.data.skaters.map((item) => {
        return {
          _id: item._id,
          title: `${item.firstName} ${item.lastName}`,
        };
      }),
    });
    setShowModal(true);
  };

  const handleSoundtrackClick = (e) => {
    e.preventDefault();
    setSoundtrackList(["Text", ...soundtrackList]);
  };

  const handleCheckbox = (event) => {
    event.stopPropagation();
    event.preventDefault();
    
    if(modalProps.title === 'Skaters'){
      setVideoList([{id:event.target.id,title: event.target.textContent}, ...videoList]);
    } else if (modalProps.title === 'Brands'){
      setBrandList([{id:event.target.id,title: event.target.textContent}, ...brandList]);
    } else {
      setSoundtrackList([{id:event.target.id,title: event.target.textContent}, ...soundtrackList]);
    }

    setShowModal(false);
  };

  const handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

  }


  return (
    <Form className="w-100 second-bg m-auto py-2 px-5 rounded">
      <Row className="d-flex align-items-center justify-content-between">
        <Col lg={7}>
          <Form.Label>Action Type</Form.Label>
          <select value={videoData.actionType} className="m-3">
            <option value="Add">Add</option>
            <option value="Update">Update</option>
            <option value="Delete">Delete</option>
          </select>
        </Col>
        <Col lg={2}>
          <Button disabled={loading} variant="outline-secondary" type="submit">
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
            disabled={loading}
            onClick={handleBrandClick}
            className="w-100"
          >
            +
          </Button>
          <ListGroup className="listHeight">
            {brandList.map((item, i) => {
              return <ListGroup.Item key={i}>{item.title}</ListGroup.Item>;
            })}
          </ListGroup>
        </Col>
        <Col className="text-center">
          <Form.Label>Skaters</Form.Label>
          <Button
            variant="outline-secondary"
            disabled={loading}
            onClick={handleSkatersClick}
            className="w-100"
          >
            +
          </Button>
          <ListGroup className="listHeight">
            {videoList.map((item, i) => {
              return <ListGroup.Item key={i}>{item.title}</ListGroup.Item>;
            })}
          </ListGroup>
        </Col>
        <Col className="text-center">
          <Form.Label>Soundtrack</Form.Label>
          <Button
            variant="outline-secondary"
            disabled={loading}
            onClick={handleSoundtrackClick}
            className="w-100"
          >
            +
          </Button>
          <ListGroup className="listHeight">
            {soundtrackList.map((item, i) => {
              return <ListGroup.Item key={i}>{`${item}${i}`}</ListGroup.Item>;
            })}
          </ListGroup>
        </Col>
      </Row>
      <Modal size="lg" show={showModal} onHide={() => setShowModal(false)}>
        {/* tab container to do either signup or login component */}
        <Modal.Header closeButton>
          <Modal.Title>{`Select ${modalProps.title}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="listHeight">
            <ListGroup className="listHeight">
              {modalProps.list.map((item, i) => {
                return <ListGroup.Item key={i} id={item._id} onClick={handleCheckbox} className="btn btn-outline-secondary">{`${item.title}`}</ListGroup.Item>;
              })}
            </ListGroup>
          </div>
        </Modal.Body>
      </Modal>
    </Form>
  );
}
