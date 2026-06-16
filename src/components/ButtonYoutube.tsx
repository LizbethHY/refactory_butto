import { YoutubeIcon } from '../core/Youtube';

export function ButtonYoutube() {
  const handleClick = () => {
    window.open('https://youtube.com', '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-16 flex items-center justify-center cursor-pointer p-4 rounded-full border border-slate-200 bg-white shadow-md hover:bg-slate-50 transition-all select-none"
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#e8cfe5] text-white shadow-sm">
        <YoutubeIcon />
      </div>
      <span className="text-sm font-bold text-[#e62117]">
        YouTube
      </span>
    </div>
  );
}
