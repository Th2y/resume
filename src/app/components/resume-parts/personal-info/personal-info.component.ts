import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { PersonalInfo } from '../../../interfaces/personal-info';

@Component({
  selector: 'app-personal-info',
  imports: [MatIconModule],
  standalone: true,
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
})
export class PersonalInfoComponent {
  @Input() personalInfo: PersonalInfo | null = null;

  formatTitle(title: string): string {
    return title.replace(/\s*\|\s*/g, '<br>');
  }

  get phoneWhatsApp(): string {
    if (!this.personalInfo?.contacts?.phone) return '';
    return this.personalInfo.contacts.phone.replace(/\D/g, '');
  }
}
