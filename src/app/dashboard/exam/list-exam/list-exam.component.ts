import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';

import { CourseService } from '../../course/course.service';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-list-exam',
  templateUrl: './list-exam.component.html',
  styleUrls: ['./list-exam.component.css']
})
export class ListExamComponent implements OnInit {

  exams = [];
  isLoading=true;
   role:any
   setvalue=false;
  constructor(private examservice: ExamService,
    private router: Router,private courseService:CourseService,
    private storageService:StorageService) { }

  ngOnInit(): void {

    this.role=this.storageService.getRole();
    if(this.role=='STUDENT'){
        this.setvalue=true;
    }


    this.examservice.getExam().subscribe(
      {
        next: (data: any) => {
          this.isLoading=false;
          this.exams = data.exams
        },
        error: (err: { error: { message: any; }; }) => {
        }
      }
    )
  }

  public getRole(){
    return this.storageService.getRole();
  }

  examDetails(exam: any) {
    this.router.navigate([`/dashboard/exam/${exam._id}/${exam.type}`,]);
  }

  attemptexam(exam: any) {
    this.router.navigate([`/dashboard/exam/${exam._id}/${exam.type}/attempt`,]);
  }

  attemptCODINGexam(exam:any){
    this.router.navigate([`/dashboard/exam/compiler/attempt-exam/${exam._id}`,]);
  }
  attemptVERBALexam(exam:any){
    this.router.navigate([`/dashboard/exam/verbal/attempt-exam/${exam._id}`,]);
  }
  }



