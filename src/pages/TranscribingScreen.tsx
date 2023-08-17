import React, { useState, useEffect } from "react";
import StartTranscription from "../components/StartTranscription";
import StopTranscription from "../components/StopTranscription";

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

  recognition.onspeechend = () => {
    console.log("Speech recognition has stopped.");
  };

  recognition.onaudioend = () => {
    console.log("audio end");
  };

  recognition.onsoundend = (event) => {
    console.log("Sound has stopped being received");
  };

  recognition.onend = () => {
    console.log("Speech recognition service disconnected");
  };

  recognition.onerror = (event) => {
    console.error(`Speech recognition error detected: ${event.error}`);
  };

  recognition.onspeechend = () => {
    console.log("Speech has stopped being detected");
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
        <StopTranscription
          transcription={transcription}
          stopTranscription={stopTranscription}
        />
      ) : (
        <StartTranscription startTranscription={startTranscription} />
      )}
    </div>
  );
};

export default TranscribingScreen;
