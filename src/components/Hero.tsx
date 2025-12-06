
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp, Zap, Shield } from 'lucide-react';
import { HeroAnimation } from './HeroAnimation';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary pt-16">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-30 mix-blend-overlay"
                >
                    <source src="/videos/hero-bg.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-primary/80 to-primary"></div>
            </div>
            <HeroAnimation />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-accent-glow text-sm font-medium tracking-wide">AI PREDICTION ENGINE V5.0</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight tracking-tight"
                    >
                        市場のノイズを断ち切り、<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-accent-glow">
                            真のトレンドを掴む。
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        AI × 多次元分析が導く、静寂なる勝利への道筋。<br />
                        感情を排除し、データだけが語る「15秒の真実」をあなたに。
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    >
                        <a
                            href="https://youtu.be/oC14lc1mTRY"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-glow text-white rounded-full font-bold text-lg transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2 group"
                        >
                            YouTubeをみる
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12"
                    >
                        <div className="p-4">
                            <div className="flex items-center justify-center gap-2 mb-2 text-accent">
                                <TrendingUp className="w-5 h-5" />
                                <span className="font-bold text-2xl">20+</span>
                            </div>
                            <p className="text-sm text-gray-400 font-medium">テクニカル指標<br />リアルタイム処理</p>
                        </div>
                        <div className="p-4 border-t md:border-t-0 md:border-l border-white/10">
                            <div className="flex items-center justify-center gap-2 mb-2 text-accent">
                                <Shield className="w-5 h-5" />
                                <span className="font-bold text-2xl">50,000+</span>
                            </div>
                            <p className="text-sm text-gray-400 font-medium">学習済みパターン<br />データベース</p>
                        </div>
                        <div className="p-4 border-t md:border-t-0 md:border-l border-white/10">
                            <div className="flex items-center justify-center gap-2 mb-2 text-accent">
                                <Zap className="w-5 h-5" />
                                <span className="font-bold text-2xl">0.01s</span>
                            </div>
                            <p className="text-sm text-gray-400 font-medium">処理遅延<br />超低レイテンシー</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
