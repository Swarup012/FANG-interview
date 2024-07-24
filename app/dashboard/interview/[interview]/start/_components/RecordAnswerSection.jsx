"use client"
import { Button } from '@/components/ui/button'
import { WebcamIcon } from 'lucide-react'
import React, { useEffect } from 'react'
import Webcam from 'react-webcam'
import useSpeechToText from 'react-hook-speech-to-text';
import SpeechToTextComponent from './SpeechToTextComponent'

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

function RecordAnswerSection() {

  return (
    <div className='flex flex-col items-center justify-center'>
        <div className='flex flex-col my-10 pb-32  p-10 justify-center items-center'>
            <WebcamIcon className='absolute h-72 w-full'/>
            <Webcam 
                mirrored={true}
                style={{
                    height:300,
                    width:'100%',
                    zIndex:10
                }}
            />
        </div>
         
        <Button className='my-10'>Start Recording</Button>
        <div>
     <SpeechToTextComponent/>
     
     </div>
    </div>
  )
}

export default RecordAnswerSection