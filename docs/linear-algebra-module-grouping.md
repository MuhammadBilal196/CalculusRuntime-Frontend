# Linear Algebra module grouping and route repair

The advanced curriculum uses the assigned three module titles. Existing foundational course cards, Practice Arena, Certification and the course overview remain available.

| Module | Part 1 | Part 2 |
| --- | --- | --- |
| Matrix Decompositions & Factorizations | LU; Cholesky | Jordan normal form; norms and conditioning |
| Advanced Vector Space Theory | Complex vector spaces; quadratic forms | Change of basis; affine transformations |
| Applied Linear Algebra | PCA; Markov chains | Linear programming (Simplex); vector applications in graphics and ML |

Each part contains the full theory, examples and 20-question checkpoint for each of its two topics. Completion requires at least 80% on both topic checkpoints. Existing checkpoint score keys are preserved. Graphics/ML supplies the previously missing twelfth topic and its 20 questions. All 220 existing questions, including Simplex, are preserved.

## Routes and bookmarks

The canonical module paths are:

- `/linear-algebra/matrix-decompositions/1` and `/2`
- `/linear-algebra/advanced-vector-space-theory/1` and `/2`
- `/linear-algebra/applied-linear-algebra/1` and `/2`

Each module root redirects to Part 1. The 36 older individual-topic paths redirect to the relevant part and topic anchor. The nine `/module-a`, `/module-b`, `/module-c` paths (root, Part 1 and Part 2) redirect to the corresponding canonical module paths. Bookmarks save the current part. Topic anchors and tutor context match the displayed module.

## Implementation

- `src/data/laModules.js`: one catalog for module titles, topics, quiz keys and redirects.
- `src/pages/linearAlgebra/LaModuleGuide.jsx`: displays two full topics inside one guide shell.
- `LaModulePart.jsx` and `LaTopicPart.jsx`: progress, correct bookmarks and completion.
- Existing topic guides expose their content for embedding without dropping theory or examples.
- `VectorApplicationsGuide.jsx` and `laQuizzes.js`: graphics/ML theory, examples and 20 questions.
- `courses.js`, `LinearAlgebraOverview.jsx`, `App.js`: preserve core navigation, group advanced cards and repair routes, including Surface Explorer.
- `sectionQuizGates.js`: two topic quizzes per module part.
- `routeContext.js`: module context for the tutor.
- Jest configuration and `setupTests.js`: resolve installed package exports, transform crosstex, and provide browser encoding/scroll APIs for tests.
- `App.test.js`: checks the actual Linear Algebra navigation link instead of a removed TaylorX header link.
- `LaModuleGuide.test.jsx`: curriculum, topic content, checkpoints, bookmarks and legacy URL mappings.
- The earlier redundant grouped-topic catalog, link-only wrappers and metadata-only tests are replaced; progress utility tests remain.

## Local verification

```powershell
npm.cmd ci --no-audit --no-fund
npm.cmd test -- --watchAll=false --runInBand --testTimeout=30000
npm.cmd run build
npm.cmd start
```

Inspect all six module parts, open old topic links, and test both checkpoints in a part. Verify course cards and bookmarks. Certificate and Practice Arena question banks are not expanded by this repair; those are separate deliverables.
