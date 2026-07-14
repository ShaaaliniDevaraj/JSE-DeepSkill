import { Component } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  imports: [],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css'
})
export class StudentProfile {
  student = {
    name: 'Shaalini Devaraj',
    registerNumber: '23IT001',
    department: 'Information Technology',
    year: 'Third Year',
    semester: 'Semester 6',
    email: 'shaalini@example.com',
    gpa: 3.8,
    enrolledCourses: 3
  };
}