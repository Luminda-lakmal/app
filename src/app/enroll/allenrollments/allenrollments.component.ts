import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { EnrollCourseService } from 'src/app/course/enroll-course.service';

@Component({
  selector: 'app-allenrollments',
  templateUrl: './allenrollments.component.html',
  styleUrls: ['./allenrollments.component.scss']
})
export class AllenrollmentsComponent implements OnInit {
  enrollments: any = [];
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  constructor(
    private enrollService: EnrollCourseService,
    private datePipe: DatePipe,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    if(this.authService.hasToken()){
      this.isLoggedIn = true; 
    }
    this.isAdmin = this.authService.isAdmin();
    const id = sessionStorage.getItem("userId");
    if (this.isAdmin) {
      this.enrollService.getAllEnrollments().subscribe(
        response => {
          this.enrollments = response;
          this.enrollments = this.enrollments.map((enrollment: { createdAt: string | number | Date; }) => ({
            ...enrollment,
            createdAt: this.datePipe.transform(enrollment.createdAt, 'MMMM d, y, h:mm a')
          }));
          console.log(response);
          console.log(response);
        },
        error => {
          console.error('Creation error', error);
        }
      )
    }
    else if (!this.isAdmin && this.isLoggedIn) {
      this.enrollService.getEnrollmentsByStudentId(id).subscribe(
        response => {
          this.enrollments = response;
          this.enrollments = this.enrollments.map((enrollment: { createdAt: string | number | Date; }) => ({
            ...enrollment,
            createdAt: this.datePipe.transform(enrollment.createdAt, 'MMMM d, y, h:mm a')
          }));
          console.log(response);
        },
        error => {
          console.error('Creation error', error);
        }
      )
    }

  }
  deleteEnrollment(id: any) {
    this.enrollService.deleteEnrollmentById(id).subscribe(
      response => {
        console.log(response);
        window.location.reload();
      },
      error => {
        console.error('Creation error', error);
      }
    )
  }

}
