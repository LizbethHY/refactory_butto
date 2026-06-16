import { InstagramIcon } from '../core/Instagram';

export function ButtonInstagram() {
  const handleClick = () => {
    window.open('https://instagram.com', '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-16 flex items-center justify-center cursor-pointer p-4 rounded-full border border-slate-200 bg-white shadow-md hover:bg-slate-50 transition-all select-none"
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-sm">
        <InstagramIcon />
      </div>
      <span className="text-sm font-bold text-[#ee2a7b]">
        Instagram
      </span>
    </div>
  );
}
