# Claude Code skills

Custom skills for this repo. Each lives in its own folder with a `SKILL.md`.

| Skill | Trigger | What it does |
|-------|---------|--------------|
| `humanize-writing` | "humanize this", "de-AI the tone", "make it sound natural" | Rewrites AI-sounding text in three passes (vocabulary, structure, human signature) while preserving facts. |
| `detect-ai-writing` | "does this sound AI?", "check for AI tells" | Audits text and reports the tells with line-level evidence and a confidence level. Diagnoses only; hands off to `humanize-writing` for the fix. |

The two are designed to pair: detect to diagnose, humanize to fix.

## Using them

These are picked up automatically by Claude Code when this repo is the working
directory. Invoke by describing the task ("humanize this paragraph") or with the
slash form (`/humanize-writing`).

## Installing globally

To use them in any project, copy each skill folder into your personal skills
directory:

```bash
cp -r .claude/skills/humanize-writing ~/.claude/skills/
cp -r .claude/skills/detect-ai-writing ~/.claude/skills/
```

## Editing

Each skill is a single `SKILL.md` with YAML frontmatter (`name`, `description`)
followed by markdown instructions. The `description` is what Claude matches
against to decide when to load the skill, so keep its trigger phrases accurate.
