import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { NbDialogService } from '@nebular/theme';
import { AddCourseComponent } from '../add-course/add-course.component';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses:any = [];
  isAdmin: boolean = false;
  constructor(
    private courseService: CourseService,
    private dialogService: NbDialogService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.isAdmin = this.authService.isAdmin();
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
  deleteCourse(id:any){
    this.courseService.deleteCourseById(id).subscribe(
      response => {
        console.log('Course deleted successfully', response);  
        window.location.reload();
      },
      error => {
        console.error('Deleted error', error);
      }
    )
  }
}
