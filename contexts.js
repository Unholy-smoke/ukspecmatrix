/*
 * ============================================================================
 * UK-SPEC CONTEXT MANIFEST
 * ============================================================================
 *
 * This file lists all available engineering contexts.
 *
 * TO ADD A NEW CONTEXT:
 * 1. Create a new file (e.g., "electrical.js") with a MATRIX object
 * 2. Add an entry to the CONTEXTS array below
 * ============================================================================
 */

const CONTEXTS = [
    { id: "generic",    label: "Generic Engineering",     file: "generic.js" },
    { id: "mechanical", label: "Mechanical Engineering",  file: "mechanical.js" },
    { id: "civil",      label: "Civil Engineering",       file: "civil.js" }
];

const DEFAULT_CONTEXT = "generic";
