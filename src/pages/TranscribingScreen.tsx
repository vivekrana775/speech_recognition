import React, { useState, useEffect } from "react";
import HandleTranscription from "../components/HandleTranscription";
import on from "/on.png";
import off from "/off.png";

const TranscribingScreen = () => {
  const [transcription, setTranscription] = useState("");
  const [isVoiceRecognitionStarted, setIsVoiceRecognitionStarted] =
    useState(false);
  const recognition = new webkitSpeechRecognition();

  recognition.interimResults = true;
  recognition.lang = "en-US";
  recognition.continuous = true;

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript;
    setTranscription(spokenText);
    console.log(spokenText);
  };

  const startTranscription = () => {
    setIsVoiceRecognitionStarted(true);
    recognition.start();
  };

  const stopTranscription = () => {
    setIsVoiceRecognitionStarted(false);
    recognition.stop();
    setTranscription("");
    console.log("stopeedddd");
  };

  return (
    <div className="container">
      {isVoiceRecognitionStarted ? (
        <HandleTranscription
          Start_Stop={"Stop"}
          mic={on}
          transcription={transcription}
          handleTranscription={stopTranscription}
        />
      ) : (
        <HandleTranscription
          Start_Stop={"Start"}
          mic={off}
          transcription={"Trancript of voice will show here..."}
          handleTranscription={startTranscription}
        />
      )}
    </div>
  );
};

export default TranscribingScreen;
