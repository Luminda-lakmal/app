import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { NbDialogRef } from '@nebular/theme';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  pageTitle = "Add Student";
  name: string = "";
  email: string = "";
  password: string = "";
  address: string = "";
  phone: string = "";
  constructor(
    protected ref: NbDialogRef<AddStudentComponent>,
    private authService: AuthService,
    private studentService: StudentsService,
  ) { }

  ngOnInit(): void {
    const studentId: any = sessionStorage.getItem('studentId');

    if (sessionStorage.getItem('studentId')) {
      this.pageTitle = "Edit";
      this.studentService.getStudentById(studentId).subscribe(
        response => {
          const res: any = response
          this.name = res['name'];
          this.email = res['email'];
          this.password = res['password'],
            this.address = res['address'],
            this.phone = res['phone']
        },
        error => {
          console.error('Error fetching student details', error);
        }
      );
    }
  }
  submit() {
    const studentId: any = sessionStorage.getItem('studentId');
    const studentData = { name: this.name, email: this.email, password: this.password, address: this.address, phone: this.phone };
    if (sessionStorage.getItem('studentId')) {
      this.studentService.editStudent(studentId,studentData).subscribe(response => {
        console.log('student edited successfully', response);
        window.location.reload();
      },
        error => {
          console.error('student edit error', error);

        });
    }
    else {
      this.authService.register(studentData).subscribe(response => {
        console.log('student creation successful', response);
        window.location.reload();
      },
        error => {
          console.error('student creation error', error);

        });
    }
  }
  close() {
    this.name = "";
    this.email = "";
    this.address = "",
    this.password = "",
    this.phone = "",
    this.ref.close();
  }
}
