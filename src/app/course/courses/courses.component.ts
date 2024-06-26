import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { AddCourseComponent } from '../add-course/add-course.component';
import { AuthService } from 'src/app/auth/auth.service';
import { EnrollCourseService } from '../enroll-course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: any = [];
  isAdmin: boolean = false;
  isLoggedIn: boolean = false;
  constructor(
    private courseService: CourseService,
    private dialogService: NbDialogService,
    private authService: AuthService,
    private enrollService: EnrollCourseService,
    private router: Router,
    private toastrService: NbToastrService
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
    if(this.authService.hasToken()){
      this.isLoggedIn = true; 
    }
    this.courseService.getAllCourses().subscribe(
      response => {
        this.courses = response;
        console.log('Available courses', this.courses);
      },
      error => {
        console.error('Registration error', error);
      }
    )
  }
  openAddCourseDialog() {
    sessionStorage.removeItem('courseId');
    this.dialogService.open(AddCourseComponent);
  }

  openEditCourseDialog(id: string) {
    sessionStorage.setItem("courseId", id);
    this.dialogService.open(AddCourseComponent);
  }
  enrollCourse(id: any) {
    const sid = sessionStorage.getItem("userId")
    const enrollObject = { course_id: id, student_id: sid };
    this.enrollService.createEnroll(enrollObject).subscribe(
      response => {
        console.log('Enroll created successfully', response);
        this.toastrService.show('Enrollment added successfully', 'Success', { status: 'success'});
        this.router.navigate(['enroll']);
      },
      error => {
        console.error('Creation error', error);
        this.toastrService.show('Cant create', 'Error', { status: 'danger'});
      });
  }
  deleteCourse(id: any) {
    this.courseService.deleteCourseById(id).subscribe(
      response => {
        console.log('Course deleted successfully', response);
        this.toastrService.show('Course deleted successfully', 'Success', { status: 'success'});
        window.location.reload();
      },
      error => {
        console.error('Deleted error', error);
        this.toastrService.show('Cant deleted', 'Error', { status: 'danger'});
      }
    )
  }
}
