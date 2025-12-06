import { motion } from 'framer-motion';

export const Philosophy = () => {
    return (
        <section className="py-32 bg-primary relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-overlay"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white leading-tight">
                        「15秒の真実」を掴むために。
                    </h2>
                    <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                        <p>
                            市場は常にノイズに満ちています。<br />
                            感情、憶測、そして無数のアルゴリズムが交錯する中で、<br />
                            本当に信頼できる「一瞬」を見つけることは容易ではありません。
                        </p>
                        <p>
                            私たちは、その一瞬を科学するためにこのシステムを開発しました。<br />
                            20以上の指標、50,000件のデータ、そしてAIによる冷徹な判断。
                        </p>
                        <p>
                            すべては、あなたが迷いなくエントリーボタンを押す<br />
                            その瞬間の「確信」のために。
                        </p>
                    </div>

                    <div className="mt-12">
                        <span className="text-accent font-serif italic text-lg">
                            - Theoption Trading System Development Team
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
