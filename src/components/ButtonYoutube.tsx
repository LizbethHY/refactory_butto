import { HugeiconsIcon } from '@hugeicons/react'; 
import { Youtube } from '@hugeicons/core-free-icons'; 

export function ButtonYoutube() {
  const handleClick = () => {
    window.open('https://youtube.com', '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-[672px] h-[74px] flex items-center justify-center cursor-pointer p-4 rounded-2xl border border-slate-200 bg-white shadow-md hover:bg-slate-50 transition-all select-none"
    >
      <div className="absolute left-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#e8cfe5] text-white shadow-sm">
        <HugeiconsIcon icon={Youtube} size={24} color="red" strokeWidth={2.5}/>
      </div>
      <span className="text-sm font-bold text-[#7e7f7f]">
        YouTube
      </span>
    </div>
  );
}
