import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems = [
    {
      title: 'Students',
      icon: 'home-outline',
      link: '/student', // this path is relative to the root module
    },
    {
      title: 'Courses',
      icon: 'person-outline',
      link: '/course',
    },
    {
      title: 'Enrollments',
      icon: 'settings-outline',
      link: '/enroll',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
