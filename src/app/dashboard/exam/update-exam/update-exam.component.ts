import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {

questionId:any;
questionArray:any;
examId:any;
examType:any;

question:any


constructor(private fb:FormBuilder,private examservice:ExamService,private activatedroute:ActivatedRoute,
  private router:Router){}

  ngOnInit(): void {

    this.examId=this.activatedroute.snapshot.paramMap.get("eid");
    this.questionId=this.activatedroute.snapshot.paramMap.get("qid")

    this.examservice.getQuestions(this.examId).subscribe(
      {
      next: (data:any) => {
        this.questionArray=data.examQuestions.questions;
        this.question=this.questionArray.find((element:any) =>element._id ==this.questionId)

        console.log(this.question)
      },
      error: (err: any) => {
      }
    }
    )
   }

   updateQuestion(){
    this.examservice.updateQuestion(this.questionId,this.question['name'],this.question['options'],this.question['answers'],this.question['mark'],this.examId).subscribe(
      {
        next: (data:any) => {
          console.log(data)
          this.router.navigate(['./dashboard/exam'+'/'+this.examId+'/'+this.examType]);
        },
        error: (err: any) => {

        }
      }
    )

   }


}
