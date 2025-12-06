import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TradingVideo } from './components/TradingVideo';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Comparison } from './components/Comparison';
import { Logic } from './components/Logic';
import { Steps } from './components/Steps';
import { Philosophy } from './components/Philosophy';
import { SystemDemo } from './components/SystemDemo';
import { GlobalBackground } from './components/GlobalBackground';

function App() {
  return (
    <div className="min-h-screen bg-secondary font-sans text-text-main">
      <GlobalBackground />
      <Header />
      <main>
        <Hero />
        <TradingVideo />
        <SystemDemo />
        <Features />
        <Comparison />
        <Logic />
        <Steps />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
