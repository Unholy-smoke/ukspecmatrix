/*
 * ============================================================================
 * UK-SPEC MATRIX DATA FILE
 * ============================================================================
 *
 * Edit this file to change the content displayed in the UK-SPEC matrix.
 * The HTML will automatically load and display whatever you put here.
 *
 * EDITING TIPS:
 * - Keep text inside "quotes" (double quotes)
 * - Don't delete the commas between items
 * - If your text contains quotes, use single quotes or escape with \"
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


/*
 * ============================================================================
 * MATRIX CELLS - Examples of Evidence
 * ============================================================================
 *
 * This is the main content you'll likely edit most often.
 *
 * Structure:  MATRIX["CompetenceCode"]["behaviourId"] = "cell text"
 *
 * Example:    MATRIX["B1"]["safety"] = "Identify potential safety hazards..."
 *             means: Row B1, column Safe Practice
 *
 * ============================================================================
 */

const MATRIX = {

    /* ----------------------------------------
     * B1: Identification of requirements
     * ---------------------------------------- */
    "B1": {
        safety:     "Identify potential safety hazards early in the problem definition phase.",
        sust:       "Identify opportunities to reduce environmental impact before work begins (e.g. reuse).",
        ethics:     "Identify ethical conflicts (e.g. dual use, harm to public) in the project scope.",
        inclusive:  "Ensure diverse stakeholders define the \"problem\" together (don't assume).",
        crit:       "Challenge whether the \"problem\" is the right one to solve."
    },

    /* ----------------------------------------
     * B2: Investigations and design
     * ---------------------------------------- */
    "B2": {
        safety:     "Apply \"Safety by Design\" principles to eliminate risks.",
        sust:       "Select materials/methods that lower lifecycle carbon and protect nature.",
        ethics:     "Refuse solutions that compromise integrity or public trust (even if cheaper).",
        inclusive:  "Design for diverse user needs (e.g. accessibility standards).",
        crit:       "Evaluate multiple design options against evidence."
    },

    /* ----------------------------------------
     * B3: Implementation and evaluation
     * ---------------------------------------- */
    "B3": {
        safety:     "Implement safe systems of work during deployment/construction.",
        sust:       "Minimise waste, energy, and pollution during implementation.",
        ethics:     "Report implementation issues/defects transparently; do not hide faults.",
        inclusive:  "Consider impact of construction/rollout on local communities.",
        crit:       "Analyse implementation data to check performance vs theory."
    },

    /* ----------------------------------------
     * C1: Planning work and resources
     * ---------------------------------------- */
    "C1": {
        safety:     "Prioritise safety milestones in the project schedule.",
        sust:       "Include net-zero or biodiversity targets as project KPIs.",
        ethics:     "Ensure contracts are fair; reject bribery/corruption in planning.",
        inclusive:  "Communicate plans clearly to all levels of the organisation.",
        crit:       "Anticipate project risks and plan contingencies."
    },

    /* ----------------------------------------
     * C2: Managing projects and budgets
     * ---------------------------------------- */
    "C2": {
        safety:     "Secure budget specifically for safety equipment/training.",
        sust:       "Allocate budget for sustainable alternatives (circular economy).",
        ethics:     "Ensure supply chain transparency (modern slavery check).",
        inclusive:  "Ensure procurement supports diverse or local suppliers.",
        crit:       "Optimise resource usage to achieve maximum value."
    },

    /* ----------------------------------------
     * C3: Leading teams
     * ---------------------------------------- */
    "C3": {
        safety:     "Create a \"psychologically safe\" culture where staff can speak up.",
        sust:       "Train teams on climate literacy and sustainable practices.",
        ethics:     "Treat staff fairly; uphold employment rights; handle grievances with integrity.",
        inclusive:  "Actively support EDI and diverse hiring practices.",
        crit:       "Mentor staff to develop their own analytical skills."
    },

    /* ----------------------------------------
     * C4: Continuous improvement
     * ---------------------------------------- */
    "C4": {
        safety:     "Review safety incidents to prevent recurrence.",
        sust:       "Measure carbon/waste data to drive future environmental improvements.",
        ethics:     "Adhere to codes of conduct; refuse to sign off substandard work.",
        inclusive:  "Seek feedback from diverse users to improve quality.",
        crit:       "Use feedback loops to refine processes systematically."
    },

    /* ----------------------------------------
     * D1: Written communication
     * ---------------------------------------- */
    "D1": {
        safety:     "Write clear, unambiguous safety instructions or warnings.",
        sust:       "Report environmental data honestly (avoid \"greenwashing\").",
        ethics:     "Write reports that objectively present risks; do not manipulate data.",
        inclusive:  "Use plain English; avoid exclusionary jargon; use accessible formats.",
        crit:       "Structure written arguments logically to support conclusions."
    },

    /* ----------------------------------------
     * D2: Verbal communication
     * ---------------------------------------- */
    "D2": {
        safety:     "Deliver safety briefings clearly; ensure understanding.",
        sust:       "Advocate for sustainable choices/lifecycle value in client meetings.",
        ethics:     "Declare conflicts of interest verbally; defend ethical boundaries.",
        inclusive:  "Active listening; ensuring quiet voices are heard in discussion.",
        crit:       "Defend design choices against scrutiny with evidence."
    }
};
