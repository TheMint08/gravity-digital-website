"use client";

import {
  Handle,
  MarkerType,
  Position,
  ReactFlow,
  type Edge,
  type Node,
  type NodeProps,
} from "@xyflow/react";
import { CheckCircle2, FileInput, Workflow } from "lucide-react";

type WorkflowStepData = {
  step: string;
  title: string;
  description: string;
  tone: "input" | "process" | "output";
  icon: "input" | "process" | "output";
  hasInput: boolean;
  hasOutput: boolean;
};

type WorkflowStep = Node<WorkflowStepData, "workflowStep">;

const nodeWidth = 292;
const nodeHeight = 92;
const handleSize = 8;
const handleX = (nodeWidth - handleSize) / 2;
const sourceHandleY = nodeHeight - handleSize;

function WorkflowStepNode({ data }: NodeProps<WorkflowStep>) {
  const Icon = data.icon === "input" ? FileInput : data.icon === "process" ? Workflow : CheckCircle2;

  return (
    <div className={`workflow-step-node workflow-step-node-${data.tone}`}>
      {data.hasInput && <Handle id="input" isConnectable={false} position={Position.Top} type="target" />}
      <span className="workflow-step-icon" aria-hidden="true"><Icon size={18} strokeWidth={1.8} /></span>
      <div className="workflow-step-copy">
        <span className="workflow-step-label">{data.step}</span>
        <strong>{data.title}</strong>
        <span className="workflow-step-description">{data.description}</span>
      </div>
      {data.hasOutput && <Handle id="output" isConnectable={false} position={Position.Bottom} type="source" />}
    </div>
  );
}

const nodeTypes = { workflowStep: WorkflowStepNode };

const initialNodes: WorkflowStep[] = [
  {
    id: "input",
    type: "workflowStep",
    position: { x: 164, y: 8 },
    width: nodeWidth,
    height: nodeHeight,
    ariaLabel: "Entrada: información recibida",
    data: {
      step: "ENTRADA",
      title: "Información recibida",
      description: "Una consulta, pedido o dato.",
      tone: "input",
      icon: "input",
      hasInput: false,
      hasOutput: true,
    },
    handles: [{
      id: "output",
      type: "source",
      position: Position.Bottom,
      x: handleX,
      y: sourceHandleY,
      width: handleSize,
      height: handleSize,
    }],
    draggable: false,
    connectable: false,
    selectable: false,
  },
  {
    id: "process",
    type: "workflowStep",
    position: { x: 164, y: 142 },
    width: nodeWidth,
    height: nodeHeight,
    ariaLabel: "Proceso: herramientas conectadas y reglas definidas",
    data: {
      step: "PROCESO",
      title: "Herramientas + reglas",
      description: "Organizar la información y decidir qué sigue.",
      tone: "process",
      icon: "process",
      hasInput: true,
      hasOutput: true,
    },
    handles: [
      {
        id: "input",
        type: "target",
        position: Position.Top,
        x: handleX,
        y: 0,
        width: handleSize,
        height: handleSize,
      },
      {
        id: "output",
        type: "source",
        position: Position.Bottom,
        x: handleX,
        y: sourceHandleY,
        width: handleSize,
        height: handleSize,
      },
    ],
    draggable: false,
    connectable: false,
    selectable: false,
  },
  {
    id: "output",
    type: "workflowStep",
    position: { x: 164, y: 276 },
    width: nodeWidth,
    height: nodeHeight,
    ariaLabel: "Resultado: acción definida y aviso al equipo",
    data: {
      step: "RESULTADO",
      title: "Acción y aviso al equipo",
      description: "Un siguiente paso claro y explicado.",
      tone: "output",
      icon: "output",
      hasInput: true,
      hasOutput: false,
    },
    handles: [{
      id: "input",
      type: "target",
      position: Position.Top,
      x: handleX,
      y: 0,
      width: handleSize,
      height: handleSize,
    }],
    draggable: false,
    connectable: false,
    selectable: false,
  },
];

const initialEdges: Edge[] = [
  {
    id: "input-process",
    source: "input",
    sourceHandle: "output",
    target: "process",
    targetHandle: "input",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#8199d9" },
    ariaLabel: "La información pasa al proceso",
    animated: true,
    style: { stroke: "#72a5ff", strokeWidth: 2.4 },
  },
  {
    id: "process-output",
    source: "process",
    sourceHandle: "output",
    target: "output",
    targetHandle: "input",
    type: "smoothstep",
    markerEnd: { type: MarkerType.ArrowClosed, color: "#49d89a" },
    ariaLabel: "El proceso produce un resultado explicado",
    animated: true,
    style: { stroke: "#49d89a", strokeWidth: 2.4 },
  },
];

const ariaLabelConfig = {
  "node.a11yDescription.default": "Diagrama de proceso conceptual, de arriba hacia abajo.",
  "edge.a11yDescription.default": "Conexión entre pasos del proceso.",
};

export function WorkflowFlow() {
  return (
    <ReactFlow
      ariaLabelConfig={ariaLabelConfig}
      edges={initialEdges}
      edgesFocusable={false}
      elementsSelectable={false}
      fitView
      fitViewOptions={{ padding: 0.16 }}
      height={410}
      id="gravity-workflow-flow"
      nodes={initialNodes}
      nodesConnectable={false}
      nodesDraggable={false}
      nodesFocusable={false}
      nodeTypes={nodeTypes}
      panOnDrag={false}
      panOnScroll={false}
      proOptions={{ hideAttribution: true }}
      width={620}
      zoomOnDoubleClick={false}
      zoomOnPinch={false}
      zoomOnScroll={false}
    />
  );
}
