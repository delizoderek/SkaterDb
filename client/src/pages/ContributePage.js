import React,{useState} from "react";
import {Tabs,BrandForm,VideoForm,SkaterForm} from "./contributeForm";

function ContributePage() {
    const [currentPage, setCurrentPage] = useState('Add Video');

    const renderPage = () => {
        if(currentPage === 'Add Video'){
            return <VideoForm/>;
        } else if(currentPage === 'Add Skater'){
            return <SkaterForm/>;
        } else {
            return <BrandForm/>;
        }
    }

    const handlePageChange = (newPage) => setCurrentPage(newPage);
  return (
    <div className="d-flex justify-content-center m-auto bg-transparent">
      <div className="col-10 col-lg-8 p-0 m-4 rounded bg-light">
        {/*Render a YouTube video player*/}
        <Tabs currentPage={currentPage} handlePageChange={handlePageChange}/>
        {renderPage()}
      </div>
    </div>
  );
}

export default ContributePage;
