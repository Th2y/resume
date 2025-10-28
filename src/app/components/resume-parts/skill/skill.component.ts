import { Component, Input } from '@angular/core';
import { Skills } from '../../../interfaces/skills';

@Component({
  selector: 'app-skill',
  imports: [],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss',
})
export class SkillComponent {
  @Input() skills: Skills | null = null;

  skillsGroups = [
    { key: 'languages', label: 'Linguagens' },
    { key: 'frameworks', label: 'Frameworks' },
    { key: 'tools', label: 'Ferramentas' },
    { key: 'metodologies', label: 'Metodologias' },
  ] as const;
}
