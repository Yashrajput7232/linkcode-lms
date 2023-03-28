import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExamComponent } from './add-exam/add-exam.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { ExamComponent } from './exam.component';
import { ListExamComponent } from './list-exam/list-exam.component';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { ExamAttemptComponent } from './exam-attempt/exam-attempt.component';
import { UpdateExamComponent } from './update-exam/update-exam.component';
import { DisplayResultComponent } from './display-result/display-result.component';
import { CompilerComponent } from '../compiler/compiler/compiler.component';
import { AddCodingQuestionComponent } from '../compiler/add-coding-question/add-coding-question.component';
import { ExamDetailStudentComponent } from '../compiler/exam-detail-student/exam-detail-student.component';
import { AttemptVerbalComponent } from './attempt-verbal/attempt-verbal.component';

const routes: Routes = [
  {
    path: '',
    component: ExamComponent,
    children: [
      { path: '', component: ListExamComponent },
      { path: 'add', component: AddExamComponent },
      { path: 'add-question/:id/:Examtype', component: AddQuestionComponent },
      { path: ':id/:ExamType', component: ExamDetailComponent },
      { path: ':id/:type/attempt', component: ExamAttemptComponent },
      { path: 'update-question/:qid/:eid', component: UpdateExamComponent },
      { path: 'display-marks/:studId/:examId', component:DisplayResultComponent },
      {path:'compiler/add-question/:id',component:AddCodingQuestionComponent},
      {path:'compiler/attempt-exam/:id',component:ExamDetailStudentComponent},
      {path:'verbal/attempt-exam/:id',component:AttemptVerbalComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }

