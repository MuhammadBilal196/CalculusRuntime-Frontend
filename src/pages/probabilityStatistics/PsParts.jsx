import LogisticRegressionGuide from "./LogisticRegressionGuide";
import TimeSeriesGuide from "./TimeSeriesGuide";
import MonteCarloGuide from "./MonteCarloGuide";
import BootstrapGuide from "./BootstrapGuide";
import OrderStatisticsGuide from "./OrderStatisticsGuide";
import QueueingTheoryGuide from "./QueueingTheoryGuide";
import PsTopicPart from "./PsTopicPart";
import ProbabilityBasicsGuide from "./ProbabilityBasicsGuide";
import RandomVariablesGuide from "./RandomVariablesGuide";
import DescriptiveStatsGuide from "./DescriptiveStatsGuide";
import HypothesisTestingGuide from "./HypothesisTestingGuide";
import RegressionGuide from "./RegressionGuide";

export function ProbBasicsPart1() {
  return (
    <PsTopicPart
      sectionId="ps-basics-1"
      title="Probability Basics — Section 1"
      path="/probability-statistics/probability-basics/1"
      Guide={ProbabilityBasicsGuide}
      part={1}
      nextPath="/probability-statistics/probability-basics/2"
      nextLabel="Conditional probability & Bayes"
    />
  );
}

export function ProbBasicsPart2() {
  return (
    <PsTopicPart
      sectionId="ps-basics-2"
      title="Probability Basics — Section 2"
      path="/probability-statistics/probability-basics/2"
      Guide={ProbabilityBasicsGuide}
      part={2}
      nextPath="/probability-statistics/random-variables/1"
      nextLabel="Random Variables & Distributions"
    />
  );
}

export function RandomVarsPart1() {
  return (
    <PsTopicPart
      sectionId="ps-rv-1"
      title="Random Variables — Section 1"
      path="/probability-statistics/random-variables/1"
      Guide={RandomVariablesGuide}
      part={1}
      nextPath="/probability-statistics/random-variables/2"
      nextLabel="Continuous RVs & named distributions"
    />
  );
}

export function RandomVarsPart2() {
  return (
    <PsTopicPart
      sectionId="ps-rv-2"
      title="Random Variables — Section 2"
      path="/probability-statistics/random-variables/2"
      Guide={RandomVariablesGuide}
      part={2}
      nextPath="/probability-statistics/descriptive-statistics/1"
      nextLabel="Descriptive Statistics"
    />
  );
}

export function DescriptivePart1() {
  return (
    <PsTopicPart
      sectionId="ps-desc-1"
      title="Descriptive Statistics — Section 1"
      path="/probability-statistics/descriptive-statistics/1"
      Guide={DescriptiveStatsGuide}
      part={1}
      nextPath="/probability-statistics/descriptive-statistics/2"
      nextLabel="Spread, z-scores, and visuals"
    />
  );
}

export function DescriptivePart2() {
  return (
    <PsTopicPart
      sectionId="ps-desc-2"
      title="Descriptive Statistics — Section 2"
      path="/probability-statistics/descriptive-statistics/2"
      Guide={DescriptiveStatsGuide}
      part={2}
      nextPath="/probability-statistics/hypothesis-testing/1"
      nextLabel="Hypothesis Testing"
    />
  );
}

export function HypothesisPart1() {
  return (
    <PsTopicPart
      sectionId="ps-hyp-1"
      title="Hypothesis Testing — Section 1"
      path="/probability-statistics/hypothesis-testing/1"
      Guide={HypothesisTestingGuide}
      part={1}
      nextPath="/probability-statistics/hypothesis-testing/2"
      nextLabel="p-values, errors, and power"
    />
  );
}

export function HypothesisPart2() {
  return (
    <PsTopicPart
      sectionId="ps-hyp-2"
      title="Hypothesis Testing — Section 2"
      path="/probability-statistics/hypothesis-testing/2"
      Guide={HypothesisTestingGuide}
      part={2}
      nextPath="/probability-statistics/regression-correlation/1"
      nextLabel="Regression & Correlation"
    />
  );
}

export function RegressionPart1() {
  return (
    <PsTopicPart
      sectionId="ps-reg-1"
      title="Regression & Correlation — Section 1"
      path="/probability-statistics/regression-correlation/1"
      Guide={RegressionGuide}
      part={1}
      nextPath="/probability-statistics/regression-correlation/2"
      nextLabel="Fitting lines and residuals"
    />
  );
}

