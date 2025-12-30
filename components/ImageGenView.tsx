
import React, { useState } from 'react';
import { generateImage } from '../services/geminiService';
import { GeneratedImage } from '../types';

const ImageGenView: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState<GeneratedImage[]>([]);

  const handleGenerate = async () => {
    if (!prompt.trim() || loading) return;

    setLoading(true);
    try {
      const url = await generateImage(prompt);
      if (url) {
        setImages(prev => [{
          id: Date.now().toString(),
          url,
          prompt,
          timestamp: Date.now()
        }, ...prev]);
        setPrompt('');
      }
    } catch (error) {
      console.error(error);
      alert('生成图像时出错，请重试。');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-5xl mx-auto p-6 space-y-8">
      <div className="bg-slate-800/40 p-8 rounded-3xl border border-slate-700/50 shadow-xl backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          创意绘图引擎
        </h2>
        <p className="text-slate-400 mb-6">输入描述性文字，让 Gemini 2.5 为你实时构绘精美画作。</p>
        
        <div className="flex flex-col md:flex-row gap-4">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="例如：一个穿着中式旗袍的赛博朋克风格女孩在繁华的霓虹夜市中..."
            className="flex-1 bg-slate-900 border border-slate-700 focus:border-purple-500 rounded-2xl p-4 outline-none transition-all resize-none h-24 placeholder-slate-600"
          />
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt.trim()}
            className="md:w-32 bg-gradient-to-br from-purple-600 to-indigo-700 hover:from-purple-500 hover:to-indigo-600 disabled:from-slate-700 disabled:to-slate-800 text-white rounded-2xl font-bold transition-all shadow-lg flex items-center justify-center space-x-2"
          >
            {loading ? (
              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.673.337a4 4 0 01-4.827-.768l-.151-.151a3.5 3.5 0 010-4.95l1.59-1.59a3 3 0 00.879-2.122V4.5a.5.5 0 01.5-.5h.5a.5.5 0 01.5.5v.129a3 3 0 00.879 2.122l1.59 1.59a3.5 3.5 0 010 4.95l-.151.151a4 4 0 01-4.827.768l-.673-.337a6 6 0 00-3.86-.517l-2.387.477a2 2 0 00-1.022.547l-1.16 1.16a.75.75 0 01-1.178-.058L2.8 17.15c-.422-.456-.131-1.185.485-1.248l.38-.039a4.5 4.5 0 014.288 2.269l.186.313a1.5 1.5 0 002.516 0l.186-.313a4.5 4.5 0 014.288-2.269l.38.039c.616.063.907.792.485 1.248l-1.16 1.16z" />
                </svg>
                <span>创作</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map(img => (
          <div key={img.id} className="group relative rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-lg transition-all hover:scale-[1.02] hover:shadow-purple-500/10">
            <img src={img.url} alt={img.prompt} className="w-full aspect-square object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end">
              <p className="text-white text-sm line-clamp-2">{img.prompt}</p>
              <button 
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = img.url;
                  link.download = `gemini-art-${img.id}.png`;
                  link.click();
                }}
                className="mt-2 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs font-medium w-fit"
              >
                下载图像
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGenView;
