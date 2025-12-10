import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Tokushoho = () => {
    return (
        <div className="min-h-screen bg-secondary font-sans text-text-main py-24">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-8"
                >
                    <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-accent-glow transition-colors">
                        <ArrowLeft className="w-5 h-5" />
                        トップページに戻る
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-black/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
                >
                    <h1 className="text-3xl font-bold text-white mb-12 text-center border-b border-white/10 pb-8">
                        特定商取引法に基づく表記
                    </h1>

                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-b border-white/5 pb-8">
                            <div className="font-bold text-gray-300 md:text-right">販売業者</div>
                            <div className="md:col-span-2 text-white">Binary Signal Tool Labo</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-b border-white/5 pb-8">
                            <div className="font-bold text-gray-300 md:text-right">運営統括責任者</div>
                            <div className="md:col-span-2 text-white">島田茂章</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-b border-white/5 pb-8">
                            <div className="font-bold text-gray-300 md:text-right">所在地</div>
                            <div className="md:col-span-2 text-white">
                                〒227-0062<br />
                                神奈川県横浜市青葉区青葉台1-5-4 青葉台サンクスビル3F
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-b border-white/5 pb-8">
                            <div className="font-bold text-gray-300 md:text-right">電話番号</div>
                            <div className="md:col-span-2 text-white">
                                お電話でのサポートは行っていません。公式LINEからお問い合わせください。<br />
                                （ID: @266zyldw）
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-b border-white/5 pb-8">
                            <div className="font-bold text-gray-300 md:text-right">メールアドレス</div>
                            <div className="md:col-span-2 text-white">binarysignaltoollabo@gmail.com</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-b border-white/5 pb-8">
                            <div className="font-bold text-gray-300 md:text-right">販売価格</div>
                            <div className="md:col-span-2 text-white">公式LINEにて提示</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-b border-white/5 pb-8">
                            <div className="font-bold text-gray-300 md:text-right">商品代金以外の<br className="hidden md:block" />必要金額</div>
                            <div className="md:col-span-2 text-white">
                                ・インターネット接続料金、通信料金<br />
                                ・銀行振込手数料（銀行振込の場合）
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-b border-white/5 pb-8">
                            <div className="font-bold text-gray-300 md:text-right">お支払い方法</div>
                            <div className="md:col-span-2 text-white">クレジットカード決済、銀行振込</div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-b border-white/5 pb-8">
                            <div className="font-bold text-gray-300 md:text-right">お支払い時期</div>
                            <div className="md:col-span-2 text-white">
                                クレジットカード：各カード会社の引き落とし日<br />
                                銀行振込：お申し込みから3営業日以内
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 border-b border-white/5 pb-8">
                            <div className="font-bold text-gray-300 md:text-right">商品引き渡し時期</div>
                            <div className="md:col-span-2 text-white">
                                決済完了後、1営業日以内に納品させていただきます。
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
                            <div className="font-bold text-gray-300 md:text-right">返品・交換について</div>
                            <div className="md:col-span-2 text-white">
                                デジタルコンテンツという商品の性質上、ご購入後の返品・返金・交換には一切応じられません。<br />
                                また、本ツールを利用した取引による損失が発生した場合でも、全てお客様の自己責任となりますため、これらを理由とした返金には一切応じられません。<br />
                                動作環境等をよくご確認の上、ご購入ください。
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
