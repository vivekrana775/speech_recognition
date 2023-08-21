const HandleTranscription = ({
  Start_Stop,
  mic,
  transcription,
  handleTranscription,
}) => {
  return (
    <div className="transcript_container">
      <p>{transcription}</p>
      <div className="button_container">
        Press here to {Start_Stop}
        <div className="outer_circle">
          <div className="start_button" onClick={handleTranscription}>
            <img className="on_off_img" src={mic} alt="mic off" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandleTranscription;
