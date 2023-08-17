import React from "react";
import on from "/on.png";
import off from "/off.png";
const StopTranscription = ({ transcription, stopTranscription }) => {
  return (
    <div className="transcript_container">
      <p>{transcription}</p>
      <div className="button_container">
        Press here to stop
        <div className="outer_circle">
          <div className="start_button" onClick={stopTranscription}>
            <img className="on_off_img" src={off} alt="mic off" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopTranscription;
