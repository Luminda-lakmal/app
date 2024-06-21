import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = `${environment.backendUrl}/api/course`;
  constructor(private http: HttpClient) { }

  getAllCourses(){
    return this.http.get(`${this.apiUrl}`);
  }

  createCourse(object: any): Observable<any>{
    return this.http.post(`${this.apiUrl}`,object);
  }
  editCourse(id: number,object: any): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`,object);
  }
  getCourseById(id:number){
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  deleteCourseById(id:number){
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
