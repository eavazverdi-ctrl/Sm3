import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import imgChatBackground from "figma:asset/b3a5d8d2709e2514e1552ad18b679f9f1f6d53fa.png";

interface Message {
  id: string;
  username: string;
  text: string;
  timestamp: number;
}

interface ChatPageProps {
  onBack: () => void;
}

export function ChatPage({ onBack }: ChatPageProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [username, setUsername] = useState('');
  const [showUsernamePrompt, setShowUsernamePrompt] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isSending, setIsSending] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Check for existing username in localStorage
  useEffect(() => {
    const savedUsername = localStorage.getItem('chatloop_username');
    if (savedUsername) {
      setUsername(savedUsername);
      setShowUsernamePrompt(false);
    }
  }, []);

  // Fetch messages
  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-2d22d872/messages`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch messages');
      }
      
      const data = await response.json();
      if (data.success) {
        setMessages(data.messages);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  // Fetch messages on mount and poll every 2 seconds
  useEffect(() => {
    if (!showUsernamePrompt) {
      fetchMessages();
      const interval = setInterval(fetchMessages, 2000);
      return () => clearInterval(interval);
    }
  }, [showUsernamePrompt]);

  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('chatloop_username', username.trim());
      setShowUsernamePrompt(false);
    }
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || isSending) return;
    
    setIsSending(true);
    
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-2d22d872/messages`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            text: newMessage.trim(),
          }),
        }
      );
      
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
      
      const data = await response.json();
      if (data.success) {
        setNewMessage('');
        // Immediately fetch new messages
        await fetchMessages();
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('خطا در ارسال پیام. لطفا دوباره تلاش کنید.');
    } finally {
      setIsSending(false);
    }
  };

  if (showUsernamePrompt) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#49aaff] via-[#e3f2fb] to-white p-4">
        <div className="w-[312px] bg-white rounded-[20px] p-[32px] shadow-2xl">
          <div className="text-center mb-[24px]">
            <h2 className="font-['Helvetica_Neue:Medium',sans-serif] text-[20px] leading-[24px] text-[#111d25] mb-[8px]">
              به Chatloop خوش آمدید
            </h2>
            <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[14px] leading-[17px] text-[#061f35] opacity-70">
              لطفا نام کاربری خود را وارد کنید
            </p>
          </div>
          
          <form onSubmit={handleUsernameSubmit} className="flex flex-col gap-[16px]">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="نام کاربری"
              className="px-[16px] py-[12px] border-[1.5px] border-[#188bef]/20 rounded-[12px] outline-none focus:border-[#188bef] font-['Helvetica_Neue:Regular',sans-serif] text-[14px] transition-colors"
              maxLength={20}
              required
              autoFocus
            />
            <button
              type="submit"
              className="px-[24px] py-[12px] text-white rounded-[12px] font-['Helvetica_Neue:Medium',sans-serif] text-[14px] hover:shadow-lg active:scale-95 transition-all"
              style={{ background: 'linear-gradient(180deg, #49AAFF 0%, #188BEF 100%)' }}
            >
              ورود به چت
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#e3f2fb] to-[#f0f8ff] p-4">
      <div className="w-[312px] h-[675.2px] rounded-[20px] overflow-hidden shadow-2xl flex flex-col relative" 
           style={{ 
             background: 'linear-gradient(180deg, rgba(24, 139, 239, 0.15) 0%, rgba(227, 242, 251, 0.15) 40.84%, rgba(255, 255, 255, 0.15) 51.13%), #FFFFFF'
           }}>
        {/* Background Pattern Image */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.06]">
          <img 
            src={imgChatBackground} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Header */}
        <div className="relative shrink-0"
             style={{ 
               background: 'linear-gradient(180deg, rgba(115, 189, 236, 0.2) 0%, rgba(255, 255, 255, 0.2) 100%), #FFFFFF',
               borderBottom: '0.8px solid rgba(0, 0, 0, 0.05)',
               borderRadius: '40px 40px 0px 0px'
             }}>
          <div className="px-[15px] py-[19.02px] relative">
            <div className="flex items-center gap-[12px]">
              <button 
                onClick={onBack} 
                className="w-[19.2px] h-[19.2px] flex items-center justify-center hover:opacity-70 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M12.5 15L7.5 10L12.5 5" stroke="#000" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              
              <div className="flex items-center gap-[10px] flex-1">
                <div className="relative">
                  <div className="w-[66px] h-[66px] rounded-[9.6px] flex items-center justify-center" 
                       style={{ background: 'linear-gradient(0deg, rgba(101, 183, 255, 0.3), rgba(101, 183, 255, 0.3))' }}>
                    <div className="w-[57.2px] h-[57.2px] rounded-[8px] flex items-center justify-center text-white border-[1.2px] border-white"
                         style={{ background: 'linear-gradient(135deg, #49AAFF 0%, #188BEF 100%)' }}>
                      <span className="font-['Helvetica_Neue',sans-serif] text-[28px]">C</span>
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-[4.8px]">
                    <h3 className="font-['Helvetica_Neue',sans-serif] text-[9.6px] leading-[11px] text-black">Seetha</h3>
                    <span className="text-[9.6px]">❤️</span>
                  </div>
                  <p className="font-['Helvetica_Neue',sans-serif] text-[9.2px] leading-[11px] text-black opacity-50 mt-[2px]">By deepseek_ai</p>
                </div>
              </div>

              <button className="w-[36px] h-[36px] rounded-[8.8px] bg-white shadow-[0px_0px_32px_rgba(0,0,0,0.06)] flex items-center justify-center hover:opacity-70 transition-opacity">
                <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
                  <circle cx="8" cy="4" r="1" stroke="#000" strokeWidth="0.8"/>
                  <circle cx="8" cy="8" r="1" stroke="#000" strokeWidth="0.8"/>
                  <circle cx="8" cy="12" r="1" stroke="#000" strokeWidth="0.8"/>
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-[16px] py-[16px] relative">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full opacity-40">
              <svg className="w-[60px] h-[60px] mb-[16px]" fill="none" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="28" stroke="#188bef" strokeWidth="1.5" strokeDasharray="3 3" />
                <path d="M30 20v20M20 30h20" stroke="#188bef" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <p className="font-['Helvetica_Neue',sans-serif] text-[14px] leading-[17px] text-[#111d25] mb-[6px]">هنوز پیامی ارسال نشده است</p>
              <p className="font-['Helvetica_Neue',sans-serif] text-[12px] leading-[14px] text-[#061f35] opacity-70">اولین پیام را ارسال کنید!</p>
            </div>
          ) : (
            <div className="space-y-[15.6px]">
              {messages.map((msg) => {
                const isOwnMessage = msg.username === username;
                return (
                  <div
                    key={msg.id}
                    className={`flex ${isOwnMessage ? 'justify-end' : 'justify-start'} items-start gap-[10.4px]`}
                  >
                    {!isOwnMessage && (
                      <div className="shrink-0">
                        <div className="w-[32px] h-[32px] rounded-full border-[0.8px] border-[#188BEF] shadow-[0px_0px_16px_rgba(0,0,0,0.06)] flex items-center justify-center"
                             style={{ background: '#188BEF' }}>
                          <span className="font-['Helvetica_Neue',sans-serif] text-[12px] text-white">
                            {msg.username.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </div>
                    )}
                    <div className={`flex flex-col ${isOwnMessage ? 'items-end' : 'items-start'} max-w-[237.6px]`}>
                      {!isOwnMessage && (
                        <div className="px-[12.8px] py-[10.4px] bg-white border-[0.8px] border-[#EFEFEF] shadow-[0px_0px_12.8px_rgba(0,0,0,0.03)] rounded-[9.6px] mb-[10px]">
                          <p className="font-['Helvetica_Neue',sans-serif] text-[9.6px] leading-[14px] text-black">
                            {msg.text}
                          </p>
                        </div>
                      )}
                      {isOwnMessage && (
                        <div className="px-[12.8px] py-[10.4px] border-[0.8px] rounded-[9.6px] backdrop-blur-[8px]"
                             style={{ 
                               background: 'rgba(24, 139, 239, 0.06)',
                               borderColor: 'rgba(24, 139, 239, 0.12)'
                             }}>
                          <p className="font-['Helvetica_Neue',sans-serif] text-[9.6px] leading-[14px] text-black">
                            {msg.text}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        {/* Bottom Fade Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-[128px] pointer-events-none opacity-60"
             style={{
               background: 'linear-gradient(180deg, #F8F8FC 0%, rgba(248, 248, 248, 0) 100%)',
               transform: 'rotate(-180deg)'
             }}>
        </div>

        {/* Input Area */}
        <div className="relative shrink-0 px-[32.8px] py-[16px]"
             style={{
               background: 'linear-gradient(270deg, rgba(99, 123, 240, 0.02) 7.99%, rgba(99, 123, 240, 0.045) 50%, rgba(99, 123, 240, 0.07) 92.01%), rgba(255, 255, 255, 0.3)',
               boxShadow: '0px -32px 40px rgba(1, 71, 255, 0.06)',
               backdropFilter: 'blur(20px)',
               borderRadius: '0px 0px 20px 20px'
             }}>
          <form onSubmit={handleSendMessage} className="flex gap-[9.6px] items-center">
            <button type="button" className="w-[30.4px] h-[30.4px] border-[0.8px] border-black/[0.07] rounded-[8px] flex items-center justify-center hover:opacity-70 transition-opacity shrink-0">
              <svg width="17.6" height="17.6" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="5" stroke="#000" strokeWidth="1.2"/>
              </svg>
            </button>
            
            <div className="flex-1 h-[30.4px] px-[12px] border-[0.8px] rounded-[8px] flex items-center"
                 style={{ 
                   background: 'rgba(28, 28, 28, 0.04)',
                   borderColor: 'rgba(0, 0, 0, 0.03)'
                 }}>
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
                placeholder="Ask me anything"
                className="w-full bg-transparent outline-none font-['Helvetica_Neue',sans-serif] text-[10.4px] leading-[12px] text-black placeholder:text-black placeholder:opacity-50"
                disabled={isSending}
              />
              <svg width="15.2" height="15.2" viewBox="0 0 16 16" fill="none" className="shrink-0 ml-[8px]">
                <path d="M6 4L10 8L6 12" stroke="#000" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            
            <button
              type="submit"
              disabled={!newMessage.trim() || isSending}
              className="w-[30.4px] h-[30.4px] rounded-[8px] flex items-center justify-center hover:shadow-lg disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all shrink-0"
              style={{ background: !newMessage.trim() || isSending ? '#ccc' : 'linear-gradient(180deg, #49AAFF 0%, #188BEF 100%)' }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" transform="rotate(-45)">
                <path d="M3 8L13 8M13 8L9 4M13 8L9 12" stroke="#FFF" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
