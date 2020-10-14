import React from 'react';

const loadingEl = <div className="col-md-7 alert alert-secondary" role="alert"><div className="pt-5 pb-5"><h3 className="text-center pt-5 pb-5 font-weight-normal">Loading Video...</h3></div></div>;

// if it doens't need state, just amake it a functional component
const VideoDetail = ({video}) => {
  if (!video) {
    return loadingEl;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="video-detail col-md-7">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title={video.snippet.title} className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details mt-2 mb-4">
        <h5>{video.snippet.title}</h5>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
