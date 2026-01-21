/*
 * ============================================================================
 * UK-SPEC MATRIX: MECHANICAL ENGINEERING
 * ============================================================================
 *
 * Context-specific examples for Mechanical Engineering.
 *
 * HOW FALLBACK WORKS:
 * - If a cell has content here, it will be displayed
 * - If a cell is empty ("") or missing, the GENERIC content is used instead
 *
 * FORMAT:
 * Use the same short/full HTML pattern as the generic file:
 *   <span class="cell-short">...</span><div class="cell-full">...</div>
 *
 * ============================================================================
 */

const MATRIX = {

    /* ----------------------------------------
     * B1: Identification of requirements
     * ---------------------------------------- */

    "B1": {

        safety: `<span class="cell-short">Define requirements that control mechanical and cyber‑physical hazards.</span><div class="cell-full"><strong>In practice:</strong><br>• Identify hazards from stored energy (pressure, rotation, springs), lifts and high temperatures.<br>• Capture operating modes (normal, maintenance, fault) and safe access/isolations.<br>• Include cyber/security considerations for networked machinery and remote access.<br><br><em>Evidence could include:</em> initial hazard log, operating modes, isolation strategy</div>`,

        sust: `<span class="cell-short">Turn repairability and energy efficiency into explicit requirements.</span><div class="cell-full"><strong>In practice:</strong><br>• Specify modularity, standard parts and maintainability to extend service life.<br>• Set efficiency targets (motors, pumps, compressors) and leakage/consumables limits.<br>• Define end‑of‑life routes (remanufacture, refurbishment, material recovery).<br><br><em>Evidence could include:</em> maintainability plan, energy budget, end‑of‑life assumptions</div>`,

        ethics: "",

        inclusive: `<span class="cell-short">Capture operator and maintainer needs, not just performance.</span><div class="cell-full"><strong>In practice:</strong><br>• Define safe manual handling limits, reach/access requirements and ergonomic constraints.<br>• Include accessibility of HMIs, controls and alarms for diverse users.<br>• Specify documentation/training needs for varied skill levels.<br><br><em>Evidence could include:</em> user/persona needs, HF assumptions</div>`,

        crit: `<span class="cell-short">Interrogate the brief using engineering judgement and failure thinking.</span><div class="cell-full"><strong>In practice:</strong><br>• Use early FMEA to challenge vague requirements and expose hidden failure modes.<br>• Question whether tolerances, duty cycles and environment assumptions are realistic.<br>• Check that constraints don’t force unsafe or unmaintainable solutions.<br><br><em>Evidence could include:</em> FMEA, assumption/tolerance register</div>`,

    },


    /* ----------------------------------------
     * B2: Investigations and design
     * ---------------------------------------- */

    "B2": {

        safety: `<span class="cell-short">Apply machinery and functional safety to design‑out risk.</span><div class="cell-full"><strong>In practice:</strong><br>• Use risk reduction hierarchy (eliminate → guard → interlock → warnings → PPE).<br>• Design safety functions to the required Performance Level/SIL where relevant.<br>• Design safe maintenance: isolation points, guarding, access platforms and lock‑off.<br><br><em>Evidence could include:</em> risk assessment, safety function specs, design review actions</div>`,

        sust: `<span class="cell-short">Design for low impact across manufacture, use and service.</span><div class="cell-full"><strong>In practice:</strong><br>• Select materials/processes with lower embodied carbon and better recyclability.<br>• Reduce operational energy (efficient drives, heat recovery, low‑loss hydraulics).<br>• Design for disassembly and parts replacement rather than whole-unit scrap.<br><br><em>Evidence could include:</em> LCA notes, efficiency calculations, disassembly plan</div>`,

        ethics: "",

        inclusive: `<span class="cell-short">Design interfaces and maintenance for real people in real conditions.</span><div class="cell-full"><strong>In practice:</strong><br>• Apply human factors to control layout, alarms, labels and feedback.<br>• Ensure access for smaller/larger body sizes and for PPE use; reduce pinch points.<br>• Prototype and test with operators/maintainers, not only designers.<br><br><em>Evidence could include:</em> HMI review, maintainability walk‑through, test feedback</div>`,

        crit: `<span class="cell-short">Validate decisions using analysis, testing and correlation.</span><div class="cell-full"><strong>In practice:</strong><br>• Use FEA/CFD/multi‑body simulation appropriately and validate model assumptions.<br>• Run tolerance stacks, reliability/derating checks, and worst‑case scenarios.<br>• Design experiments and prototypes that answer the key uncertainties first.<br><br><em>Evidence could include:</em> model validation, test plan, correlation plots</div>`,

    },


    /* ----------------------------------------
     * B3: Implementation and evaluation
     * ---------------------------------------- */

    "B3": {

        safety: `<span class="cell-short">Commission and hand over equipment with verified safety functions.</span><div class="cell-full"><strong>In practice:</strong><br>• Use LOTO/permit-to-work and verify guarding, interlocks and emergency stops.<br>• Test safety functions, alarms and safe states under fault conditions.<br>• Provide safe operating instructions and ensure competent training before use.<br><br><em>Evidence could include:</em> commissioning sheets, safety function test results</div>`,

        sust: `<span class="cell-short">Control environmental impacts during build and verify in use.</span><div class="cell-full"><strong>In practice:</strong><br>• Minimise scrap, swarf and fluids; manage waste streams responsibly.<br>• Confirm energy performance against specification and tune controls.<br>• Capture maintenance regimes that keep performance efficient over time.<br><br><em>Evidence could include:</em> waste records, energy test data, maintenance schedule</div>`,

        ethics: "",

        inclusive: `<span class="cell-short">Implement with clear, accessible procedures for operators and maintainers.</span><div class="cell-full"><strong>In practice:</strong><br>• Provide job aids, signage and training that work across literacy/experience levels.<br>• Ensure handover covers safe maintenance access, spares and troubleshooting.<br>• Collect user feedback during early operation and adjust documentation/controls.<br><br><em>Evidence could include:</em> handover pack, training records, feedback log</div>`,

        crit: `<span class="cell-short">Use test and field data to improve the design, not just sign it off.</span><div class="cell-full"><strong>In practice:</strong><br>• Compare rig/commissioning data with predictions and explain deltas.<br>• Use failure analysis (fractography, wear, vibration) to find root causes.<br>• Feed learning into design rules, drawings and future programmes.<br><br><em>Evidence could include:</em> test reports, RCA/failure analysis</div>`,

    },


    /* ----------------------------------------
     * C1: Planning work and resources
     * ---------------------------------------- */

    "C1": {

        safety: `<span class="cell-short">Plan work around isolations, lifting and hazardous energy controls.</span><div class="cell-full"><strong>In practice:</strong><br>• Build safe access, lifting plans and isolation steps into the programme.<br>• Ensure competent people and supervision for high‑risk tasks (e.g., pressure testing).<br>• Plan change control for late modifications that affect safety functions.<br><br><em>Evidence could include:</em> method statements, lifting plan, change requests</div>`,

        sust: `<span class="cell-short">Plan manufacturing and installation to minimise rework and waste.</span><div class="cell-full"><strong>In practice:</strong><br>• Plan for right‑first‑time build quality (jigs, inspection points, tolerances).<br>• Sequence work to avoid scrap/rework and reduce energy peaks in production.<br>• Plan spares and logistics to avoid expedited shipments and unnecessary travel.<br><br><em>Evidence could include:</em> inspection/test plan, logistics plan</div>`,

        ethics: "",

        inclusive: "",

        crit: `<span class="cell-short">Use reliability thinking to plan the critical path.</span><div class="cell-full"><strong>In practice:</strong><br>• Use FMEA/FMECA to identify long‑lead risk items and mitigation tasks.<br>• Plan verification steps early for high‑uncertainty components and suppliers.<br>• Set decision gates tied to evidence (not optimism).<br><br><em>Evidence could include:</em> risk burn‑down, gate criteria</div>`,

    },


    /* ----------------------------------------
     * C2: Managing projects and budgets
     * ---------------------------------------- */

    "C2": {

        safety: `<span class="cell-short">Budget for conformity, proof testing and safety‑critical assurance.</span><div class="cell-full"><strong>In practice:</strong><br>• Include costs for conformity assessment/marking, documentation and audits.<br>• Fund guarding/interlocks, functional safety engineering and verification testing.<br>• Budget for operator training and safe maintenance tooling/access.<br><br><em>Evidence could include:</em> assurance budget, certification plan</div>`,

        sust: `<span class="cell-short">Use whole‑life value to justify efficient kit and controls.</span><div class="cell-full"><strong>In practice:</strong><br>• Allocate budget for efficient drives, VSDs, controls optimisation and monitoring.<br>• Consider energy and consumables costs over the asset’s life, not just purchase.<br>• Support refurbishment/remanufacture options where feasible.<br><br><em>Evidence could include:</em> whole‑life cost comparison</div>`,

        ethics: `<span class="cell-short">Manage suppliers ethically and protect safety-critical integrity.</span><div class="cell-full"><strong>In practice:</strong><br>• Avoid counterfeit parts; ensure traceability for safety‑critical components.<br>• Challenge unrealistic delivery promises that encourage cutting corners.<br>• Respect IP and licensing for CAD/software and embedded components.<br><br><em>Evidence could include:</em> traceability records, supplier audits</div>`,

        inclusive: "",

        crit: "",

    },


    /* ----------------------------------------
     * C3: Leading teams
     * ---------------------------------------- */

    "C3": {

        safety: `<span class="cell-short">Lead a 'stop work' culture around hazardous energy and machinery.</span><div class="cell-full"><strong>In practice:</strong><br>• Empower the team to halt work if guarding/isolations are compromised.<br>• Ensure competence for tasks like lifting, pressure systems, ATEX/CompEx where relevant.<br>• Run learning-focused incident/near‑miss reviews.<br><br><em>Evidence could include:</em> briefings, competence records, near‑miss actions</div>`,

        sust: `<span class="cell-short">Build capability in energy efficiency and circular maintenance.</span><div class="cell-full"><strong>In practice:</strong><br>• Coach teams to spot waste in manufacturing, maintenance and operations.<br>• Encourage design-for-repair thinking and spares/obsolescence planning.<br>• Use supplier engagement to improve materials and packaging.<br><br><em>Evidence could include:</em> improvement ideas, supplier actions</div>`,

        ethics: "",

        inclusive: "",

        crit: "",

    },


    /* ----------------------------------------
     * C4: Continuous improvement
     * ---------------------------------------- */

    "C4": {

        safety: `<span class="cell-short">Use reliability and incident learning to improve designs and procedures.</span><div class="cell-full"><strong>In practice:</strong><br>• Trend failures (bearing wear, fatigue, leaks) and address systemic causes.<br>• Update maintenance strategies based on condition monitoring and evidence.<br>• Reassess safety functions after modifications and software updates.<br><br><em>Evidence could include:</em> reliability KPIs, updated PM strategy</div>`,

        sust: `<span class="cell-short">Reduce lifecycle impacts through operational optimisation.</span><div class="cell-full"><strong>In practice:</strong><br>• Use condition monitoring to avoid premature replacement and reduce waste.<br>• Optimise setpoints/controls to reduce energy without compromising safety/performance.<br>• Increase refurbishment/remanufacture rates and track material recovery.<br><br><em>Evidence could include:</em> energy/maintenance optimisation results</div>`,

        ethics: "",

        inclusive: "",

        crit: "",

    },


    /* ----------------------------------------
     * D1: Written communication
     * ---------------------------------------- */

    "D1": {

        safety: `<span class="cell-short">Produce documentation that enables safe operation and maintenance.</span><div class="cell-full"><strong>In practice:</strong><br>• Write clear O&M manuals, isolation procedures and safe access instructions.<br>• Record safety function intent, settings and test evidence for future changes.<br>• Use controlled documents to prevent outdated procedures being used.<br><br><em>Evidence could include:</em> O&M manuals, controlled drawings</div>`,

        sust: "",

        ethics: "",

        inclusive: "",

        crit: "",

    },


    /* ----------------------------------------
     * D2: Verbal communication
     * ---------------------------------------- */

    "D2": {

        safety: `<span class="cell-short">Run effective briefings for hazardous tasks and commissioning.</span><div class="cell-full"><strong>In practice:</strong><br>• Explain hazards, controls and 'what good looks like' before work starts.<br>• Confirm understanding across disciplines (mechanical, electrical, controls).<br>• Communicate changes quickly when conditions or plans shift.<br><br><em>Evidence could include:</em> toolbox talk records, commissioning meetings</div>`,

        sust: "",

        ethics: "",

        inclusive: "",

        crit: "",

    },


};
