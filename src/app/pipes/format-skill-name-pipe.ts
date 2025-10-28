import { Pipe, PipeTransform } from '@angular/core';
import { SKILL_ICONS } from '../records/skill-icons';

@Pipe({
  name: 'formatSkillName',
  standalone: true,
})
export class FormatSkillNamePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';

    const name = value.toLowerCase();
    return SKILL_ICONS[name] || name.charAt(0).toUpperCase() + name.slice(1);
  }
}
