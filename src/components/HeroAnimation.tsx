import { motion } from 'framer-motion';

export const HeroAnimation = () => {
    // Generate random nodes
    const nodes = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
            <svg className="w-full h-full">
                {/* Connections */}
                {nodes.map((node, i) => (
                    nodes.slice(i + 1).map((target, j) => {
                        const dist = Math.hypot(node.x - target.x, node.y - target.y);
                        if (dist < 30) { // Only connect close nodes
                            return (
                                <motion.line
                                    key={`${i}-${j}`}
                                    x1={`${node.x}%`}
                                    y1={`${node.y}%`}
                                    x2={`${target.x}%`}
                                    y2={`${target.y}%`}
                                    stroke="url(#gradient)"
                                    strokeWidth="1"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{
                                        pathLength: [0, 1, 0],
                                        opacity: [0, 0.5, 0]
                                    }}
                                    transition={{
                                        duration: Math.random() * 3 + 2,
                                        repeat: Infinity,
                                        ease: "linear",
                                        delay: Math.random() * 2
                                    }}
                                />
                            );
                        }
                        return null;
                    })
                ))}

                <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                        <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
                        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

            {/* Floating Nodes */}
            {nodes.map((node) => (
                <motion.div
                    key={node.id}
                    className="absolute rounded-full bg-accent blur-[1px]"
                    style={{
                        left: `${node.x}%`,
                        top: `${node.y}%`,
                        width: node.size,
                        height: node.size,
                    }}
                    animate={{
                        y: [0, -20, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: Math.random() * 3 + 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2
                    }}
                />
            ))}
        </div>
    );
};
