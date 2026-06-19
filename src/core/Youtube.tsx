import { HugeiconsIcon } from '@hugeicons/react'; // El componente renderizador va aquí
import { Youtube } from '@hugeicons/core-free-icons'; // El ícono actúa como un objeto de datos

export function YoutubeIcon() {
  return (
    <svg 
      className="w-5 h-5" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="#e62117" 
      strokeWidth="2"
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* Rectángulo exterior redondeado */}
      <rect x="2" y="4" width="20" height="16" rx="5" ry="5" />
      
      {/* Triángulo de reproducción central relleno de rojo */}
      <polygon points="10 9 15 12 10 15" fill="#e62117" stroke="none" />
    </svg>
  );
}
