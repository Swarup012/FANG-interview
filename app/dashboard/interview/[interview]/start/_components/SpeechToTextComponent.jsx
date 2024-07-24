import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import React, { useEffect, useState } from "react";

const SpeechToTextComponent = () => {
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
      (result) => {
        setUserAnswer((prevAns) => prevAns + result?.transcript);
      },
      [results]
    );
  });
  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
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
  );
};

export default SpeechToTextComponent;
