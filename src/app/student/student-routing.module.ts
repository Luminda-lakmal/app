import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';


const routes: Routes = [
  { path: '', component: StudentsComponent },
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'editstudent', component: AddStudentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }