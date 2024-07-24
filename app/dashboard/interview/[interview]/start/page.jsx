"use client"
import { db } from '@/utils/db';
import { Fang } from '@/utils/schema';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import QuestionSection from './_components/QuestionSection';
import RecordAnswerSection from './_components/RecordAnswerSection';

// function StartInterview({params}) {
//     const [interviewData,setInterviewData] = useState();
//     const [interviewQuestions,setInterviewQuestions] = useState();
//     const [actionQuestionIndex,setActionQuestionIndex] = useState(0);

//     useEffect(()=>{
//     GetInterviewDetails();
//     })

//      const GetInterviewDetails = async()=>{
//     const result = await db.select().from(Fang)
//     .where(eq(Fang.fangId,params.interview));
    
//     const jsonFangResp = JSON.parse(result[0].jsonFangResp)
//     console.log(jsonFangResp);
//     setInterviewQuestions(jsonFangResp)
//     setInterviewData(result[0])
     
//     //  console.log(mresult);  

//   }
//   return (
//     <div>
//       <div className='grid grid-cols-1 md:grid-cols-2'>

//       <QuestionSection interviewQuestions={interviewQuestions} actionQuestionIndex={actionQuestionIndex} />

//       <RecordAnswerSection />

//       </div>
//     </div>
//   )
// }


// function StartInterview({ params }) {
//   const [interviewData, setInterviewData] = useState(null);
//   const [interviewQuestions, setInterviewQuestions] = useState(null);
//   const [actionQuestionIndex, setActionQuestionIndex] = useState(0);

//   useEffect(() => {
//     const GetInterviewDetails = async () => {
//       const result = await db.select().from(Fang).where(eq(Fang.fangId, params.interview));
//       const jsonFangResp = JSON.parse(result[0].jsonFangResp);
//       console.log(jsonFangResp);
//       setInterviewQuestions(jsonFangResp);
//       setInterviewData(result[0]);
//     };

//     GetInterviewDetails();
//   }, [params.interview]); // Add params.interview as a dependency to the useEffect

//   return (
//     <div>
//       <div className='grid grid-cols-1 md:grid-cols-2'>
//         <QuestionSection interviewQuestions={interviewQuestions} actionQuestionIndex={actionQuestionIndex} />
//         <RecordAnswerSection />
//       </div>
//     </div>
//   );
// }




// function StartInterview({ params }) {
//   const [interviewData, setInterviewData] = useState(null);
//   const [interviewQuestions, setInterviewQuestions] = useState(null);
//   const [actionQuestionIndex, setActionQuestionIndex] = useState(0);

//   useEffect(() => {
//     const GetInterviewDetails = async () => {
//       const result = await db.select().from(Fang).where(eq(Fang.fangId, params.interview));
//       const jsonString = result[0].jsonFangResp;

//       // Log the JSON string to inspect its content
//       console.log('Raw JSON string:', jsonString);

//       try {
//         // Optionally trim and remove unexpected characters
//         const cleanedJsonString = jsonString.trim();
//         const jsonFangResp = JSON.parse(cleanedJsonString);

//         console.log('Parsed JSON object:', jsonFangResp);
//         setInterviewQuestions(jsonFangResp);
//         setInterviewData(result[0]);
//       } catch (error) {
//         console.error('Error parsing JSON:', error);
//       }
//     };

//     GetInterviewDetails();
//   }, [params.interview]); // Add params.interview as a dependency to the useEffect

//   return (
//     <div>
//       <div className='grid grid-cols-1 md:grid-cols-2'>
//         <QuestionSection interviewQuestions={interviewQuestions} actionQuestionIndex={actionQuestionIndex} />
//         <RecordAnswerSection />
//       </div>
//     </div>
//   );
// }

// export default StartInterview;


// import React, { useEffect, useState } from 'react';
// import 'regenerator-runtime/runtime'; // Import regenerator-runtime
// import { db, eq } from './yourDbModule'; // adjust the import as necessary
// import QuestionSection from './QuestionSection';
// import RecordAnswerSection from './RecordAnswerSection';

// function StartInterview({ params }) {
//   const [interviewData, setInterviewData] = useState(null);
//   const [interviewQuestions, setInterviewQuestions] = useState(null);
//   const [actionQuestionIndex, setActionQuestionIndex] = useState(0);

//   useEffect(() => {
//     const GetInterviewDetails = async () => {
//       const result = await db.select().from(Fang).where(eq(Fang.fangId, params.interview));
//       const jsonString = result[0].jsonFangResp;

//       // Log the JSON string to inspect its content
//       console.log('Raw JSON string:', jsonString);

//       try {
//         // Optionally trim and remove unexpected characters
//         const cleanedJsonString = jsonString.trim();
//         const jsonFangResp = JSON.parse(cleanedJsonString);

//         console.log('Parsed JSON object:', jsonFangResp);
//         setInterviewQuestions(jsonFangResp);
//         setInterviewData(result[0]);
//       } catch (error) {
//         console.error('Error parsing JSON:', error);
//       }
//     };

//     GetInterviewDetails();
//   }, [params.interview]); // Add params.interview as a dependency to the useEffect

//   return (
//     <div>
//       <div className='grid grid-cols-1 md:grid-cols-2'>
//         <QuestionSection interviewQuestions={interviewQuestions} actionQuestionIndex={actionQuestionIndex} />
//         <RecordAnswerSection />
//       </div>
//     </div>
//   );
// }

// export default StartInterview;




function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [interviewQuestions, setInterviewQuestions] = useState(null);
  const [actionQuestionIndex, setActionQuestionIndex] = useState(0);

  useEffect(() => {
    const GetInterviewDetails = async () => {
      try {
        const result = await db.select().from(Fang).where(eq(Fang.fangId, params.interview));
        const jsonString = result[0].jsonFangResp;

        // Log the raw JSON string to inspect its content
        console.log('Raw JSON string:', jsonString);

        // Trim the JSON string and log again to see if there's any difference
        const cleanedJsonString = jsonString.trim();
        console.log('Trimmed JSON string:', cleanedJsonString);

        // Validate if the cleaned string is proper JSON
        try {
          const jsonFangResp = JSON.parse(cleanedJsonString);
          console.log('Parsed JSON object:', jsonFangResp);
          setInterviewQuestions(jsonFangResp);
          setInterviewData(result[0]);
        } catch (jsonParseError) {
          console.error('Error parsing JSON:', jsonParseError);
        }
      } catch (dbError) {
        console.error('Error fetching data from database:', dbError);
      }
    };

    GetInterviewDetails();
  }, [params.interview]); // Add params.interview as a dependency to the useEffect

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <QuestionSection interviewQuestions={interviewQuestions} actionQuestionIndex={actionQuestionIndex} />
        <RecordAnswerSection />
      </div>
    </div>
  );
}





export default StartInterview