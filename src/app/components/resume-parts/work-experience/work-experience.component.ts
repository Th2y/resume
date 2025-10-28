import { Component, Input } from '@angular/core';
import { WorkExperience } from '../../../interfaces/work-experience';

@Component({
  selector: 'app-work-experience',
  imports: [],
  standalone: true,
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent {
  @Input() workExperience: WorkExperience[] = [];
}
