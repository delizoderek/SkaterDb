import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GET_SINGLE_SKATER } from "../utils/queries";
import VideoPlayer from "../components/VideoPlayer";
import { useQuery } from "@apollo/client";

const BrandProfile = () => {
    const { id } = useParams();
  const [currentSkater, setCurrentSkater] = useState({});

  const queryObj = useQuery(GET_SINGLE_SKATER, {
    variables: {
      brandId: id,
    },
  });

  // console.log(queryObj);

  const skater = queryObj.data?.skater || [];
    return (
        <div className="mt-3 mx-5">
      <Link to="/skater" className="fs-3">Back To Skaters</Link>
      <h1>{queryObj.loading?"Loading the skater's videos":`${skater.firstName} ${skater.lastName}`}</h1>
      {queryObj.loading ? (
        <h1>loading</h1>
      ) : (
        skater.videos.map((video, i) => (
          <VideoPlayer key={i} link={video.vidLink} />
        ))
      )}
    </div>
    )
}

export default BrandProfile
