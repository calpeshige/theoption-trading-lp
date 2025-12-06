import { motion } from 'framer-motion';
import { Layers, GitMerge, Activity } from 'lucide-react';

export const Logic = () => {
    const technologies = [
        {
            id: 'pss',
            icon: <Layers className="w-8 h-8 text-blue-400" />,
            title: "Pattern Stratification (PSS)",
            subtitle: "パターン層別化システム",
            description: "市場の状況を「トレンド」「ボラティリティ」「連続性」の3層で立体的に分析。単なるパターンマッチングを超え、相場の「文脈」を理解します。",
            details: ["コンテキスト層別化", "ボラティリティ層別化", "連続パターン分析"]
        },
        {
            id: 'ses',
            icon: <GitMerge className="w-8 h-8 text-purple-400" />,
            title: "Signal Enhancer (SES)",
            subtitle: "シグナルエンハンサー",
            description: "複数の時間枠（15秒〜5分）の合意形成と、勝率の高いパターンのクラスタリングにより、ダマシを回避しつつエントリー回数を最大化します。",
            details: ["複数時間枠統合", "パターンクラスタリング", "ボラティリティ適応"]
        },
        {
            id: 'ssc',
            icon: <Activity className="w-8 h-8 text-emerald-400" />,
            title: "Segment Similarity (SSC)",
            subtitle: "セグメント類似度算出",
            description: "波形の形状、変化量、傾きを多次元で比較。過去50,000件のデータから、現在の波形と90%以上一致する「勝ちパターン」のみを瞬時に抽出します。",
            details: ["形状ハッシュ比較", "多次元スコアリング", "動的重み付け"]
        }
    ];

    return (
        <section id="logic" className="py-24 bg-primary relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        勝利へのロジック
                    </h2>
                    <p className="text-gray-400 text-lg">
                        感覚や運ではなく、数学と統計に基づいた<br />
                        3つのコアテクノロジーが、あなたの取引を支えます。
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-colors duration-300 group backdrop-blur-sm"
                        >
                            <div className="mb-6 bg-primary w-16 h-16 rounded-lg flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-colors">
                                {tech.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">{tech.title}</h3>
                            <p className="text-sm text-accent-glow mb-4 font-medium">{tech.subtitle}</p>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {tech.description}
                            </p>
                            <div className="border-t border-white/5 pt-4">
                                <ul className="space-y-2">
                                    {tech.details.map((detail, i) => (
                                        <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent/50"></div>
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
