import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { NbDialogService } from '@nebular/theme';
import { AddStudentComponent } from '../add-student/add-student.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  users:any = [];

  constructor(
    private studentsService: StudentsService,
    private dialogService: NbDialogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.studentsService.getAllStudents().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users', error);
      }
    );
  }

  openAddStudentDialog() {
    sessionStorage.removeItem('studentId');
    this.dialogService.open(AddStudentComponent);  
  }
  openEditStudentDialog(id: any) {
    sessionStorage.setItem('studentId',id)
    this.dialogService.open(AddStudentComponent);
  }
  deleteCourse(id:any){
    this.studentsService.deleteStudentById(id).subscribe(
      response => {
        console.log('student deleted successfully', response);  
        window.location.reload();
      },
      error => {
        console.error('Deleted error', error);
      }
    )
  }
  viewAEnrollments(id: any){
    sessionStorage.setItem("studentId", id);
    this.router.navigate(['enroll/studentenrollments']);
  }
}
