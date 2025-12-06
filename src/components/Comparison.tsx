import { motion } from 'framer-motion';
import { Check, X, Zap, AlertTriangle, Shield } from 'lucide-react';

export const Comparison = () => {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">


            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                        なぜ、Theoption Trading Systemなのか？
                    </h2>
                    <p className="text-muted-light text-lg max-w-2xl mx-auto">
                        既存のツールが抱える問題を根本から解決し、<br />
                        プロトレーダーが求める「確信」を提供します。
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Conventional Tools */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white border border-gray-200 rounded-2xl p-8 relative overflow-hidden group shadow-sm"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-gray-300"></div>
                        <h3 className="text-xl font-bold text-gray-500 mb-6 flex items-center gap-2">
                            <AlertTriangle className="w-5 h-5" /> 一般的なサインツール
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold block text-gray-700">リペイント（後出し修正）</span>
                                    <span className="text-sm">負けたシグナルが消え、勝率が偽装される</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-gray-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold block text-gray-700">根拠がブラックボックス</span>
                                    <span className="text-sm">「なぜエントリーするのか」が分からず、不安が残る</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-gray-500">
                                <X className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <div>
                                    <span className="font-bold block text-gray-700">動作が重く、遅延する</span>
                                    <span className="text-sm">1秒を争う短期取引で致命的なラグが発生</span>
                                </div>
                            </li>
                        </ul>
                    </motion.div>

                    {/* TheOption Trend Analyzer */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="bg-white border border-blue-100 rounded-2xl p-8 relative overflow-hidden shadow-2xl shadow-blue-500/10"
                    >
                        <div className="absolute top-0 left-0 w-1 h-full bg-accent"></div>
                        <div className="absolute top-0 right-0 p-4 opacity-5">
                            <Shield className="w-24 h-24 text-accent" />
                        </div>

                        <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-accent" /> Theoption Trading System
                        </h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-3">
                                <div className="bg-blue-50 p-1 rounded-full mt-0.5">
                                    <Check className="w-4 h-4 text-accent" />
                                </div>
                                <div>
                                    <span className="font-bold block text-primary text-lg">リペイント一切なし</span>
                                    <span className="text-muted-light text-sm">一度出たシグナルは絶対に変更されません。<br />真実の勝率のみを表示します。</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-blue-50 p-1 rounded-full mt-0.5">
                                    <Check className="w-4 h-4 text-accent" />
                                </div>
                                <div>
                                    <span className="font-bold block text-primary text-lg">明確な論理的根拠</span>
                                    <span className="text-muted-light text-sm">20種類以上の指標とAI分析の結果を可視化。<br />「なぜ今なのか」を完全に理解できます。</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="bg-blue-50 p-1 rounded-full mt-0.5">
                                    <Check className="w-4 h-4 text-accent" />
                                </div>
                                <div>
                                    <span className="font-bold block text-primary text-lg">Web Workerによる超高速処理</span>
                                    <span className="text-muted-light text-sm">重い計算はバックグラウンドで実行。<br />UIは常に滑らかで、0.01秒の遅延も許しません。</span>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
