import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Resume } from '../../interfaces/resume';
import { ResumeService } from '../../services/http/resume.service';
import { PersonalInfoComponent } from "../resume-parts/personal-info/personal-info.component";
import { SummaryComponent } from '../resume-parts/summary/summary.component';
import { WorkExperienceComponent } from '../resume-parts/work-experience/work-experience.component';
import { EducationComponent } from '../resume-parts/education/education.component';
import { LanguageComponent } from '../resume-parts/language/language.component';
import { CourseComponent } from '../resume-parts/course/course.component';
import { ActivityComponent } from '../resume-parts/activity/activity.component';
import { SkillComponent } from "../resume-parts/skill/skill.component";

@Component({
  selector: 'app-resume',
  imports: [
    PersonalInfoComponent,
    SummaryComponent,
    WorkExperienceComponent,
    EducationComponent,
    LanguageComponent,
    CourseComponent,
    ActivityComponent,
    SkillComponent
],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.scss',
})
export class ResumeComponent implements OnInit {
  @Output() myName = new EventEmitter<string>();

  resume: Resume | null = null;

  constructor(private resumeService: ResumeService) {}

  ngOnInit(): void {
    this.resumeService.getResume().subscribe((resume) => {
      this.resume = resume;

      this.myName.emit(resume.personal.name);
    });
  }
}
