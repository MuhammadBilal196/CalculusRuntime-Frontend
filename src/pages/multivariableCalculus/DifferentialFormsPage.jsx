// src/pages/multivariableCalculus/DifferentialFormsPage.jsx
// Route wrapper (same pattern as PotentialTheoryPage.jsx).

import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import DifferentialFormsGuide from "./DifferentialFormsGuide";
import "./GuidePart.css";

function DifferentialFormsPage() {
  const { recordVisit } = useProgress();

  useEffect(() => {
    recordVisit("differential-forms");
  }, [recordVisit]);

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Differential Forms</span>
          <span className="guide-part-title">
            Differential Forms — Exterior Derivative &amp; Generalized Stokes&apos; Theorem
          </span>
        </div>
        <BookmarkButton
          id="differential-forms"
          title="Differential Forms"
          path="/multivariable-calculus/differential-forms"
        />
      </div>
      <DifferentialFormsGuide />
      <SectionCompleteBar
        sectionId="differential-forms"
        nextPath="/courses/multivariable-calculus"
        nextLabel="Multivariable Calculus"
      />
    </div>
  );
}

export default DifferentialFormsPage;
