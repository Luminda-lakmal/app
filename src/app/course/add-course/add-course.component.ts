import { Component, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {

  title: string = "";
  description: string = "";
  courseId: any = null;
  pageTitle: string = "Add";
  constructor(
    protected ref: NbDialogRef<AddCourseComponent>,
    private courseService: CourseService,
    private toastrService: NbToastrService
  ) {}

  ngOnInit(): void {
    const courseId:any = sessionStorage.getItem('courseId');
    
    if (sessionStorage.getItem('courseId')) {
      this.pageTitle = "Edit";
      this.courseService.getCourseById(courseId).subscribe(
        response => {
          const res:any = response
          this.title = res['title'];
          this.description = res['description'];
        },
        error => {
          console.error('Error fetching course details', error);
        }
      );
    }
  }

  submit() {
    if (this.title && this.description) {
      const courseData = { title: this.title, description: this.description };
      const courseId:any = sessionStorage.getItem('courseId');
      if (sessionStorage.getItem('courseId')) {
        // Update existing course
        this.courseService.editCourse(courseId, courseData).subscribe(
          response => {
            console.log('Course updated successfully', response);
            sessionStorage.removeItem('courseId');
            this.title = "";
            this.description = "";
            window.location.reload();
            this.toastrService.show('Course updated successfully', 'Success', { status: 'success'});
          },
          error => {
            this.toastrService.show('Cant updated', 'Error', { status: 'danger'});
            console.error('Update error', error);
          }
        );
      } else {
        // Create new course
        this.courseService.createCourse(courseData).subscribe(
          response => {
            console.log('Course created successfully', response);
            this.toastrService.show("Course created successfully", 'Success', { status: 'success' });
            // window.location.reload();
          },
          error => {
            console.error('Creation error', error);
            this.toastrService.show('Cant create', 'Error', { status: 'danger'});
          }
        );
      }
      this.ref.close({ title: this.title, description: this.description });
    }
  }

  close() {
    this.title = "";
    this.description = "";
    this.ref.close();
  }
}
