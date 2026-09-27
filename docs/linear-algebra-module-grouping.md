# Linear Algebra Module Grouping Fix

## Result

The Linear Algebra course now exposes exactly three study modules in the course overview:
- Module A — Matrix Decompositions & Factorizations
- Module B — Advanced Vector & Matrix Structure
- Module C — Data, Orthogonality & Singular Structure

Each module contains four topics split into two parts:
- Part 1 → Topic 1 + Topic 2
- Part 2 → Topic 3 + Topic 4

The existing individual topic routes remain available so the actual study content is not deleted. The new grouped module routes provide the requested module structure and navigation.

## Routes
- `/linear-algebra/module-a/1`
- `/linear-algebra/module-a/2`
- `/linear-algebra/module-b/1`
- `/linear-algebra/module-b/2`
- `/linear-algebra/module-c/1`
- `/linear-algebra/module-c/2`

The module root paths redirect to Part 1.

## Commands
From the repository root:

```bash
git clone https://github.com/TabEHaider/CalculusRuntime-Frontend.git
cd CalculusRuntime-Frontend
git checkout fix/linear-algebra-module-grouping

npm ci
npm start
```

Run tests:

```bash
npm test -- --watchAll=false
```

Create a production build:

```bash
npm run build
```

## If you already have the repository
```bash
git fetch origin
git checkout fix/linear-algebra-module-grouping
npm ci
npm start
```

To return to main:
```bash
git checkout main
git pull origin main
```

## Changed files
- `src/data/courses.js`
- `src/data/linearAlgebraModuleGroups.js`
- `src/pages/linearAlgebra/LinearAlgebraOverview.jsx`
- `src/pages/linearAlgebra/LinearAlgebraOverview.css`
- `src/pages/linearAlgebra/LaModulePart.jsx`
- `src/pages/linearAlgebra/LaModulePart.css`
- `src/pages/linearAlgebra/LaModuleParts.jsx`
- `src/App.js`