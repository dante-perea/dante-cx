# dante-cx

Agentic-first CRM for founder-led customer work. The primary users are agents, automations, and copilots that need a reliable customer memory layer: who matters, what happened, what needs follow-up, and what is blocked.

## Product thesis

Traditional CRMs are optimized for humans typing into forms. `dante-cx` is optimized for agents coordinating customer relationships:

- **Context is structured**: contacts, organizations, threads, commitments, blockers, opportunities, and next actions are first-class records.
- **Every mutation is auditable**: agents write intent, confidence, source, and provenance with each change.
- **Follow-up is executable**: the system exposes agent-readable queues instead of static dashboards.
- **Humans stay in control**: agents draft, rank, and route; founders approve sensitive outreach and relationship decisions.

## Initial scope

1. Canonical CRM domain model.
2. Agent contract for reads/writes.
3. TypeScript SDK skeleton for future API/server implementation.
4. Safety defaults for provenance, confidence, and review requirements.

## Repository status

This repo has been initialized with the first agentic CRM contract and SDK skeleton. Next steps are to choose the app/runtime stack and implement persistent storage, auth, and agent-facing APIs.
