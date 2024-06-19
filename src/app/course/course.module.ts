import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCourseComponent } from './add-course/add-course.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseRoutingModule } from './course-routing.module';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddCourseComponent,
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    NbCardModule,
    FormsModule
  ]
})
export class CourseModule { }
