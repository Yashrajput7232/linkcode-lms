import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-attempt-coding-exam',
  templateUrl: './attempt-coding-exam.component.html',
  styleUrls: ['./attempt-coding-exam.component.css']
})
export class AttemptCodingExamComponent implements OnInit {

  constructor(private examservice:ExamService,private activatedRoute:ActivatedRoute) { }
  submitted=false
result:any
  str:any;
   language="java"
   resultArray:number[]=[]

   Resultvalue:any

   id:any
   examdetail:any

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.paramMap.get("id")
    console.log(this.id)
    this.examservice.getCODINGquestionbyid(this.id).subscribe(
      {

        next: (data:any) => {
           this.examdetail=data.question
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }


  submit(){
    this.resultArray=[]
    this.str=this.examdetail?.['editable']+this.examdetail?.['nonEditable'];
     this.examservice.addcode(this.str,this.language).subscribe(
      {
        next: (data) => {
          this.result=data
          this.Resultvalue=this.result?.output

          for(let i=0;i<this.Resultvalue.length;i=i+1){

            if(this.Resultvalue.charAt(i)=='1'){
              this.resultArray.push(1)
            }
            else if(this.Resultvalue.charAt(i)=='0')
            this.resultArray.push(0)
          }
        },
        error: (err) => {
          console.log(err)
        }
      }
     )
  }


}
