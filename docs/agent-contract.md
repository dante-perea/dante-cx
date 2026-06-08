# Agent contract

`dante-cx` is designed around explicit contracts for agent reads and writes.

## Agent read surfaces

Agents should be able to ask:

- Which accounts are blocked?
- Which relationships are stale?
- Which commitments are due or overdue?
- Which customer signals changed risk, urgency, or opportunity?
- Which next actions can be executed now, and which need human approval?

## Agent write requirements

Every agent write must include:

- `actor`: the agent, user, or integration making the write.
- `source`: where the information came from.
- `intent`: why the write is being made.
- `confidence`: low, medium, or high.
- `review`: whether human review is required before action.

## Safety gates

Require human approval before:

- Sending external customer communication.
- Changing deal stage or financial forecasts.
- Marking churn, legal, security, or executive escalations resolved.
- Reassigning account ownership.
- Deleting or merging CRM entities.
