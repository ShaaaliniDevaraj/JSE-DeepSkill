import { Component } from '@angular/core';

@Component({
  selector: 'app-course-list',
  imports: [],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css'
})
export class CourseList {
  courses = [
    {
      id: 1,
      name: 'Angular Fundamentals',
      code: 'CS201',
      credits: 4
    },
    {
      id: 2,
      name: 'Web Development',
      code: 'CS202',
      credits: 3
    },
    {
      id: 3,
      name: 'Database Management Systems',
      code: 'CS203',
      credits: 4
    },
    {
      id: 4,
      name: 'Software Engineering',
      code: 'CS204',
      credits: 3
    },
    {
      id: 5,
      name: 'Cloud Computing',
      code: 'CS205',
      credits: 3
    }
  ];
}