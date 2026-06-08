export * from './domain.js';

import type { NextAction, Signal } from './domain.js';

export function surfaceBlockedWork(actions: NextAction[], signals: Signal[]) {
  return {
    blockedActions: actions.filter((action) => action.status === 'blocked'),
    blockerSignals: signals.filter((signal) => signal.kind === 'blocker'),
  };
}

export function readyForAgentExecution(actions: NextAction[]) {
  return actions.filter(
    (action) =>
      action.status === 'queued' &&
      (action.review === 'not_required' || action.review === 'approved'),
  );
}
