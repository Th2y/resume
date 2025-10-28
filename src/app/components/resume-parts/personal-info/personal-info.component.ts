import { Component, Input } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    this.iconRegistry.addSvgIcon(
      'whatsapp',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/whatsapp.svg')
    );
    this.iconRegistry.addSvgIcon(
      'github',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/github.svg')
    );
    this.iconRegistry.addSvgIcon(
      'linkedin',
      this.sanitizer.bypassSecurityTrustResourceUrl('assets/linkedin.svg')
    );
  }

  formatTitle(title: string): string {
    return title.replace(/\s*\|\s*/g, '<br>');
  }

  get phoneWhatsApp(): string {
    if (!this.personalInfo?.contacts?.phone) return '';
    return this.personalInfo.contacts.phone.replace(/\D/g, '');
  }
}
