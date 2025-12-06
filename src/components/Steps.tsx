import { motion } from 'framer-motion';
import { Download, PlayCircle, TrendingUp } from 'lucide-react';

export const Steps = () => {
    const steps = [
        {
            icon: <Download className="w-8 h-8" />,
            title: "Install",
            desc: "Chrome拡張機能をワンクリックでインストール。面倒な設定は不要です。"
        },
        {
            icon: <PlayCircle className="w-8 h-8" />,
            title: "Analyze",
            desc: "TheOptionの取引画面を開くだけ。AIが自動的に市場分析を開始します。"
        },
        {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "Trade",
            desc: "チャート上に表示される高精度シグナルに従ってエントリーするだけ。"
        }
    ];

    return (
        <section className="py-24 bg-secondary border-y border-gray-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
                        How it Works
                    </h2>
                    <p className="text-muted-light">
                        高度な分析を、驚くほどシンプルに。
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-transparent via-blue-200 to-transparent -translate-y-8"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative z-10 flex flex-col items-center text-center max-w-xs"
                        >
                            <div className="w-20 h-20 rounded-full bg-white border border-blue-100 flex items-center justify-center text-accent mb-6 shadow-lg shadow-blue-500/10">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                            <p className="text-muted-light text-sm leading-relaxed">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
