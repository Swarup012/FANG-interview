"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAi";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { Fang } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment/moment";
import { v4 as uuidv4 } from 'uuid';


import { useRouter } from "next/navigation";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobProfile, setJobProfile] = useState();

  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse,setJsonResponse] = useState();
  const {user} = useUser();
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const InputPrompt =
      "Job Position: " +
      jobProfile +
      ", Job Description: " +
      jobDesc +
      " , Job Experience: " +
      jobExperience +
      ", Depends on Job Position,Job Description and Job Experience give us " +
      process.env.NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT +
      " Interview question along with Answer in Json Format, Give Question and Answered as field in Json.";

    const result = await chatSession.sendMessage(InputPrompt);
    const FangJson = result.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    // const  FangJsonResp = JSON.parse(FangJson)
    // console.log(FangJsonResp);
    setJsonResponse(FangJson)

    if(FangJson){
    const resp = await db.insert(Fang)
    .values({
      fangId: uuidv4(),
      jsonFangResp:FangJson,
      jobPosition:jobProfile,
      jobDesc:jobDesc,
      jobExperience:jobExperience,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD-MM-yyyy')

    }).returning({fangId:Fang.fangId})
    // console.log("Inserted id",resp);
    if(resp){
      setOpenDialog(false);
      router.push('/dashboard/interview/'+resp[0]?.fangId)
    }
  }else{
    console.log("Error");
  }
    setLoading(false);
  };
  return (
    <div>
      <div
        className="p-10 border rounded-lg text-center cursor-pointer hover:scale-105 hover:shadow-md bg-secondary transition-all"
        onClick={() => setOpenDialog(true)}
      >
        <h1 className=" text-center text-lg">+ Add Interview</h1>
      </div>
      <Dialog open={openDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Tell us about your job interviewing
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={onSubmit}>
                <div>
                  <h1>Add details about you</h1>
                </div>
                <div className="mt-7 my-3">
                  <label>Job Profile</label>
                  <Input
                    placeholder="Ex.Fullstack Developer"
                    onChange={(event) => setJobProfile(event.target.value)}
                    required
                  />
                </div>
                <div className="my-3">
                  <label>Job description</label>
                  <Textarea
                    placeholder="Ex.Description"
                    onChange={(event) => setJobDesc(event.target.value)}
                    required
                  />
                </div>
                <div className="my-3">
                  <label>Job Experience</label>
                  <Input
                    placeholder="Ex. 5"
                    type="number"
                    max="30"
                    onChange={(event) => setJobExperience(event.target.value)}
                    required
                  />
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disable={loading}>
                 {loading? <> <LoaderCircle className="animate-spin"/> Genarete</>:'Start Interview'}
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>


      
    </div>
  );
}

export default AddNewInterview;
