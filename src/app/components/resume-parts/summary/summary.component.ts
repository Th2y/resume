import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-summary',
  imports: [],
  standalone: true,
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss',
})
export class SummaryComponent {
  @Input() objective: string | null = null;
  @Input() summary: string | null = null;
}
