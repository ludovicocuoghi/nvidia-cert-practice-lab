import { describe, expect, it } from "vitest";
import { generalBuilderPaths, generalConceptIndex } from "../client/src/data/study-services.js";

const requiredSearchRoutes = [
  ["hallucination", "build-rag-application", "control-hallucination-and-citations"],
  ["ReAct", "build-tool-using-agent", "use-react-only-when-needed"],
  ["tool permissions", "build-tool-using-agent", "design-tool-contracts"],
  ["fine tuning", "fine-tune-existing-model", "choose-tuning-method"],
  ["p99", "deploy-and-serve-ai-system", "handle-latency-and-throughput"],
  ["human approval", "run-evaluate-and-improve", "review-human-risk"],
  ["memory", "build-tool-using-agent", "add-memory-carefully"],
  ["ACL", "build-rag-application", "ingest-documents-and-permissions"],
  ["adapter", "fine-tune-existing-model", "approve-and-deploy-adapter"],
  ["canary", "deploy-and-serve-ai-system", "route-traffic"]
];

const richCardFields = [
  "lesson",
  "purpose",
  "keyDecision",
  "when",
  "decisionToMake",
  "inputs",
  "outputs",
  "traps",
  "relatedPlatformExamples",
  "searchKeywords",
  "mentalModel",
  "examRecognition",
  "decisionTable",
  "commonTraps",
  "scenarios",
  "nvidiaMapping",
  "whatToMeasure",
  "implementationPattern",
  "failureModes"
];

const requiredChapterSections = [
  "What this chapter is about",
  "Core idea",
  "How it works in practice",
  "What good implementation looks like",
  "Common failure patterns",
  "How to fix or manage those failures",
  "Example",
  "Exam traps",
  "What to measure",
  "Chapter recap"
];

const requiredCardLessonSections = [
  "What this chapter is about",
  "Core idea",
  "How it works in practice",
  "What good implementation looks like",
  "Common failure patterns",
  "How to fix or manage those failures",
  "Example",
  "Exam traps",
  "What to measure",
  "Chapter recap"
];

const chapterRequiredTerms: Record<string, string[]> = {
  "use-existing-model-or-api": [
    "approved",
    "hosted API",
    "self-hosted",
    "context length",
    "modality",
    "tool calling",
    "structured output",
    "cost_per_task",
    "governance"
  ],
  "build-rag-application": [
    "BM25",
    "cosine",
    "hybrid_score",
    "RRF",
    "rerank",
    "chunk",
    "citations",
    "stale",
    "deletion"
  ],
  "build-tool-using-agent": [
    "ReAct",
    "tool contracts",
    "permissions",
    "human approval",
    "idempotency",
    "audit"
  ],
  "fine-tune-existing-model": [
    "SFT",
    "PEFT",
    "LoRA",
    "QLoRA",
    "DPO",
    "low rank",
    "continued pretraining"
  ],
  "train-model-from-zero": [
    "tokenizer",
    "corpus",
    "architecture",
    "distributed training",
    "NCCL",
    "checkpoint",
    "safety"
  ],
  "deploy-and-serve-ai-system": [
    "p95",
    "p99",
    "timeout",
    "retries",
    "fallback",
    "batching",
    "monitoring",
    "latency_total"
  ],
  "run-evaluate-and-improve": [
    "offline eval",
    "online",
    "A/B",
    "regression",
    "safety",
    "cost_per_success",
    "feedback"
  ]
};

const focusedRequiredTerms: Record<string, string[]> = {
  "chunk-and-index": ["chunk size", "overlap", "metadata", "ACL", "embedding", "vector index"],
  "retrieve-candidates": ["BM25", "vector search", "hybrid search", "metadata filters"],
  "rerank-and-pack-context": ["reranking", "RRF", "MMR", "deduplication", "context budget"],
  "write-prompt-contract": ["role", "task", "schema", "evidence", "citations", "refusal", "uncertainty"],
  "use-react-only-when-needed": ["Thought", "Action", "Observation", "tool loop"],
  "design-tool-contracts": ["inputs", "side effects", "permissions", "failure modes"],
  "choose-tuning-method": ["low rank matrices", "adapters", "quantization"],
  "handle-latency-and-throughput": ["tail latency", "percentile", "timeout", "fallback"]
};

function blockText(block: any): string {
  if (!block) return "";
  return [
    block.type,
    block.title,
    block.text,
    block.body,
    block.latex,
    block.formula,
    block.code,
    block.bad,
    block.good,
    ...(block.items || []),
    ...(block.columns || []),
    ...(block.headers || []),
    ...(block.rows || []).flatMap((row: any) => Array.isArray(row) ? row : Object.values(row || {})),
    ...(block.nodes || []).map((node: any) => typeof node === "string" ? node : `${node.label || node.title || node.id || ""} ${node.detail || ""}`),
    ...(block.edges || []).map((edge: any) => typeof edge === "string" ? edge : `${edge.from || edge.source || ""} ${edge.to || edge.target || ""} ${edge.label || ""}`)
  ].filter(Boolean).join(" ");
}

