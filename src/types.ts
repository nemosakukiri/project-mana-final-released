export interface Case {
  id: string;
  category: string;
  tags: string[];
  title: string;
  description: string;
  date: string;
  location: string;
  who?: string;
  what?: string;
  why?: string;
  how?: string;
  source?: {
    name: string;
    url: string;
  };
  imageUrl?: string;
  caseNumber?: string;
}

export interface CityData {
  name: string;
  englishName: string;
  surplus: string;
  percentage: number;
  inactionCount?: number;
  isHighlight?: boolean;
  surplusQuality: number; // 0-100, higher means more "inaction surplus"
  updateSpeed: number; // 0-100, higher means faster updates (lower is stagnation)
  politicalTrend: 'Ishin' | 'LDP' | 'Independent' | 'Other';
  citizenInvestmentRate: number; // % of surplus returned to citizens
}

export const CITY_COMPARISON: CityData[] = [
  { 
    name: '大阪市', 
    englishName: 'Osaka', 
    surplus: '約500億円', 
    percentage: 100, 
    surplusQuality: 85, 
    updateSpeed: 70, 
    politicalTrend: 'Ishin',
    citizenInvestmentRate: 12
  },
  { 
    name: '名古屋市', 
    englishName: 'Nagoya', 
    surplus: '400億円', 
    percentage: 80, 
    surplusQuality: 45, 
    updateSpeed: 55, 
    politicalTrend: 'Independent',
    citizenInvestmentRate: 38
  },
  { 
    name: '横浜市', 
    englishName: 'Yokohama', 
    surplus: '350億円', 
    percentage: 70, 
    surplusQuality: 55, 
    updateSpeed: 65, 
    politicalTrend: 'LDP',
    citizenInvestmentRate: 25
  },
  { 
    name: '神戸市', 
    englishName: 'Kobe', 
    surplus: '280億円', 
    percentage: 56, 
    surplusQuality: 60, 
    updateSpeed: 60, 
    politicalTrend: 'Independent',
    citizenInvestmentRate: 22
  },
  { 
    name: '福岡市', 
    englishName: 'Fukuoka', 
    surplus: '220億円', 
    percentage: 44, 
    surplusQuality: 30, 
    updateSpeed: 85, 
    politicalTrend: 'Independent',
    citizenInvestmentRate: 45
  },
  { 
    name: '京都市', 
    englishName: 'Kyoto', 
    surplus: '180億円', 
    percentage: 36, 
    inactionCount: 1248, 
    isHighlight: true, 
    surplusQuality: 92, 
    updateSpeed: 18, 
    politicalTrend: 'LDP',
    citizenInvestmentRate: 8
  },
];

export const MOCK_CASES: Case[] = [
  {
    id: '1',
    category: '支援拒否',
    tags: ['支援拒否', '不作為'],
    title: '母子家庭への緊急支援金の不当な支給遅延と窓口対応の不作為',
    description: '「規定がない」として申請書を3ヶ月間放置。内部規定では即時対応が可能だったことが判明。',
    date: '2023.10.12',
    location: '京都市中京区',
    who: '福祉部 窓口担当者',
    source: {
      name: 'ソースを確認する',
      url: '#'
    }
  },
  {
    id: '2',
    category: '公共管理',
    tags: ['公共管理', '放置'],
    title: '老朽化した通学路のガードレール修繕依頼に対する2年間の放置',
    description: '住民からの度重なる危険性の指摘にもかかわらず「点検計画待ち」を理由に修繕を不作為。',
    date: '2023.10.05',
    location: '京都市右京区',
    who: '土木事務所',
    source: {
      name: 'ソースを確認する',
      url: '#'
    }
  }
];

export const TIMELINE_EVENTS = [
  {
    period: '2023.01 - 2023.12',
    title: '京都市 余剰金180億円の確定',
    description: '物価高騰対策予算の約40%が未執行のまま黒字へ。',
    type: 'error'
  },
  {
    period: '2023.06',
    title: '市民相談件数の過去最高記録',
    description: '「予算不足」を理由とした支援拒絶が全国の政令指定都市で頻発。',
    type: 'primary'
  },
  {
    period: '2024.01',
    title: '主要都市の巨大余剰金（最大500億円）の可視化',
    description: '大阪・名古屋・横浜などでも蓄積された「不作為の黒字」を特定。',
    type: 'outline'
  }
];
