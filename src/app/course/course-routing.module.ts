import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { AddCourseComponent } from './add-course/add-course.component';


const routes: Routes = [
  { path: '', component: CoursesComponent },
  { path: 'addcourse', component: AddCourseComponent },
  { path: 'editcourse', component: AddCourseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }