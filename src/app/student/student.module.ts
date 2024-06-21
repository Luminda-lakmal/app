import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentsComponent } from './students/students.component';
import { StudentRoutingModule } from './student-routing.module';
import { NbCardModule } from '@nebular/theme';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddStudentComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    NbCardModule,
    FormsModule,
  ]
})
export class StudentModule { }
