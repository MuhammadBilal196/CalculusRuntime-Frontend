import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import { getLinearAlgebraModulePart } from "../../data/linearAlgebraModuleGroups";
import "./LaModulePart.css";

export default function LaModulePart({ partId, nextPath, nextLabel }) {
  const config = getLinearAlgebraModulePart(partId);
  const { recordVisit } = useProgress();

  useEffect(() => {
    recordVisit(partId);
  }, [partId, recordVisit]);

  if (!config) return null;

  const { module, part } = config;

  return (
    <div className="la-module-part">
      <div className="la-module-part__topbar">
        <div>
          <span className="la-module-part__badge">{part.title}</span>
          <h1>{module.title}</h1>
          <p>{part.description}</p>
        </div>
        <BookmarkButton
          id={part.id}
          title={module.title + " — " + part.title}
          path={nextPath || "/courses/linear-algebra"}
        />
      </div>

      <section className="la-module-part__content">
        <div className="la-module-part__intro">
          <span>{module.meta}</span>
          <h2>Topics in this part</h2>
          <p>
            This part contains two topics. The four topics remain inside one
            module rather than appearing as four separate modules.
          </p>
        </div>

        <div className="la-module-part__topics">
          {part.topics.map((topic, index) => (
            <article className="la-module-topic-card" key={topic.id}>
              <div className="la-module-topic-card__number">{index + 1}</div>
              <div className="la-module-topic-card__body">
                <p className="la-module-topic-card__eyebrow">Topic {index + 1}</p>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <Link className="primary-action" to={topic.path}>
                  Open topic →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="la-module-part__rule">
          Module {module.id.replace("module-", "").toUpperCase()} · {module.parts.length} parts · 4 topics total
        </div>
      </section>

      <SectionCompleteBar
        sectionId={part.id}
        nextPath={nextPath}
        nextLabel={nextLabel}
        courseId="linear-algebra"
      />
    </div>
  );
}
