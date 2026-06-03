import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { Tokushoho } from './pages/Tokushoho';
import { Disclaimer } from './pages/Disclaimer';

const LandingPage = () => (
  <>
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
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-secondary font-sans text-text-main">
        <GlobalBackground />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/tokushoho" element={<Tokushoho />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
