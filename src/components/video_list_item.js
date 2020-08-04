import React from 'react';

// COMMENT 1
const VideoListItem = ({video, onVideoSelect}) => {
  const imgUrl = video.snippet.thumbnails.default.url;
  return (
    <li className="list-group-item"
      key={video.key}
      onClick={ () => onVideoSelect(video) } >
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" alt={video.snippet.title} title={video.snippet.title} src={imgUrl} />
        </div>
        <div className="media-body">
          <h6 className="media-heading">{video.snippet.title}</h6>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

/*
Comment 1
// the {video} argument says take video from props and declare new variable called video
// you can pull multiple props off props obj by just separating them with a comma; same as sayig video: props.video, onVideoSelect: props.onVideoSelect if you were to just pass props as the argument instead of this special object
*/
