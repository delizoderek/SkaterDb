import React from "react";
import VideoPlayer from "../components/VideoPlayer";

function ContributePage() {
  return (
    <div className="d-flex flex-grow-1 m-auto bg-transparent">
      <div className="bg-dark">
        {/*Render a YouTube video player*/}
        <VideoPlayer link={"https://vimeo.com/3535159"}/>
        <VideoPlayer link={"https://youtu.be/Sw14rswp9AI"}/>
        <VideoPlayer link={"https://youtube.com/playlist?list=PLtxR_E_ZEQsx9AWlYIu0ATmgio9uOzwsc"}/>
      </div>
    </div>
  );
}

export default ContributePage;
