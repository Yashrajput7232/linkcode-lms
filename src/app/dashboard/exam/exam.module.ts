import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { ExamComponent } from './exam.component';
import { AddCategoriesComponent } from './admin/add-categories/add-categories.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { ViewCategoriesComponent } from './admin/view-categories/view-categories.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddExamComponent } from './add-exam/add-exam.component';
import { ListExamComponent } from './list-exam/list-exam.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ExamDetailComponent } from './exam-detail/exam-detail.component';
import { UpdateExamComponent } from './update-exam/update-exam.component';
import { ExamAttemptComponent } from './exam-attempt/exam-attempt.component';
import { DisplayResultComponent } from './display-result/display-result.component';
import { AttemptVerbalComponent } from './attempt-verbal/attempt-verbal.component';



@NgModule({
  declarations: [
    ExamComponent,
    AddCategoriesComponent,
    AdminDashboardComponent,
    ViewCategoriesComponent,
    AddQuestionComponent,
    AddExamComponent,
    ListExamComponent,
    ExamDetailComponent,
    UpdateExamComponent,
    ExamAttemptComponent,
    DisplayResultComponent,
    AttemptVerbalComponent,

  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule
  ]
})

export class ExamModule { }
