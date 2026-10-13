// src/pages/multivariableCalculus/AdvancedIntegrationPage.jsx
// Route wrapper (same pattern as DifferentialFormsPage.jsx).

import { useEffect } from "react";
import { useProgress } from "../../context/ProgressContext";
import BookmarkButton from "../../components/BookmarkButton";
import SectionCompleteBar from "../../components/SectionCompleteBar";
import AdvancedIntegrationGuide from "./AdvancedIntegrationGuide";
import "./GuidePart.css";

function AdvancedIntegrationPage() {
  const { recordVisit } = useProgress();

  useEffect(() => {
    recordVisit("advanced-integration");
  }, [recordVisit]);

  return (
    <div className="guide-part-wrapper">
      <div className="guide-part-topbar">
        <div className="guide-part-info">
          <span className="guide-part-badge">Advanced Integration</span>
          <span className="guide-part-title">
            Advanced Integration &amp; Variational Methods — Improper Integrals &amp; Calculus of Variations
          </span>
        </div>
        <BookmarkButton
          id="advanced-integration"
          title="Advanced Integration & Variational Methods"
          path="/multivariable-calculus/advanced-integration"
        />
      </div>
      <AdvancedIntegrationGuide />
      <SectionCompleteBar
        sectionId="advanced-integration"
        nextPath="/courses/multivariable-calculus"
        nextLabel="Multivariable Calculus"
      />
    </div>
  );
}

export default AdvancedIntegrationPage;
