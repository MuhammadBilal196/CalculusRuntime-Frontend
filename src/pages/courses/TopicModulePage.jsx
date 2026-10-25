// Shared page for a module part that holds two topics (Potential Theory format):
//   sidebar  → course · module, one group per topic, numbered sections, ✎ quiz
//   header   → module title + the topics on this part
//   contents → one block per topic
// Each topic's quiz stays locked until the quiz before it (across the whole
// module, so Part 2's first quiz needs Part 1's last quiz) is passed at 80%+.

import { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import StudyGuideShell from "./StudyGuideShell";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import { SECTION_QUIZ_PASS_PERCENT } from "../../data/sectionQuizGates";
import { hasPassedQuiz } from "../../utils/quizGate";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import "../multivariableCalculus/GuidePart.css";

/**
 * @param {object} props
 * @param {string} props.courseTitle   e.g. "Multivariable Calculus"
 * @param {string} props.moduleTitle   e.g. "Coordinate Transformations & Surfaces"
 * @param {number} props.part          1 or 2
 * @param {object[]} props.moduleTopics all topics of the module in order:
 *        { title, quizKey, part, nav: [{ id, label, quiz? }], Component }
 * @param {string} props.basePath      e.g. "/coordinate-transformations"
 * @param {object} [props.completion] { sectionId, nextPath, nextLabel, courseId }
 */
export default function TopicModulePage({
  courseTitle,
  moduleTitle,
  part,
  moduleTopics,
  basePath,
  completion,
}) {
  const { quizScores = {}, recordVisit } = useProgress() || {};
  const topics = moduleTopics.filter((t) => t.part === part);
  const otherPart = part === 1 ? 2 : 1;
  const otherTopics = moduleTopics.filter((t) => t.part === otherPart);
  const pagePath = `${basePath}/${part}`;
  const pageTitle = `${moduleTitle} — Part ${part}`;

  useEffect(() => {
    if (completion?.sectionId) recordVisit?.(completion.sectionId);
  }, [completion?.sectionId, recordVisit]);

  const gateFor = (topic) => {
    const index = moduleTopics.indexOf(topic);
    if (index <= 0) return { unlocked: true, hint: "" };
    const prev = moduleTopics[index - 1];
    const where = prev.part !== part ? ` (Part ${prev.part})` : "";
    return {
      unlocked: hasPassedQuiz(quizScores, prev.quizKey),
      hint: `Score ${SECTION_QUIZ_PASS_PERCENT}%+ on the ${prev.title} quiz${where} to unlock this quiz.`,
    };
  };

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Part {part} of 2</span>
          <span className="guide-part-title">{moduleTitle}</span>
        </div>
        <BookmarkButton id={completion?.sectionId || pagePath} title={pageTitle} path={pagePath} />
      </div>

      <StudyGuideShell guideClass="partial-derivatives-guide" title={pageTitle}>
        <nav className="sidebar">
          <div className="sb-brand">
            <div className="sb-sub">{courseTitle}</div>
            <div className="sb-title">{moduleTitle}</div>
          </div>
          {topics.map((topic) => (
            <Fragment key={topic.title}>
              <div className="sb-group">{topic.title}</div>
              {/* Numbers (1, 2, 3 … ✎ for the quiz) come from study-theme.css */}
              {topic.nav.map((s) => (
                <a key={s.id} className="sb-link" href={`#${s.id}`}>
                  {s.label}
                </a>
              ))}
            </Fragment>
          ))}
          <div className="sb-group">Part {otherPart}</div>
          {otherTopics.map((topic) => (
            <Link key={topic.title} className="sb-link sb-link--page" to={`${basePath}/${otherPart}`}>
              {topic.title}
            </Link>
          ))}
        </nav>

        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">
              {courseTitle} Study Guide · Part {part} of 2
            </div>
            <h1 className="ch-title">{moduleTitle}</h1>
            <p className="ch-sub">{topics.map((t) => t.title).join(" · ")}</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <nav className="toc">
            <div className="toc-h">Contents — Part {part} of 2</div>
            {topics.map((topic) => (
              <div key={topic.title} className="toc-topic">
                <div className="toc-h toc-h--topic">{topic.title}</div>
                <div className="toc-grid toc-grid--auto">
                  {topic.nav.map((s) => (
                    <a key={s.id} className="toc-a" href={`#${s.id}`}>
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {topics.map((topic, i) => {
            const gate = gateFor(topic);
            const Topic = topic.Component;
            return (
              <Fragment key={topic.title}>
                {i > 0 ? <hr className="divider" /> : null}
                <div className="topic-block">
                  <Topic quizUnlocked={gate.unlocked} lockHint={gate.hint} />
                </div>
              </Fragment>
            );
          })}

          <div className="pg-foot">
            <p>
              {moduleTitle} · Part {part} of 2
            </p>
            <div className="guide-navigation">
              {part === 2 ? (
                <Link to={`${basePath}/1`} className="guide-nav-button guide-nav-button--prev">
                  <span className="guide-nav-button__hint">Previous part</span>
                  <span className="guide-nav-button__label">
                    {otherTopics.map((t) => t.title).join(" & ")}
                  </span>
                </Link>
              ) : null}
              {part === 1 ? (
                <Link to={`${basePath}/2`} className="guide-nav-button guide-nav-button--next">
                  <span className="guide-nav-button__hint">Next part</span>
                  <span className="guide-nav-button__label">
                    {otherTopics.map((t) => t.title).join(" & ")}
                  </span>
                </Link>
              ) : null}
            </div>
          </div>
        </main>
      </StudyGuideShell>

      {completion?.sectionId ? (
        <SectionCompleteBar
          sectionId={completion.sectionId}
          prevPath={null}
          nextPath={completion.nextPath}
          nextLabel={completion.nextLabel}
          courseId={completion.courseId}
        />
      ) : null}
    </div>
  );
}
