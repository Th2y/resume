import { Component, Inject, inject, PLATFORM_ID } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule, isPlatformBrowser } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { ThemeService } from '../../services/local-storage/theme.service';
import { ResumeComponent } from '../resume/resume.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    AsyncPipe,
    ResumeComponent,
  ],
})
export class NavComponent {
  myName: string = '';

  themeColors = ['blue', 'pink', 'purple', 'orange', 'green'] as const;

  private breakpointObserver = inject(BreakpointObserver);

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    public themeService: ThemeService
  ) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  scrollTo(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  changeMode() {
    this.themeService.toggleMode();
  }

  changeColor(color: 'blue' | 'pink' | 'green' | 'orange' | 'purple') {
    this.themeService.setColor(color);
  }

  getColorPreview(color: string): string {
    const colorMap: Record<string, string> = {
      blue: '#2196F3',
      pink: '#E91E63',
      purple: '#9C27B0',
      orange: '#FF9800',
      green: '#4CAF50',
    };
    return colorMap[color];
  }

  setMyName(myName: string) {
    setTimeout(() => {
      this.myName = myName;
    });
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/curriculo.pdf';
    link.download =
      'Desenvolvedor Front-end - Thayane Carvalho dos Santos.pdf';
    link.click();
  }
}
