import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { MOCK_CASES, CITY_COMPARISON, TIMELINE_EVENTS } from './types';
import { 
  Gavel as GavelIcon, 
  Search as SearchIcon, 
  TrendingUp as TrendingUpIcon, 
  Archive as ArchiveIcon, 
  FileText as FileTextIcon, 
  AlertTriangle as AlertTriangleIcon, 
  Landmark as LandmarkIcon, 
  MapPin as MapPinIcon, 
  User as UserIcon, 
  ExternalLink as ExternalLinkIcon, 
  ArrowRight as ArrowRightIcon, 
  PiggyBank as PiggyBankIcon, 
  MicOff as MicOffIcon, 
  ChevronRight as ChevronRightIcon,
  AlertCircle as AlertCircleIcon
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-surface text-on-surface pb-24 font-sans">
      {/* TopAppBar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 border-b border-primary/10 ${isScrolled ? 'glass-effect py-3' : 'bg-surface py-4'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <GavelIcon className="text-primary w-6 h-6" />
            <h1 className="font-black tracking-tighter text-xl text-primary uppercase">不作為の公文書庫</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 rounded-full hover:bg-surface-container transition-colors active:scale-95">
              <SearchIcon className="text-primary w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-6 pt-8 space-y-16">
        {/* Hero Section */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-3xl bg-primary text-white p-10 shadow-2xl"
          >
            <div className="absolute top-0 right-0 opacity-10 translate-x-1/4 -translate-y-1/4">
              <LandmarkIcon size={240} />
            </div>
            <h2 className="text-4xl font-black leading-tight tracking-tighter mb-8 relative z-10">
              市民の不便で積み上げた<br />
              <span className="text-tertiary-fixed-dim underline decoration-4 underline-offset-8">黒字を暴く</span>
            </h2>
            <div className="space-y-6 relative z-10">
              <div className="flex items-baseline gap-3">
                <span className="text-sm font-bold opacity-80 uppercase tracking-widest">京都市 財政余剰金</span>
                <span className="text-5xl font-black">180<span className="text-xl ml-1">億円</span></span>
              </div>
              <div className="flex items-center gap-6 bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/10">
                <AlertTriangleIcon className="text-error w-10 h-10" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80">裏にある不作為件数</p>
                  <p className="text-4xl font-black">1,248 <span className="text-sm font-normal">案件</span></p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Inaction Wealth Index */}
        <section className="space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="text-2xl font-black border-l-4 border-primary pl-4 tracking-tight">不作為蓄財指数 全国比較</h3>
            <span className="text-[10px] text-primary font-black uppercase tracking-widest bg-primary/5 px-3 py-1 rounded-full">政令指定都市比較</span>
          </div>
          <div className="bg-surface-container-low rounded-3xl p-8 space-y-8">
            <p className="text-sm text-secondary font-medium leading-relaxed">
              黒字額（青）と不作為ニュース件数（赤）の乖離を可視化。各都市で莫大な余剰金が蓄積されています。
            </p>
            <div className="space-y-8">
              {CITY_COMPARISON.map((city) => (
                <div key={city.name} className="space-y-3">
                  <div className="flex justify-between text-sm font-black">
                    <div className="flex items-center gap-2">
                      <span>{city.name}</span>
                      <span className={`text-[9px] px-2 py-0.5 rounded-full border ${
                        city.politicalTrend === 'Ishin' ? 'border-success-fixed text-success-fixed bg-success-fixed/10' :
                        city.politicalTrend === 'LDP' ? 'border-primary text-primary bg-primary/10' :
                        'border-secondary text-secondary bg-secondary/10'
                      }`}>
                        {city.politicalTrend}
                      </span>
                    </div>
                    <span className={city.isHighlight ? "text-error" : "text-primary"}>
                      {city.isHighlight ? `不作為乖離率 +340%` : `余剰金 ${city.surplus}`}
                    </span>
                  </div>
                  <div className="h-10 flex rounded-full overflow-hidden shadow-inner bg-surface-container">
                    <div 
                      className="bg-primary flex items-center px-4 text-[11px] text-white font-black transition-all duration-1000"
                      style={{ width: `${city.percentage}%` }}
                    >
                      {city.surplus.replace('約', '')}
                    </div>
                    {city.isHighlight && (
                      <div 
                        className="bg-error flex items-center justify-end px-4 text-[11px] text-white font-black"
                        style={{ width: `${100 - city.percentage}%`, clipPath: 'polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
                      >
                        {city.inactionCount}件
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Surplus Quality & Update Speed Comparison Dashboard */}
        <section className="space-y-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-black border-l-4 border-primary pl-4 tracking-tight uppercase">不作為の質と停滞速度</h3>
            <p className="text-xs text-secondary font-bold ml-5">「市民への投資」を怠った結果としての黒字を数値化</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Surplus Quality Index */}
            <div className="bg-surface-container-low rounded-3xl p-8 border border-outline/10">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUpIcon className="text-primary w-5 h-5" />
                <h4 className="text-sm font-black uppercase tracking-widest">市民還元率の欠如</h4>
              </div>
              <div className="space-y-6">
                {CITY_COMPARISON.map((city) => (
                  <div key={city.name} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase">
                      <span>{city.name}</span>
                      <span className={city.citizenInvestmentRate < 15 ? "text-error" : "text-secondary"}>
                        還元率 {city.citizenInvestmentRate}%
                      </span>
                    </div>
                    <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${city.citizenInvestmentRate}%` }}
                        className={`h-full ${city.citizenInvestmentRate < 15 ? 'bg-error' : 'bg-primary'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[10px] text-secondary leading-tight italic">
                ※ 還元率が低いほど、市民の不便を放置して黒字を積み上げていることを示します。
              </p>
            </div>

            {/* Update Stagnation Index */}
            <div className="bg-surface-container-low rounded-3xl p-8 border border-outline/10">
              <div className="flex items-center gap-3 mb-6">
                <MicOffIcon className="text-error w-5 h-5" />
                <h4 className="text-sm font-black uppercase tracking-widest">アップデート停滞指数</h4>
              </div>
              <div className="space-y-6">
                {CITY_COMPARISON.map((city) => (
                  <div key={city.name} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-black uppercase">
                      <span>{city.name}</span>
                      <span className={city.updateSpeed < 30 ? "text-error" : "text-secondary"}>
                        更新速度 {city.updateSpeed}/100
                      </span>
                    </div>
                    <div className="h-2 bg-surface-container rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${city.updateSpeed}%` }}
                        className={`h-full ${city.updateSpeed < 30 ? 'bg-error' : 'bg-secondary'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[10px] text-secondary leading-tight italic">
                ※ 京都市の圧倒的な停滞（18/100）は、他都市と比較しても異常な「拒絶」の状態です。
              </p>
            </div>
          </div>
        </section>

        {/* Update Responsibility Stagnation Rate */}
        <section className="space-y-6">
          <h3 className="text-2xl font-black border-l-4 border-primary pl-4 tracking-tight">アップデート放棄率</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-3xl border-b-4 border-error shadow-sm">
              <p className="text-sm font-bold text-secondary mb-3">支援内容更新停止</p>
              <p className="text-5xl font-black text-primary">12<span className="text-xl ml-1">年</span></p>
              <p className="text-[10px] mt-4 font-black text-error bg-error/10 py-2 px-4 rounded-full inline-block uppercase tracking-widest">深刻な停滞</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border-b-4 border-primary shadow-sm">
              <p className="text-sm font-bold text-secondary mb-3">行政システム乖離率</p>
              <p className="text-5xl font-black text-primary">82<span className="text-xl ml-1">%</span></p>
              <p className="text-[10px] mt-4 font-black text-secondary bg-secondary/10 py-2 px-4 rounded-full inline-block uppercase tracking-widest">要再設計</p>
            </div>
          </div>
        </section>

        {/* "No Budget" Visualization */}
        <section className="bg-surface-container-low rounded-3xl p-10 relative overflow-hidden border border-outline/10">
          <h3 className="text-2xl font-black mb-10 text-center tracking-tight">「予算不足」という虚偽</h3>
          <div className="flex items-center justify-between gap-6">
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center border-4 border-error shadow-xl">
                <MicOffIcon className="text-error w-10 h-10" />
              </div>
              <p className="text-[11px] font-black text-center leading-tight">
                窓口での拒絶<br />
                <span className="text-error">「予算がありません」</span>
              </p>
            </div>
            <div className="flex-1 flex flex-col items-center relative">
              <div className="w-full h-[2px] bg-outline/20 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-surface-container-low px-4 text-[10px] font-black text-error uppercase tracking-widest">矛盾</div>
              </div>
              <ArrowRightIcon className="text-primary w-8 h-8 mt-4" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center shadow-xl">
                <PiggyBankIcon className="text-white w-10 h-10" />
              </div>
              <p className="text-[11px] font-black text-center leading-tight text-primary">
                京都市 実際の余剰金<br />
                18,000,000,000円
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-sm font-black text-secondary italic border-t border-dashed border-outline/20 pt-6">
            "予算はあるのに使われていない" 事実を突きつける
          </p>
        </section>

        {/* Archive Cards */}
        <section className="space-y-8">
          <h3 className="text-2xl font-black border-l-4 border-primary pl-4 tracking-tight">最新の不作為アーカイブ</h3>
          <div className="space-y-6">
            {MOCK_CASES.map((item) => (
              <article key={item.id} className="vercel-card rounded-3xl p-8 space-y-6">
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] font-black px-4 py-1.5 rounded-lg uppercase tracking-widest ${item.category === '支援拒否' ? 'bg-error/10 text-error' : 'bg-secondary/10 text-secondary'}`}>
                    {item.category}
                  </span>
                  <span className="text-xs font-bold text-secondary">{item.date}</span>
                </div>
                <h4 className="font-black text-xl leading-tight text-primary tracking-tight">
                  {item.title}
                </h4>
                <div className="grid grid-cols-2 gap-4 text-xs font-bold text-secondary">
                  <div className="flex items-center gap-2"><UserIcon size={14} className="opacity-60" /> {item.who}</div>
                  <div className="flex items-center gap-2"><MapPinIcon size={14} className="opacity-60" /> {item.location}</div>
                </div>
                <p className="text-sm leading-relaxed text-secondary font-medium">
                  {item.description}
                </p>
                <div className="pt-2">
                  <a 
                    className="inline-flex items-center text-xs font-black text-primary hover:text-white hover:bg-primary bg-primary/5 px-6 py-3 rounded-xl border border-primary/10 transition-all active:scale-95 gap-2 uppercase tracking-widest" 
                    href="#"
                  >
                    ソースを確認する <ExternalLinkIcon size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Accountability Timeline */}
        <section className="pb-20">
          <h3 className="text-2xl font-black border-l-4 border-primary pl-4 mb-10 tracking-tight">不作為の経緯 (Timeline)</h3>
          <div className="relative ml-6 pl-12 border-l-2 border-primary/10 space-y-12">
            {TIMELINE_EVENTS.map((event, i) => (
              <div key={i} className="relative">
                <div className={`absolute -left-[57px] top-1 w-6 h-6 rounded-full border-4 border-surface shadow-sm ${
                  event.type === 'error' ? 'bg-error' : event.type === 'primary' ? 'bg-primary' : 'bg-secondary'
                }`}></div>
                <p className="text-[10px] font-black text-secondary mb-2 uppercase tracking-widest">{event.period}</p>
                <p className="text-lg font-black text-primary tracking-tight">{event.title}</p>
                <p className="text-sm font-medium text-secondary mt-2 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* BottomNavBar */}
      <nav className="glass-effect fixed bottom-0 w-full z-50 flex justify-around items-stretch px-4 py-3 pb-safe shadow-2xl border-t border-primary/5">
        {[
          { icon: FileTextIcon, label: '報告', active: false },
          { icon: AlertCircleIcon, label: '評価', active: false },
          { icon: ArchiveIcon, label: '公文書庫', active: true },
          { icon: TrendingUpIcon, label: '傾向', active: false },
        ].map((item) => (
          <a 
            key={item.label} 
            className={`flex-1 flex flex-col items-center justify-center gap-1 transition-all rounded-2xl py-2 ${
              item.active ? 'text-primary bg-primary/5 scale-105' : 'text-secondary opacity-40 hover:opacity-100'
            }`} 
            href="#"
          >
            <item.icon size={24} />
            <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
