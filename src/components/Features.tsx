
import { motion } from 'framer-motion';
import { Cpu, Zap, Layers, Activity, Brain } from 'lucide-react';

const features = [
    {
        icon: <Layers className="w-6 h-6" />,
        title: "多次元指標分析",
        desc: "MACD, ADX, Stochastic, ATR, ROCなど20種類以上の指標を統合。単一の指標では見えない市場の歪みを立体的に捉えます。"
    },
    {
        icon: <Brain className="w-6 h-6" />,
        title: "AI機械学習コア",
        desc: "50,000件以上の過去パターンと現在の波形を瞬時に照合。Web Workerによるバックグラウンド処理で、UIを止めることなく最適解を導き出します。"
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "超短期取引特化",
        desc: "15秒から5分の取引に特化してチューニング。マイクロリバーサル（微細な反転）を検出し、0.01秒の遅延も許さない高速処理を実現。"
    },
    {
        icon: <Activity className="w-6 h-6" />,
        title: "動的閾値調整",
        desc: "市場のボラティリティ（ATR）に合わせて、感度を自動調整。荒れ相場では慎重に、トレンド相場では積極的にシグナルを出します。"
    },
    {
        icon: <Cpu className="w-6 h-6" />,
        title: "シグナルエンハンサー",
        desc: "短期・中期・長期のトレンド整合性を確認し、勝率の高いポイントだけを抽出するフィルター機能を搭載。"
    }
];

export const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 bg-secondary text-text-main">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                        圧倒的なテクノロジー
                    </h2>
                    <p className="text-muted-light max-w-2xl mx-auto">
                        人間の処理能力を超えた、高度な分析エンジン。<br />
                        その全てが、あなたのブラウザの中で完結します。
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-primary">{feature.title}</h3>
                            <p className="text-muted-light leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Tech Visual Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-24 p-8 bg-primary/30 rounded-2xl border border-white/5 text-center"
                >
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <Cpu className="w-12 h-12 text-accent opacity-50" />
                        <h3 className="text-xl font-bold text-white">System Architecture</h3>
                        <p className="text-white max-w-3xl">
                            Theoption Trading Systemは、Chrome拡張機能としてブラウザ内で直接動作します。<br />
                            外部サーバーとの通信ラグを排除し、チャート上の価格変動をダイレクトに取得・解析することで、<br />
                            他社ツールでは不可能な「完全リアルタイム」のシグナル生成を実現しています。
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
