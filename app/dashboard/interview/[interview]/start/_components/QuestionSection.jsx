import React from 'react'

function QuestionSection({interviewQuestions,actionQuestionIndex}) {
  return interviewQuestions&&(
    <div className='m-10 p-5 border rounded-lg'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {interviewQuestions && interviewQuestions.map((questions,index)=>(
                <h2 key={index} className= {`p-3 bg-secondary rounded-lg border text-center ${actionQuestionIndex==index&&'bg-blue-600 text-white'}`}>Question #{index+1}</h2>
            ))}
        </div>
        <h2 className='my-5 text-sm md:text-lg'>{interviewQuestions[actionQuestionIndex]?.Question}</h2>
        <div className='p-5 mt-20 border rounded-lg bg-blue-100'>
        <h2 className='text-blue-400'><strong>Note:</strong></h2>

        <h2 className='text-sm text-blue-400 my-2'>{process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_NOTE}</h2>

        </div>
    </div>
  )
}

export default QuestionSection