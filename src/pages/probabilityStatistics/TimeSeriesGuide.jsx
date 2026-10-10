import StudyGuideShell from "../courses/StudyGuideShell";
import "../multivariableCalculus/PartialDerivativesGuide.css";
import { LaMcqSection } from "../linearAlgebra/LaMcq";
import {
  PS_TS_INTRO_QUIZ,
  PS_TS_ARMA_QUIZ,
  PS_TS_ARIMA_QUIZ,
} from "../../data/psNewModuleQuizzes";
import { TheoryBox, TheoremBox, ProcedureBox } from "../linearAlgebra/LaBlocks";

function TimeSeriesGuide({ part = 1 }) {
  if (part === 2) {
    return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Time Series: AR, MA, ARIMA (Part 2)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Time Series: AR, MA, ARIMA · Part 2</div></div>
          <a className="sb-link" href="#ps-ts-arima">ARIMA and Box-Jenkins</a>
          <a className="sb-link" href="#quiz-ps-ts-arima">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 2 of 2</div>
            <h1 className="ch-title">Time Series: AR, MA, ARIMA</h1>
            <p className="ch-sub">Model dependence over time</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-ts-arima">
            <div className="sec-badge">Section 3.1</div>
            <h2 className="sec-title">ARIMA and Box-Jenkins</h2>
            <TheoryBox title="Differencing">
              <p>
                {"ARIMA($p,d,q$) differences the series $d$ times, $\\nabla X_t=X_t-X_{t-1}$, then fits an ARMA($p,q$) model to the result. Differencing removes a stochastic trend (unit root)."}
              </p>
            </TheoryBox>
            <TheoremBox title="Box-Jenkins cycle">
              <p>
                {"Identify ($p,d,q$) from ACF/PACF, estimate by maximum likelihood, then check that residuals look like white noise. Forecast only after diagnostics pass."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Difference until the series looks stationary (choose $d$)." },
                { text: "Pick $p,q$ from PACF/ACF and fit." },
                { text: "Check residual ACF; refit if autocorrelation remains." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-ts-arima"
              badge="Quiz 3.1"
              title="ARIMA and Box-Jenkins"
              scoreId="score-ps-ts-arima"
              section="ps-ts-arima"
              questions={PS_TS_ARIMA_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
    );
  }
  return (
      <StudyGuideShell guideClass="partial-derivatives-guide" title="Time Series: AR, MA, ARIMA (Part 1)">
        <nav className="sidebar">
          <div className="sb-brand"><div className="sb-title">Time Series: AR, MA, ARIMA · Part 1</div></div>
          <a className="sb-link" href="#ps-ts-intro">Stationarity and the ACF</a>
          <a className="sb-link" href="#quiz-ps-ts-intro">Quiz</a>
          <a className="sb-link" href="#ps-ts-arma">AR and MA models</a>
          <a className="sb-link" href="#quiz-ps-ts-arma">Quiz</a>
        </nav>
        <main className="main">
          <header className="ch-hdr">
            <div className="ch-eye">Probability &amp; Statistics · Part 1 of 2</div>
            <h1 className="ch-title">Time Series: AR, MA, ARIMA</h1>
            <p className="ch-sub">Model dependence over time</p>
            <span className="ch-orn">✦ &nbsp; ✦ &nbsp; ✦</span>
          </header>

          <section className="section" id="ps-ts-intro">
            <div className="sec-badge">Section 2.1</div>
            <h2 className="sec-title">Stationarity and the ACF</h2>
            <TheoryBox title="Weak stationarity">
              <p>
                {"A series $\\{X_t\\}$ is weakly stationary if $E[X_t]=\\mu$ is constant and $\\gamma_k=\\mathrm{Cov}(X_t,X_{t+k})$ depends only on the lag $k$. The autocorrelation function is $\\rho_k=\\gamma_k/\\gamma_0$, so $\\rho_0=1$."}
              </p>
            </TheoryBox>
            <TheoremBox title="White noise and random walk">
              <p>
                {"White noise $\\varepsilon_t$ has mean $0$, variance $\\sigma^2$ and no autocorrelation. A random walk $X_t=X_{t-1}+\\varepsilon_t$ has variance growing with $t$, so it is not stationary; its first difference is white noise."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Plot the series and look for trend or changing variance." },
                { text: "Compute the sample ACF." },
                { text: "If non-stationary, difference the series." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-ts-intro"
              badge="Quiz 2.1"
              title="Stationarity and the ACF"
              scoreId="score-ps-ts-intro"
              section="ps-ts-intro"
              questions={PS_TS_INTRO_QUIZ}
            />
          </section>

          <section className="section" id="ps-ts-arma">
            <div className="sec-badge">Section 2.2</div>
            <h2 className="sec-title">AR and MA models</h2>
            <TheoryBox title="AR(1) and MA(1)">
              <p>
                {"AR(1): $X_t=\\phi X_{t-1}+\\varepsilon_t$ is stationary iff $|\\phi|<1$, with $\\rho_k=\\phi^k$ (geometric decay). MA(1): $X_t=\\varepsilon_t+\\theta\\varepsilon_{t-1}$ has $\\rho_1=\\frac{\\theta}{1+\\theta^2}$ and $\\rho_k=0$ for $k\\ge2$."}
              </p>
            </TheoryBox>
            <TheoremBox title="Reading the ACF">
              <p>
                {"The ACF of an MA($q$) process cuts off after lag $q$, while the ACF of an AR process decays gradually. The PACF does the opposite: it cuts off after lag $p$ for AR($p$)."}
              </p>
            </TheoremBox>
            <ProcedureBox
              title="Procedure"
              steps={[
                { text: "Inspect ACF and PACF plots." },
                { text: "ACF cuts off at lag $q$: suggest MA($q$)." },
                { text: "PACF cuts off at lag $p$: suggest AR($p$)." },
              ]}
            />
            <LaMcqSection
              id="quiz-ps-ts-arma"
              badge="Quiz 2.2"
              title="AR and MA models"
              scoreId="score-ps-ts-arma"
              section="ps-ts-arma"
              questions={PS_TS_ARMA_QUIZ}
            />
          </section>

        </main>
      </StudyGuideShell>
  );
}

export default TimeSeriesGuide;
