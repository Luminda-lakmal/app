import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollCourseService {
  private apiUrl = `${environment.backendUrl}/api/enrollment`;
  constructor(private http: HttpClient) { }

  createEnroll(object:any): Observable<any>{
    return this.http.post(`${this.apiUrl}`,object);
  }
  getEnrollmentsByStudentId(id: any){
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  deleteEnrollmentById(id: any){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getAllEnrollments(){
    return this.http.get(`${this.apiUrl}`);
  }
}
