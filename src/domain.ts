export type Confidence = 'low' | 'medium' | 'high';
export type ReviewState = 'not_required' | 'required' | 'approved' | 'rejected';
export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export interface Provenance {
  actor: string;
  source: string;
  intent: string;
  confidence: Confidence;
  observedAt: string;
}

export interface Account {
  id: string;
  name: string;
  lifecycle: 'lead' | 'active' | 'at_risk' | 'churned' | 'partner';
  owner?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Person {
  id: string;
  accountId?: string;
  name: string;
  role?: string;
  email?: string;
  relationshipStrength: 'unknown' | 'weak' | 'warm' | 'strong';
  createdAt: string;
  updatedAt: string;
}

export interface Interaction {
  id: string;
  accountId?: string;
  personIds: string[];
  channel: 'email' | 'call' | 'meeting' | 'chat' | 'ticket' | 'agent_observation';
  summary: string;
  occurredAt: string;
  provenance: Provenance;
}

export interface Commitment {
  id: string;
  accountId?: string;
  personId?: string;
  description: string;
  owner: string;
  counterparty?: string;
  dueAt?: string;
  status: 'open' | 'done' | 'blocked' | 'cancelled';
  provenance: Provenance;
}

export interface Signal {
  id: string;
  accountId?: string;
  personId?: string;
  kind: 'risk' | 'opportunity' | 'urgency' | 'relationship' | 'product_feedback' | 'blocker';
  summary: string;
  priority: Priority;
  provenance: Provenance;
}

export interface NextAction {
  id: string;
  accountId?: string;
  personId?: string;
  title: string;
  rationale: string;
  priority: Priority;
  owner: string;
  dueAt?: string;
  review: ReviewState;
  status: 'queued' | 'in_progress' | 'done' | 'blocked' | 'cancelled';
  provenance: Provenance;
}
