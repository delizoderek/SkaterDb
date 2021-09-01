import React from "react";
import { Container } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useQuery } from '@apollo/client';
import Display from '../components/Display'
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
    <div>
      {/* <Navbar />  */}
      {/* <LoginForm />
      <SignupForm /> */}
      <h1>Welcome to our site </h1>
      <Display />
      <Carousel
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
          <img src="https://www.placecage.com/gif/200/300"></img>
          </div>
        <div><img src="https://www.placecage.com/c/200/300"></img></div>
        <div><img src="https://www.placecage.com/200/300"></img></div>
        <div><img src="https://www.placecage.com/g/200/300"></img></div>
      </Carousel>;

      <Container>

      </Container>
    </div>
  );
};

// import { QUERY_SKATERS } from '../utils/queries';
  // const { loading, data } = useQuery(QUERY_SKATERS);
  // const profiles = data?.profiles || [];

  
export default Home;
