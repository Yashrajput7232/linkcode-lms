import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { IsAdminGuard } from 'src/app/guards/is-admin.guard';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: "exam", loadChildren: () => import('./exam/exam.module').then(m => m.ExamModule) },
      { path: "course", loadChildren: () => import('./course/course.module').then(m => m.CourseModule) },
      { path: "user", loadChildren: () => import('./user/user.module').then(m => m.UserModule),canActivate:[IsAdminGuard]},
      { path: 'profile', component: ProfileComponent},
      { path: "compiler", loadChildren: () => import('./compiler/compiler.module').then(m => m.CompilerModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
