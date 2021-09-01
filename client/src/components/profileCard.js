import React from 'react';

export default function Card(props) {
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
          <h5 className="card-title">{props.firstName}</h5>
          <p className="card-text">Pronouns: {props.prounouns} Stance: {props.stance} Total Videos: {props.totalVideos}</p>
          <a href="#" className="btn btn-primary">
             {props.firstName}
          </a>
        </div>
      </div>
    </div>
  );
}
