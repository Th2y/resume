import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '../../../interfaces/language';

@Component({
  selector: 'app-language',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent {
  @Input() languages: Language[] = [];

  getColorTone(level: number): string {
    switch (level) {
      case 1:
        return 'bg-pink-400';
      case 2:
        return 'bg-pink-500';
      case 3:
        return 'bg-pink-600';
      case 4:
        return 'bg-pink-700';
      case 5:
        return 'bg-pink-800';
      case 6:
        return 'bg-pink-900';
      default:
        return 'bg-surface-container-highest';
    }
  }
}
