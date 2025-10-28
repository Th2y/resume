import { Component, Input } from '@angular/core';
import { Language } from '../../../interfaces/language';

@Component({
  selector: 'app-language',
  imports: [],
  standalone: true,
  templateUrl: './language.component.html',
  styleUrl: './language.component.scss',
})
export class LanguageComponent {
  @Input() languages: Language[] = [];
}