export function RegressionPart2() {
  return (
    <PsTopicPart
      sectionId="ps-reg-2"
      title="Regression & Correlation — Section 2"
      path="/probability-statistics/regression-correlation/2"
      Guide={RegressionGuide}
      part={2}
      courseId="probability-statistics"
      nextPath="/courses/probability-statistics"
      nextLabel="Back to Probability & Statistics course hub"
    />
  );
}
// A: Statistical Modelling
export function LogisticPart1() {
  return (
    <PsTopicPart
      sectionId="ps-logistic-1"
      title="Logistic Regression — Section 1"
      path="/probability-statistics/logistic-regression/1"
      Guide={LogisticRegressionGuide}
      part={1}
      nextPath="/probability-statistics/logistic-regression/2"
      nextLabel="GLMs & Interpretation"
    />
  );
}
export function LogisticPart2() {
  return (
    <PsTopicPart
      sectionId="ps-logistic-2"
      title="Logistic Regression — Section 2"
      path="/probability-statistics/logistic-regression/2"
      Guide={LogisticRegressionGuide}
      part={2}
      nextPath="/probability-statistics/time-series/1"
      nextLabel="Time Series Analysis"
    />
  );
}

export function TimeSeriesPart1() {
  return (
    <PsTopicPart
      sectionId="ps-timeseries-1"
      title="Time Series — Section 1"
      path="/probability-statistics/time-series/1"
      Guide={TimeSeriesGuide}
      part={1}
      nextPath="/probability-statistics/time-series/2"
      nextLabel="ARIMA & Forecasting"
    />
  );
}
export function TimeSeriesPart2() {
  return (
    <PsTopicPart
      sectionId="ps-timeseries-2"
      title="Time Series — Section 2"
      path="/probability-statistics/time-series/2"
      Guide={TimeSeriesGuide}
      part={2}
      nextPath="/probability-statistics/monte-carlo/1"
      nextLabel="Monte Carlo Simulation"
    />
  );
}

// B: Computational Statistics
export function MonteCarloPart1() {
  return (
    <PsTopicPart
      sectionId="ps-montecarlo-1"
      title="Monte Carlo — Section 1"
      path="/probability-statistics/monte-carlo/1"
      Guide={MonteCarloGuide}
      part={1}
      nextPath="/probability-statistics/monte-carlo/2"
      nextLabel="Random Variate Generation"
    />
  );
}
export function MonteCarloPart2() {
  return (
    <PsTopicPart
      sectionId="ps-montecarlo-2"
      title="Monte Carlo — Section 2"
      path="/probability-statistics/monte-carlo/2"
      Guide={MonteCarloGuide}
      part={2}
      nextPath="/probability-statistics/bootstrap/1"
      nextLabel="Bootstrap & Resampling"
    />
  );
}

export function BootstrapPart1() {
  return (
    <PsTopicPart
      sectionId="ps-bootstrap-1"
      title="Bootstrap — Section 1"
      path="/probability-statistics/bootstrap/1"
      Guide={BootstrapGuide}
      part={1}
      nextPath="/probability-statistics/bootstrap/2"
      nextLabel="Confidence Intervals & Tests"
    />
  );
}
export function BootstrapPart2() {
  return (
    <PsTopicPart
      sectionId="ps-bootstrap-2"
      title="Bootstrap — Section 2"
      path="/probability-statistics/bootstrap/2"
      Guide={BootstrapGuide}
      part={2}
      nextPath="/probability-statistics/order-statistics/1"
      nextLabel="Order Statistics"
    />
  );
}

// C: Applied Probability
export function OrderStatsPart1() {
  return (
    <PsTopicPart
      sectionId="ps-orderstats-1"
      title="Order Statistics — Section 1"
      path="/probability-statistics/order-statistics/1"
      Guide={OrderStatisticsGuide}
      part={1}
      nextPath="/probability-statistics/order-statistics/2"
      nextLabel="Extreme Values"
    />
  );
}
export function OrderStatsPart2() {
  return (
    <PsTopicPart
      sectionId="ps-orderstats-2"
      title="Order Statistics — Section 2"
      path="/probability-statistics/order-statistics/2"
      Guide={OrderStatisticsGuide}
      part={2}
      nextPath="/probability-statistics/queueing-theory/1"
      nextLabel="Queueing Theory"
    />
  );
}

export function QueueingPart1() {
  return (
    <PsTopicPart
      sectionId="ps-queueing-1"
      title="Queueing Theory — Section 1"
      path="/probability-statistics/queueing-theory/1"
      Guide={QueueingTheoryGuide}
      part={1}
      nextPath="/probability-statistics/queueing-theory/2"
      nextLabel="M/M/c Models"
    />
  );
}
export function QueueingPart2() {
  return (
    <PsTopicPart
      sectionId="ps-queueing-2"
      title="Queueing Theory — Section 2"
      path="/probability-statistics/queueing-theory/2"
      Guide={QueueingTheoryGuide}
      part={2}
      courseId="probability-statistics"
      nextPath="/courses/probability-statistics"
      nextLabel="Back to Probability & Statistics course hub"
    />
  );
}
