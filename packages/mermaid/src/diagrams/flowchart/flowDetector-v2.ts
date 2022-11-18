import type { DiagramDetector } from '../../diagram-api/types';
import type { ExternalDiagramDefinition } from '../../diagram-api/types';

const id = 'flowchart-v2';

const detector: DiagramDetector = (txt, config) => {
  // If we have confgured to use dagre-wrapper then we should return true in this function for graph code thus making it use the new flowchart diagram
  if (config?.flowchart?.defaultRenderer === 'dagre-wrapper' && txt.match(/^\s*graph/) !== null)
    return true;
  return txt.match(/^\s*flowchart/) !== null;
};

const loader = async () => {
  const { diagram } = await import('./flowDiagram-v2');
  return { id, diagram };
};

const plugin: ExternalDiagramDefinition = {
  id,
  detector,
  loader,
};

export default plugin;
