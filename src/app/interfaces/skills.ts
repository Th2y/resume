export interface SkillItem {
  name: string;
  years: number;
}

export interface Skills {
  languages: SkillItem[];
  frameworks: SkillItem[];
  databases: SkillItem[];
  tools: SkillItem[];
  metodologies: SkillItem[];
  soft: string[];
}
