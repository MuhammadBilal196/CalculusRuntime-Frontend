// Expansion modules for Probability & Statistics (optional: not part of the core certificate track).
// One module card = two topics. Part 1 = topic 1, Part 2 = topic 2.
export const PS_EXPANSION_MODULES = [
    {
      id: "information-theory",
      title: "Information Theory",
      description:
        "Entropy, mutual information, cross-entropy and KL divergence, with worked examples and a 20-question checkpoint per topic.",
      logo: "H(X) = −Σ p log p",
      topicsPerPart: 1,
      topics: [
        {
          id: "entropy-mutual-information",
          title: "Entropy and Mutual Information",
          quizKey: "ps-it1-checkpoint",
        },
        {
          id: "cross-entropy-kl-divergence",
          title: "Cross-Entropy and KL Divergence",
          quizKey: "ps-it2-checkpoint",
        },
      ],
    },
    {
      id: "survival-reliability",
      title: "Survival and Reliability",
      description:
        "Censoring, Kaplan-Meier estimation, hazard functions and exponential and Weibull survival models, with worked examples and a 20-question checkpoint per topic.",
      logo: "S(t) = P(T > t)",
      topicsPerPart: 1,
      topics: [
        {
          id: "censoring-kaplan-meier",
          title: "Censoring and Kaplan-Meier Estimation",
          quizKey: "ps-sv1-checkpoint",
        },
        {
          id: "hazard-survival-models",
          title: "Hazard Functions and Survival Models",
          quizKey: "ps-sv2-checkpoint",
        },
      ],
    },
  ];
  
  export function getPsModulePath(module, part = 1) {
    return `/probability-statistics/${module.id}/${part}`;
  }