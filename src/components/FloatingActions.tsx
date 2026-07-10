import React, { useState, useEffect, useRef } from 'react';
import { Phone, Sparkles, X, Bot, AlertTriangle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function FloatingActions() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Namaste! 🙏 I am your Digital Trikaal AI Assistant. How can I help you scale your business, website, or marketing campaigns today?'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (chatOpen) {
      scrollToBottom();
    }
  }, [messages, chatOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setError(null);

    const updatedMessages: Message[] = [...messages, { role: 'user', content: userMessage }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const contentType = response.headers.get('content-type');
      if (!response.ok) {
        let errorMsg = 'AI Assistant is temporarily busy. Please try again.';
        if (contentType && contentType.includes('application/json')) {
          try {
            const errData = await response.json();
            if (errData && errData.error) {
              errorMsg = errData.error;
            }
          } catch (_) {}
        }
        throw new Error(errorMsg);
      }

      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('AI Assistant is temporarily busy. Please try again.');
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: data.response }
      ]);
    } catch (err: any) {
      console.error('Chat Assistant Error:', err);
      setError(err.message && !err.message.includes('token') ? `⚠️ ${err.message}` : '⚠️ AI Assistant is temporarily unavailable. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      {/* Expanded Chat Window Panel */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="absolute bottom-16 right-0 md:right-16 w-[calc(100vw-2rem)] sm:w-96 h-[500px] bg-[#0E0E0E] border border-[#FFD500]/20 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.8)] flex flex-col"
          >
            {/* Chat Header */}
            <div className="p-4 bg-[#121212] border-b border-[#FFD500]/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-[#FFD500]/10 border border-[#FFD500]/30 flex items-center justify-center text-[#FFD500]">
                  <Sparkles size={18} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white tracking-tight">Trikaal AI Assistant</h4>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-[10px] text-gray-400 font-medium">Ready to help</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="p-1.5 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                title="Close chat"
              >
                <X size={18} />
              </button>
            </div>

            {/* Message Stream */}
            <div className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-white/5">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2.5 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    {m.role === 'assistant' && (
                      <div className="w-7 h-7 rounded-full bg-[#FFD500]/10 border border-[#FFD500]/20 flex items-center justify-center flex-shrink-0 text-[#FFD500]">
                        <Bot size={14} />
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-[#FFD500] text-[#0A0A0A] font-semibold rounded-tr-none'
                          : 'bg-[#161616] border border-white/5 text-gray-200 rounded-tl-none'
                      }`}
                    >
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex gap-2.5 max-w-[85%]">
                    <div className="w-7 h-7 rounded-full bg-[#FFD500]/10 border border-[#FFD500]/20 flex items-center justify-center flex-shrink-0 text-[#FFD500]">
                      <Bot size={14} />
                    </div>
                    <div className="p-3 bg-[#161616] border border-white/5 text-gray-400 rounded-2xl rounded-tl-none flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-[#FFD500] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-[#FFD500] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-[#FFD500] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Banner */}
              {error && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl flex items-start gap-2 text-xs leading-relaxed animate-shake">
                  <AlertTriangle size={15} className="flex-shrink-0 mt-0.5 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Footer */}
            <form onSubmit={handleSend} className="p-3 bg-[#121212] border-t border-[#FFD500]/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask our AI..."
                disabled={isLoading}
                className="flex-grow bg-[#1A1A1A] border border-white/5 focus:border-[#FFD500]/40 text-white rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none transition-all placeholder-gray-500 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] rounded-xl font-bold transition-all disabled:opacity-50 flex items-center justify-center shadow-lg"
              >
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button Stack */}
      <div className="flex flex-col items-center space-y-4">
        {/* Chatbot Button */}
        <button
          onClick={() => setChatOpen(!chatOpen)}
          id="floating-ai-chat-btn"
          className="w-13 h-13 rounded-full bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] flex items-center justify-center shadow-[0_4px_20px_rgba(255,213,0,0.4)] hover:shadow-[0_4px_25px_rgba(255,213,0,0.6)] transition-all duration-300 hover:scale-110 active:scale-90 group relative"
          title="Chat with Trikaal AI"
        >
          {chatOpen ? (
            <X size={22} className="stroke-[2.5]" />
          ) : (
            <Sparkles size={22} className="stroke-[2.5] animate-pulse" />
          )}

          {/* Tooltip */}
          <span className="absolute right-16 bg-[#0A0A0A] border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
            {chatOpen ? 'Close AI Assistant' : 'Chat with Trikaal AI'}
          </span>
        </button>

        {/* Phone Call Floating Button */}
        <a
          href="tel:+919352392906"
          id="floating-phone-btn"
          className="w-13 h-13 rounded-full bg-[#FFD500] hover:bg-[#ffe033] text-[#0A0A0A] flex items-center justify-center shadow-[0_4px_20px_rgba(255,213,0,0.4)] hover:shadow-[0_4px_25px_rgba(255,213,0,0.6)] transition-all duration-300 hover:scale-110 active:scale-90 group relative"
          title="Call Us Now"
        >
          <Phone size={22} className="stroke-[2.5]" />
          
          {/* Tooltip */}
          <span className="absolute right-16 bg-[#0A0A0A] border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
            Call +91 93523 92906
          </span>
        </a>

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/919352392906"
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          className="w-13 h-13 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:shadow-[0_4px_25px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 active:scale-90 group relative pulse-green"
          title="Chat on WhatsApp"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.574 1.97 14.101.945 11.472.945 6.035.945 1.611 5.316 1.607 10.744c-.002 1.706.452 3.375 1.314 4.869l-.951 3.472 3.563-.935zM17.51 14.54c-.302-.15-1.786-.879-2.062-.979-.277-.1-.478-.15-.678.15-.2.3-.778.979-.954 1.179-.177.2-.353.224-.655.075-1.2-.5-2.072-.924-2.888-2.317-.216-.369.216-.343.618-1.143.1-.2.05-.375-.025-.526-.075-.15-.678-1.63-.93-2.228-.246-.589-.496-.51-.678-.51-.176-.002-.377-.002-.578-.002-.2 0-.527.075-.803.376-.277.3-1.054 1.028-1.054 2.507s1.079 2.906 1.229 3.107c.15.2 2.124 3.227 5.143 4.529.718.31 1.28.496 1.718.634.721.23 1.377.198 1.897.12.58-.088 1.786-.73 2.037-1.43.25-.7.25-1.3.176-1.43-.076-.13-.277-.23-.58-.38z" />
          </svg>

          {/* Pulse effect rings */}
          <span className="absolute -inset-1 rounded-full border border-[#25D366] opacity-0 group-hover:opacity-100 group-hover:animate-ping pointer-events-none"></span>

          {/* Tooltip */}
          <span className="absolute right-16 bg-[#0A0A0A] border border-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl">
            Chat on WhatsApp
          </span>
        </a>
      </div>

      {/* Styled inline keyframes */}
      <style>{`
        @keyframes pulseGreen {
          0% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.4);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(37, 211, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
          }
        }
        .pulse-green {
          animation: pulseGreen 2s infinite;
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
        .animate-shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
