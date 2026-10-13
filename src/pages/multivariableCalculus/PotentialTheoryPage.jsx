// src/pages/multivariableCalculus/PotentialTheoryPage.jsx
// Route wrapper (same pattern as PartialPart1.jsx).

import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import PotentialTheoryGuide from "./PotentialTheoryGuide";
import "./GuidePart.css";

function PotentialTheoryPage() {
  const { recordVisit } = useProgress();

  useEffect(() => {
    recordVisit("potential-theory");
  }, [recordVisit]);

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Potential Theory</span>
          <span className="guide-part-title">
            Potential Theory — Laplacian, Harmonic Functions &amp; Maxwell&apos;s Equations
          </span>
        </div>
        <BookmarkButton
          id="potential-theory"
          title="Potential Theory"
          path="/multivariable-calculus/potential-theory"
        />
      </div>
      <PotentialTheoryGuide />
      <SectionCompleteBar
        sectionId="potential-theory"
        nextPath="/courses/multivariable-calculus"
        nextLabel="Multivariable Calculus"
      />
    </div>
  );
}

export default PotentialTheoryPage;
