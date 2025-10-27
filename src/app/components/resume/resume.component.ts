import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Resume } from '../../interfaces/resume';
import { ResumeService } from '../../services/http/resume.service';
import { PersonalInfo } from '../../interfaces/personal-info';

@Component({
  selector: 'app-resume',
  imports: [],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent implements OnInit {
  @Output() myName = new EventEmitter<string>();

  resume: Resume | null = null;

  skillsGroups = [
    { key: 'languages', label: 'Linguagens' },
    { key: 'frameworks', label: 'Frameworks' },
    { key: 'tools', label: 'Ferramentas' },
    { key: 'metodologies', label: 'Metodologias' },
  ] as const;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getResume().subscribe((resume) => {
      this.resume = resume;

      this.myName.emit(resume.personal.name);
    });
  }
}
