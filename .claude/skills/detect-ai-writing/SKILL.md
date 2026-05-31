---
name: detect-ai-writing
description: Audit text for signs of AI-generated writing and report the tells without rewriting. Use when the user asks whether text sounds AI-generated, to check/score copy for AI tells, to review a draft for robotic phrasing, or to explain what makes a passage read as machine-written. Pairs with humanize-writing for the fix.
---

# Detect AI Writing

Scan text and report where it reads as machine-generated, with line-level
evidence. This skill diagnoses; it does not rewrite. When the user wants the
fix applied, hand off to the `humanize-writing` skill.

## Important framing

No detector is certain, and confident human writing can share surface features
with AI prose. Judge most tells by **clusters**, not single hits.

The one exception is the **em dash ("—")**. Since early 2025 it is the single
most-recognized AI signature, and many readers now flag any em dash on sight.
Treat every em dash (and en dash "–") as a hard tell: report each occurrence
individually with its location, and call it out even if nothing else is wrong.
For all other categories, a cluster is what raises confidence. Always report
findings as evidence and a confidence level, never as a verdict of fact.

## How to run the audit

1. Read the whole text.
2. Walk the checklist below. For each tell found, quote the phrase and cite its
   location (line or sentence).
3. Group findings by category and count them.
4. Give a calibrated confidence: Low / Medium / High, with one sentence on why.
5. Offer to run `humanize-writing` to fix it.

## Checklist of tells

**Vocabulary clusters**
delve, tapestry, vibrant, bustling, nestled, testament, landscape (figurative),
realm, elevate, unlock, harness, leverage, robust, seamless, cutting-edge,
crucial, vital, pivotal, foster, embark on a journey, navigate (figurative).

**Hedge / filler tells**
"it's worth noting," "it's important to note," "when it comes to," "at its
core," "the real question is," "in order to," "due to the fact that," "in
today's fast-paced world," "a wide range of."

**Em / en dashes (hard tell — count every one)**
- Em dash "—": flag each occurrence individually, wherever it appears.
- En dash "–": flag each one; ranges should use a hyphen or "to".

**Structural tells (weighted heavily)**
- Rule of three / forced triads, especially with a longer third item.
- "Not just X, but Y" and other negative parallelism.
- Rhetorical question immediately answered.
- "From X to Y" ranges on non-scales.
- Uniform sentence length and rhythm throughout.
- Copula avoidance: "serves as," "stands as," "acts as" where "is" fits.

**Formatting tells**
Excessive boldface on routine terms, bolded list lead-ins with colons, Title
Case headings, decorative emojis, curly quotes mixed into plain text,
formulaic sections like "Challenges and Future Prospects."

**Tone / communication tells**
Chatbot residue ("I hope this helps," "Let me know," "Let's dive in," "Great
question!"), sycophancy, knowledge-cutoff disclaimers, vague attributions
("experts argue," "studies show") with no source, generic upbeat conclusions.

## Report format

Return something like:

```
AI-writing audit — confidence: Medium

Structural (3)
- Line 4: forced triad — "clarity, precision, and an unwavering commitment…"
- Line 9: not-just-but — "It's not just fast, it's transformative."
- Line 12: rhetorical Q+A — "So what does this mean? It means…"

Vocabulary (2)
- Line 2: "leverage"
- Line 7: "seamless"

Formatting (1)
- Bolded lead-ins on every bullet

Why Medium: several structural tells cluster, but sentence rhythm varies and
facts are specific. Want me to humanize it?
```

Keep the report concise. Evidence over adjectives.
