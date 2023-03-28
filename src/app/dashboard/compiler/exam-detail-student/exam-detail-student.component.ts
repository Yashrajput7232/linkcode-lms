import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-exam-detail-student',
  templateUrl: './exam-detail-student.component.html',
  styleUrls: ['./exam-detail-student.component.css']
})
export class ExamDetailStudentComponent implements OnInit {

  id:any
  examdetail=[]
  constructor(private examservice:ExamService,private activateRoute:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

      this.id=this.activateRoute.snapshot.paramMap.get("id")

     this.examservice.getCODINGQuestions(this.id).subscribe(
      {
        next: (data: any) => {
          console.log(data.codingQuestions.coding_questions)
          this.examdetail = data.codingQuestions.coding_questions
        },
        error: (err: { error: { message: any; }; }) => {
          console.log(err.error.message);
        }
      }
    )
  }


  gotoattemptexam(id:any){
       console.log(id)
       this.router.navigate([`/dashboard/compiler/attempt/${id}`,]);
  }
}
