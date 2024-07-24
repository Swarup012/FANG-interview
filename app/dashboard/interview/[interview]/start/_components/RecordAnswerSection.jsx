"use client";
import { Button } from "@/components/ui/button";
import { WebcamIcon } from "lucide-react";
import React, { useEffect } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import SpeechToTextComponent from "./SpeechToTextComponent";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Mic } from "lucide-react";
import {  useState } from "react";

function RecordAnswerSection() {

const [userAnswer, setUserAnswer] = useState();

  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });
  useEffect(() => {
    results.map(
      (result) => (
        setUserAnswer((prevAns) => prevAns + result?.transcript)
      ),
      [results]
    );
  });

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col my-10 pb-32  p-10 justify-center items-center">
        <WebcamIcon className="absolute h-72 w-full" />
        <Webcam
          mirrored={true}
          style={{
            height: 300,
            width: "100%",
            zIndex: 10,
          }}
        />
      </div>

      {/* <Button variant="outline" className="my-10">
        <SpeechToTextComponent />
      </Button>
      <Button onclick={() => console.log(userAnswer)}>show answer</Button> */}
       <div>
      {/* <h1>Recording: {isRecording.toString()}</h1> */}
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? (
          <h2 className="text-red-600">
            <Mic /> Recording...
          </h2>
        ) : (
          "Start Recording"
        )}
      </button>
      <Button onclick={() => console.log(userAnswer)}>show answer</Button>
    </div>
    </div>
  );
}

export default RecordAnswerSection;
