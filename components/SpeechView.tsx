
import React, { useState, useRef } from 'react';
import { textToSpeech, decodeAudio, pcmToAudioBuffer } from '../services/geminiService';

const SpeechView: React.FC = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);

  const handleSpeak = async () => {
    if (!text.trim() || loading) return;

    setLoading(true);
    try {
      const base64Audio = await textToSpeech(text);
      if (base64Audio) {
        if (!audioContextRef.current) {
          audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        }
        const ctx = audioContextRef.current;
        const decoded = decodeAudio(base64Audio);
        const buffer = await pcmToAudioBuffer(decoded, ctx);
        
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.start();
      }
    } catch (error) {
      console.error(error);
      alert('语音生成失败');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto p-8 items-center justify-center text-center">
      <div className="w-24 h-24 bg-indigo-600/20 rounded-full flex items-center justify-center mb-8 border border-indigo-500/30">
        <svg className={`w-12 h-12 text-indigo-400 ${loading ? 'animate-pulse' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      </div>
      
      <h2 className="text-3xl font-bold mb-4">中文语音生成</h2>
      <p className="text-slate-400 mb-8 max-w-md">输入你想听的中文文本，我会用亲切自然的语调为你朗读出来。</p>

      <div className="w-full bg-slate-800/50 p-6 rounded-3xl border border-slate-700 shadow-2xl backdrop-blur-md">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="在这输入你想转换成语音的中文..."
          className="w-full bg-transparent border-none outline-none text-xl resize-none h-40 placeholder-slate-600 text-slate-200"
        />
        <div className="mt-4 pt-4 border-t border-slate-700/50 flex justify-between items-center">
          <span className="text-xs text-slate-500">{text.length} 字符</span>
          <button
            onClick={handleSpeak}
            disabled={loading || !text.trim()}
            className="bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 text-white px-8 py-3 rounded-2xl font-bold transition-all shadow-lg flex items-center space-x-2"
          >
            {loading ? (
               <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                </svg>
                <span>播放语音</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="mt-12 flex gap-4">
        {['亲切女声 (Kore)', '浑厚男声 (Fenrir)'].map((voice, idx) => (
          <div key={idx} className="px-4 py-2 rounded-full border border-slate-700 text-xs text-slate-400 bg-slate-800/30">
            {voice}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpeechView;
