import { HugeiconsIcon } from '@hugeicons/react'; 
import { Facebook } from '@hugeicons/core-free-icons'; 

export function ButtonFacebook() {
  const handleClick = () => {
    window.open('https://facebook.com', '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-[672px] h-[74px] flex items-center justify-center cursor-pointer p-4 rounded-2xl border border-slate-200 bg-white shadow-md hover:bg-slate-50 transition-all select-none"
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#1877f2]">
        <HugeiconsIcon icon={Facebook} size={24} color="blue" strokeWidth={2.5}/>
      </div>
      <span className="text-sm font-bold text-[#7e7f7f]">
        Facebook
      </span>
    </div>
  );
}
