import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  imports: [],
  standalone: true,
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss',
})
export class CourseComponent {
  @Input() courses: string[] = [];
}
