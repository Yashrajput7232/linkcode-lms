import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course.component';
import { AddInstructorComponent } from './admin/add-instructor/add-instructor.component';
import { AddCourseComponent } from './instructor/add-course/add-course.component';
import { CourseListComponent } from './instructor/course-list/course-list.component';
import { ViewCourseComponent } from './instructor/view-course/view-course.component';
import { UpdateCourseComponent } from './instructor/update-course/update-course.component';
import { InstructorListComponent } from './admin/instructor-list/instructor-list.component';
import { ViewInstructorComponent } from './admin/view-instructor/view-instructor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateLectureComponent } from './instructor/update-lecture/update-lecture.component';
import { AddLectureComponent } from './instructor/add-lecture/add-lecture.component';
import { CartComponent } from './student/cart/cart.component';
import { MyLearningsComponent } from './student/my-learnings/my-learnings.component';


@NgModule({
  declarations: [
    CourseComponent,
    AddInstructorComponent,
    AddCourseComponent,
    CourseListComponent,
    ViewCourseComponent,
    UpdateCourseComponent,
    InstructorListComponent,
    ViewInstructorComponent,
    UpdateLectureComponent,
    AddLectureComponent,
    CartComponent,
    MyLearningsComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CourseModule { }
