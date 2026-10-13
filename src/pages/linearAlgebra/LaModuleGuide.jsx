import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
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

export default function LaModuleGuide({ moduleId, part }) {
  const module = getLaModule(moduleId);
  const topics = getLaModuleTopics(module, part);
  const otherPart = getLaModuleParts(module).find((value) => value !== part);
  return (
    <StudyGuideShell key={`${moduleId}-${part}`} guideClass="partial-derivatives-guide la-module-guide" title={`${module.title} (Part ${part})`}>
      <nav className="sidebar" aria-label={`${module.title} topics`}>
        <div className="sb-brand"><div className="sb-title">Part {part} of 2</div></div>
        {module.topics.map((topic, index) => (
          <Link className="sb-link" key={topic.id} to={getLaTopicPath(module, topic)}>
            {index + 1}. {topic.title}
          </Link>
        ))}
        <Link className="sb-link" to={`/linear-algebra/overview#${module.overviewAnchor}`}>Course overview</Link>
      </nav>
      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Linear Algebra · Part {part} of 2</div>
          <h1 className="ch-title">{module.title}</h1>
          <p className="ch-sub">{topics.map((topic) => topic.title).join(" · ")}</p>
          <p>{topics.length === 1 ? "One complete topic" : "Two complete topics"}, with theory, worked examples, and a 20-question checkpoint after each topic. Score at least 80% on each checkpoint to unlock completion of this part.</p>
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
      </main>
    </StudyGuideShell>
  );
}
