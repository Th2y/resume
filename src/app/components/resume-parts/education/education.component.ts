import { Component, Input } from '@angular/core';
import { Education } from '../../../interfaces/education';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormatSkillNamePipe } from "../../../pipes/format-skill-name-pipe";

@Component({
  selector: 'app-education',
  imports: [MatIconModule, MatTooltipModule, FormatSkillNamePipe],
  standalone: true,
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss',
})
export class EducationComponent {
  @Input() education: Education[] = [];
}
