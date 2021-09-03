import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import { GET_SINGLE_SKATER } from '../utils/queries'
import VideoPlayer from '../components/VideoPlayer'
import { useQuery } from '@apollo/client'

function SkaterProfile () {

    const {skaterId} = useParams();
    
    const [currentSkater, setCurrentSkater] = useState({});

    const {loading, data} = useQuery(GET_SINGLE_SKATER);


    const skater = data?.skater || [];

    return(
        <div>
        <h1>{skater.name}</h1>
        {loading?<h1>loading</h1>:skater.map((skater, i) => ( 
        < VideoPlayer key={i} link={skater.videos.vidLink}/>))}
        <Link to="/skater">Back To Skaters</Link>
        </div>
    );
}
export default SkaterProfile
