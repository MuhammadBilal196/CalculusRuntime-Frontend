import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { LaMcqSection } from "../linearAlgebra/LaMcq";
import {
  PS_LG_INTRO_QUIZ,
  PS_LG_FIT_QUIZ,
  PS_LG_GLM_QUIZ,
} from "../../data/psNewModuleQuizzes";
import { TheoryBox, TheoremBox, ProcedureBox } from "../linearAlgebra/LaBlocks";

function LogisticRegressionGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Logistic Regression & GLMs (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Logistic Regression & GLMs · Part 2</div></div>
          <a className="sb-link" href="#ps-lg-glm">Generalized linear models</a>
          <a className="sb-link" href="#quiz-ps-lg-glm">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 2 of 2</div>
            <h1 className="ch-title">Logistic Regression &amp; GLMs</h1>
            <p className="ch-sub">Model binary outcomes and generalize regression</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-lg-glm">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Generalized linear models</h2>
            <TheoryBox title="Three components">
              <p>
                {"A GLM has (1) a random component from an exponential family, (2) a linear predictor $\\eta=X\\beta$, and (3) a link $g(\\mu)=\\eta$ with $\\mu=E[Y]$. Normal-identity gives ordinary regression, Binomial-logit gives logistic regression, Poisson-log gives count regression."}
              </p>
            </TheoryBox>
            <TheoremBox title="Decision boundary">
              <p>
                {"With threshold $0.5$, class $1$ is predicted exactly when $\\beta_0+\\beta_1x>0$ because $p>0.5\\iff\\eta>0$. The boundary is linear in the predictors."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Pick the response distribution (Binomial, Poisson, Normal)." },
                { text: "Choose the link $g$ (logit, log, identity)." },
                { text: "Fit by maximum likelihood and check deviance." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-lg-glm"
              badge="Quiz 2.1"
              title="Generalized linear models"
              scoreId="score-ps-lg-glm"
              section="ps-lg-glm"
              questions={PS_LG_GLM_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
    );
  }
  return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Logistic Regression & GLMs (Part 1)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Logistic Regression & GLMs · Part 1</div></div>
          <a className="sb-link" href="#ps-lg-intro">Logit model and odds ratios</a>
          <a className="sb-link" href="#quiz-ps-lg-intro">Quiz</a>
          <a className="sb-link" href="#ps-lg-fit">Maximum likelihood and deviance</a>
          <a className="sb-link" href="#quiz-ps-lg-fit">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 1 of 2</div>
            <h1 className="ch-title">Logistic Regression &amp; GLMs</h1>
            <p className="ch-sub">Model binary outcomes and generalize regression</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-lg-intro">
            <div className="sec-badge">Section 1.1</div>
            <h2 className="sec-title">Logit model and odds ratios</h2>
            <TheoryBox title="Model the log-odds">
              <p>
                {"For a binary response $Y\\in\\{0,1\\}$ let $p=P(Y=1\\mid x)$. Logistic regression assumes $\\ln\\frac{p}{1-p}=\\beta_0+\\beta_1x$, equivalently $p=\\frac{1}{1+e^{-(\\beta_0+\\beta_1x)}}$, which always lies in $(0,1)$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Odds ratio">
              <p>
                {"A one-unit increase in $x$ multiplies the odds $p/(1-p)$ by $e^{\\beta_1}$. If $\\beta_1>0$ the probability rises with $x$; its effect on $p$ is not constant (S-shaped curve)."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Code the response as 0/1 and look at it against $x$." },
                { text: "Fit $\\ln\\frac{p}{1-p}=\\beta_0+\\beta_1x$ and read $e^{\\beta_1}$ as the odds ratio." },
                { text: "Predict $\\hat p=1/(1+e^{-\\hat\\eta})$ and classify with a threshold (usually $0.5$)." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-lg-intro"
              badge="Quiz 1.1"
              title="Logit model and odds ratios"
              scoreId="score-ps-lg-intro"
              section="ps-lg-intro"
              questions={PS_LG_INTRO_QUIZ}
            />
          </section>

          <section className="section" id="ps-lg-fit">
            <div className="sec-badge">Section 1.2</div>
            <h2 className="sec-title">Maximum likelihood and deviance</h2>
            <TheoryBox title="Likelihood">
              <p>
                {"With independent observations, $\\ell(\\beta)=\\sum_i\\left[y_i\\ln p_i+(1-y_i)\\ln(1-p_i)\\right]$. The score equations have no closed form, so software uses Newton-Raphson / iteratively reweighted least squares (IRLS)."}
              </p>
            </TheoryBox>
            <TheoremBox title="Deviance">
              <p>
                {"Deviance $D=-2\\ell(\\hat\\beta)$ (relative to the saturated model). Lower deviance means a closer fit; the drop in deviance between nested models is compared with a $\\chi^2$ law (likelihood-ratio test)."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Write $\\ell(\\beta)$ from the Bernoulli probabilities." },
                { text: "Maximize numerically (IRLS) to get $\\hat\\beta$." },
                { text: "Compare nested models by the drop in deviance against $\\chi^2$." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-lg-fit"
              badge="Quiz 1.2"
              title="Maximum likelihood and deviance"
              scoreId="score-ps-lg-fit"
              section="ps-lg-fit"
              questions={PS_LG_FIT_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
  );
}

export default LogisticRegressionGuide;
