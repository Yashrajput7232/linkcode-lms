import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCodingQuestionComponent } from './add-coding-question/add-coding-question.component';
import { AttemptCodingExamComponent } from './attempt-coding-exam/attempt-coding-exam.component';
import { CompilerComponent } from './compiler/compiler.component';

const routes: Routes = [
  {
       path: '',
    component: CompilerComponent,
    children: [
      { path: 'add-question/:id', component: AddCodingQuestionComponent },
      { path: 'attempt/:id', component: AttemptCodingExamComponent },
    ]

  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompilerRoutingModule { }
