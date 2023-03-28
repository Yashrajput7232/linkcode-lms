import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInstructorComponent } from './admin/add-instructor/add-instructor.component';
import { CourseComponent } from './course.component';
import { AddCourseComponent } from './instructor/add-course/add-course.component';
import { AddLectureComponent } from './instructor/add-lecture/add-lecture.component';
import { CourseListComponent } from './instructor/course-list/course-list.component';
import { UpdateCourseComponent } from './instructor/update-course/update-course.component';
import { ViewCourseComponent } from './instructor/view-course/view-course.component';
import { UpdateLectureComponent } from './instructor/update-lecture/update-lecture.component';
import { CartComponent } from './student/cart/cart.component';
import { MyLearningsComponent } from './student/my-learnings/my-learnings.component';




const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    children: [
       {path:"add",component:AddCourseComponent},
       {path:"",component:CourseListComponent},
       {path:"cart",component:CartComponent},
       {path:"my-learning",component:MyLearningsComponent},
       {path:":courseId/update",component:UpdateCourseComponent},
       {path:":courseId",component:ViewCourseComponent},
       {path:":courseId/add",component:AddLectureComponent},
       {path:":courseId/:lectureId/update",component:UpdateLectureComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
