import { Fragment, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import { hasPassedQuiz } from "../../utils/quizGate";
import { QuizLockContext } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { SECTION_QUIZ_PASS_PERCENT } from "../../data/sectionQuizGates";
import { getLaModule, getLaModuleParts, getLaModulePath, getLaModuleTopics, getLaTopicPath } from "../../data/laModules";
import LUDecompositionGuide from "./LUDecompositionGuide";
import CholeskyDecompositionGuide from "./CholeskyDecompositionGuide";
import JordanNormalFormGuide from "./JordanNormalFormGuide";
import MatrixNormsGuide from "./MatrixNormsGuide";
import ComplexVectorSpacesGuide from "./ComplexVectorSpacesGuide";
import QuadraticFormsGuide from "./QuadraticFormsGuide";
import ChangeOfBasisGuide from "./ChangeOfBasisGuide";
import AffineTransformationsGuide from "./AffineTransformationsGuide";
import PrincipalComponentAnalysisGuide from "./PrincipalComponentAnalysisGuide";
import MarkovChainsGuide from "./MarkovChainsGuide";
import LinearProgrammingGuide from "./LinearProgrammingGuide";
import VectorApplicationsGuide from "./VectorApplicationsGuide";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import "./LaModuleGuide.css";

import IterativeSolversGuide from "./IterativeSolversGuide";

import EigenvalueAlgorithmsGuide from "./EigenvalueAlgorithmsGuide";

import DualSpacesGuide from "./DualSpacesGuide";

import TensorProductsGuide from "./TensorProductsGuide";

import SpectralGraphTheoryGuide from "./SpectralGraphTheoryGuide";

import MatrixCalculusGuide from "./MatrixCalculusGuide";

const TOPIC_GUIDES = {
  "matrix-calculus": MatrixCalculusGuide,
  "spectral-graph": SpectralGraphTheoryGuide,
  "tensor-products": TensorProductsGuide,
  "dual-spaces": DualSpacesGuide,
  "eigenvalue-algorithms": EigenvalueAlgorithmsGuide,
  "iterative-solvers": IterativeSolversGuide,
  "lu-decomposition": LUDecompositionGuide,
  "cholesky-decomposition": CholeskyDecompositionGuide,
  "jordan-normal-form": JordanNormalFormGuide,
  "matrix-norms-conditioning": MatrixNormsGuide,
  "complex-vector-spaces": ComplexVectorSpacesGuide,
  "quadratic-forms-definiteness": QuadraticFormsGuide,
  "change-of-basis-similarity": ChangeOfBasisGuide,
  "affine-homogeneous": AffineTransformationsGuide,
  "principal-component-analysis": PrincipalComponentAnalysisGuide,
  "markov-chains-steady-states": MarkovChainsGuide,
  "linear-programming-simplex": LinearProgrammingGuide,
  "vector-space-applications": VectorApplicationsGuide,
};

/** Reads each topic's section headings from the page for the sidebar. */
function useTopicNav(rootRef, topics, deps) {
  const [nav, setNav] = useState({});
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const next = {};
    topics.forEach((topic) => {
      const article = root.querySelector(`#${CSS.escape(topic.id)}`);
      if (!article) return;
      const items = [];
      const seen = new Set();
      article.querySelectorAll("section[id]").forEach((section) => {
        if (section.id.startsWith("quiz-")) return;
        const heading = section.querySelector(".sec-title, h2");
        let label = heading?.textContent?.trim() || (/theory/i.test(section.id) ? "Theory" : "");
        if (!label) return;
        // Each topic shows its core then advanced half, so repeated headings are the advanced ones.
        if (seen.has(label)) label = `${label} (advanced)`;
        seen.add(label);
        items.push({ id: section.id, label });
      });
      next[topic.id] = items;
    });
    setNav(next);
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps
  return nav;
}

export default function LaModuleGuide({ moduleId, part }) {
  const module = getLaModule(moduleId);
  const topics = getLaModuleTopics(module, part);
  const otherPart = getLaModuleParts(module).find((value) => value !== part);
  const otherTopics = otherPart ? getLaModuleTopics(module, otherPart) : [];
  const { quizScores = {} } = useProgress() || {};
  const mainRef = useRef(null);
  const topicNav = useTopicNav(mainRef, topics, [moduleId, part]);

  // Each checkpoint opens once the one before it (across the module) is passed.
  const locks = {};
  module.topics.forEach((topic, index) => {
    if (index === 0) return;
    const prev = module.topics[index - 1];
    if (!hasPassedQuiz(quizScores, prev.quizKey)) {
      const prevPart = getLaModuleTopics(module, part).includes(prev) ? "" : " (other part)";
      locks[topic.quizKey] = `Score ${SECTION_QUIZ_PASS_PERCENT}%+ on the ${prev.title} checkpoint${prevPart} to unlock this quiz.`;
    }
  });

  // (Tests may mock GuideMcq without the context.)
  const LockProvider = QuizLockContext?.Provider || Fragment;
  const lockProps = QuizLockContext ? { value: locks } : {};

  return (
    <LockProvider {...lockProps}>
    <StudyGuideShell key={`${moduleId}-${part}`} guideClass="partial-derivatives-guide la-module-guide" title={`${module.title} (Part ${part})`}>
      <nav className="sidebar" aria-label={`${module.title} topics`}>
        <div className="sb-brand">
          <div className="sb-sub">Linear Algebra</div>
          <div className="sb-title">{module.title}</div>
        </div>
        {topics.map((topic) => (
          <Fragment key={topic.id}>
            <div className="sb-group">{topic.title}</div>
            {(topicNav[topic.id] || []).map((item) => (
              <a key={item.id} className="sb-link" href={`#${item.id}`}>
                {item.label}
              </a>
            ))}
            <a className="sb-link" href={`#quiz-${topic.quizKey}`}>
              Checkpoint (20 Questions)
            </a>
          </Fragment>
        ))}
        {otherTopics.length ? <div className="sb-group">Part {otherPart}</div> : null}
        {otherTopics.map((topic) => (
          <Link className="sb-link sb-link--page" key={topic.id} to={getLaTopicPath(module, topic)}>
            {topic.title}
          </Link>
        ))}
      </nav>
      <main className="main" ref={mainRef}>
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra · Part {part} of 2</div>
          <h1 className="ch-title">{module.title}</h1>
          <p className="ch-sub">{topics.map((topic) => topic.title).join(" · ")}</p>
          <p>{topics.length === 1 ? "One complete topic" : "Two complete topics"}, with theory, worked examples, and a 20-question checkpoint after each topic. Each checkpoint unlocks once you score at least 80% on the one before it.</p>
          {otherPart && <p><Link to={getLaModulePath(module, otherPart)}>Open Part {otherPart}</Link></p>}
          {module.plannedNextTopic && <p>Part 2 planned: {module.plannedNextTopic}.</p>}
        </header>
        {topics.map((topic) => {
          const Guide = TOPIC_GUIDES[topic.id];
          return (
            <article key={topic.id} id={topic.id} className="la-module-topic" aria-labelledby={`${topic.id}-heading`}>
              <header className="la-module-topic-header">
                <p className="section-kicker">Topic {module.topics.indexOf(topic) + 1} of {module.plannedTopicCount || module.topics.length}</p>
                <h2 id={`${topic.id}-heading`}>{topic.title}</h2>
                <a href={`#quiz-${topic.quizKey}`}>Jump to the 20-question checkpoint</a>
              </header>
              {topic.singlePage ? <Guide embedded /> : <><Guide part={1} embedded /><Guide part={2} embedded /></>}
            </article>
          );
        })}
        {otherPart ? (
          <div className="pg-foot">
            <p>{module.title} · Part {part} of 2</p>
            <div className="guide-navigation">
              <Link
                to={getLaModulePath(module, otherPart)}
                className={`guide-nav-button guide-nav-button--${otherPart > part ? "next" : "prev"}`}
              >
                <span className="guide-nav-button__hint">{otherPart > part ? "Next part" : "Previous part"}</span>
                <span className="guide-nav-button__label">{otherTopics.map((t) => t.title).join(" & ")}</span>
              </Link>
            </div>
          </div>
        ) : null}
      </main>
    </StudyGuideShell>
    </LockProvider>
  );
}
