import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { EnrollRoutingModule } from './enroll-routing.module';
import { AllenrollmentsComponent } from './allenrollments/allenrollments.component';



@NgModule({
  declarations: [
    EnrollmentsComponent,
    AllenrollmentsComponent
  ],
  imports: [
    CommonModule,
    EnrollRoutingModule
  ]
})
export class EnrollModule { }
