import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Tabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#video"
          onClick={() => handlePageChange('Video')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Video' ? 'nav-link active' : 'nav-link text-secondary'}
        >
          Video
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#add-skater"
          onClick={() => handlePageChange('Add Skater')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Add Skater' ? 'nav-link active' : 'nav-link text-secondary'}
        >
          Add Skater
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#add-brand"
          onClick={() => handlePageChange('Add Brand')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Add Brand' ? 'nav-link active' : 'nav-link text-secondary'}
        >
          Add Brand
        </a>
      </li>
    </ul>
  );
}

export default Tabs;
