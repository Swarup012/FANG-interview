"use client"
import { db } from '@/utils/db';
import { Fang } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';

function StartInterview({params}) {
    const [interviewData,setInterviewData] = useState();
    const [interviewQuestions,setInterviewQuestions] = useState();
    const [actionQuestionIndex,setActionQuestionIndex] = useState(0);

    useEffect(()=>{
    GetInterviewDetails();
    })

     const GetInterviewDetails = async()=>{
    const result = await db.select().from(Fang)
    .where(eq(Fang.fangId,params.interview));
    
    const jsonFangResp = JSON.parse(result[0].jsonFangResp)
    console.log(jsonFangResp);
    setInterviewQuestions(jsonFangResp)
    setInterviewData(result[0])
     
    //  console.log(mresult);  

  }
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2'>

      <QuestionSection interviewQuestions={interviewQuestions} actionQuestionIndex={actionQuestionIndex} />

      <RecordAnswerSection />

      </div>
    </div>
  )
}

export default StartInterview