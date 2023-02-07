import React, { createRef, useRef } from "react";
import Sticky from "react-stickynode";

const Layout = ({ content }) => {
   const myRef = useRef()
   myRef.current = content?.map(
    (content, index) => myRef.current[index] ?? createRef()
  );
   console.log(myRef)

  return (
    <div className="layout">
      <div className="text-layout">
        {content?.map((content, index) => (
          <div ref={myRef.current[index]}className="text-container" key={index}>
            <span >{content.heading}</span>
            <h1>{content.subHeading}</h1>
            <p style={{ color: "#4d4d4d" }}>{content.description}</p>
          </div>
        ))}
      </div>
      
      <Sticky top={150} bottomBoundary={2800}>
        <div className="video-layout">
          <div className="video-container">
            <video autoPlay loop muted>
              <source
                type="video/mp4"
                src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/6341303c29c5340961dc9ae6_Mco-1-transcode.mp4"
              />
            </video>
          </div>
        </div>
      </Sticky>
    
    </div>
  );
};

export default Layout;
