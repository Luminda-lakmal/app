import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollmentsComponent } from './enrollments/enrollments.component';
import { AllenrollmentsComponent } from './allenrollments/allenrollments.component';


const routes: Routes = [
  { path: 'studentenrollments', component: EnrollmentsComponent },
  { path: '', component:AllenrollmentsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollRoutingModule { }