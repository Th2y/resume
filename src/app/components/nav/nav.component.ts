import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AsyncPipe, CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ThemeService } from '../../services/local-storage/theme.service';
import { ResumeComponent } from '../resume/resume.component';
import { PersonalInfo } from '../../interfaces/personal-info';

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
    AsyncPipe,
    ResumeComponent,
  ],
})
export class NavComponent {
  myName: string = '';

  private breakpointObserver = inject(BreakpointObserver);

  constructor(public themeService: ThemeService) {}

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  scrollTo(sectionId: string) {
    if (typeof window !== 'undefined') {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  changeTheme() {
    this.themeService.toggleTheme();
  }

  setMyName(myName: string) {
    setTimeout(() => {
      this.myName = myName;
    });
  }
}
