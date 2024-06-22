import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private apiUrl = `${environment.backendUrl}/api`;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `${localStorage.getItem('token')}`
    })
  };
  constructor(private http: HttpClient) { }

  getAllStudents(){
    return this.http.get(`${this.apiUrl}/user`);
  }

  editStudent(id: number,object: any): Observable<any>{
    return this.http.put(`${this.apiUrl}/user/${id}`,object, this.httpOptions);
  }
  getStudentById(id:number){
    return this.http.get(`${this.apiUrl}/user/${id}`);
  }
  deleteStudentById(id:number){
    return this.http.delete(`${this.apiUrl}/user/${id}`, this.httpOptions);
  }
}
