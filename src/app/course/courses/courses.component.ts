import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { NbDialogService } from '@nebular/theme';
import { AddCourseComponent } from '../add-course/add-course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses:any = [];
  constructor(
    private courseService: CourseService,
    private dialogService: NbDialogService
  ) { }

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
  openAddCourseDialog() {
    this.dialogService.open(AddCourseComponent)
    .onClose.subscribe(result => {
      if (result) {
        this.courses.push(result);
      }
    });
    
  }
}
