import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl = `${environment.backendUrl}/api`;
  constructor(private http: HttpClient) { }

  getAllStudents(){
    return this.http.get(`${this.apiUrl}/user`);
  }

  // createCourse(object: any): Observable<any>{
  //   return this.http.post(`${this.apiUrl}/course`,object);
  // }
  editStudent(id: number,object: any): Observable<any>{
    return this.http.put(`${this.apiUrl}/user/${id}`,object);
  }
  getStudentById(id:number){
    return this.http.get(`${this.apiUrl}/user/${id}`);
  }
  deleteStudentById(id:number){
    return this.http.delete(`${this.apiUrl}/user/${id}`);
  }
}
