"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { Fang } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { CameraOff, Lightbulb } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

function Interview({params}) {
  // const [interviewData,setInterviewData] = useState();
  const [data,setData] = useState();
  const [webCamEnable,setWebCamEnable] = useState(false);
  useEffect(()=>{
    // console.log(params.interview)
      //  console.log(setInterviewData);    
    GetInterviewDetails();
  },[])

  const GetInterviewDetails = async()=>{
    const result = await db.select().from(Fang)
    .where(eq(Fang.fangId,params.interview))
    
    const mresult = result[0];
     setData(mresult)
     console.log(mresult);  

  }
  // console.log(data?.jobPosition);
  return (
    <div className=' my-10 '>
      <h2 className='font-bold text-2xl'>Let`s Get Started</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>


       <div className='my-5 gap-5 flex flex-col'>
       <div className='gap-5 border rounded-lg p-5 flex flex-col'>
        <h2 className='text-lg'><strong>Job Role/Job Position :</strong>{data?.jobPosition} </h2>

        <h2 className='text-lg'><strong>Job des/Tech skills :</strong>{data?.jobDesc} </h2>
        <h2 className='text-lg'><strong>Job Experience :</strong>{data?.jobExperience} </h2>
      </div>
      <div className='border rounded-lg border-yellow-400 bg-yellow-200 p-5'>
        <h2 className='flex gap-5 items-center text-yellow-500'> <Lightbulb/> <strong>Information</strong> </h2>
        <h2 className='text-yellow-600'>{process.env.NEXT_PUBLIC_WEBCAM_INFORMATION}</h2>
      </div>
      </div>
      
      <div>
        {
          webCamEnable? <Webcam 
            onUserMedia={()=>setWebCamEnable(true)}
            onUserMediaError={()=>setWebCamEnable(false)}
            mirrored={true}
            style={{
              height:350,
              width:900
            }}
          />
          :
          <>
          <CameraOff className='rounded-lg bg-secondary h-72 w-full p-20 my-7' />
          <Button variant="outline" onClick={()=>setWebCamEnable(true)}>On Video & Audio</Button>
          </>
        }
      </div>
     
      </div>
      <div className='justify-end flex items-end'>
      <Link href={'/dashboard/interview/'+params.interview+'/start'}>
      <Button >Start Interview</Button>
      </Link>
      </div>
    </div>
  )
}

export default Interview