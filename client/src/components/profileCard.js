import React from 'react';
import {Link} from 'react-router-dom';
export function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images


  return (
    <div>
      <div id="box-styling" className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">Stance: {props.stance} </p>
          <p> Total Videos: {props.totalVideos.length}</p>
          <Link to={`/skater/${props.skaterId}`} >
                            {props.name}
                        </Link>
        </div>
      </div>
    </div>
  );
}

export function VideoCard(props) {
  const cardStyle = {
    width: '18rem',
  };

  // Helper function that generates a random width for our placeholder images


  return (
    <div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`${props.url}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">Title: {props.title} Skaters: {props.skaters} Release Date: {props.releasedate} Brand: {props.brand}</p>
          {/* <div><img src={props.vidLink}></img></div> */}
          {/* <a href="#" className="btn btn-primary">
             {props.name}
          </a> */}
        </div>
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
        <img
          className="card-img-top"
          src={`${props.url}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">About: {props.description} Total Videos: {props.totalVideos.length}</p>
          {/* <div><img src={props.vidLink}></img></div> */}
          {/* <a href="#" className="btn btn-primary">
             {props.name}
          </a> */}
        </div>
      </div>
    </div>
  );
}


