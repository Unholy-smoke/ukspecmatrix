/*
 * ============================================================================
 * UK-SPEC MATRIX: GENERIC ENGINEERING
 * ============================================================================
 *
 * This is the DEFAULT/FALLBACK content for the matrix cells.
 * If a context-specific file (e.g., mechanical.js) doesn't have content
 * for a particular cell, the system will use the text from here.
 *
 * NOTE ON FORMAT:
 * Each cell is HTML containing:
 *   - <span class="cell-short"> ... </span>
 *   - <div  class="cell-full">  ... </div>
 * The prototype toggles visibility using the 'expanded' class on click.
 *
 * ============================================================================
 */

const GENERIC_MATRIX = {

    /* ----------------------------------------
     * B1: Identification of requirements
     * ---------------------------------------- */

    "B1": {

        safety: `<span class="cell-short">Build safety and security requirements into the brief.</span><div class="cell-full"><strong>In practice:</strong><br>• Identify hazards, credible misuse, and cyber threats alongside functional requirements.<br>• Define risk acceptance criteria (e.g., ALARP) and required assurance artefacts.<br>• Capture safety-critical assumptions, interfaces, and responsibilities early.<br><br><em>Evidence could include:</em> hazard/threat log, initial risk assessment, security classification, stakeholder sign‑off</div>`,

        sust: `<span class="cell-short">Set whole‑life environmental requirements from day one.</span><div class="cell-full"><strong>In practice:</strong><br>• Agree targets for embodied/operational carbon, resource use and climate resilience.<br>• Define circularity needs (repair, reuse, decommissioning) and nature impacts.<br>• Specify how impacts will be measured and reported through the lifecycle.<br><br><em>Evidence could include:</em> baseline carbon estimate, sustainability requirements, measurement plan</div>`,

        ethics: `<span class="cell-short">Clarify ethical boundaries and duties at the outset.</span><div class="cell-full"><strong>In practice:</strong><br>• Surface conflicts of interest, dual‑use concerns, and potential harms to people/society.<br>• Agree transparency requirements for data, claims and limitations.<br>• Ensure responsibilities align with codes of conduct and law/regulation.<br><br><em>Evidence could include:</em> ethics register, conflict declarations, governance/approval trail</div>`,

        inclusive: `<span class="cell-short">Co‑define the problem with those affected.</span><div class="cell-full"><strong>In practice:</strong><br>• Engage users and stakeholders with different needs, roles and lived experience.<br>• Translate needs into testable requirements (accessibility, usability, service levels).<br>• Avoid 'average user' assumptions; capture edge cases and failure impacts.<br><br><em>Evidence could include:</em> user research notes, accessibility needs, stakeholder map</div>`,

        crit: `<span class="cell-short">Test whether the problem framing is sound.</span><div class="cell-full"><strong>In practice:</strong><br>• Challenge assumptions, constraints and system boundaries before committing to a solution.<br>• Ask what success looks like and how it will be evidenced.<br>• Consider alternative problem statements (or 'do nothing') and unintended consequences.<br><br><em>Evidence could include:</em> assumption log, options appraisal, problem statement rationale</div>`,

    },


    /* ----------------------------------------
     * B2: Investigations and design
     * ---------------------------------------- */

    "B2": {

        safety: `<span class="cell-short">Design‑out risk and plan safety/security assurance.</span><div class="cell-full"><strong>In practice:</strong><br>• Use standards and good practice to eliminate hazards where possible (inherently safe design).<br>• Design for fail‑safe behaviour, safe maintenance, and secure configuration.<br>• Plan verification/validation of safety and cyber controls before release/commissioning.<br><br><em>Evidence could include:</em> design risk review, safety case outline, V&V plan</div>`,

        sust: `<span class="cell-short">Choose solutions using whole‑life value and impact.</span><div class="cell-full"><strong>In practice:</strong><br>• Compare options using life‑cycle thinking (carbon, energy, water, materials, waste).<br>• Prefer durable, repairable, upgradeable designs and low‑impact materials/processes.<br>• Design for adaptation and resilience as conditions and demands change.<br><br><em>Evidence could include:</em> LCA/whole‑life carbon, options comparison with assumptions</div>`,

        ethics: `<span class="cell-short">Make design choices that protect integrity and public trust.</span><div class="cell-full"><strong>In practice:</strong><br>• Avoid deceptive optimisation (e.g., hiding risk, overstating performance or sustainability).<br>• Respect data ethics, privacy and consent when designs rely on information.<br>• Handle IP, safety-critical trade‑offs and uncertainty honestly in decisions.<br><br><em>Evidence could include:</em> decision log with trade‑offs, data protection considerations</div>`,

        inclusive: `<span class="cell-short">Apply inclusive design and human‑centred engineering.</span><div class="cell-full"><strong>In practice:</strong><br>• Use human factors to ensure safe, usable operation for diverse users and contexts.<br>• Design accessible information, controls and maintainability (including remote/field use).<br>• Test designs with representative users, not just the design team.<br><br><em>Evidence could include:</em> usability testing, accessibility checks, HF review notes</div>`,

        crit: `<span class="cell-short">Justify the chosen design with evidence and uncertainty.</span><div class="cell-full"><strong>In practice:</strong><br>• Generate and evaluate options using analysis, modelling, prototyping and peer review.<br>• Perform sensitivity/uncertainty checks to avoid brittle designs.<br>• Seek independent challenge where risks are high or novel.<br><br><em>Evidence could include:</em> analysis pack, model validation, design review actions</div>`,

    },


    /* ----------------------------------------
     * B3: Implementation and evaluation
     * ---------------------------------------- */

    "B3": {

        safety: `<span class="cell-short">Deliver safely and verify controls in the real world.</span><div class="cell-full"><strong>In practice:</strong><br>• Implement safe systems of work and permit/authorisation where relevant.<br>• Commission with clear acceptance criteria; verify safety functions and cyber controls.<br>• Provide training and operational handover so safety intent survives into use.<br><br><em>Evidence could include:</em> commissioning records, training/hand‑over materials</div>`,

        sust: `<span class="cell-short">Implement with resource efficiency and verify performance.</span><div class="cell-full"><strong>In practice:</strong><br>• Reduce waste, rework and energy use during build/deploy; track hotspots.<br>• Confirm operational performance (energy, emissions, resource use) matches intent.<br>• Plan end‑of‑life routes (reuse, refurbishment, recycling) and document them.<br><br><em>Evidence could include:</em> site waste metrics, M&V results, decommissioning plan</div>`,

        ethics: `<span class="cell-short">Be transparent about issues, defects and residual risks.</span><div class="cell-full"><strong>In practice:</strong><br>• Raise non‑conformances early; avoid pressure to 'ship anyway' when safety/quality is at risk.<br>• Document deviations and their implications for users and regulators.<br>• Use whistleblowing/escalation routes if concerns are not addressed.<br><br><em>Evidence could include:</em> NCRs, deviation approvals, lessons‑learned log</div>`,

        inclusive: `<span class="cell-short">Implement in a way that supports adoption and minimises harm.</span><div class="cell-full"><strong>In practice:</strong><br>• Communicate changes in accessible ways; provide training that meets varied needs.<br>• Plan rollout to reduce disruption to users/communities and protect vulnerable groups.<br>• Gather feedback during implementation and adjust quickly.<br><br><em>Evidence could include:</em> rollout comms, user feedback, mitigation actions</div>`,

        crit: `<span class="cell-short">Evaluate outcomes and iterate based on data.</span><div class="cell-full"><strong>In practice:</strong><br>• Monitor performance and safety indicators; compare with predictions and requirements.<br>• Use root‑cause analysis for failures and near‑misses, not blame.<br>• Feed learning back into standards, designs and future work.<br><br><em>Evidence could include:</em> KPI dashboard, post‑implementation review, RCA report</div>`,

    },


    /* ----------------------------------------
     * C1: Planning work and resources
     * ---------------------------------------- */

    "C1": {

        safety: `<span class="cell-short">Plan work so safety and security are built into delivery.</span><div class="cell-full"><strong>In practice:</strong><br>• Resource competent people for safety‑critical activities; define supervision and authority.<br>• Schedule safety/security reviews, assurance gates and commissioning activities.<br>• Plan interfaces and change control to prevent uncontrolled risk.<br><br><em>Evidence could include:</em> role/competence plan, assurance schedule, change control</div>`,

        sust: `<span class="cell-short">Plan resources to meet environmental targets, not just cost and time.</span><div class="cell-full"><strong>In practice:</strong><br>• Embed carbon and environmental requirements into scope, milestones and suppliers.<br>• Plan low‑impact logistics and working methods; avoid avoidable travel and waste.<br>• Include resilience and adaptation tasks (e.g., climate allowances) in the plan.<br><br><em>Evidence could include:</em> project plan with sustainability milestones, supplier requirements</div>`,

        ethics: `<span class="cell-short">Set up fair, transparent governance and procurement from the start.</span><div class="cell-full"><strong>In practice:</strong><br>• Use clear decision rights, audit trails and conflict‑of‑interest controls.<br>• Plan for compliance with legal/regulatory and professional obligations.<br>• Build time for consultation, approvals and responsible escalation.<br><br><em>Evidence could include:</em> governance map, procurement ethics checks, approvals log</div>`,

        inclusive: `<span class="cell-short">Plan engagement and collaboration so everyone can contribute.</span><div class="cell-full"><strong>In practice:</strong><br>• Set meeting and communication norms that include distributed and diverse teams.<br>• Provide information in accessible formats and allow time for understanding.<br>• Involve end users and affected communities at appropriate points, not as an afterthought.<br><br><em>Evidence could include:</em> engagement plan, accessible comms plan</div>`,

        crit: `<span class="cell-short">Anticipate uncertainty and manage it deliberately.</span><div class="cell-full"><strong>In practice:</strong><br>• Identify key assumptions, dependencies and failure modes early.<br>• Plan contingencies and decision points (what would make you change course?).<br>• Scale governance and assurance to the level of risk.<br><br><em>Evidence could include:</em> risk register, assumption log, contingency triggers</div>`,

    },


    /* ----------------------------------------
     * C2: Managing projects and budgets
     * ---------------------------------------- */

    "C2": {

        safety: `<span class="cell-short">Manage budgets so safety/security are never 'optional extras'.</span><div class="cell-full"><strong>In practice:</strong><br>• Fund safety-critical design, assurance, testing and competent supervision.<br>• Budget for training, maintenance, safe access, and secure operations.<br>• Track safety/security impacts of cost or schedule changes.<br><br><em>Evidence could include:</em> safety budget line items, assurance cost plan</div>`,

        sust: `<span class="cell-short">Optimise for whole‑life cost and carbon, not just capex.</span><div class="cell-full"><strong>In practice:</strong><br>• Use whole‑life costing and carbon to justify better long‑term options.<br>• Include end‑of‑life and circularity costs (repair, refurbishment, reuse).<br>• Manage carbon 'budget' alongside financial budget where applicable.<br><br><em>Evidence could include:</em> whole‑life cost/carbon comparison, carbon budget tracking</div>`,

        ethics: `<span class="cell-short">Manage procurement and supply chains with integrity.</span><div class="cell-full"><strong>In practice:</strong><br>• Carry out due diligence (anti‑bribery, modern slavery, sanctions, ESG claims).<br>• Specify transparent acceptance criteria; avoid hiding poor performance in contracts.<br>• Protect confidential information and respect IP/permissions.<br><br><em>Evidence could include:</em> supplier due diligence, audit trails, contract decisions log</div>`,

        inclusive: `<span class="cell-short">Use management decisions to widen participation and reduce exclusion.</span><div class="cell-full"><strong>In practice:</strong><br>• Procure inclusively (SMEs, local suppliers, accessible procurement processes).<br>• Ensure working patterns, sites and tools support diverse staff needs.<br>• Monitor impacts on different user groups when changing scope or cost.<br><br><em>Evidence could include:</em> inclusive procurement criteria, equality impact check</div>`,

        crit: `<span class="cell-short">Make trade‑offs explicit and defendable.</span><div class="cell-full"><strong>In practice:</strong><br>• Use evidence to balance cost, risk, performance and impact; document rationale.<br>• Avoid false precision: track uncertainty and sensitivity in estimates.<br>• Escalate when constraints force unacceptable risk or ethical compromise.<br><br><em>Evidence could include:</em> trade‑off/decision log, estimate ranges, escalation records</div>`,

    },


    /* ----------------------------------------
     * C3: Leading teams
     * ---------------------------------------- */

    "C3": {

        safety: `<span class="cell-short">Lead for a culture where people can raise concerns early.</span><div class="cell-full"><strong>In practice:</strong><br>• Set expectations for safe systems of work and security‑minded behaviour.<br>• Encourage reporting of near‑misses and vulnerabilities without blame.<br>• Ensure competence, supervision and wellbeing where risk is high.<br><br><em>Evidence could include:</em> toolbox/briefing records, competence matrix, speak‑up actions</div>`,

        sust: `<span class="cell-short">Coach teams to embed sustainability in everyday decisions.</span><div class="cell-full"><strong>In practice:</strong><br>• Build shared literacy in carbon, resource use and resilience.<br>• Reward improvements that reduce waste and improve whole‑life outcomes.<br>• Challenge 'we've always done it this way' when impacts are avoidable.<br><br><em>Evidence could include:</em> improvement backlog, training evidence, recognition examples</div>`,

        ethics: `<span class="cell-short">Model integrity and protect professional judgment.</span><div class="cell-full"><strong>In practice:</strong><br>• Handle conflicts of interest and commercial pressure transparently.<br>• Promote honest reporting, data integrity and responsible use of technology (incl. AI).<br>• Support staff to use escalation routes when standards are threatened.<br><br><em>Evidence could include:</em> conflict declarations, ethics briefing, escalation outcomes</div>`,

        inclusive: `<span class="cell-short">Create an inclusive team environment and develop others fairly.</span><div class="cell-full"><strong>In practice:</strong><br>• Ensure respectful behaviours, psychological safety and fair allocation of opportunity.<br>• Adapt communication and management style to support different needs.<br>• Actively remove barriers for under‑represented groups in the team and supply chain.<br><br><em>Evidence could include:</em> team norms, mentoring/coaching notes, inclusion actions</div>`,

        crit: `<span class="cell-short">Build critical thinking into how the team works.</span><div class="cell-full"><strong>In practice:</strong><br>• Run structured reviews (design, risk, readiness) with encouraged challenge.<br>• Teach and coach evidence-based reasoning and good use of data.<br>• Use retrospectives to learn and improve, not to assign blame.<br><br><em>Evidence could include:</em> review minutes/actions, learning plan, retrospective outputs</div>`,

    },


    /* ----------------------------------------
     * C4: Continuous improvement
     * ---------------------------------------- */

    "C4": {

        safety: `<span class="cell-short">Improve safety/security by learning from what actually happens.</span><div class="cell-full"><strong>In practice:</strong><br>• Investigate incidents and near‑misses; address systemic causes.<br>• Review safety and cyber controls as systems evolve (changes create new risk).<br>• Share learning across teams and suppliers.<br><br><em>Evidence could include:</em> RCA actions closed, updated procedures/standards</div>`,

        sust: `<span class="cell-short">Drive measurable improvements in environmental performance.</span><div class="cell-full"><strong>In practice:</strong><br>• Track key impacts (carbon, energy, materials, waste, water, nature) and act on trends.<br>• Update specifications and methods based on measured performance and new knowledge.<br>• Avoid greenwash by improving data quality and transparency.<br><br><em>Evidence could include:</em> impact dashboards, updated standards/specs</div>`,

        ethics: `<span class="cell-short">Strengthen ethical practice through reflection and governance.</span><div class="cell-full"><strong>In practice:</strong><br>• Review decisions and outcomes for unintended harms and fairness.<br>• Improve controls for data integrity, transparency and conflicts of interest.<br>• Act on feedback from users, regulators and whistleblowing routes.<br><br><em>Evidence could include:</em> ethics review notes, audit findings, corrective actions</div>`,

        inclusive: `<span class="cell-short">Improve inclusion by listening, measuring and acting.</span><div class="cell-full"><strong>In practice:</strong><br>• Gather feedback from diverse users and staff; identify barriers.<br>• Audit accessibility/usability and close gaps in processes and outputs.<br>• Update guidance, training and tools so inclusion becomes default.<br><br><em>Evidence could include:</em> accessibility audit results, updated guidance</div>`,

        crit: `<span class="cell-short">Institutionalise evidence‑based improvement.</span><div class="cell-full"><strong>In practice:</strong><br>• Use metrics and experiments to test improvements (not just opinions).<br>• Separate signal from noise in performance data; avoid knee‑jerk changes.<br>• Capture lessons learned so they are reusable in future projects.<br><br><em>Evidence could include:</em> improvement experiments, lessons learned library</div>`,

    },


    /* ----------------------------------------
     * D1: Written communication
     * ---------------------------------------- */

    "D1": {

        safety: `<span class="cell-short">Write clear, usable documents that support safe and secure work.</span><div class="cell-full"><strong>In practice:</strong><br>• Produce risk assessments/methods, safety cases, and safe operating instructions.<br>• Document assumptions, limits and safe maintenance access.<br>• Handle sensitive information appropriately (security classification, access control).<br><br><em>Evidence could include:</em> RAMS, O&M manuals, safety case extracts</div>`,

        sust: `<span class="cell-short">Report sustainability claims with traceable evidence.</span><div class="cell-full"><strong>In practice:</strong><br>• State boundaries, assumptions and data sources for carbon/impact calculations.<br>• Describe design choices that reduce impact and how performance will be verified.<br>• Avoid 'green' language that overstates certainty or hides trade‑offs.<br><br><em>Evidence could include:</em> whole‑life carbon report, assumptions register</div>`,

        ethics: `<span class="cell-short">Maintain honesty, confidentiality and data integrity in writing.</span><div class="cell-full"><strong>In practice:</strong><br>• Present results and limitations accurately; do not manipulate figures or graphs.<br>• Respect confidentiality, IP and permissions when sharing information.<br>• Record decisions and rationale so they can be audited later.<br><br><em>Evidence could include:</em> decision logs, controlled documents, data provenance</div>`,

        inclusive: `<span class="cell-short">Make written outputs accessible and understandable.</span><div class="cell-full"><strong>In practice:</strong><br>• Use plain English, clear structure and visuals that work for different readers.<br>• Provide accessible formats (e.g., tagged PDFs, captions/alt text) where needed.<br>• Avoid jargon and unexplained acronyms when writing for mixed audiences.<br><br><em>Evidence could include:</em> accessible template, audience-checked comms</div>`,

        crit: `<span class="cell-short">Construct a defensible written argument.</span><div class="cell-full"><strong>In practice:</strong><br>• Link proposals to evidence, standards and requirements; cite sources.<br>• Quantify uncertainty and assumptions rather than hiding them.<br>• Show why alternatives were rejected and what would change your conclusion.<br><br><em>Evidence could include:</em> options appraisal, uncertainty/assumptions sections</div>`,

    },


    /* ----------------------------------------
     * D2: Verbal communication
     * ---------------------------------------- */

    "D2": {

        safety: `<span class="cell-short">Communicate risk clearly to support safe decisions.</span><div class="cell-full"><strong>In practice:</strong><br>• Explain hazards, residual risks and controls to non‑specialists without downplaying.<br>• Facilitate safety briefings and respond to concerns with evidence.<br>• Escalate when decisions would create unacceptable risk.<br><br><em>Evidence could include:</em> briefing notes, recorded decisions/escalations</div>`,

        sust: `<span class="cell-short">Explain whole‑life impacts and advocate for better outcomes.</span><div class="cell-full"><strong>In practice:</strong><br>• Present cost/carbon trade‑offs in a way decision‑makers can act on.<br>• Challenge short‑termism using evidence and case studies.<br>• Support clients/users to understand operational behaviours that affect impact.<br><br><em>Evidence could include:</em> presentation packs, client workshops</div>`,

        ethics: `<span class="cell-short">Speak up with integrity when something is wrong.</span><div class="cell-full"><strong>In practice:</strong><br>• Declare conflicts of interest and separate facts from opinion.<br>• Refuse to mislead stakeholders about performance, safety or sustainability.<br>• Use appropriate escalation routes when pressured to compromise standards.<br><br><em>Evidence could include:</em> meeting notes, escalation records</div>`,

        inclusive: `<span class="cell-short">Facilitate discussions so all voices are heard.</span><div class="cell-full"><strong>In practice:</strong><br>• Use meeting practices that avoid dominance and include quieter or remote participants.<br>• Adjust language and pace; check understanding and invite questions.<br>• Handle disagreement respectfully and prevent exclusionary behaviour.<br><br><em>Evidence could include:</em> facilitation approach, stakeholder feedback</div>`,

        crit: `<span class="cell-short">Present conclusions that withstand challenge.</span><div class="cell-full"><strong>In practice:</strong><br>• Explain assumptions, sensitivity and uncertainty clearly.<br>• Answer probing questions with evidence and acknowledge limits.<br>• Use structured reasoning to compare options and justify recommendations.<br><br><em>Evidence could include:</em> Q&A log, decision rationale</div>`,

    },


};
