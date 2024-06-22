import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  courses: any = [];
  reload = true;
  constructor(
    private courseService: CourseService,
  ) {}

  ngOnInit(): void {
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

}
