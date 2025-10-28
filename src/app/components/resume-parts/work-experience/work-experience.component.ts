import { Component, Input } from '@angular/core';
import { WorkExperience } from '../../../interfaces/work-experience';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormatSkillNamePipe } from "../../../pipes/format-skill-name-pipe";

@Component({
  selector: 'app-work-experience',
  imports: [MatIconModule, MatTooltipModule, FormatSkillNamePipe],
  standalone: true,
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.scss',
})
export class WorkExperienceComponent {
  @Input() workExperience: WorkExperience[] = [];
}
