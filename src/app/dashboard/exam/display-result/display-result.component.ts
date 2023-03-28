
import { Component, OnInit } from '@angular/core';
import {  Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-display-result',
  templateUrl: './display-result.component.html',
  styleUrls: ['./display-result.component.css']
})
export class DisplayResultComponent implements OnInit {

  constructor(private examService:ExamService,private activatroute:ActivatedRoute) { }

  sid:any
  eid:any
  result:any
  obtainedMarks:any
  totalMarks:any
  finalresult:any
  ngOnInit(): void {
    this.sid=this.activatroute.snapshot.paramMap.get("studId");
    this.eid=this.activatroute.snapshot.paramMap.get("examId");

    this.examService.getResult(this.sid,this.eid).subscribe(
      {
        next: (data:any) => {
          this.result=data
          this.obtainedMarks=data.obtainedMarks
          this.totalMarks=data.totalMarks

          if(this.totalMarks===null)
          this.totalMarks=1


          this.finalresult=(this.obtainedMarks/this.totalMarks)*10
        },
        error: (err) => {
          console.log(err)
        }
      }
    )
  }

  getFinalMarks(){
    return (this.obtainedMarks/this.totalMarks)*100;
  }
}

