import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-activity',
  imports: [],
  standalone: true,
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  @Input() activities: string[] = [];
}
