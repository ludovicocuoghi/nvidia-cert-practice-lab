export type Certification = {
  name: string;
  code: string;
  durationMinutes: number;
  questionRange: string;
  level: string;
  source?: string;
  note?: string;
  passingScorePercent?: number | null;
};

export type BlueprintDomain = {
  name: string;
  weight: number;
  focus?: string;
};

export type Question = {
  id: string;
  domain: string;
  topic?: string;
  difficulty?: string;
  source?: "original" | "high_fidelity_generated" | "generated_draft";
  question: string;
  choices: string[];
  answer: number;
  explanation?: string;
  whyWrong?: string[];
};

export type ExamPayload = {
  certification: Certification;
  domains: BlueprintDomain[];
  questions: Question[];
  practicePoolIds?: string[];
  originalBankIds?: string[];
  highFidelityGeneratedIds?: string[];
  generatedPracticeIds?: string[];
  approvedGeneratedIds?: string[];
  pendingGeneratedIds?: string[];
  rejectedGeneratedIds?: string[];
  slug?: string;
};
