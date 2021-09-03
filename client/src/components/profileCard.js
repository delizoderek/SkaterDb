import React from 'react';
import {Link} from 'react-router-dom';

export function InfoCard(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  return (
    <Link to={props.link}>
      <div id="box-styling" className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.content}</p>
          <p className="card-text">{props.numVideos} Videos</p>
        </div>
      </div>
    </Link>
  );
}

export function VideoCard(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images
  return (
      <div className="card m-3" style={cardStyle}>
        {props.url?<img
          className="card-img-top"
          src={`${props.url}`}
          alt="Card cap"
        />:''}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          {props.link?<a href={props.link}>Watch Video</a>:''}
        </div>
      </div>
  );
}


export function BrandCard(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images


  return (
    <div>
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">About: {props.description} Total Videos: {props.totalVideos}</p>
        </div>
      </div>
    </div>
  );
}


