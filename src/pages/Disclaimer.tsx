import { motion } from 'framer-motion';
import { ArrowLeft, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';

type Article = {
    subject: string;
    items: string[];
};

const articles: Article[] = [
    {
        subject: '投資・トレードに関する免責事項',
        items: [
            '本システムは、過去のデータや独自のアルゴリズムに基づき相場分析を行う補助ツールであり、将来の利益や特定の投資成果、および勝率を保証するものではありません。',
            '本システムは、投資助言・代理業（投資顧問）に該当する助言を行うものではなく、特定の銘柄や取引を推奨・勧誘するものではありません。',
            '相場の急激な変動、経済指標の発表、各国の要人発言等の予期せぬ事象により、システムが意図した分析結果をもたらさない場合があります。',
            '本システムを利用したことによって生じた一切の損失・損害について、開発者および販売者は如何なる責任も負わず、補償等は行いません。バイナリーオプションを含む投資・トレードに関する最終的な判断は、お客様ご自身の意思と自己責任において行ってください。',
            'バイナリーオプション取引には元本を大きく割り込む、または全損する高いリスクが伴います。生活資金ではなく、必ず余裕資金（失っても生活に支障のない資金）の範囲内で運用を行ってください。',
        ],
    },
    {
        subject: '表示・成績に関する注記',
        items: [
            '過去または現在の動画・広告・資料等で示した成績・勝率・取引事例は、特定の期間および条件下における結果の一例であり、将来の成果や平均的な結果を示す・保証するものではありません。本システムの結果には個人差があり、相場環境・設定・運用方法・データ蓄積状況等により異なります。',
            '本システムのシグナルは単独で利益を保証するものではなく、テクニカル分析・AI予測・各種フィルター等、マニュアルに記載された複数の条件を確認のうえご利用いただくことを前提としています。シグナルのみに依拠した取引を推奨するものではありません。',
        ],
    },
    {
        subject: 'システムの仕様・動作環境に関する免責事項',
        items: [
            '本システムは指定された動作環境での稼働を前提としております。お客様固有のPC環境、ソフトウェアの相性、または通信環境の不具合に起因する動作不良について、弊社は責任を負いません。',
            '利用する取引所（The Option、Bubinga等）の仕様変更、規約変更、サーバーダウン、またはAPIの変更等により、本システムが正常に動作しなくなる可能性があります。これらの外部要因によるシステムの利用停止や不具合について、弊社は一切の損害賠償義務を負いません。',
        ],
    },
    {
        subject: '返品・返金ポリシーに関する事項',
        items: [
            '本商品は、商品の性質上デジタルコンテンツ（ソフトウェア・データ・情報）であるため、ご購入完了後（お振込みまたは決済完了後）は、いかなる理由（「システムがPC環境に合わなかった」「マニュアル通りに設定できなかった」「期待した利益が出なかった」「間違えて購入した」等）であっても、返品・キャンセル・返金には一切応じられません。',
        ],
    },
    {
        subject: '無償アップデートおよびレビューポリシー',
        items: [
            '本システムのご購入代金は、初期納品バージョンのシステムおよびマニュアル提供に対する対価です。',
            '弊社では、システムの品質向上とユーザーコミュニティの活性化を目的として、相場環境に合わせた「最新アップデート版」を無償で開発・提供する場合がございます。',
            'これらのアップデートは無償で提供しているものであるため、ご提供にあたり、システムの使用感のご報告や、弊社が運営するプラットフォーム（YouTubeのコメント欄等）への感想・ご意見の投稿といった形で、ご協力をお願いする場合がございます。すべてのアップデートで必ずこうした協力をお願いするものではなく、あくまで一例です。',
            'こうしたご協力は、実運用に基づいたリアルな情報を共有いただくことを目的としており、弊社から事実と異なる虚偽の評価を強制することは一切ございません。ご協力いただけない場合でも、お手元のバージョンを引き続きご利用いただけます。',
        ],
    },
    {
        subject: '禁止事項および損害賠償',
        items: [
            '本システム、マニュアル、およびそれに付随する情報・データの複製、転売、譲渡、二次配布、改変等の著作権侵害行為を固く禁じます。',
            '事実と異なる内容や悪意のある憶測に基づき、SNS、掲示板、動画投稿サイト等で弊社の名誉や信用を毀損する行為、または業務を妨害する行為が確認された場合、直ちに当該お客様のシステムの利用権（ライセンスキー）を無効化するとともに、顧問弁護士を通じて厳正な法的措置（発信者情報開示請求および損害賠償請求）を実施いたします。',
        ],
    },
];

export const Disclaimer = () => {
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
                    <h1 className="text-3xl font-bold text-white mb-4 text-center">
                        注意事項・免責事項
                    </h1>
                    <p className="text-sm text-gray-400 text-center mb-10 pb-8 border-b border-white/10">
                        ご購入前に必ずお読みください。
                    </p>

                    <p className="text-sm text-gray-300 leading-relaxed mb-10">
                        本システム（The Option Trading System 等）をご購入・ご利用いただくにあたり、以下の事項に同意いただいたものとみなします。ご購入前に必ず内容をご確認ください。
                    </p>

                    <div className="mb-12 flex items-start gap-4 rounded-xl border border-accent/30 bg-accent/5 p-5">
                        <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-200 leading-relaxed">
                            バイナリーオプション取引には元本を全損するほどの高いリスクが伴います。本システムは利益・勝率を保証するものではなく、
                            投資判断はお客様ご自身の自己責任において、必ず余裕資金の範囲内で行ってください。
                        </p>
                    </div>

                    <div className="space-y-10">
                        {articles.map((article, index) => (
                            <div
                                key={article.subject}
                                className={index < articles.length - 1 ? 'border-b border-white/5 pb-10' : ''}
                            >
                                <h2 className="text-lg md:text-xl font-bold text-white mb-5">
                                    {`第${index + 1}条（${article.subject}）`}
                                </h2>
                                <ul className="space-y-4">
                                    {article.items.map((item, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                                            <span className="text-accent shrink-0">・</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 text-center">
                        <Link
                            to="/tokushoho"
                            className="text-sm text-gray-400 hover:text-white transition-colors underline"
                        >
                            特定商取引法に基づく表記はこちら
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
