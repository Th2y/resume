import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Language } from '../../../interfaces/language';
import { ThemeService } from '../../../services/local-storage/theme.service';

@Component({
  selector: 'app-language',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent {
  @Input() languages: Language[] = [];

  constructor(private themeService: ThemeService) {}

  colorMap = {
    pink: [
      'bg-pink-400',
      'bg-pink-500',
      'bg-pink-600',
      'bg-pink-700',
      'bg-pink-800',
      'bg-pink-900',
    ],
    blue: [
      'bg-blue-400',
      'bg-blue-500',
      'bg-blue-600',
      'bg-blue-700',
      'bg-blue-800',
      'bg-blue-900',
    ],
    green: [
      'bg-green-400',
      'bg-green-500',
      'bg-green-600',
      'bg-green-700',
      'bg-green-800',
      'bg-green-900',
    ],
    orange: [
      'bg-orange-400',
      'bg-orange-500',
      'bg-orange-600',
      'bg-orange-700',
      'bg-orange-800',
      'bg-orange-900',
    ],
    purple: [
      'bg-purple-400',
      'bg-purple-500',
      'bg-purple-600',
      'bg-purple-700',
      'bg-purple-800',
      'bg-purple-900',
    ],
  };

  getColorTone(level: number): string {
    const color = this.themeService.currentTheme.color;
    return this.colorMap[color]?.[level - 1] || 'bg-surface-container-highest';
  }
}
