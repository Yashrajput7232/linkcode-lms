

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam-attempt',
  templateUrl: './exam-attempt.component.html',
  styleUrls: ['./exam-attempt.component.css']
})
export class ExamAttemptComponent implements OnInit {

  constructor(private examservice:ExamService,private activatroute:ActivatedRoute,
    private storageService:StorageService,private router:Router) { }
   examId:any
   type:any
    questions:any
    token:any
    userId:any

    array:any=[]
    questionarray:any
    check=false
    newoptionarray:any=[]
    postoption=[]

    getMarks=false
    
    ngOnInit(): void {
    this.examId=this.activatroute.snapshot.paramMap.get("id");
    this.type=this.activatroute.snapshot.paramMap.get("type");

    this.token=this.storageService.getToken();
    this.userId=JSON.parse(atob(this.token.split('.')[1]))._id

    this.examservice.getMCQQuestions(this.examId).subscribe(
      {
      next:(data:any)=>{
        this.questions=data.examQuestions
      }
    })

    this.examservice.getQuestionsforStudent(this.examId).subscribe(
      {
        next: (data:any) => {
          this.questionarray=data.questions
        },
        error: (err: { error: { message: any; }; }) => {
          console.log(err.error.message);
        }
      }
    )
  }

  onChange(examid:any,questionid:any,option:any, isselecetd:any,buttontype:any) {

   this.check=false
   this.newoptionarray=[]
    if(buttontype=='radio')
    {
      for(let i=0;i<this.array.length;i++){
        if(this.array[i]['questionid']==questionid){
             this.array[i]['option']=option
             this.check=true
             break
        }
      }
    }
    else if(buttontype=='checkbox')
    {
      for(let i=0;i<this.array.length;i++){
         if(this.array[i]['questionid']==questionid){

          for(let j=0;j<this.array[i]['option']?.length;j++){
            this.newoptionarray.push(this.array[i]['option'][j])
          }

           if(isselecetd===true){
            this.newoptionarray.push(option)
              this.array[i]['option']=this.newoptionarray
           }
           else{
           this.newoptionarray.splice(this.newoptionarray.indexOf(option),1)
            this.array[i]['option']=this.newoptionarray
           }
           this.check=true
           break
        }
      }

    }

    if(this.check==false){
      this.array.push({"examid":examid,"questionid":questionid,"option":option,"isselecetd":isselecetd,"buttontype":buttontype})
    }

    for(let i=0;i<this.array.length;i++){
      if(this.array[i]['questionid']==questionid){
          this.postoption=this.array[i]['option']
          break
      }

    }

    this.examservice.postanswer(examid,questionid,this.userId,this.postoption).subscribe(
      {
        next: (data) => {
           console.log(data)
        },
        error: (err) => {
          console.log(err)
        }
      }
    );
  }

  submitExam(id:any){
    this.getMarks=true
    this.examservice.getResult(this.userId,this.examId).subscribe(
      {
        next: (data) => {
           console.log(data)
        },
        error: (err) => {
          console.log(err)
        }
      }
    );
    this.router.navigate([`/dashboard/exam/display-marks/${this.userId}/${this.examId}`,]);
  }


 
}

