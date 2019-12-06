import React from 'react'

export default function Extreme() {

  const styleVideo = {
    position: "relative",
    paddingBottom: "56.25%" /* 16:9 */,
    paddingTop: 25,
    height: 0,
  }

  const styleFrame = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%"
  }

  return (
    <div className='container text-is-cenetered'>
      <div className="video" style={styleVideo}>
        <iframe
          title='Extreme: More Than Words ' style={styleFrame}
          src={`https://www.youtube.com/embed/UrIiLvg58SY`}
          frameBorder={0}
        />
      </div>
    </div>
  );
};