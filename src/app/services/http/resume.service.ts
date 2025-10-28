import { HttpClient } from '@angular/common/http';
import { Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable, shareReplay } from 'rxjs';
import { Resume } from '../../interfaces/resume';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private readonly resumeUrl = '/assets/resume.json';
  private cache$?: Observable<Resume>;

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getResume(): Observable<Resume> {
    if (!isPlatformBrowser(this.platformId)) {
      // SSR/prerender: não tenta buscar o JSON
      return of({} as Resume);
    }

    if (!this.cache$) {
      this.cache$ = this.http.get<Resume>(this.resumeUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }
}
function Inject(PLATFORM_ID: any): (target: typeof ResumeService, propertyKey: undefined, parameterIndex: 1) => void {
  throw new Error('Function not implemented.');
}

function of(arg0: Resume): Observable<Resume> {
  throw new Error('Function not implemented.');
}

