export interface SkillItem {
  name: string;
  years: number;
}

export interface Skills {
  languages: SkillItem[];
  frameworks: SkillItem[];
  tools: SkillItem[];
  metodologies: SkillItem[];
  soft: string[];
}
