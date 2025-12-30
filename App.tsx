
import React, { useState, useMemo } from 'react';
import { Stage, TrialConfig, Product, SurveyData, ParticipantInfo, TrialResult } from './types';
import { TRIALS } from './data';

/**
 * 优化后的 5 点量表组件 (定义在 App 外部防止重新挂载导致焦点丢失)
 */
interface LikertScaleProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
}

const LikertScale: React.FC<LikertScaleProps> = ({ label, value, onChange }) => {
  const options = [
    { val: 1, text: '极低' },
    { val: 2, text: '较低' },
    { val: 3, text: '一般' },
    { val: 4, text: '较高' },
    { val: 5, text: '极高' },
  ];

  return (
    <div className="space-y-3">
      <label className="block text-sm font-bold text-slate-700">{label}</label>
      <div className="flex justify-between items-center bg-slate-50 p-2 rounded-2xl border border-slate-100">
        {options.map((opt) => (
          <button
            key={opt.val}
            type="button"
            onClick={() => onChange(opt.val)}
            className={`flex-1 py-4 mx-1 rounded-xl transition-all font-bold text-sm flex flex-col items-center gap-1 ${
              value === opt.val
                ? 'bg-blue-600 text-white shadow-lg scale-105 z-10'
                : 'bg-white text-slate-400 border border-slate-100 hover:border-blue-200'
            }`}
          >
            <span className="text-lg">{opt.val}</span>
            <span className="text-[9px] font-normal opacity-80">{opt.text}</span>
          </button>
        ))}
      </div>
      <div className="flex justify-end pr-2">
        <span className={`text-[10px] font-bold ${value > 0 ? 'text-green-500' : 'text-slate-300'}`}>
          {value > 0 ? `已选择：${options.find(o => o.val === value)?.text}` : '请选择评分'}
        </span>
      </div>
    </div>
  );
};

/**
 * 顶部任务备忘录组件 (Reminder)
 */
const TaskMemo: React.FC<{ reminder: string }> = ({ reminder }) => (
  <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl shadow-sm mb-4">
    <div className="flex items-center gap-2 mb-1.5">
      <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
      <p className="text-[10px] text-amber-600 font-bold uppercase tracking-widest">🎯 决策目标备忘</p>
    </div>
    <p className="text-sm font-bold text-slate-900 leading-snug pl-4">
      “{reminder}”
    </p>
  </div>
);

