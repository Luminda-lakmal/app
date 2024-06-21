import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  hide: boolean = true;
  constructor(private router: Router) {

  }
  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.hide = false;
    }
  }
  navigateTo(path: string) {
    if(path == 'logout'){
      localStorage.removeItem('token');
      this.router.navigate([``]);
    }
    else{
      this.router.navigate([`/auth/${path}`]);
    }
  }
  navStudents(){
    this.router.navigate([`/students`]);

  }
}
