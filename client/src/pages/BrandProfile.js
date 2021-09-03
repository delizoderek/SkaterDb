import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GET_SINGLE_BRAND } from "../utils/queries";
import {VideoCard} from "../components/profileCard";
import { useQuery } from "@apollo/client";

const BrandProfile = () => {
    const { id } = useParams();

  const queryObj = useQuery(GET_SINGLE_BRAND, {
    variables: {
      brandId: id,
    },
  });

  console.log(queryObj);

  const skater = queryObj.data?.brand || [];
    return (
        <div className="mt-3 mx-5">
      <Link to="/brand" className="fs-3">Back To Brands</Link>
      <h1>{queryObj.loading?"Loading the brand's videos":skater.brandName}</h1>
      {queryObj.loading ? (
        <h1>loading</h1>
      ) : (<div className="d-flex flex-wrap w-100">
      {skater.skateVideos.map((video, i) => (
        <VideoCard key={i} title={video.title} link={`/video/${video._id}`}/>
      ))}</div>
    )}
    </div>
    )
}

export default BrandProfile
