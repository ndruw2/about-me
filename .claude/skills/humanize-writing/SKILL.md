---
name: humanize-writing
description: Rewrite AI-sounding text so it reads like a human wrote it. Use when the user asks to humanize, de-AI, or fix the tone of writing, remove "AI writing style", make text sound natural/less robotic, or edit copy that feels templated. Works on prose, web copy, emails, READMEs, and docs.
---

# Humanize Writing

Rewrite text to remove the tells of machine-generated prose while keeping the
author's meaning, facts, and intent. The goal is not to defeat AI detectors —
it is to make writing clear, specific, and natural.

## How to use this skill

1. Read the target text in full before changing anything.
2. Run the three passes below in order.
3. Show the result. If the user gave a voice sample, match it (see Voice match).
4. Never invent facts to fill gaps. If a claim is vague because information is
   missing, flag it instead of inventing detail.

Preserve meaning, named facts, numbers, quotes, and code. Humanizing is an
editing task, not a rewrite of substance.

## Pass 1 — Kill the word and phrase tells

Remove or replace these when they appear as filler. They are not banned words in
all contexts, but in AI prose they cluster and signal machine authorship.

**Inflated / promotional vocabulary:** delve, tapestry, vibrant, bustling,
nestled, breathtaking, stunning, testament, landscape (figurative), realm,
elevate, unlock, unleash, harness, leverage, robust, seamless, cutting-edge,
game-changer, supercharge, navigate (figurative), foster, embark, journey.

**Hollow intensifiers / hedges:** crucial, vital, pivotal, essential, key,
significant, notably, importantly, arguably, it's worth noting, it's important
to note, when it comes to, in the realm of, at its core, the real question is.

**Filler phrases → tighten:**
- "in order to" → "to"
- "due to the fact that" → "because"
- "at this point in time" → "now"
- "a wide range of" → "many" / name them
- "in today's fast-paced world" → cut entirely

**Copula avoidance:** prefer "is" over "serves as," "stands as," "acts as,"
"functions as" when a plain "is" works.

## Pass 2 — Break the structural patterns

These sentence shapes are the strongest tells. Fix the pattern, not just the words.

- **Rule of three.** AI forces ideas into triplets, often with the third item
  longest ("clarity, precision, and an unwavering commitment to quality").
  Break triads: cut padding, redistribute into prose, or use a list of a
  different length. One real triad is fine; a paragraph of them is a confession.
- **Not X, but Y / negative parallelism.** "It's not just fast, it's
  transformative." Drop the negation and state the positive claim directly.
- **Rhetorical question then answer.** "So what does this mean? It means…"
  Delete the question and make the statement.
- **Em dashes ("—") — remove them all.** This is the single most-cited AI tell
  since early 2025; many readers now flag any em dash as machine-written
  regardless of how well it's used. Default to **zero em dashes** in the output.
  Replace each one by the meaning it carries:
  - aside / interruption → wrap in commas or parentheses
  - list intro or reveal → colon
  - linked independent clauses → semicolon, or split into two sentences
  - never just swap "—" for a hyphen "-"; rewrite the punctuation properly.
  Apply the same rule to **en dashes ("–")**: use a hyphen in ranges
  (2008-2012) and "to" in date spans (Apr 2022 to Present).
- **Mirror / "from X to Y" ranges** on things that aren't a real scale
  ("from startups to enterprises"). Replace with concrete examples.
- **Sentence rhythm.** AI writes uniform medium-length sentences. Vary it:
  mix short punchy sentences with longer ones. A three-word sentence is allowed.

## Pass 3 — Add a human signature

- Use contractions where the register allows (it's, don't, you're).
- Make the author's actual opinion or stance visible instead of neutral hedging.
- Let one or two thoughts stay slightly unresolved rather than wrapping every
  paragraph in a tidy bow.
- Cut generic conclusions ("In conclusion," "Overall, it's clear that…").
  End on a concrete point.
- Remove chatbot residue: "I hope this helps," "Let me know if…," "Let's dive
  in," "Here's what you need to know," sycophantic openers ("Great question!").
- Prefer specific nouns and numbers over abstract claims. "Cut the cloud bill
  20%" beats "drove significant cost efficiencies."

## Formatting tells to fix

- Don't bold routine terms or every list-item lead-in.
- Avoid Title Case in headings (sentence case reads more human).
- Drop decorative emojis from body copy unless the voice calls for them.
- Use straight quotes unless the document already uses curly quotes.

## Voice match (when a sample is provided)

Before rewriting, read the sample for: average sentence length, contraction
use, formality, how paragraphs open, punctuation habits, and recurring phrases.
Match that profile instead of imposing a default neutral tone.

## What NOT to do

- Don't add errors or typos to seem human. Clarity stays.
- Don't strip domain terms that are genuinely needed (a security doc still says
  "WAF," "SIEM," "zero-trust").
- Don't change quoted text, citations, names, figures, or code.
- Don't flatten a strong, intentional voice just because it's polished.

## Quick self-check before returning

- Any forced triads left? Any "not just… but…"? Any rhetorical Q+A?
- **Zero em dashes ("—") and zero en dashes ("–")?** This is a hard pass/fail.
  Search the output for both characters; any hit means it isn't done.
- Do sentence lengths vary?
- Is there a visible point of view, not just balanced hedging?
- Are vague claims replaced with specifics, or flagged where facts are missing?
- Meaning, facts, and structure preserved?
