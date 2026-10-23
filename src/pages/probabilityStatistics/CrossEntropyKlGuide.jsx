import { Link } from "react-router-dom";
import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { GuideMcqSection } from "../../components/GuideMcq";
import { useProgress } from "../../context/ProgressContext";
import { TheoryBox, TheoremBox, ProcedureBox, WorkedExample } from "../linearAlgebra/LaBlocks";
import { PS_R2_CROSS_ENTROPY_KL_QUIZ } from "../../data/psInfoTheoryQuizzes";

export default function CrossEntropyKlGuide() {
  const { saveQuizScore } = useProgress();
  return (
    <StudyGuideShell
      guideClass="partial-derivatives-guide"
      title="Cross-Entropy and KL Divergence"
    >
      <nav className="sidebar">
        <div className="sb-brand"><div className="sb-title">Information Theory · Topic 2</div></div>
        <a className="sb-link" href="#ps-it2-objectives">Objectives</a>
        <a className="sb-link" href="#ps-it2-defs">Definitions</a>
        <a className="sb-link" href="#ps-it2-derivation">Key results</a>
        <a className="sb-link" href="#ps-it2-logloss">Expected log loss</a>
        <a className="sb-link" href="#ps-it2-pitfalls">Limitations</a>
        <a className="sb-link" href="#ps-it2-examples">Examples</a>
        <a className="sb-link" href="#quiz-ps-it2-checkpoint">Quiz</a>
        <Link className="sb-link" to="/probability-statistics/overview">All modules</Link>
      </nav>

      <main className="main">
        <header className="ch-hdr">
          <div className="ch-eye">Information Theory · Part 2 of 2</div>
          <h1 className="ch-title">Cross-Entropy and KL Divergence</h1>
          <p className="ch-sub">Comparing two distributions, and what a wrong model costs</p>
          <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
        </header>

        <section className="section" id="ps-it2-objectives">
          <div className="sec-badge">Section 1</div>
          <h2 className="sec-title">Learning objectives and prerequisites</h2>
          <TheoryBox title="By the end you can">
            <ul>
              <li>{"Compute $D_{\\mathrm{KL}}(P\\|Q)$ and $H(P,Q)$ for discrete distributions."}</li>
              <li>{"Prove nonnegativity (Gibbs' inequality) and explain when equality holds."}</li>
              <li>{"Explain why KL divergence is asymmetric and why it can be infinite (support mismatch)."}</li>
              <li>{"Interpret cross-entropy as expected log loss, and see why its floor is $H(P)$."}</li>
            </ul>
          </TheoryBox>
          <TheoryBox title="Prerequisites">
            <p>{"Entropy and mutual information (Part 1), discrete pmfs and their supports, Jensen's inequality for concave functions."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-it2-defs">
          <div className="sec-badge">Section 2</div>
          <h2 className="sec-title">Definitions and assumptions</h2>
          <TheoryBox title="KL divergence (relative entropy)">
            <p>{"For discrete distributions $P=(p_x)$ and $Q=(q_x)$ on the same outcome set:"}</p>
            <p>{"$$D_{\\mathrm{KL}}(P\\|Q)=\\sum_{x:\\,p_x>0} p_x\\log\\frac{p_x}{q_x}$$"}</p>
            <p>{"Convention: $0\\log(0/q)=0$ for any $q\\ge 0$, and $p\\log(p/0)=+\\infty$ for $p>0$. State the log base: base 2 gives bits, base $e$ gives nats."}</p>
          </TheoryBox>
          <TheoryBox title="Cross-entropy">
            <p>{"$$H(P,Q)=-\\sum_x p_x\\log q_x$$"}</p>
            <p>{"It is the average code length (or log loss) when the data come from $P$ but we code, or predict, using $Q$."}</p>
          </TheoryBox>
          <TheoryBox title="The link">
            <p>{"$$H(P,Q)=H(P)+D_{\\mathrm{KL}}(P\\|Q)$$"}</p>
            <p>{"Cross-entropy is the irreducible uncertainty $H(P)$ plus the extra cost of using the wrong model $Q$."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-it2-derivation">
          <div className="sec-badge">Section 3</div>
          <h2 className="sec-title">Key results and proof outline</h2>
          <TheoremBox title="Gibbs' inequality (nonnegativity)">
            <p>{"$D_{\\mathrm{KL}}(P\\|Q)\\ge 0$, with equality if and only if $P=Q$."}</p>
          </TheoremBox>
          <TheoryBox title="Proof outline">
            <p>{"Let $S=\\{x:p_x>0\\}$. Then $-D_{\\mathrm{KL}}(P\\|Q)=\\sum_{x\\in S}p_x\\log\\frac{q_x}{p_x}$. By Jensen's inequality for the concave $\\log$,"}</p>
            <p>{"$$-D_{\\mathrm{KL}}(P\\|Q)\\le \\log\\sum_{x\\in S}q_x\\le \\log 1=0.$$"}</p>
            <p>{"Equality in Jensen needs $q_x/p_x$ constant on $S$, and equality in the second step needs $\\sum_{x\\in S}q_x=1$. Together they force $q_x=p_x$ for all $x$."}</p>
          </TheoryBox>
          <TheoremBox title="Consequences">
            <p>{"(i) $H(P,Q)\\ge H(P)$, with equality only at $Q=P$. (ii) For $Q$ uniform on $n$ outcomes, $D_{\\mathrm{KL}}(P\\|Q)=\\log n-H(P)$. (iii) $I(X;Y)=D_{\\mathrm{KL}}\\big(p(x,y)\\,\\|\\,p(x)p(y)\\big)$."}</p>
          </TheoremBox>
          <ProcedureBox
            title="Procedure: compare two distributions"
            steps={[
              "Fix the log base and list the supports of P and Q.",
              "Check supp(P) is contained in supp(Q). If not, D_KL(P||Q) is +infinity.",
              "Compute H(P,Q) = -sum p log q, and H(P).",
              "Get D_KL(P||Q) = H(P,Q) - H(P) and confirm it is >= 0.",
              "Report the direction (P||Q) and the unit.",
            ]}
          />
        </section>

        <section className="section" id="ps-it2-logloss">
          <div className="sec-badge">Section 4</div>
          <h2 className="sec-title">Cross-entropy as expected log loss</h2>
          <TheoryBox title="Why this is the log-loss story">
            <p>{"If labels come from $P$ and a model reports probabilities $Q$, the expected log loss is $\\mathbb E_{P}[-\\log Q(X)]=H(P,Q)$. It is smallest at $Q=P$, and its floor is $H(P)$, not $0$, because genuine randomness cannot be modelled away."}</p>
            <p>{"With an empirical distribution $\\hat P$ from data, $H(\\hat P,Q_\\theta)=-\\frac1N\\sum_i\\log Q_\\theta(x_i)$ is the negative average log-likelihood. Minimizing cross-entropy over $\\theta$ is therefore maximum likelihood. For a one-hot label this reduces to $-\\log$ of the probability assigned to the true class. This guide does not re-derive any particular classifier."}</p>
          </TheoryBox>
        </section>

        <section className="section" id="ps-it2-pitfalls">
          <div className="sec-badge">Section 5</div>
          <h2 className="sec-title">Limitations and common mistakes</h2>
          <TheoryBox title="Watch out for">
            <ul>
              <li>{"Swapping the arguments. $D_{\\mathrm{KL}}(P\\|Q)\\ne D_{\\mathrm{KL}}(Q\\|P)$ in general."}</li>
              <li>{"Calling KL a distance. It is not a metric: it is not symmetric and the triangle inequality can fail."}</li>
              <li>{"Ignoring support mismatch: $q_x=0$ where $p_x>0$ makes the divergence $+\\infty$. This is why predicted probabilities are clipped or smoothed in practice."}</li>
              <li>{"Treating $H(P,Q)$ as if it could reach $0$. Its minimum over $Q$ is $H(P)$."}</li>
              <li>{"Mixing bits and nats when comparing numbers from different sources."}</li>
              <li>{"Discrete case only here. Continuous densities need integrals and extra care."}</li>
            </ul>
          </TheoryBox>
        </section>

        <section className="section" id="ps-it2-examples">
          <div className="sec-badge">Section 6</div>
          <h2 className="sec-title">Worked examples</h2>

          <WorkedExample
            number={1}
            title="Cross-entropy and KL against a uniform model"
            setup={"The true distribution is $P=(1/2,\\,1/4,\\,1/4)$ and the model is uniform, $Q=(1/3,\\,1/3,\\,1/3)$. Find $H(P,Q)$ and $D_{\\mathrm{KL}}(P\\|Q)$ in bits."}
            steps={[
              "Since every q is 1/3, H(P,Q) = -sum p log2(1/3) = log2 3 = 1.585 bits.",
              "H(P) = 0.5*1 + 0.25*2 + 0.25*2 = 1.5 bits.",
              "D_KL(P||Q) = H(P,Q) - H(P) = 1.585 - 1.5.",
            ]}
            result={"$D_{\\mathrm{KL}}(P\\|Q)\\approx 0.085$ bits, so the uniform model wastes about $0.085$ bits per symbol."}
            check={"Use the shortcut log2(3) - H(P) = 1.585 - 1.5 = 0.085. Same answer."}
          />

          <WorkedExample
            number={2}
            title="Application: average log loss of a classifier"
            setup={"A 3-class model assigns probabilities 0.7, 0.5 and 0.9 to the true class on three test examples (labels are one-hot). Find the average log loss in bits and in nats."}
            steps={[
              "For a one-hot label, the cross-entropy is -log of the probability given to the true class.",
              "In bits: -log2(0.7) = 0.515, -log2(0.5) = 1.000, -log2(0.9) = 0.152.",
              "Average: (0.515 + 1.000 + 0.152) / 3 = 0.556 bits. Multiply by ln 2 for nats.",
            ]}
            result={"Average log loss $\\approx 0.556$ bits $\\approx 0.385$ nats per example."}
            check={"Directly in nats: (0.357 + 0.693 + 0.105) / 3 = 0.385. Matches."}
          />

          <WorkedExample
            number={3}
            title="Counterexample: KL divergence is not symmetric"
            setup={"Let $P=(1/2,\\,1/2,\\,0)$ and $Q=(1/3,\\,1/3,\\,1/3)$. Compare $D_{\\mathrm{KL}}(P\\|Q)$ and $D_{\\mathrm{KL}}(Q\\|P)$."}
            steps={[
              "supp(P) is inside supp(Q), so D_KL(P||Q) is finite: log2(3) - H(P) = 1.585 - 1 = 0.585 bits.",
              "For the reverse, outcome 3 has q = 1/3 > 0 but p = 0, so the term (1/3) log(q/0) is infinite.",
            ]}
            result={"$D_{\\mathrm{KL}}(P\\|Q)\\approx 0.585$ bits, but $D_{\\mathrm{KL}}(Q\\|P)=+\\infty$. The two directions are not even finite together."}
            check={"Support rule: finite D(P||Q) requires supp(P) inside supp(Q). The reverse inclusion fails here."}
          />
        </section>

        <GuideMcqSection
          id="quiz-ps-it2-checkpoint"
          badge="Topic checkpoint · 20 questions"
          title="Cross-Entropy and KL Divergence"
          scoreId="score-ps-it2-checkpoint"
          section="ps-it2-checkpoint"
          questions={PS_R2_CROSS_ENTROPY_KL_QUIZ}
          onComplete={(score, total) =>
            saveQuizScore("guide-mcq-ps-it2-checkpoint", score, total)
          }
        />
      </main>
    </StudyGuideShell>
  );
}