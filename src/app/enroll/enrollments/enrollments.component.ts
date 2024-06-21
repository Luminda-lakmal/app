import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    
  ) { }

  ngOnInit(): void {
    const studentId = sessionStorage.getItem("studentId");
    this.enrollService.getEnrollmentsByStudentId(studentId).subscribe(
      response => {
        this.enrollments = response;
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
