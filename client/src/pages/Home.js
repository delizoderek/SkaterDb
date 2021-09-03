import React from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useQuery } from '@apollo/client';
import VideoPlayer from '../components/VideoPlayer';

import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem,menuVariant } from 'react-bootstrap';
// import Display, { VideoDisplay } from '../components/Display'
// import LoginForm from '../components/LoginForm';
// import Navbar from '../components/Navbar';
// import SignupForm from '../components/SignupForm';


function Home() {
  const responsive = {
    desktop: {
    breakpoint: {max: 3000, min: 1024},
  items: 3,
  slidesToSlide: 3 // optional, default to 1.
},
  tablet: {
    breakpoint: {max: 1024, min: 464 },
  items: 2,
  slidesToSlide: 2 // optional, default to 1.
},
  mobile: {
    breakpoint: {max: 464, min: 0 },
  items: 1,
  slidesToSlide: 1 // optional, default to 1.
}
};
  return (
  
    <div className= "homePage">
      {/* <Navbar />  */}
      {/* <LoginForm />
      <SignupForm /> */}
      <h1>Welcome to Skater Hx, see the past and view the future of skating</h1>
      {/* <Display /> */}
      {/*} <VideoDisplay />*/}
      <div className= "d-flex flex-wrap">
      <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/brand">Video by Brand</Nav.Link>
      <Nav.Link href="/skater">Video by Skater</Nav.Link>
      <Nav.Link href="/videos">Theatre</Nav.Link>
    </Nav>

      <Carousel className="container" 
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        // deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div>
        <VideoPlayer link = {"https://vimeo.com/4753710"} />
          </div>
        <div><VideoPlayer link = {"https://vimeo.com/261051184"} /></div>
        <div><VideoPlayer link = {"https://vimeo.com/261052965"} /></div>
        <div><VideoPlayer link = {"https://youtu.be/Qp_vOLB-OUE"} /></div>
      </Carousel>
      </div>
      <Container>

      </Container>
    </div>

  )
};

// import { QUERY_SKATERS } from '../utils/queries';
  // const { loading, data } = useQuery(QUERY_SKATERS);
  // const profiles = data?.profiles || [];

  
export default Home;
