import svgPaths from "./svg-0kdjf9v5mj";

function Frame() {
  return (
    <div className="relative shrink-0 size-[10.627px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Frame">
          <path d={svgPaths.pe2b2b80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p1a9f5680} id="Vector_2" stroke="var(--stroke-0, #2E608B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.06272" />
        </g>
      </svg>
    </div>
  );
}

function KitchenCardContainer() {
  return (
    <div className="bg-[#114a7b] box-border content-stretch flex gap-[2.657px] h-[26.176px] items-center justify-center opacity-[0.88] px-[9.742px] py-[7.486px] relative rounded-[6.4px] shrink-0" data-name="Kitchen Card Container 6">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[8.984px] text-nowrap text-white whitespace-pre">All</p>
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] h-[11.2px] ml-0 mt-0 rounded-[14.17px] w-[14.4px]" />
      <p className="[grid-area:1_/_1] font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] ml-[3.43px] mt-[0.995px] not-italic relative text-[7.085px] text-nowrap text-white whitespace-pre">32</p>
    </div>
  );
}

function KitchenCardContainer1() {
  return (
    <div className="bg-[rgba(17,74,123,0.08)] box-border content-stretch flex gap-[3.542px] items-center justify-center pl-[10.627px] pr-[7.2px] py-[7.486px] relative rounded-[6.4px] shrink-0" data-name="Kitchen Card Container 7">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] not-italic opacity-95 relative shrink-0 text-[#061f35] text-[8.984px] text-nowrap whitespace-pre">Unread Chats</p>
      <Group />
    </div>
  );
}

function KitchenCardContainer2() {
  return (
    <div className="bg-[rgba(17,74,123,0.08)] box-border content-stretch flex gap-[7.486px] h-[26.176px] items-center justify-center px-[10.627px] py-[7.486px] relative rounded-[6.4px] shrink-0" data-name="Kitchen Card Container 8">
      <p className="font-['Helvetica_Neue:Regular',sans-serif] leading-[normal] not-italic opacity-95 relative shrink-0 text-[#061f35] text-[8.984px] text-nowrap whitespace-pre">Favourite Chats</p>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex gap-[7.085px] items-center relative size-full">
      <KitchenCardContainer />
      <KitchenCardContainer1 />
      <KitchenCardContainer2 />
    </div>
  );
}