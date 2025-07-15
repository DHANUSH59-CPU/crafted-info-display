import { useEffect, useState } from 'react';

interface Node {
  x: number;
  y: number;
  id: number;
  layer: number;
}

interface Connection {
  from: Node;
  to: Node;
  strength: number;
}

const NeuralNetworkBackground = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Create neural network structure
    const layers = 4;
    const nodesPerLayer = [6, 8, 6, 4];
    const newNodes: Node[] = [];
    const newConnections: Connection[] = [];

    let nodeId = 0;

    // Generate nodes for each layer
    for (let layer = 0; layer < layers; layer++) {
      const nodeCount = nodesPerLayer[layer];
      const layerX = (dimensions.width / (layers + 1)) * (layer + 1);
      
      for (let i = 0; i < nodeCount; i++) {
        const nodeY = (dimensions.height / (nodeCount + 1)) * (i + 1);
        newNodes.push({
          x: layerX,
          y: nodeY,
          id: nodeId++,
          layer
        });
      }
    }

    // Generate connections between adjacent layers
    for (let layer = 0; layer < layers - 1; layer++) {
      const currentLayerNodes = newNodes.filter(n => n.layer === layer);
      const nextLayerNodes = newNodes.filter(n => n.layer === layer + 1);

      currentLayerNodes.forEach(fromNode => {
        nextLayerNodes.forEach(toNode => {
          // Add some randomness to connection strength
          const strength = Math.random() * 0.8 + 0.2;
          newConnections.push({
            from: fromNode,
            to: toNode,
            strength
          });
        });
      });
    }

    setNodes(newNodes);
    setConnections(newConnections);
  }, [dimensions]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-20">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
      >
        {/* Render connections */}
        {connections.map((connection, index) => (
          <line
            key={`connection-${index}`}
            x1={connection.from.x}
            y1={connection.from.y}
            x2={connection.to.x}
            y2={connection.to.y}
            stroke="hsl(12 76% 61%)"
            strokeWidth={connection.strength * 2}
            strokeOpacity={connection.strength * 0.6}
            strokeDasharray="5,5"
            className="animate-neural-flow"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}

        {/* Render nodes */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            {/* Outer glow effect */}
            <circle
              cx={node.x}
              cy={node.y}
              r="12"
              fill="hsl(12 76% 61%)"
              fillOpacity="0.2"
              className="animate-neural-pulse"
              style={{
                animationDelay: `${node.id * 0.2}s`
              }}
            />
            {/* Inner node */}
            <circle
              cx={node.x}
              cy={node.y}
              r="6"
              fill="hsl(12 76% 61%)"
              fillOpacity="0.8"
              className="animate-neural-float"
              style={{
                animationDelay: `${node.id * 0.3}s`
              }}
            />
            {/* Core dot */}
            <circle
              cx={node.x}
              cy={node.y}
              r="2"
              fill="hsl(0 0% 98%)"
              fillOpacity="0.9"
            />
          </g>
        ))}

        {/* Floating data particles */}
        {Array.from({ length: 8 }).map((_, index) => (
          <circle
            key={`particle-${index}`}
            cx={Math.random() * dimensions.width}
            cy={Math.random() * dimensions.height}
            r="3"
            fill="hsl(12 76% 61%)"
            fillOpacity="0.6"
            className="animate-neural-float"
            style={{
              animationDelay: `${index * 0.8}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </svg>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-40" />
    </div>
  );
};

export default NeuralNetworkBackground;