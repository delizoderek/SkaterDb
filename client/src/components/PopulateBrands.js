import React from 'react';


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
            <h5 className="card-title">{Brand.brandName}</h5>
            <p className="card-text">description:{Brand.description}Videos:{Brand.skateVideos}</p>
            <a href="#" className="btn btn-primary">
               {props.name}
            </a>
          </div>
        </div>
      </div>
    );
  }

export default PopulateBrands
