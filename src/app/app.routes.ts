import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { StudentProfile } from './pages/student-profile/student-profile';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home - Student Course Portal'
  },
  {
    path: 'courses',
    component: CourseList,
    title: 'Courses - Student Course Portal'
  },
  {
    path: 'profile',
    component: StudentProfile,
    title: 'Profile - Student Course Portal'
  }
];