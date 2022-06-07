import React from 'react';

const MarcelVideo = () => {
  return (
    <div className="marcel-video">
      <iframe
        width="750"
        height="400"
        src="https://www.youtube.com/embed/tk3wobVWTIk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
        allowfullscreen
        loading="lazy"
      />
    </div>
  );
};

export default MarcelVideo;