function sectionText(section: any): string {
  return [
    section.title,
    ...(section.paragraphs || []),
    ...(section.steps || []),
    ...(section.items || []),
    ...(section.callouts || []).flatMap((callout: any) => [callout.title, callout.body, ...(callout.items || [])]),
    ...(section.examples || []).flatMap((example: any) => [example.title, example.bad, example.good]),
    ...(section.tables || []).flatMap((table: any) => [
      table.caption,
      ...(table.headers || []),
      ...(table.rows || []).flat()
    ]),
    ...(section.codeBlocks || []).map((block: any) => typeof block === "string" ? block : `${block.label || ""} ${block.code || ""}`),
    ...(section.blocks || []).map(blockText),
    section.recap || ""
  ].filter(Boolean).join(" ");
}

function chapterText(path: any): string {
  return [path.chapter?.title, path.chapter?.intro, ...(path.chapter?.sections || []).map(sectionText)]
    .filter(Boolean)
    .join(" ");
}

function lessonText(card: any): string {
  const lesson = card.studyPage?.lesson || {};
  return [
    lesson.title,
    lesson.intro,
    ...(lesson.quickReview || []).flatMap((tab: any) => [tab.title, ...(tab.items || [])]),
    ...(lesson.sections || []).map(sectionText)
  ].filter(Boolean).join(" ");
}

function blockTypes(sections: any[]): Set<string> {
  return new Set((sections || []).flatMap((section) => (section.blocks || []).map((block: any) => block.type)));
}

function expectTextIncludesAll(text: string, terms: string[], label: string) {
  const lower = text.toLowerCase();
  for (const term of terms) {
    expect(lower, `${label} missing ${term}`).toContain(term.toLowerCase());
  }
}

