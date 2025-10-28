import { Component, Input } from '@angular/core';
import { Education } from '../../../interfaces/education';

@Component({
  selector: 'app-education',
  imports: [],
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  @Input() education: Education[] = [];
}
