# dante-cx — Agent Rules

This repository is an agentic-first CRM. Build for agents as primary consumers and humans as supervisors.

## Principles

- Treat CRM data as operational memory, not just records.
- Every write should include provenance: source, actor, confidence, and reason.
- Prefer explicit domain objects over generic notes when information is actionable.
- Keep human approval gates for sensitive customer communication, pricing, churn risk, legal commitments, and account ownership changes.
- Design APIs so agents can query queues, blocked work, stale relationships, and recommended next actions without scraping UI state.

## Domain vocabulary

- **Account**: an organization or household/customer entity.
- **Person**: an individual contact.
- **Interaction**: a meeting, email, call, chat, ticket, demo, or agent-observed event.
- **Commitment**: something we promised or someone promised us.
- **Signal**: evidence that changes relationship state, urgency, risk, or opportunity.
- **Next action**: an executable follow-up with owner, deadline, and approval state.

## Engineering defaults

- TypeScript-first contracts.
- Keep schemas small and composable.
- Write tests around agent behavior and data integrity before expanding UI.
- Never allow silent destructive updates; use append-only events or auditable revisions where possible.
