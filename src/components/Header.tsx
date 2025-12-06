
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';

export const Header = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed w-full top-0 z-50 bg-primary/90 backdrop-blur-md border-b border-white/10"
        >
            <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Activity className="w-6 h-6 text-accent" />
                    <span className="font-bold text-xl text-text-inv tracking-tight">Theoption Trading System</span>
                </div>

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">機能</a>
                    <a href="#logic" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">ロジック</a>
                    <a href="#trading-video" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">取引映像</a>
                </nav>
            </div>
        </motion.header>
    );
};
