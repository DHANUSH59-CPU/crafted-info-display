import { useEffect, useState, useCallback, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  id: number;
  layer: number;
  activity: number;
  pulsePhase: number;
}

interface Connection {
  from: Node;
  to: Node;
  strength: number;
  active: boolean;
  flowProgress: number;
}

interface DataPacket {
  id: number;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  path: Node[];
  currentPathIndex: number;
  speed: number;
}

interface MousePosition {
  x: number;
  y: number;
}

const AdvancedNeuralNetworkBackground = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [dataPackets, setDataPackets] = useState<DataPacket[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMouseActive, setIsMouseActive] = useState(false);
  const animationFrameRef = useRef<number>();
  const lastUpdateRef = useRef<number>(Date.now());

  // Matrix rain effect characters
  const matrixChars = '01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

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

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsMouseActive(true);
    
    setTimeout(() => setIsMouseActive(false), 2000);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Create enhanced neural network structure
    const layers = 5;
    const nodesPerLayer = [4, 8, 12, 8, 4];
    const newNodes: Node[] = [];
    const newConnections: Connection[] = [];

    let nodeId = 0;

    // Generate nodes with enhanced properties
    for (let layer = 0; layer < layers; layer++) {
      const nodeCount = nodesPerLayer[layer];
      const layerX = (dimensions.width / (layers + 1)) * (layer + 1);
      
      for (let i = 0; i < nodeCount; i++) {
        const nodeY = (dimensions.height / (nodeCount + 1)) * (i + 1);
        newNodes.push({
          x: layerX,
          y: nodeY,
          id: nodeId++,
          layer,
          activity: Math.random(),
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    }

    // Generate enhanced connections
    for (let layer = 0; layer < layers - 1; layer++) {
      const currentLayerNodes = newNodes.filter(n => n.layer === layer);
      const nextLayerNodes = newNodes.filter(n => n.layer === layer + 1);

      currentLayerNodes.forEach(fromNode => {
        nextLayerNodes.forEach(toNode => {
          const distance = Math.sqrt(
            Math.pow(toNode.x - fromNode.x, 2) + Math.pow(toNode.y - fromNode.y, 2)
          );
          const strength = Math.random() * 0.8 + 0.2;
          
          newConnections.push({
            from: fromNode,
            to: toNode,
            strength,
            active: Math.random() > 0.7,
            flowProgress: Math.random()
          });
        });
      });
    }

    setNodes(newNodes);
    setConnections(newConnections);

    // Initialize data packets
    const initialPackets: DataPacket[] = [];
    for (let i = 0; i < 6; i++) {
      const path = newNodes.filter(n => n.layer <= 2);
      initialPackets.push({
        id: i,
        x: path[0]?.x || 0,
        y: path[0]?.y || 0,
        targetX: path[1]?.x || 0,
        targetY: path[1]?.y || 0,
        path,
        currentPathIndex: 0,
        speed: 0.5 + Math.random() * 0.5
      });
    }
    setDataPackets(initialPackets);
  }, [dimensions]);

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const deltaTime = now - lastUpdateRef.current;
      lastUpdateRef.current = now;

      // Update node activities and pulse phases
      setNodes(prevNodes => 
        prevNodes.map(node => {
          const distanceToMouse = isMouseActive ? 
            Math.sqrt(Math.pow(node.x - mousePosition.x, 2) + Math.pow(node.y - mousePosition.y, 2)) : 
            Infinity;
          
          const mouseInfluence = distanceToMouse < 150 ? 1 - (distanceToMouse / 150) : 0;
          
          return {
            ...node,
            activity: Math.sin(now * 0.001 + node.id) * 0.5 + 0.5 + mouseInfluence * 0.3,
            pulsePhase: (node.pulsePhase + deltaTime * 0.002) % (Math.PI * 2)
          };
        })
      );

      // Update connection activities
      setConnections(prevConnections =>
        prevConnections.map(conn => ({
          ...conn,
          active: Math.sin(now * 0.0008 + conn.from.id) > 0.3,
          flowProgress: (conn.flowProgress + deltaTime * 0.0003) % 1
        }))
      );

      // Update data packets
      setDataPackets(prevPackets =>
        prevPackets.map(packet => {
          const progress = (packet.speed * deltaTime * 0.001) % 1;
          const currentNode = packet.path[packet.currentPathIndex];
          const nextNode = packet.path[packet.currentPathIndex + 1];
          
          if (!currentNode || !nextNode) {
            return {
              ...packet,
              currentPathIndex: 0,
              x: packet.path[0]?.x || 0,
              y: packet.path[0]?.y || 0
            };
          }

          const newX = currentNode.x + (nextNode.x - currentNode.x) * progress;
          const newY = currentNode.y + (nextNode.y - currentNode.y) * progress;

          if (progress >= 1) {
            return {
              ...packet,
              currentPathIndex: (packet.currentPathIndex + 1) % (packet.path.length - 1),
              x: nextNode.x,
              y: nextNode.y
            };
          }

          return {
            ...packet,
            x: newX,
            y: newY
          };
        })
      );

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePosition, isMouseActive]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-15">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0"
      >
        {/* Gradient definitions for advanced effects */}
        <defs>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(12 76% 61%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(12 76% 61%)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(12 76% 61%)" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(12 76% 61%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(12 76% 61%)" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Enhanced connections with dynamic flow */}
        {connections.map((connection, index) => (
          <g key={`connection-${index}`}>
            {/* Main connection line */}
            <line
              x1={connection.from.x}
              y1={connection.from.y}
              x2={connection.to.x}
              y2={connection.to.y}
              stroke="url(#connectionGradient)"
              strokeWidth={connection.strength * 3}
              strokeOpacity={connection.active ? 0.8 : 0.3}
              strokeDasharray="8,4"
              className="animate-neural-flow"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
            
            {/* Flowing data indicator */}
            {connection.active && (
              <circle
                cx={connection.from.x + (connection.to.x - connection.from.x) * connection.flowProgress}
                cy={connection.from.y + (connection.to.y - connection.from.y) * connection.flowProgress}
                r="3"
                fill="hsl(12 76% 61%)"
                fillOpacity="0.9"
                className="animate-glow-pulse"
              />
            )}
          </g>
        ))}

        {/* Enhanced nodes with multiple layers */}
        {nodes.map((node) => (
          <g key={`node-${node.id}`}>
            {/* Ripple effect on active nodes */}
            {node.activity > 0.7 && (
              <circle
                cx={node.x}
                cy={node.y}
                r="20"
                fill="none"
                stroke="hsl(12 76% 61%)"
                strokeWidth="2"
                strokeOpacity="0.3"
                className="animate-ripple"
                style={{
                  animationDelay: `${node.pulsePhase}s`
                }}
              />
            )}
            
            {/* Outer glow */}
            <circle
              cx={node.x}
              cy={node.y}
              r={15 + node.activity * 5}
              fill="url(#nodeGlow)"
              fillOpacity={0.3 + node.activity * 0.4}
              className="animate-neural-pulse"
              style={{
                animationDelay: `${node.id * 0.2}s`
              }}
            />
            
            {/* Main node body */}
            <circle
              cx={node.x}
              cy={node.y}
              r={8 + node.activity * 2}
              fill="hsl(12 76% 61%)"
              fillOpacity={0.7 + node.activity * 0.3}
              className="animate-neural-float"
              style={{
                animationDelay: `${node.id * 0.3}s`
              }}
            />
            
            {/* Core */}
            <circle
              cx={node.x}
              cy={node.y}
              r="3"
              fill="hsl(0 0% 98%)"
              fillOpacity="0.9"
            />
            
            {/* Orbiting particles for highly active nodes */}
            {node.activity > 0.8 && (
              <circle
                cx={node.x}
                cy={node.y}
                r="2"
                fill="hsl(12 76% 61%)"
                className="animate-orbit"
                style={{
                  transformOrigin: `${node.x}px ${node.y}px`,
                  animationDelay: `${node.id * 0.5}s`
                }}
              />
            )}
          </g>
        ))}

        {/* Data packets */}
        {dataPackets.map((packet) => (
          <g key={`packet-${packet.id}`}>
            <circle
              cx={packet.x}
              cy={packet.y}
              r="4"
              fill="hsl(12 76% 61%)"
              fillOpacity="0.9"
              className="animate-glow-pulse"
            />
            <circle
              cx={packet.x}
              cy={packet.y}
              r="8"
              fill="none"
              stroke="hsl(12 76% 61%)"
              strokeWidth="1"
              strokeOpacity="0.5"
              className="animate-neural-pulse"
            />
          </g>
        ))}

        {/* Matrix rain effect */}
        {Array.from({ length: 15 }).map((_, index) => (
          <text
            key={`matrix-${index}`}
            x={Math.random() * dimensions.width}
            y={Math.random() * dimensions.height}
            fill="hsl(12 76% 61%)"
            fillOpacity="0.3"
            fontSize="12"
            fontFamily="monospace"
            className="animate-matrix-rain"
            style={{
              animationDelay: `${index * 0.7}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          >
            {matrixChars[Math.floor(Math.random() * matrixChars.length)]}
          </text>
        ))}

        {/* Interactive mouse effect */}
        {isMouseActive && (
          <g>
            <circle
              cx={mousePosition.x}
              cy={mousePosition.y}
              r="50"
              fill="none"
              stroke="hsl(12 76% 61%)"
              strokeWidth="2"
              strokeOpacity="0.4"
              className="animate-ripple"
            />
            <circle
              cx={mousePosition.x}
              cy={mousePosition.y}
              r="30"
              fill="hsl(12 76% 61%)"
              fillOpacity="0.1"
              className="animate-neural-pulse"
            />
          </g>
        )}
      </svg>

      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background/80" />
      
      {/* Animated geometric shapes */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-accent/20 rotate-45 animate-neural-float" />
      <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-accent/15 animate-orbit" style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }} />
      <div className="absolute top-2/3 left-1/3 w-16 h-16 border border-accent/10 rounded-full animate-neural-pulse" />
    </div>
  );
};

export default AdvancedNeuralNetworkBackground;