const App: React.FC = () => {
  // 随机化 32 个试次
  const shuffledTrials = useMemo(() => [...TRIALS].sort(() => Math.random() - 0.5), []);
  
  const [trialIndex, setTrialIndex] = useState(0);
  const [stage, setStage] = useState<Stage>(Stage.PARTICIPANT_INFO);
  
  const currentTrial: TrialConfig = shuffledTrials[trialIndex];
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [finalChoice, setFinalChoice] = useState<Product | null>(null);
  const [viewedProductIds, setViewedProductIds] = useState<string[]>([]);

  // 1. 被试基本信息
  const [participant, setParticipant] = useState<ParticipantInfo>({
    id: '', runNumber: '', gender: '', age: ''
  });

  // 实验行为指标
  const [startTime, setStartTime] = useState<number>(0);
  const [backtrackCount, setBacktrackCount] = useState<number>(0);
  const [filterClicks, setFilterClicks] = useState<number>(0);
  const [allResults, setAllResults] = useState<TrialResult[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  // 2. 问卷数据
  const [survey, setSurvey] = useState<SurveyData>({
    importance: 0, skillLevel: 0, timeSpent: '', satisfaction: 0, efficiency: 0, trust: 0
  });

  const startExperiment = () => {
    if (participant.id && participant.runNumber && participant.gender && participant.age) {
      setStage(Stage.INTRO);
    }
  };

  const startTrial = () => {
    setStartTime(Date.now());
    setViewedProductIds([]);
    setBacktrackCount(0);
    setFilterClicks(0);
    setStage(Stage.LEVEL1);
  };

  const selectProduct = (p: Product) => {
    setSelectedProduct(p);
    if (!viewedProductIds.includes(p.id)) {
      setViewedProductIds(prev => [...prev, p.id]);
    }
    setActiveFilters([]); 
    setStage(Stage.LEVEL2);
  };

  const backToLevel1 = () => {
    setBacktrackCount(prev => prev + 1);
    setStage(Stage.LEVEL1);
  };

  const confirmChoice = (p: Product) => {
    if (viewedProductIds.length === currentTrial.products.length) {
      setFinalChoice(p);
      setStage(Stage.FINISH);
    }
  };

  const nextTrial = () => {
    const now = Date.now();
    const result: TrialResult = {
      Participant_ID: participant.id,
      Run_Number: participant.runNumber,
      Gender: participant.gender,
      Age: participant.age,
      Trial_ID: currentTrial.id,
      Trial_Type: currentTrial.type,
      Condition_N: currentTrial.objectCount,
      Condition_D: currentTrial.dimensionCount,
      Choice_Name: finalChoice?.name || '',
      Duration_Seconds: (now - startTime) / 1000,
      Backtrack_Count: backtrackCount,
      Filter_Clicks: filterClicks,
      Importance: survey.importance,
      Skill_Level: survey.skillLevel,
      Satisfaction: survey.satisfaction,
      Efficiency: survey.efficiency,
      Trust: survey.trust,
      Daily_Time_Spent: survey.timeSpent
    };
    
    const newResults = [...allResults, result];
    setAllResults(newResults);

    if (trialIndex < shuffledTrials.length - 1) {
      setTrialIndex(trialIndex + 1);
      setStage(Stage.INTRO);
      setFinalChoice(null);
      setSelectedProduct(null);
      setViewedProductIds([]);
      setActiveFilters([]);
      setSurvey({ importance: 0, skillLevel: 0, timeSpent: '', satisfaction: 0, efficiency: 0, trust: 0 });
    } else {
      setStage(Stage.EXPERIMENT_COMPLETE);
    }
  };

  const exportToCSV = () => {
    const headers = [
      'Participant_ID', 'Run_Number', 'Gender', 'Age', 'Trial_ID', 'Trial_Type', 
      'Condition_N', 'Condition_D', 'Choice_Name', 'Duration_Seconds', 
      'Backtrack_Count', 'Filter_Clicks', 'Importance', 'Skill_Level', 
      'Satisfaction', 'Efficiency', 'Trust', 'Daily_Time_Spent'
    ];
    const rows = allResults.map(r => [
      r.Participant_ID, r.Run_Number, r.Gender, r.Age, r.Trial_ID, r.Trial_Type,
      r.Condition_N, r.Condition_D, `"${r.Choice_Name}"`, r.Duration_Seconds.toFixed(2),
      r.Backtrack_Count, r.Filter_Clicks, r.Importance, r.Skill_Level,
      r.Satisfaction, r.Efficiency, r.Trust, r.Daily_Time_Spent
    ]);
    let csvContent = "\uFEFF" + headers.join(",") + "\n" + rows.map(e => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `DecisionData_${participant.id}.csv`;
    link.click();
  };

  // --- UI Sections ---

  if (stage === Stage.PARTICIPANT_INFO) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 text-slate-800">
        <div className="max-w-md w-full bg-white rounded-[2rem] shadow-2xl p-10 border border-slate-100 space-y-8 animate-in">
          <div className="text-center">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">实验信息登记</h1>
            <p className="text-slate-400 text-sm mt-2 font-medium">请填写基础档案以开启实验序列</p>
          </div>
          <div className="space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 ml-2 uppercase tracking-widest">被试 ID</label>
              <input type="text" placeholder="例如 P01" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 font-bold" value={participant.id} onChange={e => setParticipant({...participant, id: e.target.value})} />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-slate-400 ml-2 uppercase tracking-widest">Run 编号</label>
              <input type="number" placeholder="例如 1" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 font-bold" value={participant.runNumber} onChange={e => setParticipant({...participant, runNumber: e.target.value})} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 ml-2 uppercase tracking-widest">性别</label>
                <select className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none font-bold appearance-none" value={participant.gender} onChange={e => setParticipant({...participant, gender: e.target.value as any})}>
                  <option value="">请选择</option>
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-slate-400 ml-2 uppercase tracking-widest">年龄</label>
                <input type="number" placeholder="年龄" className="w-full bg-slate-50 border border-slate-100 p-4 rounded-2xl outline-none font-bold" value={participant.age} onChange={e => setParticipant({...participant, age: e.target.value})} />
              </div>
            </div>
          </div>
          <button onClick={startExperiment} disabled={!participant.id || !participant.runNumber || !participant.gender || !participant.age} className="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold shadow-xl disabled:bg-slate-100 disabled:text-slate-300 transition-all active:scale-95">确认并开始</button>
        </div>
      </div>
    );
  }

  if (stage === Stage.INTRO) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-lg w-full bg-white rounded-[2.5rem] shadow-2xl p-10 space-y-8 animate-in">
          <div className="flex justify-between items-center border-b pb-4">
            <h2 className="font-black text-slate-900 text-xl tracking-tight">试次 {trialIndex + 1} / {shuffledTrials.length}</h2>
            <span className="text-[10px] bg-blue-600 text-white px-3 py-1 rounded-full font-bold">GUI 环境</span>
          </div>
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-3xl p-6 border border-blue-100">
              <p className="text-blue-900 leading-relaxed font-medium italic text-lg">“{currentTrial.instruction}”</p>
            </div>
            <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100 space-y-2">
              <p className="text-orange-700 font-black flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0116 0z" /></svg>
                重要提示
              </p>
              <p className="text-sm text-orange-900 font-bold leading-relaxed">
                请尽可能代入真实生活情境，根据给定的条件，做出最符合你日常行为模式的选择。
              </p>
            </div>
          </div>
          <div className="space-y-4 pt-2">
            <p className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-2 italic">
              浏览完全部选项详情后，决策按钮将会解锁
            </p>
            <button onClick={startTrial} className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all">明白，进入决策</button>
          </div>
        </div>
      </div>
    );
  }

  if (stage === Stage.LEVEL1) {
    return (
      <div className="min-h-screen bg-white p-4 pb-20 max-w-2xl mx-auto flex flex-col animate-in">
        <div className="sticky top-0 bg-white/95 z-30 pt-2 pb-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-black text-2xl text-slate-900 tracking-tight">请选择</h2>
            <div className="flex items-center gap-2">
              <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">已阅</span>
              <span className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full font-black">{viewedProductIds.length} / {currentTrial.products.length}</span>
            </div>
          </div>
          
          <TaskMemo reminder={currentTrial.reminder} />
        </div>

        <div className="grid grid-cols-1 gap-4 flex-1">
          {currentTrial.products.map(p => {
            const viewed = viewedProductIds.includes(p.id);
            return (
              <div key={p.id} onClick={() => selectProduct(p)} className={`flex gap-5 border-2 rounded-[2rem] p-5 transition-all cursor-pointer relative ${viewed ? 'bg-slate-50 border-slate-100 opacity-60' : 'bg-white border-slate-50 shadow-md hover:border-blue-100 active:scale-[0.98]'}`}>
                {viewed && <div className="absolute -top-1 -right-1 bg-green-500 text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-lg z-10">已阅</div>}
                <img src={p.imageUrl} className="w-24 h-24 rounded-3xl object-cover bg-slate-100 shadow-inner" alt={p.name} />
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1">{p.name}</h3>
                    <p className="text-[11px] text-slate-400 line-clamp-1">{p.summary}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-red-500 font-black text-xl">¥{p.price}</span>
                    <span className="text-blue-600 text-[11px] font-bold border border-blue-100 px-3 py-1 rounded-full bg-blue-50/50">查看详情 →</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (stage === Stage.LEVEL2 && selectedProduct) {
    const isAllViewed = viewedProductIds.length === currentTrial.products.length;
    return (
      <div className="min-h-screen bg-white flex flex-col animate-in">
        <header className="p-4 flex items-center gap-4 sticky top-0 bg-white z-40 border-b border-slate-50">
          <button onClick={backToLevel1} className="text-slate-400 p-2 hover:bg-slate-50 rounded-full transition-colors active:scale-90">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="font-black text-slate-900 truncate text-lg tracking-tight">{selectedProduct.name}</h2>
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">参数精选详情</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-slate-300 font-bold uppercase tracking-tighter">进度</p>
            <p className="text-sm font-black text-blue-600">{viewedProductIds.length}/{currentTrial.products.length}</p>
          </div>
        </header>

        <div className="px-4 py-2 border-b border-slate-50 bg-white">
          <TaskMemo reminder={currentTrial.reminder} />
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-8 pb-48">
          <div className="space-y-4">
            <h3 className="font-black text-sm text-slate-900 flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              规格参数
            </h3>
            <div className="bg-slate-50 rounded-[2rem] p-6 space-y-4 border border-slate-100">
              {selectedProduct.attributes.map((attr, i) => (
                <div key={i} className="flex justify-between items-center border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                  <span className="text-slate-400 text-xs font-bold uppercase tracking-wide">{attr.label}</span>
                  <span className="font-black text-slate-800 text-sm">{attr.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
             <h3 className="font-black text-sm text-slate-900 flex items-center gap-2">
              <div className="w-1 h-4 bg-blue-600 rounded-full"></div>
              核心亮点
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed bg-blue-50/30 p-6 rounded-[2rem] border border-blue-100/50 font-medium">
              {selectedProduct.summary}
            </p>
          </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-2xl border-t border-slate-100 p-5 pb-10 z-50">
          <div className="max-w-md mx-auto space-y-3">
            {!isAllViewed && (
              <div className="bg-orange-100 text-orange-700 text-[11px] font-bold text-center py-2 rounded-xl animate-pulse">
                ※ 需看完全部 {currentTrial.products.length} 个备选对象方可进行最终决策
              </div>
            )}
            <button 
              onClick={() => confirmChoice(selectedProduct)} 
              disabled={!isAllViewed}
              className={`w-full py-5 rounded-[1.5rem] font-black text-xl shadow-2xl transition-all ${isAllViewed ? 'bg-red-500 text-white shadow-red-200 active:scale-95' : 'bg-slate-100 text-slate-300 cursor-not-allowed shadow-none'}`}
            >
              {isAllViewed ? `选定该对象 (¥${selectedProduct.price})` : `请继续浏览其余项详情`}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (stage === Stage.FINISH) {
    const isComplete = survey.importance > 0 && survey.skillLevel > 0 && survey.satisfaction > 0 && survey.efficiency > 0 && survey.trust > 0 && survey.timeSpent.trim().length > 0;
    return (
      <div className="min-h-screen bg-slate-50 p-6 overflow-y-auto">
        <div className="max-w-md mx-auto space-y-10 pb-20 pt-10 animate-in">
          <div className="text-center bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">决策反馈</h2>
            <div className="mt-4 flex flex-col items-center">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">您的最终选择</p>
              <span className="text-blue-600 font-black text-lg border-b-4 border-blue-100 pb-1">{finalChoice?.name}</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 space-y-10">
            <LikertScale label="1. 您认为刚才这项决策任务对您来说有多重要？" value={survey.importance} onChange={v => setSurvey({...survey, importance: v})} />
            <LikertScale label="2. 您认为自己进行此类决策的熟练度如何？" value={survey.skillLevel} onChange={v => setSurvey({...survey, skillLevel: v})} />
            <LikertScale label="3. 您对刚才做出的最终选择感到满意吗？" value={survey.satisfaction} onChange={v => setSurvey({...survey, satisfaction: v})} />
            <LikertScale label="4. 您觉得刚才的对比/决策过程是否高效？" value={survey.efficiency} onChange={v => setSurvey({...survey, efficiency: v})} />
            <LikertScale label="5. 您对本次实验提供的信息信赖程度如何？" value={survey.trust} onChange={v => setSurvey({...survey, trust: v})} />

            <div className="space-y-4 pt-4 border-t border-slate-50">
              <label className="block text-sm font-bold text-slate-700">6. 在日常生活中，做这类决定您通常耗时多少？</label>
              <div className="relative group">
                <input 
                  type="number" 
                  className="w-full bg-slate-50 border-2 border-slate-100 py-6 rounded-2xl text-center text-4xl font-black outline-none focus:border-blue-500 focus:bg-white transition-all text-blue-600 placeholder:text-slate-200"
                  placeholder="0"
                  value={survey.timeSpent}
                  onChange={e => setSurvey({...survey, timeSpent: e.target.value})}
                />
                <span className="absolute right-8 top-1/2 -translate-y-1/2 text-slate-300 font-bold">分钟</span>
              </div>
            </div>

            <button onClick={nextTrial} disabled={!isComplete} className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xl shadow-2xl disabled:bg-slate-100 disabled:text-slate-300 transition-all active:scale-95 shadow-slate-200">
              {trialIndex < shuffledTrials.length - 1 ? "开启下一试次" : "完成全部任务并提交"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (stage === Stage.EXPERIMENT_COMPLETE) {
    return (
      <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-8 text-center animate-in">
        <div className="text-8xl mb-8">💎</div>
        <h1 className="text-4xl font-black mb-4 tracking-tighter uppercase">Experiment Complete</h1>
        <p className="text-slate-400 max-w-xs mx-auto mb-12 font-medium">感谢您的配合。您的决策数据已被系统安全加密存储。</p>
        
        <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 mb-12 w-full max-w-sm text-left space-y-4 shadow-2xl shadow-black">
          <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-blue-400 border-b border-white/5 pb-2"><span>数据档案</span><span>{participant.id}-R{participant.runNumber}</span></div>
          <div className="flex justify-between text-sm"><span>被试性别:</span><span className="font-black text-slate-200">{participant.gender}</span></div>
          <div className="flex justify-between text-sm"><span>被试年龄:</span><span className="font-black text-slate-200">{participant.age} 岁</span></div>
        </div>

        <button onClick={exportToCSV} className="bg-blue-500 hover:bg-blue-400 text-white px-16 py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-900/50 transition-all active:scale-95 flex items-center gap-4">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
          下载完整实验数据集 (.csv)
        </button>
      </div>
    );
  }

  return null;
};

export default App;
