import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EnrollCourseService } from 'src/app/course/enroll-course.service';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.scss']
})
export class EnrollmentsComponent implements OnInit {
  enrollments:any = [];
  constructor(
    private enrollService: EnrollCourseService,
    private datePipe: DatePipe
  ) { }

  ngOnInit(): void {
    const studentId = sessionStorage.getItem("studentId");
    this.enrollService.getEnrollmentsByStudentId(studentId).subscribe(
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
  deleteEnrollment(id:any){
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
