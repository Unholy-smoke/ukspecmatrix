/*
 * ============================================================================
 * UK-SPEC MATRIX: CIVIL ENGINEERING
 * ============================================================================
 *
 * Context-specific examples for Civil Engineering.
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

        safety: `<span class="cell-short">Define requirements with public, construction and asset safety in mind.</span><div class="cell-full"><strong>In practice:</strong><br>• Identify CDM hazards early: ground, utilities, working at height, traffic and interfaces.<br>• Capture requirements for safe construction sequencing and temporary works strategy.<br>• Consider security and misuse risks for critical infrastructure and public realm.<br><br><em>Evidence could include:</em> initial hazard log, CDM design risk register</div>`,

        sust: `<span class="cell-short">Bake in whole‑life carbon, nature and climate resilience requirements.</span><div class="cell-full"><strong>In practice:</strong><br>• Set targets for whole‑life carbon, material reuse and water management.<br>• Include requirements for climate adaptation (flood, heat, drought) and durability.<br>• Define biodiversity/net gain expectations and how they will be evidenced.<br><br><em>Evidence could include:</em> carbon baseline, BNG strategy, resilience criteria</div>`,

        ethics: `<span class="cell-short">Clarify duties to communities, land and future users.</span><div class="cell-full"><strong>In practice:</strong><br>• Surface impacts on residents, businesses and vulnerable groups; agree mitigation needs.<br>• Ensure transparency around options, disruption and long‑term maintenance burdens.<br>• Manage conflicts of interest and fairness in consultation and land/consent processes.<br><br><em>Evidence could include:</em> stakeholder impact assessment, consultation record</div>`,

        inclusive: `<span class="cell-short">Engage communities to define the real problem and constraints.</span><div class="cell-full"><strong>In practice:</strong><br>• Co‑create requirements with end users (mobility, sensory, neurodiversity needs).<br>• Avoid excluding voices through timing, language or inaccessible formats.<br>• Translate lived experience into measurable requirements (access, safety, comfort).<br><br><em>Evidence could include:</em> community engagement plan, accessibility needs</div>`,

        crit: `<span class="cell-short">Challenge site assumptions and system boundaries early.</span><div class="cell-full"><strong>In practice:</strong><br>• Question ground, drainage and utility assumptions; request investigations where needed.<br>• Test whether the 'obvious' scheme is actually best for whole‑system outcomes.<br>• Use options appraisal to expose unintended consequences (induced demand, flood risk).<br><br><em>Evidence could include:</em> assumption log, early options appraisal</div>`,

    },


    /* ----------------------------------------
     * B2: Investigations and design
     * ---------------------------------------- */

    "B2": {

        safety: `<span class="cell-short">Design for safe construction, operation and maintenance.</span><div class="cell-full"><strong>In practice:</strong><br>• Apply CDM principles: eliminate hazards, reduce residual risk and communicate it.<br>• Design temporary works needs early (stability, excavations, sequencing).<br>• Design safe access for inspection/maintenance over the asset’s life.<br><br><em>Evidence could include:</em> design risk register, temporary works strategy</div>`,

        sust: `<span class="cell-short">Use whole‑life thinking in materials, water and land.</span><div class="cell-full"><strong>In practice:</strong><br>• Specify low‑carbon materials and optimise for reuse (structures, aggregates, steel).<br>• Integrate sustainable drainage (SuDS) and water quality protection.<br>• Design for adaptability, long service life and low maintenance carbon.<br><br><em>Evidence could include:</em> whole‑life carbon, SuDS strategy, material reuse plan</div>`,

        ethics: `<span class="cell-short">Make defensible design choices under public scrutiny.</span><div class="cell-full"><strong>In practice:</strong><br>• Avoid gaming models or assumptions to force a preferred outcome.<br>• Be clear about uncertainty and residual risk to clients and stakeholders.<br>• Protect data integrity (surveys, monitoring) and report results honestly.<br><br><em>Evidence could include:</em> decision log, model assumptions register</div>`,

        inclusive: `<span class="cell-short">Design inclusive places and infrastructure, not just compliant ones.</span><div class="cell-full"><strong>In practice:</strong><br>• Apply inclusive design to routes, crossings, gradients, lighting and wayfinding.<br>• Consider safety and comfort for different users (children, older people, disabled users).<br>• Test proposals with representative users and local stakeholders.<br><br><em>Evidence could include:</em> inclusive design review, stakeholder feedback</div>`,

        crit: `<span class="cell-short">Validate designs with appropriate investigation and modelling.</span><div class="cell-full"><strong>In practice:</strong><br>• Specify proportionate site investigation and interpret results critically.<br>• Use structural/geotechnical models and check sensitivity to key parameters.<br>• Seek independent design checks for high‑risk elements.<br><br><em>Evidence could include:</em> GI reports, model checks, independent review</div>`,

    },


    /* ----------------------------------------
     * B3: Implementation and evaluation
     * ---------------------------------------- */

    "B3": {

        safety: `<span class="cell-short">Deliver works safely and keep the public protected throughout.</span><div class="cell-full"><strong>In practice:</strong><br>• Implement site traffic management, excavations support and temporary works controls.<br>• Ensure interface management across contractors, utilities and stakeholders.<br>• Verify as-built safety-critical elements and update the design risk record.<br><br><em>Evidence could include:</em> site inspections, temporary works permits, as-built records</div>`,

        sust: `<span class="cell-short">Control pollution, waste and carbon during construction and operation.</span><div class="cell-full"><strong>In practice:</strong><br>• Manage waste streams and maximise reuse; avoid contamination and silt run‑off.<br>• Track and reduce construction emissions (plant, logistics) and report performance.<br>• Verify operational performance (drainage, energy, materials durability) post‑handover.<br><br><em>Evidence could include:</em> SWMP, environmental monitoring, carbon reporting</div>`,

        ethics: `<span class="cell-short">Resist pressure to cut corners on quality, safety or compliance.</span><div class="cell-full"><strong>In practice:</strong><br>• Record non‑conformances transparently and agree remediation routes.<br>• Be honest about programme impacts and emerging risks to stakeholders.<br>• Use escalation routes where safety or public interest is threatened.<br><br><em>Evidence could include:</em> NCRs, audit trail, escalation notes</div>`,

        inclusive: `<span class="cell-short">Manage disruption equitably and support access during works.</span><div class="cell-full"><strong>In practice:</strong><br>• Provide clear, accessible communications and diversion routes.<br>• Plan works to protect vulnerable users (schools, care homes, accessibility).<br>• Gather feedback and respond quickly to issues raised by the community.<br><br><em>Evidence could include:</em> community comms, mitigation measures</div>`,

        crit: `<span class="cell-short">Use monitoring data to confirm performance and update assumptions.</span><div class="cell-full"><strong>In practice:</strong><br>• Monitor settlement, vibration, drainage and structural behaviour against predictions.<br>• Investigate anomalies systematically and update designs/methods as needed.<br>• Capture lessons learned to improve future schemes.<br><br><em>Evidence could include:</em> instrumentation data, post‑construction review</div>`,

    },


    /* ----------------------------------------
     * C1: Planning work and resources
     * ---------------------------------------- */

    "C1": {

        safety: `<span class="cell-short">Plan resources around high‑risk activities and interfaces.</span><div class="cell-full"><strong>In practice:</strong><br>• Sequence works to reduce risk (temporary works, lifts, confined spaces, traffic).<br>• Ensure competent supervision for temporary works and design changes.<br>• Build time for design reviews, permits and stakeholder coordination.<br><br><em>Evidence could include:</em> construction phase plan, interface schedule</div>`,

        sust: `<span class="cell-short">Plan logistics and methods to reduce carbon and local impacts.</span><div class="cell-full"><strong>In practice:</strong><br>• Optimise haul routes and deliveries; consider rail/water where feasible.<br>• Plan for materials reuse, on‑site processing and low‑emission plant.<br>• Embed environmental constraints (noise, dust, ecology) into the programme.<br><br><em>Evidence could include:</em> logistics plan, environmental constraints register</div>`,

        ethics: "",

        inclusive: `<span class="cell-short">Plan engagement and access so communities are not surprised.</span><div class="cell-full"><strong>In practice:</strong><br>• Schedule consultations at accessible times and venues; provide accessible materials.<br>• Coordinate with local services (schools, businesses, emergency access).<br>• Plan works phasing to maintain mobility for different users.<br><br><em>Evidence could include:</em> engagement plan, access strategy</div>`,

        crit: `<span class="cell-short">Plan around uncertainty in ground, utilities and stakeholder change.</span><div class="cell-full"><strong>In practice:</strong><br>• Set investigation and survey tasks early to reduce unknowns.<br>• Use contingency for discovery events (unknown services, archaeology, ground conditions).<br>• Define trigger points for revisiting scope or method.<br><br><em>Evidence could include:</em> risk register, contingency triggers</div>`,

    },


    /* ----------------------------------------
     * C2: Managing projects and budgets
     * ---------------------------------------- */

    "C2": {

        safety: `<span class="cell-short">Protect safety-critical controls when managing budget and programme.</span><div class="cell-full"><strong>In practice:</strong><br>• Budget for temporary works design/checks, site welfare and supervision.<br>• Fund independent checks and testing for critical elements.<br>• Track the safety implications of value engineering changes.<br><br><em>Evidence could include:</em> VE decision logs, assurance budget</div>`,

        sust: `<span class="cell-short">Manage whole‑life carbon and nature outcomes alongside spend.</span><div class="cell-full"><strong>In practice:</strong><br>• Allocate budget for low‑carbon materials and design optimisation.<br>• Resource SuDS, habitat creation and monitoring where required.<br>• Use whole‑life costing to avoid expensive future maintenance carbon.<br><br><em>Evidence could include:</em> whole‑life carbon tracking, monitoring plan</div>`,

        ethics: `<span class="cell-short">Run procurement and contracts fairly and transparently.</span><div class="cell-full"><strong>In practice:</strong><br>• Avoid bid manipulation and ensure quality is not sacrificed for price.<br>• Carry out supply chain due diligence (labour, legality, provenance).<br>• Be transparent about scope changes and their impacts on stakeholders.<br><br><em>Evidence could include:</em> procurement audit trail, supplier due diligence</div>`,

        inclusive: "",

        crit: "",

    },


    /* ----------------------------------------
     * C3: Leading teams
     * ---------------------------------------- */

    "C3": {

        safety: `<span class="cell-short">Lead a strong safety culture on site and across interfaces.</span><div class="cell-full"><strong>In practice:</strong><br>• Ensure temporary works control, permits and briefings are consistent across teams.<br>• Empower 'stop work' and encourage reporting of near‑misses.<br>• Support wellbeing and fatigue management where risk is high.<br><br><em>Evidence could include:</em> briefing records, near‑miss actions</div>`,

        sust: `<span class="cell-short">Build environmental competence and accountability in the team.</span><div class="cell-full"><strong>In practice:</strong><br>• Train teams on permits, pollution prevention and ecological constraints.<br>• Use site dashboards to track waste, carbon and incidents; act on trends.<br>• Engage suppliers to reduce packaging, transport and embodied carbon.<br><br><em>Evidence could include:</em> training records, dashboards</div>`,

        ethics: "",

        inclusive: `<span class="cell-short">Create respectful, inclusive working practices in multi‑party teams.</span><div class="cell-full"><strong>In practice:</strong><br>• Set behavioural expectations that prevent harassment/exclusion.<br>• Include subcontractors and site operatives in improvement and safety conversations.<br>• Develop talent fairly (mentoring, opportunity) across the delivery chain.<br><br><em>Evidence could include:</em> team charter, mentoring notes</div>`,

        crit: `<span class="cell-short">Encourage challenge and learning across disciplines.</span><div class="cell-full"><strong>In practice:</strong><br>• Run design and constructability reviews that welcome dissent.<br>• Use data from site (productivity, quality, incidents) to improve methods.<br>• Avoid blame: focus on system fixes and competence development.<br><br><em>Evidence could include:</em> review actions, lessons learned</div>`,

    },


    /* ----------------------------------------
     * C4: Continuous improvement
     * ---------------------------------------- */

    "C4": {

        safety: `<span class="cell-short">Use lessons learned to raise standards for future projects.</span><div class="cell-full"><strong>In practice:</strong><br>• Investigate incidents and near‑misses; embed changes in standards and details.<br>• Review changes to asset operation and update risk information.<br>• Share learning across projects, contractors and clients.<br><br><em>Evidence could include:</em> lessons learned library, updated standard details</div>`,

        sust: `<span class="cell-short">Improve carbon, resource and nature outcomes based on evidence.</span><div class="cell-full"><strong>In practice:</strong><br>• Measure whole‑life carbon and update material specs and typical details.<br>• Improve drainage and biodiversity performance through monitoring and adaptation.<br>• Increase reuse and circular approaches across schemes.<br><br><em>Evidence could include:</em> carbon dashboards, monitoring results</div>`,

        ethics: `<span class="cell-short">Strengthen governance and transparency through audits and reflection.</span><div class="cell-full"><strong>In practice:</strong><br>• Review decision-making for fairness and public interest impacts.<br>• Improve controls for data quality, model governance and conflicts of interest.<br>• Act on feedback from communities and regulators.<br><br><em>Evidence could include:</em> audit reports, corrective actions</div>`,

        inclusive: `<span class="cell-short">Use feedback to improve accessibility and user experience.</span><div class="cell-full"><strong>In practice:</strong><br>• Audit accessibility of places/infrastructure after delivery and close gaps.<br>• Update design guidance to make inclusion the default.<br>• Include diverse users in post-occupancy / post‑scheme evaluations.<br><br><em>Evidence could include:</em> POE / post‑scheme review outputs</div>`,

        crit: `<span class="cell-short">Institutionalise evidence‑based improvement in schemes and standards.</span><div class="cell-full"><strong>In practice:</strong><br>• Use monitoring and performance data to refine design assumptions.<br>• Test innovations with pilots and robust evaluation, not hype.<br>• Capture and share what worked (and what didn’t) across programmes.<br><br><em>Evidence could include:</em> evaluation reports, updated assumptions</div>`,

    },


    /* ----------------------------------------
     * D1: Written communication
     * ---------------------------------------- */

    "D1": {

        safety: "",

        sust: "",

        ethics: "",

        inclusive: `<span class="cell-short">Produce accessible consultation and design information.</span><div class="cell-full"><strong>In practice:</strong><br>• Write clear, jargon‑light summaries for public audiences and decision makers.<br>• Provide accessible formats (screen‑reader friendly documents, captions, translations).<br>• Make risks, assumptions and impacts traceable and transparent.<br><br><em>Evidence could include:</em> consultation materials, accessible document set</div>`,

        crit: `<span class="cell-short">Document evidence and uncertainty in design and assurance writing.</span><div class="cell-full"><strong>In practice:</strong><br>• State model assumptions, limitations and sensitivity clearly.<br>• Explain why options were rejected and what could change the decision.<br>• Maintain controlled records that stand up to audit and inquiry.<br><br><em>Evidence could include:</em> options appraisals, assumption registers</div>`,

    },


    /* ----------------------------------------
     * D2: Verbal communication
     * ---------------------------------------- */

    "D2": {

        safety: `<span class="cell-short">Communicate site and public risks clearly to varied audiences.</span><div class="cell-full"><strong>In practice:</strong><br>• Deliver effective briefings to site teams and explain controls and interfaces.<br>• Explain residual public risks and mitigations to stakeholders without jargon.<br>• Escalate when decisions would create unacceptable safety risk.<br><br><em>Evidence could include:</em> briefing notes, stakeholder meetings</div>`,

        sust: "",

        ethics: "",

        inclusive: `<span class="cell-short">Facilitate meetings so communities and specialists can both engage.</span><div class="cell-full"><strong>In practice:</strong><br>• Use accessible language and visuals; check understanding and invite questions.<br>• Create space for quieter voices and manage conflict respectfully.<br>• Summarise decisions and next steps transparently.<br><br><em>Evidence could include:</em> meeting notes, stakeholder feedback</div>`,

        crit: "",

    },


};
