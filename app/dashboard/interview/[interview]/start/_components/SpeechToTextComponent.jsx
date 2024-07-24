import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToTextComponent = () => {
//   const [isRecording, setIsRecording] = useState(false);
//   const { transcript, interimTranscript, finalTranscript, resetTranscript } = useSpeechRecognition();

//   if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
//     return <div>Your browser does not support speech recognition.</div>;
//   }

//   const startSpeechToText = () => {
//     setIsRecording(true);
//     SpeechRecognition.startListening({ continuous: true });
//   };

//   const stopSpeechToText = () => {
//     setIsRecording(false);
//     SpeechRecognition.stopListening();
//   };

//   return (
//     <div>
//       <h1>Recording: {isRecording.toString()}</h1>
//       <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
//         {isRecording ? 'Stop Recording' : 'Start Recording'}
//       </button>
//       <button onClick={resetTranscript}>Reset Transcript</button>
//       <ul>
//         {finalTranscript.split('\n').map((result, index) => (
//           <li key={index}>{result}</li>
//         ))}
//         {interimTranscript && <li>{interimTranscript}</li>}
//       </ul>
//     </div>
//   );
// };




export default SpeechToTextComponent;
