import { useState } from 'react';
import { ChatPage } from './components/ChatPage';
import svgPaths from "./imports/svg-uac8dmdq1g";
import imgRectangle4754 from "figma:asset/99c6102753794bd20bc60e70342f09da7c686472.png";
import imgRectangle4755 from "figma:asset/f421e424c0527e19d4f4d361a859aefc6759768e.png";
import imgRectangle4756 from "figma:asset/930219206669c7ba4be3796fa74e3efd0b064c7d.png";
import imgRectangle4757 from "figma:asset/9773b14ce326d64b9f58908994fe6bea967c45cb.png";
import imgTopHeader from "figma:asset/822f4521ef4b75d2683a76541bd0fcbb14ed8569.png";
import imgBottomNav from "figma:asset/c5034809c281925c3832e21b03cbf514f648d4ff.png";

export default function App() {
  const [showChat, setShowChat] = useState(false);

  if (showChat) {
    return <ChatPage onBack={() => setShowChat(false)} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#e3f2fb] to-[#f0f8ff] p-4">
      <div className="relative w-[312px] h-[675.2px] bg-white rounded-[20px] overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(180deg, rgba(24, 139, 239, 0.3) 0%, rgba(227, 242, 251, 0.3) 32.23%, rgba(255, 255, 255, 0.3) 40.34%), #FFFFFF' }}>
        
        {/* Top Header Image - Fixed */}
        <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
          <img 
            src={imgTopHeader} 
            alt="Header" 
            className="w-full h-auto"
          />
        </div>

        {/* Scrollable Chat List */}
        <div className="absolute left-0 right-0 top-[288.02px] bottom-0 overflow-y-auto scrollbar-hide">
          {/* Pinned Chats */}
          <div className="relative w-[280px] ml-[17px] mt-[16px]">
            {/* Header */}
            <div className="flex items-center gap-[3.2px] h-[16px] mb-[14.4px]">
              <svg className="w-[16px] h-[16px] opacity-40" fill="none" viewBox="0 0 16 16">
                <g opacity="0.4">
                  <path d="M5.50755 10.6077L3.34692 11.8552Z" fill="#111D25" stroke="#111D25" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.45554 7.75455C7.29471 7.84729 7.11119 7.89333 6.92562 7.88749C6.74005 7.88164 6.55979 7.82415 6.40511 7.72147L5.57211 7.17683C5.41743 7.07415 5.23717 7.01665 5.0516 7.01081C4.86603 7.00497 4.68251 7.05101 4.52168 7.14375L4.19326 7.33336C4.07865 7.39953 3.99503 7.50852 3.96078 7.63634C3.92652 7.76417 3.94446 7.90037 4.01062 8.01497L7.00447 13.2005C7.07064 13.3151 7.17962 13.3987 7.30745 13.433C7.43528 13.4672 7.57147 13.4493 7.68608 13.3831L8.0145 13.1935C8.17523 13.1006 8.30686 12.9647 8.39459 12.801C8.48231 12.6374 8.52265 12.4526 8.51107 12.2673L8.45589 11.2735C8.44431 11.0882 8.48465 10.9034 8.57237 10.7398C8.6601 10.5761 8.79173 10.4402 8.95246 10.3473L10.5773 9.40922C10.6919 9.34305 10.8281 9.32512 10.9559 9.35938C11.0837 9.39363 11.1927 9.47725 11.2589 9.59186C11.3912 9.82107 11.6092 9.98833 11.8648 10.0568C12.1205 10.1253 12.3929 10.0895 12.6221 9.95713C12.8513 9.8248 13.0186 9.60683 13.0871 9.35117C13.1556 9.09552 13.1197 8.82312 12.9874 8.59391L10.9915 5.13692C10.8591 4.9077 10.6412 4.74045 10.3855 4.67195C10.1299 4.60344 9.85746 4.6393 9.62824 4.77164C9.39903 4.90398 9.23177 5.12195 9.16327 5.3776C9.09477 5.63326 9.13063 5.90565 9.26297 6.13486C9.32914 6.24947 9.34707 6.38567 9.31282 6.5135C9.27856 6.64132 9.19494 6.75031 9.08033 6.81648L7.45554 7.75455Z" fill="#111D25" stroke="#111D25" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
              <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[12px] leading-[15px] text-[#111d25]">Pinned Chats</p>
              <div className="relative w-[14.4px] h-[11.2px]">
                <div className="absolute inset-0 bg-[#114a7b] rounded-[14.17px]" />
                <p className="absolute left-[3.059px] top-[1.172px] font-['Helvetica_Neue:Regular',sans-serif] text-[7.085px] leading-[8px] text-white">1</p>
              </div>
            </div>

            {/* Chatloop - Active Chat */}
            <div 
              onClick={() => setShowChat(true)}
              className="cursor-pointer hover:bg-gray-50 active:bg-gray-100 rounded-lg p-2 -m-2 transition-colors"
            >
              <div className="flex items-start gap-[14px] h-[40.01px]">
                <div className="shrink-0">
                  <div className="rounded-[33.44px] size-[40px] overflow-hidden">
                    <img src={imgRectangle4757} alt="Chatloop" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0 mt-[4px]">
                  <div className="flex items-center justify-between mb-[4px]">
                    <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[10.4px] leading-[13px] text-[#061f35]">Chatloop</p>
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-50">الان</p>
                  </div>
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-70 truncate">
                    به گروه عمومی Chatloop خوش آمدید...
                  </p>
                </div>
                
                <div className="shrink-0 mt-[18.4px]">
                  <svg className="w-[12.8px] h-[12.8px]" fill="none" viewBox="0 0 13 13">
                    <path d="M9.6316 3.19728L3.76493 9.06395L1.09826 6.39728M11.7649 5.33062L7.76493 9.33062L6.96493 8.53062" stroke="#188BEF" strokeWidth="0.96" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-0 border-t-[0.8px] border-[#061F35] opacity-[0.04] mt-[14.4px] mb-[16px]" />

          {/* All Chats */}
          <div className="px-[17px] pb-[120px]">
            <div className="flex items-center gap-[3.2px] mb-[14.4px]">
              <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[12px] leading-[15px] text-[#111d25]">All Chats</p>
              <div className="relative w-[14.4px] h-[11.2px]">
                <div className="absolute inset-0 bg-[#114a7b] rounded-[14.17px]" />
                <p className="absolute left-[3.059px] top-[1.172px] font-['Helvetica_Neue:Regular',sans-serif] text-[7.085px] leading-[8px] text-white">32</p>
              </div>
            </div>

            {/* Decorative Chats */}
            <div className="space-y-[14.4px]">
              {/* Esther Howard */}
              <div className="flex items-start gap-[14px] h-[40.01px]">
                <div className="rounded-[33.44px] size-[40px] overflow-hidden shrink-0">
                  <img src={imgRectangle4754} alt="Esther" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 mt-[4px]">
                  <div className="flex items-center justify-between mb-[4px]">
                    <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[10.4px] leading-[13px] text-[#061f35]">Esther Howard</p>
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-50">Yesterday</p>
                  </div>
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-70 truncate">
                    Just wrapped up a clean new UI...
                  </p>
                </div>
                <div className="shrink-0 mt-[18.4px]">
                  <svg className="w-[12.8px] h-[12.8px]" fill="none" viewBox="0 0 13 13">
                    <path d="M9.6316 3.19728L3.76493 9.06395L1.09826 6.39728M11.7649 5.33062L7.76493 9.33062L6.96493 8.53062" stroke="#188BEF" strokeWidth="0.96" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Robert Fox */}
              <div className="flex items-start gap-[14px] h-[40.01px]">
                <div className="rounded-[22.4px] size-[40px] overflow-hidden shadow-[0px_0px_9.6px_1.6px_rgba(0,0,0,0.01)] shrink-0">
                  <img src={imgRectangle4755} alt="Robert" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 min-w-0 mt-[4px]">
                  <div className="flex items-center justify-between mb-[4px]">
                    <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[10.4px] leading-[13px] text-[#061f35]">Robert Fox</p>
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-50">01:04</p>
                  </div>
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-70 truncate">
                    Just planted a new sapling today...
                  </p>
                </div>
                <div className="shrink-0 mt-[18.4px]">
                  <svg className="w-[12.8px] h-[12.8px]" fill="none" viewBox="0 0 13 13">
                    <path d="M9.6316 3.19728L3.76493 9.06395L1.09826 6.39728M11.7649 5.33062L7.76493 9.33062L6.96493 8.53062" stroke="#188BEF" strokeWidth="0.96" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Grow Together */}
              <div className="flex items-start gap-[14px] h-[40.01px]">
                <div className="rounded-full size-[40px] bg-gradient-to-br from-green-400 to-blue-400 shrink-0" />
                <div className="flex-1 min-w-0 mt-[4px]">
                  <div className="flex items-center justify-between mb-[4px]">
                    <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[10.4px] leading-[13px] text-[#061f35]">Grow Together</p>
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-50">01:04</p>
                  </div>
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-70 truncate">
                    Just planted a new sapling...
                  </p>
                </div>
                <div className="shrink-0 mt-[18.4px]">
                  <svg className="w-[12.8px] h-[12.8px]" fill="none" viewBox="0 0 13 13">
                    <path d="M9.6316 3.19728L3.76493 9.06395L1.09826 6.39728M11.7649 5.33062L7.76493 9.33062L6.96493 8.53062" stroke="#188BEF" strokeWidth="0.96" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* DesignSight AI */}
              <div className="flex items-start gap-[14px] h-[40.01px]">
                <div className="bg-[#ff83ac] opacity-[0.12] rounded-[22.4px] size-[40px] flex items-center justify-center shrink-0">
                  <svg className="w-[21px] h-[21px]" fill="none" viewBox="0 0 21 21">
                    <circle cx="10.5" cy="10.5" r="10.5" fill="url(#paint0_linear_ai)" />
                    <defs>
                      <linearGradient id="paint0_linear_ai" x1="6.9" y1="7.18" x2="18.21" y2="18.49" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="#C7E9FF" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="flex-1 min-w-0 mt-[4px]">
                  <div className="flex items-center justify-between mb-[4px]">
                    <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[10.4px] leading-[13px] text-[#061f35]">DesignSight AI</p>
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-50">01:04</p>
                  </div>
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-50 truncate">
                    DesignSight AI is an intelligent analytics p...
                  </p>
                </div>
              </div>

              {/* GoalForge */}
              <div className="flex items-start gap-[14px] h-[40.01px]">
                <div className="rounded-full size-[40px] bg-gradient-to-br from-orange-400 to-red-400 shrink-0" />
                <div className="flex-1 min-w-0 mt-[4px]">
                  <div className="flex items-center justify-between mb-[4px]">
                    <p className="font-['Helvetica_Neue:Medium',sans-serif] text-[10.4px] leading-[13px] text-[#061f35]">GoalForge</p>
                    <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-50">01:30</p>
                  </div>
                  <p className="font-['Helvetica_Neue:Regular',sans-serif] text-[9.6px] leading-[11px] text-[#061f35] opacity-50 truncate">
                    Performance tracking, strategy refinement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation - Image */}
        <div className="fixed bottom-0 left-0 right-0 max-w-[312px] mx-auto z-50 pointer-events-none">
          <div 
            className="absolute bottom-0 left-0 right-0 pointer-events-auto cursor-pointer"
            onClick={() => setShowChat(true)}
          >
            <img 
              src={imgBottomNav} 
              alt="Bottom Navigation" 
              className="w-full h-auto"
              style={{ maxWidth: '312px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
