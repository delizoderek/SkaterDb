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

import {ADD_VIDEO} from '../../utils/mutations';

export default function VideoForm() {
  const [videoData, setVideoData] = useState({title:'',releaseDate:'',videoCover:'',vidLink:''});
  const [brandList, setBrandList] = useState([]);
  const [skaterList, setSkaterList] = useState([]);
  const [soundtrackList, setSoundtrackList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState({ title: "", list: [] });
  const [addVideo,{error,data}] = useMutation(ADD_VIDEO);
  const skaterQuery = useQuery(GET_SKATERWITHID);
  const brandQuery = useQuery(GET_BRANDWITHID);
  const loading = brandQuery.loading && skaterQuery.loading;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVideoData({ ...videoData, [name]: value });
  };

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

  const handleItemSelect = (event) => {
    event.stopPropagation();
    event.preventDefault();

    if(modalProps.title === 'Skaters'){
      setSkaterList([{id:event.target.id,title: event.target.textContent}, ...skaterList]);
    } else if (modalProps.title === 'Brands'){
      setBrandList([{id:event.target.id,title: event.target.textContent}, ...brandList]);
    } else {
      setSoundtrackList([{id:event.target.id,title: event.target.textContent}, ...soundtrackList]);
    }

    setShowModal(false);
  };

  const handleSubmit = async (event) => {
    event.stopPropagation();
    event.preventDefault();
    const {title,releaseDate,videoCover,vidLink} = videoData;
    console.log(title);
    try {
      const newVideo = await addVideo({
        variables:{
          addVideoTitle: title,
          addVideoInput: {
            releaseDate,
            videoCover,
            vidLink,
            brands: brandList.map(item => item.id),
            skaters: skaterList.map(item => item.id),
            soundtrack:[],
          }
        }
      });
      console.log(newVideo);
    } catch (error) {
      console.log(error);
    }
    // setVideoData({title:'',releaseDate:'',videoCover:'',vidLink:''});
    // setSkaterList([]);
    // setBrandList([]);
    // setSoundtrackList([]);
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
          <Button disabled={loading} variant="outline-secondary" type="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col lg={5}>
          <Form.Label>Video Title</Form.Label>
          <Form.Control placeholder="Derek's Skate Palace" name="title" value={videoData.title} onChange={handleInputChange}/>
        </Col>
        <Col lg={5}>
          <Form.Label>Link to Cover Image</Form.Label>
          <Form.Control placeholder="https://derpicdn.net/img/2012/11/26/163895/large.png" name="videoCover" value={videoData.videoCover} onChange={handleInputChange}/>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col lg={5}>
          <Form.Label>Link to Video</Form.Label>
          <Form.Control placeholder="https://youtu.be/rEkt8VDfoTI" name="vidLink" value={videoData.vidLink} onChange={handleInputChange}/>
        </Col>
        <Col lg={3}>
          <Form.Label>Release Date</Form.Label>
          <Form.Control placeholder="2019" name="releaseDate" value={videoData.releaseDate} onChange={handleInputChange}/>
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
            {skaterList.map((item, i) => {
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
                return <ListGroup.Item key={i} id={item._id} onClick={handleItemSelect} className="btn btn-outline-secondary">{`${item.title}`}</ListGroup.Item>;
              })}
            </ListGroup>
          </div>
        </Modal.Body>
      </Modal>
    </Form>
  );
}
