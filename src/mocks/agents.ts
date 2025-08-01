export const agents = [
  {
    id: 'agent-001-orchestrator',
    runId: 'run-001',
    name: 'Orchestrator',
    type: 'orchestrator',
    status: 'active',
    position: { x: 200, y: 100 },
    created_at: '2025-01-15T10:00:00.000Z',
    updated_at: '2025-01-15T10:30:00.000Z',
  },
  {
    id: 'agent-002-planner',
    runId: 'run-001',
    name: 'Strategic Planner',
    type: 'planner',
    status: 'active',
    position: { x: 400, y: 200 },
    created_at: '2025-01-15T10:05:00.000Z',
    updated_at: '2025-01-15T10:25:00.000Z',
  },
  {
    id: 'agent-003-evaluator',
    runId: 'run-001',
    name: 'Performance Evaluator',
    type: 'evaluator',
    status: 'active',
    position: { x: 600, y: 300 },
    created_at: '2025-01-15T10:10:00.000Z',
    updated_at: '2025-01-15T10:35:00.000Z',
  },
  {
    id: 'agent-004-reporter',
    runId: 'run-001',
    name: 'Report Generator',
    type: 'reporter',
    status: 'completed',
    position: { x: 800, y: 150 },
    created_at: '2025-01-15T10:15:00.000Z',
    updated_at: '2025-01-15T10:40:00.000Z',
  },
]

export const agentTraces = [
  {
    id: 'trace-001',
    agentId: 'agent-001-orchestrator',
    runId: 'run-001',
    message: 'Initializing simulation environment',
    timestamp: '2025-01-15T10:00:30.000Z',
    type: 'info',
    context: { step: 1, phase: 'initialization' },
  },
  {
    id: 'trace-002',
    agentId: 'agent-002-planner',
    runId: 'run-001',
    message: 'Creating strategic plan for decision-making process',
    timestamp: '2025-01-15T10:05:15.000Z',
    type: 'info',
    context: { step: 2, phase: 'planning' },
  },
  {
    id: 'trace-003',
    agentId: 'agent-003-evaluator',
    runId: 'run-001',
    message: 'Evaluating agent performance metrics',
    timestamp: '2025-01-15T10:10:45.000Z',
    type: 'info',
    context: { step: 3, phase: 'evaluation' },
  },
  {
    id: 'trace-004',
    agentId: 'agent-004-reporter',
    runId: 'run-001',
    message: 'Generating final simulation report',
    timestamp: '2025-01-15T10:15:20.000Z',
    type: 'success',
    context: { step: 4, phase: 'reporting' },
  },
]