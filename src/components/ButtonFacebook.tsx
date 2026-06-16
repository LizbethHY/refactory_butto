import { FacebookIcon } from '../core/Facebook';

export function ButtonFacebook() {
  const handleClick = () => {
    window.open('https://facebook.com', '_blank');
  };

  return (
    <div
      onClick={handleClick}
      className="relative w-full h-16 flex items-center justify-center cursor-pointer p-4 rounded-full border border-slate-200 bg-white shadow-md hover:bg-slate-50 transition-all select-none"
    >
      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-[#1877f2] text-white shadow-sm">
        <FacebookIcon />
      </div>
      <span className="text-sm font-bold text-[#1877f2]">
        Facebook
      </span>
    </div>
  );
}
