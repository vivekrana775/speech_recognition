import React from "react";
import on from "/on.png";
import off from "/off.png";

const StartTranscription = ({ startTranscription }) => {
  return (
    <div className="transcript_container">
      <p style={{ color: "#464651" }}>Trancript of voice will show here...</p>
      <div className="button_container">
        Press here to start
        <div className="outer_circle">
          <div className="start_button" onClick={startTranscription}>
            <img className="on_off_img" src={on} alt="mic on" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartTranscription;
