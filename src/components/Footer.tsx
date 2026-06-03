import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-primary border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">TheOption Trend Analyzer</h4>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                            最先端のAI技術と多次元テクニカル分析を融合させた、<br />
                            次世代のトレーディング支援システム。
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-bold text-white mb-4">重要事項・免責事項</h4>
                        <p className="text-xs text-gray-500 leading-relaxed mb-6 max-w-md">
                            バイナリーオプション取引には高いリスクが伴います。本システムは将来の利益を保証するものではなく、
                            投資判断は最終的にお客様ご自身の責任において行ってください。詳細は免責事項をご確認ください。
                        </p>
                        <div className="flex flex-wrap gap-x-6 gap-y-2">
                            <Link to="/disclaimer" className="text-xs text-gray-400 hover:text-white transition-colors underline">
                                重要事項・免責事項
                            </Link>
                            <Link to="/tokushoho" className="text-xs text-gray-400 hover:text-white transition-colors underline">
                                特定商取引法に基づく表記
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center">
                    <p className="text-xs text-gray-600">
                        &copy; {new Date().getFullYear()} TheOption Trend Analyzer. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};
