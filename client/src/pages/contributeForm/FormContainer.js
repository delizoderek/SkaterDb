import React, {useState}  from 'react'
import Tabs from './Tabs';
import BrandForm from './BrandForm';
import SkaterForm from './SkaterForm';
import {VideoForm} from './VideoForm';


function FormContainer() {
    const [currentPage, setCurrentPage] = useState('Video');

    const renderPage = () => {
        if(currentPage === 'Video'){
            return <VideoForm/>;
        } else if(currentPage === 'Add Skater'){
            return <SkaterForm/>;
        } else {
            return <BrandForm/>;
        }
    }

    const handlePageChange = (newPage) => setCurrentPage(newPage);
    return (
        <>
            <Tabs currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </>
    )
}

export default FormContainer
