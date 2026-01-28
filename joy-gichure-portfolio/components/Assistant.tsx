
import React, { useState, useRef, useEffect } from 'react';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  // Joy's phone number in international format without + or spaces
  // Based on App.tsx: +254 798 717 800
  const PHONE_NUMBER = '254798717800';

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;

    const message = encodeURIComponent(input.trim());
    const whatsappUrl = `https://wa.me/${PHONE_NUMBER}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');

    // Optional: clear input or close widget
    setInput('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      {isOpen ? (
        <div className="w-80 md:w-96 h-[450px] bg-[#e5ddd5] border border-black/5 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="p-4 bg-[#075e54] flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm overflow-hidden p-1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-white text-base font-bold">Chat with me</h3>
                <p className="text-white/80 text-[11px] font-medium">Normally replies instantly</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" x2="6" y1="6" y2="18" /><line x1="6" x2="18" y1="6" y2="18" /></svg>
            </button>
          </div>

          {/* Chat Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#e5ddd5] bg-[url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')] bg-repeat opacity-90">
            {/* System Message */}
            <div className="flex justify-center mb-4">
              <span className="text-[10px] bg-[#e1f2fb] text-neutral-600 px-3 py-1 rounded-lg uppercase font-bold tracking-widest shadow-sm">Today</span>
            </div>

            {/* Joy's Greeting */}
            <div className="flex justify-start">
              <div className="max-w-[85%] bg-white p-3 rounded-tr-lg rounded-bl-lg rounded-br-lg shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] text-[14px] leading-snug text-[#111b21] relative">
                <p>Hello! 👋 <br /> Thanks for visiting. How can I help you with your project today?</p>
                <span className="text-[10px] text-gray-400 float-right pt-2 ml-4">
                  {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-3 bg-[#f0f2f5] border-t border-black/5">
            <div className="flex items-end gap-2 bg-white rounded-2xl px-4 py-2 border border-transparent focus-within:border-[#00a884] transition-colors shadow-sm">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="w-full bg-transparent text-sm text-[#111b21] focus:outline-none py-2 placeholder:text-gray-500"
                autoFocus
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="mb-1 text-[#00a884] disabled:text-gray-300 transition-colors p-1"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                  <path fill="currentColor" d="M1.101 21.757 23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group w-14 h-14 bg-[#25D366] rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-center hover:scale-110 hover:shadow-[0_6px_14px_rgba(37,211,102,0.4)] transition-all duration-300"
        >
          <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Assistant;
