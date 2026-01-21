/*
 * ============================================================================
 * UK-SPEC COMMON DATA
 * ============================================================================
 *
 * This file contains the SHARED data that stays the same across all contexts:
 * - BEHAVIOURS (column headers)
 * - COMPETENCE_GROUPS (row groupings)
 * - COMPETENCES (row headers)
 *
 * The cell content (MATRIX) is defined in separate context files
 * (generic.js, mechanical.js, civil.js, etc.)
 *
 * ============================================================================
 */


/*
 * ----------------------------------------------------------------------------
 * BEHAVIOURS (Column Headers)
 * ----------------------------------------------------------------------------
 * These are the 5 behaviour columns that run across the top of the matrix.
 * Each has an id, title, subtitle, and color class.
 */

const BEHAVIOURS = [
    {
        id: "safety",
        title: "Safe Practice",
        subtitle: "(Culture, Cyber, Risk)",
        colorClass: "safety"
    },
    {
        id: "sust",
        title: "Sustainability",
        subtitle: "(Net Zero, Nature)",
        colorClass: "sust"
    },
    {
        id: "ethics",
        title: "Ethical Practice",
        subtitle: "(Integrity, Trust)",
        colorClass: "ethics"
    },
    {
        id: "inclusive",
        title: "Inclusive Practice",
        subtitle: "(EDI, Empathy)",
        colorClass: "inclusive"
    },
    {
        id: "crit",
        title: "Critical Thinking",
        subtitle: "(Analysis, Logic)",
        colorClass: "crit"
    }
];


/*
 * ----------------------------------------------------------------------------
 * COMPETENCE GROUPS (Row Sections)
 * ----------------------------------------------------------------------------
 * These define the groups and which competences belong to each.
 */

const COMPETENCE_GROUPS = [
    {
        name: "Group B: Design & Problem Solving",
        competences: ["B1", "B2", "B3"]
    },
    {
        name: "Group C: Management & Leadership",
        competences: ["C1", "C2", "C3", "C4"]
    },
    {
        name: "Group D: Communication (Competence)",
        competences: ["D1", "D2"]
    }
];


/*
 * ----------------------------------------------------------------------------
 * COMPETENCES (Row Headers)
 * ----------------------------------------------------------------------------
 * These are the competence definitions shown in the left column.
 * - "short" is the truncated preview text
 * - "full" is the complete competence statement
 */

const COMPETENCES = {

    "B1": {
        short: "Take an active role in the identification and...",
        full: "Take an active role in the identification and definition of project requirements, problems and opportunities."
    },

    "B2": {
        short: "Can identify the appropriate investigations and...",
        full: "Can identify the appropriate investigations and research needed to undertake the design, development and analysis required to complete an engineering task and conduct these activities effectively."
    },

    "B3": {
        short: "Can implement engineering tasks and evaluate...",
        full: "Can implement engineering tasks and evaluate the effectiveness of engineering solutions."
    },

    "C1": {
        short: "Plan the work and resources needed to enable...",
        full: "Plan the work and resources needed to enable effective implementation of a significant engineering task or project."
    },

    "C2": {
        short: "Manage (organise, direct and control), programme...",
        full: "Manage (organise, direct and control), programme or schedule, budget and resource elements of a significant engineering task or project."
    },

    "C3": {
        short: "Lead teams or technical specialisms and assist...",
        full: "Lead teams or technical specialisms and assist others to meet changing technical and managerial needs."
    },

    "C4": {
        short: "Bring about continuous quality improvement and...",
        full: "Bring about continuous quality improvement and promote best practice."
    },

    "D1": {
        short: "Communicate effectively with others, at all...",
        full: "Communicate effectively with others, at all levels, in English."
    },

    "D2": {
        short: "Clearly present and discuss proposals...",
        full: "Clearly present and discuss proposals, justifications and conclusions."
    }
};
