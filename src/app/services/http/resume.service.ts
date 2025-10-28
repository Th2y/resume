import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, of, shareReplay } from 'rxjs';
import { Resume } from '../../interfaces/resume';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private readonly resumeUrl = 'assets/resume.json';
  private cache$?: Observable<Resume>;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getResume(): Observable<Resume> {
    if (this.cache$) return this.cache$;

    if (isPlatformBrowser(this.platformId)) {
      this.cache$ = this.http.get<Resume>(this.resumeUrl).pipe(shareReplay(1));
    } else {
      this.cache$ = of({} as Resume);
    }

    return this.cache$;
  }
}
