import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GET_SINGLE_SKATER } from "../utils/queries";
// import VideoPlayer from "../components/VideoPlayer";
import { VideoCard } from "../components/profileCard";
import { useQuery } from "@apollo/client";

function SkaterProfile() {
  const { id } = useParams();
  const [currentSkater, setCurrentSkater] = useState({});

  const queryObj = useQuery(GET_SINGLE_SKATER, {
    variables: {
      skaterId: id,
    },
  });


  const skater = queryObj.data?.skater || [];
  return (
    <div className="mt-3 mx-5">
      <Link to="/skater" className="fs-2">Back To Skaters</Link>
      <h1>{queryObj.loading?"Loading the skater's videos":`${skater.firstName} ${skater.lastName}`}</h1>
      {queryObj.loading ? (
        <h1>loading</h1>
      ) : (<div className="d-flex flex-wrap w-100">
        {skater.videos.map((video, i) => (
          <VideoCard key={i} title={video.title} link={`/video/${video._id}`}/>
        ))}</div>
      )}
    </div>
  );
}
export default SkaterProfile;