

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">Theoption Trading System</h4>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            最先端のAI技術と多次元テクニカル分析を融合させた、<br />
                            次世代のトレーディング支援システム。
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">重要事項・免責事項</h4>
                        <ul className="space-y-2 text-xs text-gray-500">
                            <li>・本システムは、将来の利益を保証するものではありません。</li>
                            <li>・投資判断は、最終的にお客様ご自身の責任において行ってください。</li>
                            <li>・本システムを使用した結果生じた損害について、開発者は一切の責任を負いません。</li>
                            <li>・デジタルコンテンツという商品の性質上、ご購入後の返品・返金には一切応じられません。</li>
                            <li>・バイナリーオプション取引には高いリスクが伴います。余裕資金での運用を推奨します。</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-xs text-gray-600">
                        &copy; {new Date().getFullYear()} Theoption Trading System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
