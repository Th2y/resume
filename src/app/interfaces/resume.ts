import { Education } from "./education";
import { Language } from "./language";
import { PersonalInfo } from "./personal-info";
import { Skills } from "./skills";
import { WorkExperience } from "./work-experience";

export interface Resume {
  personal: PersonalInfo;
  objective: string;
  summary: string;
  experience: WorkExperience[];
  education: Education[];
  languages: Language[];
  courses: string[];
  skills: Skills;
  activities: string[];
}
