import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, Zap, Activity, Clock } from 'lucide-react';

export const SystemDemo = () => {
    const [activeSpot, setActiveSpot] = useState<number | null>(null);

    const hotspots = [
        {
            id: 1,
            x: 85, // % from left
            y: 35, // % from top
            icon: Zap,
            title: "AI予測エンジン",
            description: "過去50,000件のデータを瞬時に照合し、統計的優位性のあるエントリーポイントを「HIGH/LOW」で表示します。"
        },
        {
            id: 2,
            x: 85,
            y: 60,
            icon: Activity,
            title: "リアルタイム相場分析",
            description: "現在のトレンド強度とボラティリティを可視化。「レンジ相場」や「トレンド発生中」などの状況を一目で把握できます。"
        },
        {
            id: 3,
            x: 85,
            y: 15,
            icon: Clock,
            title: "精密カウントダウン",
            description: "エントリータイミングを逃さないよう、判定時刻までの残り時間を秒単位で正確に表示します。"
        }
    ];

    return (
        <section className="py-24 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        実際の画面で見る、圧倒的性能
                    </h2>
                    <p className="text-gray-300 text-lg">
                        TheOptionの取引画面に完全統合。<br />
                        違和感なく、しかし強力にあなたの取引をサポートします。
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-accent/20 border border-white/10 group">
                    {/* Main Image */}
                    <img
                        src="/images/system-demo.jpg"
                        alt="Theoption Trading System Demo"
                        className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Overlay Gradient for better text visibility if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent pointer-events-none"></div>

                    {/* Hotspots */}
                    {hotspots.map((spot) => (
                        <div
                            key={spot.id}
                            className="absolute"
                            style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                        >
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveSpot(activeSpot === spot.id ? null : spot.id)}
                                className="relative z-20 w-12 h-12 rounded-full bg-accent border-2 border-white/20 flex items-center justify-center shadow-lg shadow-accent/50 cursor-pointer group"
                            >
                                <span className="absolute w-full h-full rounded-full bg-accent animate-ping opacity-50"></span>
                                <div className="relative z-10 text-white group-hover:scale-110 transition-transform">
                                    <spot.icon className="w-6 h-6" />
                                </div>
                            </motion.button>

                            {/* Tooltip */}
                            <AnimatePresence>
                                {(activeSpot === spot.id) && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                                        className="absolute z-30 w-64 bg-white/95 backdrop-blur-md border border-gray-200 rounded-xl p-3 shadow-2xl -translate-x-full ml-[-20px] mt-[-20px]"
                                        style={{ right: '100%', top: '50%', transform: 'translateY(-50%)' }}
                                    >
                                        <div className="flex items-start gap-2">
                                            <div className="p-1.5 rounded-lg bg-accent/10 shrink-0 mt-0.5">
                                                <spot.icon className="w-4 h-4 text-accent" />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-gray-900 mb-0.5 text-sm">{spot.title}</h4>
                                                <p className="text-xs text-gray-600 leading-relaxed">
                                                    {spot.description}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Arrow */}
                                        <div className="absolute top-1/2 -right-2 w-4 h-4 bg-white/95 border-t border-r border-gray-200 transform rotate-45 -translate-y-1/2"></div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}

                    {/* Instruction Overlay (disappears on interaction) */}
                    <AnimatePresence>
                        {activeSpot === null && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 flex items-center gap-3 pointer-events-none"
                            >
                                <MousePointer2 className="w-5 h-5 text-accent animate-bounce" />
                                <span className="text-white text-sm font-medium">アイコンをタップして詳細を確認</span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};
