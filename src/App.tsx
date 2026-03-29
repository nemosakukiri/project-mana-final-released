import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Archive as ArchiveIcon, 
  Database as DatabaseIcon, 
  ShieldAlert as ShieldIcon, 
  ClipboardCheck as SurveyIcon,
  ArrowRight as ArrowRightIcon,
  Globe as GlobeIcon,
  Zap as ZapIcon,
  TrendingDown,
  AlertTriangle,
  BarChart3
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const archiveAppUrl = "https://ais-dev-p4cvspjro6pox56halsmvx-631292768855.asia-east1.run.app";

  // 政令指定都市比較データ（京都市の異常性を可視化するための仮データ）
  const comparisonData = [
    { city: "京都市", surplus: 180, inactionIndex: 88, updateRate: 12, status: "停滞/蓄財" },
    { city: "大阪市", surplus: 120, inactionIndex: 42, updateRate: 65, status: "更新継続" },
    { city: "横浜市", surplus: 150, inactionIndex: 35, updateRate: 78, status: "更新継続" },
    { city: "名古屋市", surplus: 95, inactionIndex: 28, updateRate: 55, status: "標準" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-primary/30">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <ShieldIcon className="text-black w-5 h-5" />
            </div>
            <h1 className="font-black tracking-tighter text-xl uppercase italic">Project MANA</h1>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/50">
            <a href="#vision" className="hover:text-white transition-colors">Vision</a>
            <a href="#analytics" className="hover:text-white transition-colors">Analytics</a>
            <a href="#archive" className="hover:text-white transition-colors">Archive</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-black z-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-20 animate-pulse" />
          </div>

          <div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] uppercase italic mb-6">
                MANA<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">PORTAL</span>
              </h2>
              <p className="text-lg md:text-xl text-white/60 font-medium max-w-2xl mx-auto leading-relaxed">
                行政の不作為を記録し、法治主義の空白を埋める。<br />
                市民の不便で積み上げた「黒字」の正体を暴き、当事者の声を証拠へと変える聖域。
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 pt-8"
            >
              <a 
                href={archiveAppUrl}
                className="bg-white text-black px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                公文書庫へ入る <ArrowRightIcon size={18} />
              </a>
              <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest flex items-center gap-3 hover:bg-white/10 transition-all">
                不作為を報告 <SurveyIcon size={18} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Analytics Section - 指数と全国比較 */}
        <section id="analytics" className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <h3 className="text-4xl font-black italic tracking-tighter uppercase leading-none">
                不作為の経済学<br />
                <span className="text-white/40 text-2xl">Anti-Inaction Metrics</span>
              </h3>
              
              <div className="space-y-6">
                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                  <div className="flex items-center gap-3 text-red-500">
                    <TrendingDown size={24} />
                    <span className="font-black tracking-widest uppercase text-xs">不作為蓄財指数 (IWI)</span>
                  </div>
                  <p className="text-sm text-white/60 font-medium">支援を削り「予算がない」と強弁しながら、裏で積み上げられた不当な黒字を数値化。市民の不便が財源となっている度合いを示します。</p>
                </div>

                <div className="p-6 rounded-3xl bg-white/5 border border-white/10 space-y-4">
                  <div className="flex items-center gap-3 text-yellow-500">
                    <AlertTriangle size={24} />
                    <span className="font-black tracking-widest uppercase text-xs">アップデート放棄率 (RSR)</span>
                  </div>
                  <p className="text-sm text-white/60 font-medium">社会状況の変化に対し、行政システムや支援内容を更新せず「前例踏襲」に終始している割合。責任放棄の指標です。</p>
                </div>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/10 rounded-[40px] p-8 space-y-8 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BarChart3 size={20} className="text-white/40" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">政令指定都市 比較分析</span>
                </div>
                <span className="text-[10px] bg-red-500/20 text-red-500 px-3 py-1 rounded-full font-black">WARNING: KYOTO CITY</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-[10px] font-black uppercase tracking-widest text-white/40">
                      <th className="pb-4">City</th>
                      <th className="pb-4 text-right">黒字(億円)</th>
                      <th className="pb-4 text-right">不作為指数</th>
                      <th className="pb-4 text-right">更新率</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    {comparisonData.map((data, index) => (
                      <tr key={index} className={`border-b border-white/5 ${data.city === '京都市' ? 'bg-white/5 text-white' : 'text-white/40'}`}>
                        <td className="py-4 font-black">{data.city}</td>
                        <td className="py-4 text-right tabular-nums">{data.surplus}</td>
                        <td className="py-4 text-right tabular-nums font-black text-red-500">{data.inactionIndex}%</td>
                        <td className="py-4 text-right tabular-nums">{data.updateRate}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services" className="max-w-7xl mx-auto px-6 py-24 space-y-24 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <DatabaseIcon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Inaction-DB</h3>
              <p className="text-sm text-white/50 leading-relaxed">行政の不作為、水際作戦の記録。証拠としての価値を最大化する。</p>
            </div>

            <div className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <ZapIcon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">Misconduct-DB</h3>
              <p className="text-sm text-white/50 leading-relaxed">全国の行政不祥事をAIがリアルタイムに集約。組織的な腐敗を可視化する。</p>
            </div>

            <div className="group p-8 rounded-[32px] bg-white/5 border border-white/10 hover:border-white/20 transition-all space-y-6">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <SurveyIcon className="text-white w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black tracking-tight">不作為体験アンケート</h3>
              <p className="text-sm text-white/50 leading-relaxed">あなたの体験をデータ化。沈黙を強いられた人々の記録。</p>
            </div>
          </div>

          {/* Featured Integration: Archive of Inaction */}
          <div id="archive" className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-white/20 rounded-[40px] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-black rounded-[40px] border border-white/10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5 -translate-y-1/4 translate-x-1/4">
                <ArchiveIcon size={400} />
              </div>
              
              <div className="flex-1 space-y-8 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-black uppercase tracking-widest text-white/80">
                  <GlobeIcon size={12} /> Live Integration
                </div>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none italic uppercase">
                  不作為の公文書庫<br />
                  <span className="text-white/40">Archive of Inaction</span>
                </h3>
                <p className="text-lg text-white/60 leading-relaxed max-w-xl">
                  市民の不便で積み上げられた「黒字」の裏にある不作為を暴く。全国の政令指定都市との比較、政治傾向の分析、そして当事者のアーカイブ。
                </p>
                <div className="pt-4">
                  <a 
                    href={archiveAppUrl}
                    className="inline-flex items-center gap-4 bg-white text-black px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all"
                  >
                    公文書庫を開く <ArrowRightIcon size={20} />
                  </a>
                </div>
              </div>

              <div className="w-full md:w-1/3 aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center relative z-10">
                <ArchiveIcon size={120} className="text-white/20" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3 opacity-50">
            <ShieldIcon className="text-white w-5 h-5" />
            <p className="text-[10px] font-black uppercase tracking-widest">© 2026 Project MANA. All Rights Reserved.</p>
          </div>
          <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-white/30">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
