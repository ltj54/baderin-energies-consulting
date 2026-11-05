"use client";

import { useEffect, useRef, useState } from "react";

type Stage = {
  name: string;
  detail: string;
  plainTitle: string;
  explanation: string;
  questions: string[];
};

const stages: Stage[] = [
  {
    name: "Concept",
    detail: "Defining the need, objectives and main constraints.",
    plainTitle: "Defining the project idea",
    explanation: "The concept stage describes the purpose of the project, the main requirements and the limits that are already known. It provides enough information to decide what should be studied next without designing the full solution.",
    questions: ["What is the project intended to achieve?", "What must the solution do?", "What information is still missing?"],
  },
  {
    name: "Studies",
    detail: "Examining and comparing possible solutions.",
    plainTitle: "Comparing the options",
    explanation: "Studies examine different technical options. Each option is assessed against the project requirements so that differences, limitations and missing information are documented before one direction is selected.",
    questions: ["Which options are realistic?", "What are the important differences?", "What information is missing?"],
  },
  {
    name: "Pre-FEED",
    detail: "Developing the main options before detailed front-end engineering.",
    plainTitle: "Selecting an option for FEED",
    explanation: "Pre-FEED is the work carried out before Front-End Engineering Design. The leading options are developed and compared so that a preferred option can be selected and the scope of FEED can be defined.",
    questions: ["Which option should be selected?", "What are the main technical uncertainties?", "What should be defined in FEED?"],
  },
  {
    name: "FEED",
    detail: "Defining the selected solution, scope and technical requirements.",
    plainTitle: "Defining the selected solution",
    explanation: "FEED stands for Front-End Engineering Design. The selected solution is developed into a technical basis that defines the scope, requirements and important interfaces for execution planning.",
    questions: ["What exactly will be delivered?", "How should the main parts work together?", "Is the basis clear enough for execution planning?"],
  },
  {
    name: "EPCI",
    detail: "Consultancy and coordination support within the EPCI phase.",
    plainTitle: "Supporting work during EPCI",
    explanation: "EPCI stands for Engineering, Procurement, Construction and Installation. On this site, EPCI describes a project phase in which the consultancy may provide technical follow-up, coordination or project management support. It does not mean that the sole proprietorship undertakes a complete EPCI contract.",
    questions: ["Which activities require technical follow-up?", "Which interfaces need coordination?", "How are decisions and progress being managed?"],
  },
  {
    name: "Project management",
    detail: "Coordinating responsibilities, decisions, schedule and communication.",
    plainTitle: "Coordinating the project",
    explanation: "Project management coordinates responsibilities, decisions, schedule, progress and communication across the project stages.",
    questions: ["Who is responsible for what?", "Which decisions are needed, and when?", "Are progress and open issues clear?"],
  },
];

const guideTerms = [
  { name: "Pre-FEED", detail: "Work done before detailed front-end engineering, used to compare and prepare the main options." },
  { name: "FEED", detail: "Front-End Engineering Design — the stage where the selected technical solution is defined more clearly." },
  { name: "EPCI", detail: "Engineering, Procurement, Construction and Installation — here referring to consultancy support within that project phase, not a complete EPCI contract." },
];

export default function LifecycleSection() {
  const [selected, setSelected] = useState<Stage | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selected) return;

    const dialog = dialogRef.current;
    if (!dialog) return;

    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    const previousBodyStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      left: document.body.style.left,
      right: document.body.style.right,
      width: document.body.style.width,
    };

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = `-${scrollX}px`;
    document.body.style.right = "0";
    document.body.style.width = "100%";
    if (!dialog.open) dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();

      const previousScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = "auto";
      document.body.style.overflow = previousBodyStyles.overflow;
      document.body.style.position = previousBodyStyles.position;
      document.body.style.top = previousBodyStyles.top;
      document.body.style.left = previousBodyStyles.left;
      document.body.style.right = previousBodyStyles.right;
      document.body.style.width = previousBodyStyles.width;
      window.scrollTo(scrollX, scrollY);
      triggerRef.current?.focus({ preventScroll: true });
      document.documentElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, [selected]);

  function openStage(stage: Stage, trigger: HTMLButtonElement) {
    triggerRef.current = trigger;
    setSelected(stage);
  }

  return (
    <section className="lifecycle" id="lifecycle" aria-labelledby="lifecycle-title">
      <div className="lifecycle-heading">
        <div><p className="section-label">PROJECT LIFECYCLE</p><h2 id="lifecycle-title">Support across project phases.</h2></div>
        <p>Technical consultancy, coordination and project management support can be provided across the stages below.</p>
      </div>
      <p className="stage-instruction">Select a stage to view its scope and typical project questions.</p>
      <ol className="phase-list">
        {stages.slice(0, 5).map((stage) => (
          <li key={stage.name}>
            <button type="button" onClick={(event) => openStage(stage, event.currentTarget)} aria-haspopup="dialog">
              <span className="phase-bar" aria-hidden="true" />
              <span><h3>{stage.name}</h3><span className="phase-detail">{stage.detail}</span></span>
              <span className="phase-arrow" aria-hidden="true">→</span>
              <span className="learn-more">Read more</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="term-guide" aria-label="Explanation of industry terms">
        {guideTerms.map((term) => <p key={term.name}><strong>{term.name}</strong><span>{term.detail}</span></p>)}
      </div>
      <button className="management-line" type="button" onClick={(event) => openStage(stages[5], event.currentTarget)} aria-haspopup="dialog">
        <span className="management-dot" />
        <span className="management-copy"><strong>Project management</strong></span>
        <span className="management-rule" />
        <span className="management-more">View details →</span>
      </button>

      {selected && (
        <dialog ref={dialogRef} className="stage-dialog" tabIndex={-1} aria-labelledby="stage-dialog-title" onCancel={(event) => { event.preventDefault(); setSelected(null); }}>
          <button className="dialog-close" type="button" onClick={() => setSelected(null)} aria-label="Close explanation">×</button>
          <p className="dialog-label">{selected.name} · OVERVIEW</p>
          <h2 id="stage-dialog-title">{selected.plainTitle}</h2>
          <p className="dialog-explanation">{selected.explanation}</p>
          <div className="dialog-questions">
            <h3>Typical questions at this stage</h3>
            <ul>{selected.questions.map((question) => <li key={question}>{question}</li>)}</ul>
          </div>
          <button className="dialog-done" type="button" onClick={() => setSelected(null)}>Back to the project stages</button>
        </dialog>
      )}
    </section>
  );
}
