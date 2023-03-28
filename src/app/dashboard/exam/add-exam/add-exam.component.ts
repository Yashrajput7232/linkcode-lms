
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {


  examForm: FormGroup = new FormGroup({
    course:new FormControl(''),
    courseName: new FormControl(''),
    topicName:new FormControl(''),
    examType: new FormControl(''),
    startDate:new FormControl('')
  })
  submitted=false;

  constructor(private examService:ExamService,private formBuilder:FormBuilder,private router:Router) { }

  listcourse=[]
  examtype=["MCQ","CODING","VERBAL"]

  ngOnInit(): void {
    this.examForm = this.formBuilder.group(
      {
        name:['',[Validators.required]],
        type: ['',[Validators.required]],
        startDate:['',[Validators.required]],
        courseName: ['',[Validators.required]],
        courseId:['',[Validators.required]]
      }
    )

    this.dropdownvalue();
  }


    processSelectedItem(item: any) {
     this.examForm.controls['courseId'].setValue(item._id);
     console.log(item)
    }


  dropdownvalue(){
      this.examService.getcourseDropDownValue().
      subscribe(
        {
        next: (data:any) => {
          this.listcourse=data.courses
      }
    })
  }


  get formControls(): { [key: string]: AbstractControl } {
    return this.examForm.controls;
  }

  addExam(){
    this.submitted = true;
    if (this.examForm.invalid) {
      return;
    }

    const { name,type , startDate , courseId } = this.examForm.value;
    this.examService.addExam(name,type,startDate,courseId).subscribe(
      {
        next: (data) => {
          this.router.navigate(['dashboard/exam']);
        },
        error: (err) => {
        }
      }
    );
  }
}
