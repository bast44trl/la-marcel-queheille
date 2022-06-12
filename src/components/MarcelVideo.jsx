import React from 'react';

const MarcelVideo = () => {
  return (
    <div className="marcel-video">
      <iframe
        width="800"
        height="350"
        src="https://www.youtube.com/embed/tk3wobVWTIk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
};

export default MarcelVideo;