describe("General Study builder paths", () => {
  it("keeps the required seven Builder Paths in order", () => {
    expect(generalBuilderPaths.map((path) => path.title)).toEqual([
      "Build Direct Model/API App",
      "Build RAG Application",
      "Build Agentic Workflow",
      "Adapt Existing Model",
      "Train Foundation Model",
      "Deploy And Serve AI System",
      "Evaluate And Improve System"
    ]);
  });

  it("keeps every Builder Path populated with sequential step cards", () => {
    for (const path of generalBuilderPaths) {
      expect(path.cards.length).toBeGreaterThanOrEqual(6);
      expect(path.cards.map((card) => card.stepNumber)).toEqual(
        path.cards.map((_, index) => index + 1)
      );
    }
  });

  it("gives every Builder Path a readable textbook-style chapter before study-card drilling", () => {
    for (const path of generalBuilderPaths) {
      expect(path.chapter, `${path.title} missing chapter`).toBeTruthy();
      expect(path.chapter.intro.length, `${path.title} chapter intro too short`).toBeGreaterThan(80);
      expect(path.chapter.sections.map((section) => section.title)).toEqual(requiredChapterSections);
      for (const section of path.chapter.sections) {
        const text = sectionText(section);
        expect(text.length, `${path.title} / ${section.title} is too shallow`).toBeGreaterThan(90);
      }
      const practicalSection = path.chapter.sections.find((section) => section.title === "How it works in practice");
      expect(practicalSection?.tables?.length, `${path.title} missing chapter table`).toBeGreaterThan(0);
      expect(practicalSection?.codeBlocks?.length, `${path.title} missing chapter code example`).toBeGreaterThan(0);
    }
  });

  it("keeps every Builder Path unique, rich, and topic-specific", () => {
    const fingerprints = new Set<string>();
    for (const path of generalBuilderPaths) {
      const text = chapterText(path);
      const types = blockTypes(path.chapter.sections);
      expect(text.length, `${path.title} chapter is too short`).toBeGreaterThan(4500);
      expect(types.has("scenario") || types.has("callout"), `${path.title} missing scenario or callout`).toBe(true);
      expect(types.has("badGood"), `${path.title} missing bad/good example`).toBe(true);
      expect(path.chapter.sections.some((section) => section.title === "What to measure" && sectionText(section).length > 200), `${path.title} missing metrics`).toBe(true);
      expectTextIncludesAll(text, chapterRequiredTerms[path.id], path.title);
      const fingerprint = text.toLowerCase().replace(/\s+/g, " ").slice(0, 700);
      expect(fingerprints.has(fingerprint), `${path.title} appears duplicated`).toBe(false);
      fingerprints.add(fingerprint);
    }
  });

  it("routes required search terms to full study-card targets", () => {
    for (const [keyword, builderPathId, cardId] of requiredSearchRoutes) {
      const route = generalConceptIndex.find((entry) => entry.keyword === keyword);
      expect(route, keyword).toMatchObject({ builderPathId, cardId });
    }
  });

  it("gives every step card a full study-page content contract", () => {
    for (const path of generalBuilderPaths) {
      for (const card of path.cards) {
        expect(card.studyPage, `${path.title} / ${card.title}`).toBeTruthy();
        for (const field of richCardFields) {
          const value = card.studyPage[field];
          expect(value, `${path.title} / ${card.title} missing ${field}`).toBeTruthy();
          if (Array.isArray(value)) {
            expect(value.length, `${path.title} / ${card.title} empty ${field}`).toBeGreaterThan(0);
          }
        }
      }
    }
  });

  it("gives every study card a topic-specific lesson before reference metadata", () => {
    for (const path of generalBuilderPaths) {
      for (const card of path.cards) {
        const lesson = card.studyPage.lesson;
        expect(lesson.title, `${path.title} / ${card.title} missing lesson title`).toContain(card.title);
        expect(lesson.intro.length, `${path.title} / ${card.title} lesson intro too short`).toBeGreaterThan(120);
        const lessonSections = lesson.sections.map((section) => section.title);
        for (const requiredSection of requiredCardLessonSections) {
          expect(lessonSections, `${path.title} / ${card.title} missing ${requiredSection}`).toContain(requiredSection);
        }
        expect(lesson.quickReview?.map((tab) => tab.title), `${path.title} / ${card.title} missing quick review tabs`).toEqual([
          "Summary",
          "Key points",
          "Exam traps",
          "Measures"
        ]);
        for (const tab of lesson.quickReview || []) {
          expect(tab.items?.length, `${path.title} / ${card.title} empty ${tab.title} tab`).toBeGreaterThan(1);
        }
        const text = lessonText(card);
        const types = blockTypes(lesson.sections);
        expect(text.length, `${path.title} / ${card.title} lesson is too shallow`).toBeGreaterThan(2500);
        expect(text, `${path.title} / ${card.title} lesson does not mention its decision`).toContain(card.keyDecision.slice(0, 24));
        expect(types.has("scenario") || types.has("callout"), `${path.title} / ${card.title} missing scenario or callout`).toBe(true);
        expect(types.has("badGood"), `${path.title} / ${card.title} missing bad/good example`).toBe(true);
        expect(["formula", "code", "pseudocode", "table", "diagram"].some((type) => types.has(type)), `${path.title} / ${card.title} missing technical block`).toBe(true);
        expect(text, `${path.title} / ${card.title} should not use fallback boilerplate`).not.toContain("This chapter teaches " + card.title + " inside");
        expect(text, `${path.title} / ${card.title} should not use old boilerplate`).not.toContain("this step matters because this lesson is about");
      }
    }
  });

  it("teaches prompt engineering on the Write Prompt Contract card", () => {
    const path = generalBuilderPaths.find((entry) => entry.id === "use-existing-model-or-api");
    const card = path?.cards.find((entry) => entry.id === "write-prompt-contract");
    const lessonText = JSON.stringify(card?.studyPage.lesson || {});
    for (const term of ["Prompt Engineering", "role", "task", "context", "evidence", "output format", "uncertainty", "refusal", "tool usage", "few-shot", "structured", "RAG"]) {
      expect(lessonText, `Prompt lesson missing ${term}`).toContain(term);
    }
  });

  it("teaches the required deep technical terms on important focused cards", () => {
    for (const [cardId, terms] of Object.entries(focusedRequiredTerms)) {
      const card = generalBuilderPaths.flatMap((path) => path.cards).find((entry) => entry.id === cardId);
      expect(card, `${cardId} missing`).toBeTruthy();
      expectTextIncludesAll(lessonText(card), terms, cardId);
    }
  });

  it("keeps the required route-family concepts in their chapters", () => {
    const byId = Object.fromEntries(generalBuilderPaths.map((path) => [path.id, chapterText(path)]));
    expectTextIncludesAll(byId["build-rag-application"], ["BM25", "cosine similarity", "hybrid retrieval", "reranking", "chunking", "citations", "freshness"], "RAG chapter");
    expectTextIncludesAll(byId["build-tool-using-agent"], ["ReAct", "tool contracts", "permissions", "human approval", "tool validation"], "Agent chapter");
    expectTextIncludesAll(byId["deploy-and-serve-ai-system"], ["p95", "p99", "retries", "timeout", "fallback", "batching", "monitoring"], "Serving chapter");
    expectTextIncludesAll(byId["run-evaluate-and-improve"], ["offline eval", "online", "A/B testing", "regression", "safety", "cost", "feedback"], "Evaluation chapter");
  });
});
