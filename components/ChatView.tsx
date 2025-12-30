
import React, { useState, useRef, useEffect } from 'react';
import { chatWithGemini, searchWithGemini } from '../services/geminiService';
import { Message, ViewType } from '../types';

interface ChatViewProps {
  mode: ViewType.CHAT | ViewType.SEARCH;
}

const ChatView: React.FC<ChatViewProps> = ({ mode }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: mode === ViewType.CHAT 
        ? '你好！我是你的智能助手。你可以说中文，也可以问我任何问题。' 
        : '搜索增强模式已开启，我将结合 Google 搜索为你提供最新信息。',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      let response;
      if (mode === ViewType.CHAT) {
        const history = messages.slice(-6).map(m => ({
          role: m.role === 'user' ? 'user' as const : 'model' as const,
          parts: [{ text: m.content }]
        }));
        response = await chatWithGemini(input, history);
      } else {
        response = await searchWithGemini(input);
      }

      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      const urls = groundingChunks?.map((chunk: any) => ({
        uri: chunk.web?.uri || chunk.maps?.uri,
        title: chunk.web?.title || chunk.maps?.title
      })).filter((c: any) => c.uri);

      const assistantMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response.text || '抱歉，我未能生成回复。',
        timestamp: Date.now(),
        groundingUrls: urls
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        role: 'assistant',
        content: '发生了一些错误，请稍后再试。',
        timestamp: Date.now()
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full max-w-4xl mx-auto">
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl p-4 ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700'
            }`}>
              <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
              
              {msg.groundingUrls && msg.groundingUrls.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-700/50">
                  <p className="text-xs text-slate-400 font-semibold mb-2 uppercase tracking-wider">参考来源</p>
                  <div className="flex flex-wrap gap-2">
                    {msg.groundingUrls.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-slate-900 hover:bg-slate-700 text-blue-400 px-2 py-1 rounded border border-slate-700 transition-colors inline-block max-w-[200px] truncate"
                      >
                        {link.title || link.uri}
                      </a>
                    ))}
                  </div>
                </div>
              )}
              <span className="text-[10px] opacity-50 mt-2 block">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 rounded-2xl p-4 rounded-tl-none border border-slate-700 flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 border-t border-slate-800">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder={mode === ViewType.CHAT ? "说点什么吧..." : "输入想要搜索的内容..."}
            className="w-full bg-slate-900 border border-slate-700 focus:border-blue-500 rounded-2xl py-4 pl-6 pr-16 outline-none transition-all shadow-inner placeholder-slate-500"
          />
          <button
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute right-3 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 text-white px-4 rounded-xl transition-all shadow-lg flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatView;
