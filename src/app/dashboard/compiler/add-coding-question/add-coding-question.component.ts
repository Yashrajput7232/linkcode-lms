import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-add-coding-question',
  templateUrl: './add-coding-question.component.html',
  styleUrls: ['./add-coding-question.component.css']
})
export class AddCodingQuestionComponent implements OnInit {

  constructor(private examservice:ExamService,private activateRoute:ActivatedRoute) { }

  submitted=true
 id:any
  addquestionform=new FormGroup({
    question:new FormControl('',[Validators.required]),
    qest_description:new FormControl('',[Validators.required]),
    editable_ans:new FormControl('',[Validators.required]),
    non_editable_ans:new FormControl('',[Validators.required]),
    marks:new FormControl('',[Validators.required]),
    test_case:new FormControl('',[Validators.required])
  })


  ngOnInit(): void {
   this.id=this.activateRoute.snapshot.paramMap.get("id")

  }


  onSubmit(){

    const { question,qest_description,editable_ans,non_editable_ans,marks,test_case } = this.addquestionform.value;


    this.examservice.addcodingquestion(question,qest_description,editable_ans,non_editable_ans,parseInt(marks),parseInt(test_case),this.id).subscribe(
      {
        next: (data) => {
         console.log(data)
        },
        error: (err) => {
          console.log(err)
        }
      }
    )

  }

  get question(){
    return this.addquestionform.get('question');
  }

  get questiondescription(){
    return this.addquestionform.get('qest_description');
  }

  get answerformat(){
    return this.addquestionform.get('ans_format');
  }

  get marks(){
    return this.addquestionform.get('marks');
  }

  get testcase(){
    return this.addquestionform.get('test_case');
  }

  get non_editable_ans(){
    return this.addquestionform.get('non_editable_ans');
  }

  get editable_ans(){
    return this.addquestionform.get('editable_ans');
  }
}
