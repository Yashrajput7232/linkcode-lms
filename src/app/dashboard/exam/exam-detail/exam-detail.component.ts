import { Component, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam-detail',
  templateUrl: './exam-detail.component.html',
  styleUrls: ['./exam-detail.component.css']
})
export class ExamDetailComponent implements OnInit {
  id: any;
  data:any
  course: any
  examtype: any
  questionarray = []
  questions=[]//verbal
  codingquestionarray=[]

  constructor(private activatedRoute: ActivatedRoute,
    private examservice: ExamService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id")
    this.examtype = this.activatedRoute.snapshot.paramMap.get("ExamType")
    console.log(this.examtype)

    if(this.examtype=='MCQ'){
    this.getMCQquestions()
    }
    else if(this.examtype=='CODING'){
    this.getCODINGquestions()
    }
    else (this.examtype=='VERBAL');{
      this.getVERBALquestions()
      }
  }

  gotoMCQquestion() {
    this.router.navigate([`/dashboard/exam/add-question/${this.id}/${this.examtype}`,]);
  }

  gotoCODINGquestion() {
    console.log(this.id)
    this.router.navigate([`/dashboard/compiler/add-question/${this.id}`,]);
  }
  gotoVERBALquestion() {
    console.log(this.id)
    this.router.navigate([`/dashboard/exam/add-question/${this.id}/${this.examtype}`,]);
  }


  getExamType(){
    return this.examtype;
  }

  gotoUpdateQuestion(qid:any) {
    this.router.navigate([`/dashboard/exam/update-question/${qid}/${this.id}`,]);
  }

  getMCQquestions() {
    this.examservice.getMCQQuestions(this.id).subscribe(
      {
        next: (data: any) => {
          this.course = data.examQuestions
          this.data = data.examQuestions
          this.questionarray = this.data.questions;
        },
        error: (err: { error: { message: any; }; }) => {
          console.log(err.error.message);
        }
      }
    )
  }

  getCODINGquestions(){
    this.examservice.getCODINGQuestions(this.id).subscribe(
      {
        next: (data: any) => {
          this.course=data.codingQuestions
          this.codingquestionarray = data.codingQuestions.coding_questions
        },
        error: (err: { error: { message: any; }; }) => {
          console.log(err.error.message);
        }
      }
    )
  }
  getVERBALquestions() {
    this.examservice.getVERBALQuestions(this.id).subscribe(
      {
        next: (data: any) => {
          this.course = data.examQuestions
          this.data = data.examQuestions
          this.questions = this.data.verbal_questions;
          // console.log(data)
        },
        error: (err: { error: { message: any; }; }) => {
          console.log(err.error.message);
        }
      }
    )
  }


  deleteQuestion(questionId:any){

    this.examservice.deleteQuestion(this.id,questionId).subscribe(
      {
        next: (data: any) => {
          this.data = data.questions
          this.questionarray = this.data;

        },
        error: (err: { error: { message: any; }; }) => {
          console.log(err.error.message);
        }
      }
    )
  }


}

