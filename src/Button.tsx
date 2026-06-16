import { type ReactNode } from 'react';

// 1. La Interfaz (El contrato de datos del componente)
export interface ButtonProps {
  href: string;
  label: string;
  icon?: ReactNode; // El signo "?" indica que es opcional
  variant?: 'primary' | 'secondary'; // Define tipos fijos de botones
}

// 2. La Función del Componente (El molde reutilizable)
export function Button({ href, label, icon, variant = 'secondary' }: ButtonProps) {

  const baseButtonStyles = "relative flex items-center justify-center px-4 text-sm font-bold tracking-wide transition-all rounded-[2rem] border-2 shadow-sm hover:scale-[0.99] w-full min-h-[64px]";
  
  const variantStyles = variant === 'primary'
    ? "bg-[#2b4185] border-[#1d2d60] text-white"
    : "bg-white border-[#2b4185] text-[#2b4185] hover:bg-slate-50";
  
  const iconContainerStyles = variant === 'primary'
    ? "absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 text-white border border-white/20 shadow"
    : "absolute left-2 top-1/2 -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 shadow-sm";

  const iconBgColors: Record<string, string> = {
    YouTube: "bg-[#e62117] text-white",
    "Tik Tok": "bg-black text-white",
    Facebook: "bg-[#3b5998] text-white",
    Instagram: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white",
  };

  const currentIconBg = variant === 'primary' ? "" : (iconBgColors[label] || "bg-slate-100");

    return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className={`${baseButtonStyles} ${variantStyles}`}
    >
      {icon && (
        <div className={`${iconContainerStyles} ${currentIconBg}`}>
          {icon}
        </div>
      )}
      <span>{label}</span>
    </a>
  );

}
