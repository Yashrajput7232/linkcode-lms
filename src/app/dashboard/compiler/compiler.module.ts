import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompilerRoutingModule } from './compiler-routing.module';
import { AttemptCodingExamComponent } from './attempt-coding-exam/attempt-coding-exam.component';
import { FormsModule } from '@angular/forms';
import { AddCodingQuestionComponent } from './add-coding-question/add-coding-question.component';
import { CompilerComponent } from './compiler/compiler.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExamDetailStudentComponent } from './exam-detail-student/exam-detail-student.component';

@NgModule({
  declarations: [
    AttemptCodingExamComponent,
    AddCodingQuestionComponent,
    CompilerComponent,
    ExamDetailStudentComponent,
  ],
  imports: [
    CommonModule,
    CompilerRoutingModule,
    FormsModule,
     ReactiveFormsModule
  ]
})
export class CompilerModule { }
