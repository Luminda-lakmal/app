import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent {

  title: string = "";
  description: string = "";

  constructor(
    protected ref: NbDialogRef<AddCourseComponent>,
    private courseService: CourseService
  ) {}

  submit() {
    if (this.title && this.description) {
      const obj = {title: this.title, description: this.description}; 
      this.courseService.createCourse(obj).subscribe(
        response => {
          console.log('created successfully',response);
        },
        error => {
          console.error('Registration error', error);
          // Handle the error, e.g., display an error message to the user
        }
      )
      this.ref.close({ title: this.title, description: this.description });
    }
  }

  close() {
    this.ref.close();
  }
}
