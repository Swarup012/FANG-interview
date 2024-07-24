 <form onSubmit={onSubmit}>
             <div>
                <h2>Add details about you</h2>
             </div>
             <div className="mt-7 my-3">
                <label className="font-bold">Job Profile</label>
                <Input placeholder="Ex. Fullstack Developer" required onchange={(event)=>setJobProfile(event.target.value)}/>
             </div>
             <div className=" my-3">
                <label className="font-bold">Job description/Tech stack</label>
                <Textarea placeholder="Ex. Node.js , Next.js" required onchange={(event)=>setJobDesc(event.target.value)}/>
             </div>
             <div className=" my-3">
                <label className="font-bold">Year of Experience</label>
                <Input placeholder="Ex. 5" type='number' max="50" required onchange={(event)=>setJobExperience(event.target.value)}/>
             </div>
              <div className="flex gap-5 justify-end">
                <Button type='submit'>Start Interview</Button>
                <Button type='button' variant="ghost" onClick={() => setOpenDialog(false)}>
                  Cancel
                </Button>
              </div>
              </form>