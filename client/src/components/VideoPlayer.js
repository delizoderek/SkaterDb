import React from "react";

export default function VideoPlayer(props) {
  let vidLink = "";
  let playerType = "Unicorn Player"
  if (props.link.includes("vimeo")) {
    playerType = "Vimeo Player"
    vidLink = `https://player.vimeo.com/video/${props.link
      .split("com/")
      .pop()}`;
  } else {
    playerType = "Youtube Player"
    if (props.link.includes("playlist")) {
      vidLink = `https://www.youtube.com/embed/videoseries?list=${props.link
        .split("?list=")
        .pop()}`;
    } else {
      vidLink = `https://www.youtube.com/embed/${props.link
        .split(".be/")
        .pop()}`;
    }
  }
  return (
    <iframe
      width="640"
      height="469"
      src={vidLink}
      title={playerType}
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  );
}
