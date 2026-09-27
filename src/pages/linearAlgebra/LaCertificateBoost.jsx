import { EightExamples } from "../../data/calcAgLengthyExamples";
import {
  LA_VECTORS_P1_EXAMPLES,
  LA_VECTORS_P2_EXAMPLES,
} from "../../data/laVectorsCertExamples";
import {
  LA_MATRICES_P1_EXAMPLES,
  LA_MATRICES_P2_EXAMPLES,
} from "../../data/laMatricesCertExamples";
import {
  LA_SYSTEMS_P1_EXAMPLES,
  LA_SYSTEMS_P2_EXAMPLES,
} from "../../data/laSystemsCertExamples";
import {
  LA_EIGEN_P1_EXAMPLES,
  LA_EIGEN_P2_EXAMPLES,
} from "../../data/laEigenCertExamples";
import { LA_OL_EXAMPLES } from "../../data/laOrthoLeastSquaresCertExamples";
import { LA_SVD_EXAMPLES } from "../../data/laSvdCertExamples";

const BANKS = {
  vectors: [LA_VECTORS_P1_EXAMPLES, LA_VECTORS_P2_EXAMPLES],
  matrices: [LA_MATRICES_P1_EXAMPLES, LA_MATRICES_P2_EXAMPLES],
  systems: [LA_SYSTEMS_P1_EXAMPLES, LA_SYSTEMS_P2_EXAMPLES],
  eigen: [LA_EIGEN_P1_EXAMPLES, LA_EIGEN_P2_EXAMPLES],
};

// Module J stores one certificate-depth bank per two-part guide.
// Render each bank once at module completion instead of duplicating it on both parts.
const MODULE_WIDE_BANKS = {
  orthogonality: LA_OL_EXAMPLES,
  svd: LA_SVD_EXAMPLES,
};

/** Eight lengthy certificate examples + real-life note for Linear Algebra guides. */
export default function LaCertificateBoost({ topic, part = 1 }) {
  const moduleWideBank = MODULE_WIDE_BANKS[topic];
  if (moduleWideBank) {
    return (
      <section className="section" id={`la-cert-${topic}`}>
        <div className="sec-badge">Eight lengthy certificate examples</div>
        <h2 className="sec-title">Module-wide certificate-depth solutions</h2>
        <EightExamples items={moduleWideBank} />
      </section>
    );
  }

  const bank = BANKS[topic]?.[part === 2 ? 1 : 0];
  if (!bank) return null;

  return (
    <section className="section" id={`la-cert-${topic}-p${part}`}>
      <div className="sec-badge">Eight lengthy certificate examples</div>
      <h2 className="sec-title">
        Part {part} — detailed solutions (8 steps each)
      </h2>
      <EightExamples items={bank} />
    </section>
  );
}
