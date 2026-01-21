# UK-SPEC Matrix Prototype

Interactive prototype for a proposed new version of the UK-SPEC standard (UK Standard for Professional Engineering Competence), used to assess applicants for CEng, IEng, and EngTech.

## Live Site
https://unholy-smoke.github.io/ukspecmatrix/

## Architecture

### Core Concept
A **two-tier matrix model**:
- **Tier 1**: Knowledge and Commitment (gateway requirements)
- **Tier 2**: Competence/Behaviour Matrix - maps competences (rows) against behaviours (columns)

### File Structure

| File | Purpose |
|------|---------|
| `index.html` | Main page with all CSS and rendering JavaScript |
| `common.js` | Shared data: BEHAVIOURS, COMPETENCES, COMPETENCE_GROUPS |
| `contexts.js` | Manifest listing available engineering contexts |
| `generic.js` | GENERIC_MATRIX - default/fallback cell content |
| `mechanical.js` | MATRIX with mechanical engineering overrides |
| `civil.js` | MATRIX with civil engineering overrides |

### Context System
- Dropdown selector ("Contextualise") switches between engineering disciplines
- Context files only need to specify cells that differ from generic
- Empty cells (`""`) automatically fall back to `GENERIC_MATRIX` content
- To add a new context: create `electrical.js` with a `MATRIX` object, add entry to `contexts.js`

### Cell Content Format
Each cell contains HTML with expandable structure:
```html
<span class="cell-short">Summary text shown by default</span>
<div class="cell-full">Expanded content with bullets, evidence examples, etc.</div>
```

## Key UI Features
- **Sticky headers**: Column headers stick vertically, row headers stick horizontally
- **Sticky group dividers**: "Group B: Design & Problem Solving" etc. stay fixed on horizontal scroll
- **Expandable cells**: Click any matrix cell to expand/collapse (blue toggle icon)
- **Column tinting**: Each behaviour column has a subtle background colour matching its header
- **Context switching**: Dropdown dynamically loads discipline-specific content

## Important Notes
- Context files use `var MATRIX` (not `const`) to allow redefinition when switching contexts
- The competence column (B1, B2, etc.) always shows full text - no longer collapsible
- Group divider rows use separate `<td>` cells (not colspan) to enable sticky positioning
