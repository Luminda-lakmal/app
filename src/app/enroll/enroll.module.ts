import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { EnrollRoutingModule } from './enroll-routing.module';



@NgModule({
  declarations: [
    EnrollmentsComponent
  ],
  imports: [
    CommonModule,
    EnrollRoutingModule
  ]
})
export class EnrollModule { }
