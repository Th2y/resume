import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { Resume } from '../../interfaces/resume';

@Injectable({
  providedIn: 'root',
})
export class ResumeService {
  private readonly resumeUrl = '/resume.json';

  constructor(private http: HttpClient) {}

  private cache$?: Observable<Resume>;

  getResume(): Observable<Resume> {
    if (!this.cache$) {
      this.cache$ = this.http.get<Resume>(this.resumeUrl).pipe(shareReplay(1));
    }
    return this.cache$;
  }
}
