import { motion } from 'framer-motion';
import { TrendingUp, CheckCircle } from 'lucide-react';

export const TradingVideo = () => {
    return (
        <section id="trading-video" className="py-24 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        実際の取引映像
                    </h2>
                    <p className="text-gray-400 text-lg">
                        この取引はテクニカル分析のみを使った取引です。<br />
                        AIの予測と多次元分析が、確実なエントリーポイントを導き出します。
                    </p>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-accent/20 bg-black/50"
                    >
                        {/* Video Container */}
                        <div className="aspect-video relative">
                            <video
                                controls
                                playsInline
                                className="w-full h-full object-cover"
                                poster="/images/system-demo.jpg" // Fallback poster
                            >
                                <source src="/videos/trading-demo.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* Stats Overlay */}
                        <div className="absolute top-4 left-4 md:top-8 md:left-8 bg-black/80 backdrop-blur-md border border-accent/30 rounded-xl p-4 md:p-6 text-white shadow-lg">
                            <div className="flex items-center gap-2 mb-2 text-accent">
                                <TrendingUp className="w-5 h-5" />
                                <span className="font-bold text-sm md:text-base">LIVE TRADING RESULT</span>
                            </div>
                            <div className="space-y-1">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl md:text-4xl font-bold text-white">13</span>
                                    <span className="text-sm text-gray-400">勝</span>
                                    <span className="text-3xl md:text-4xl font-bold text-gray-500 ml-2">3</span>
                                    <span className="text-sm text-gray-400">敗</span>
                                </div>
                                <div className="flex items-center gap-2 pt-2 border-t border-white/10 mt-2">
                                    <CheckCircle className="w-4 h-4 text-accent" />
                                    <span className="text-sm text-gray-300">単発勝率</span>
                                    <span className="text-xl font-bold text-accent-glow">81.25%</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
