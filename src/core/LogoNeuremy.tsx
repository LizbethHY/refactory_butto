interface LogoProps {
  width?: number | string;
  height?: number | string;
}

export const LogoNeuremy = ({ width = "100%", height = "100%" }: LogoProps) => {
  return (
    <svg 
      xmlns="http://w3.org" 
      viewBox="0 0 500 500" 
      width={width} 
      height={height}
    >
      {/* Fondo circular gris claro */}
      <circle cx="250" cy="250" r="240" fill="#f2f0ef" />

      {/* Grupo de la estructura con color gris oscuro y trazos redondeados */}
      <g fill="none" stroke="#545454" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round">
        
        {/* Líneas de conexión (Enlaces) */}
        <line x1="195" y1="215" x2="265" y2="155" />
        <line x1="315" y1="155" x2="395" y2="225" />
        <line x1="415" y1="265" x2="385" y2="345" />
        <line x1="365" y1="365" x2="295" y2="295" />
        <line x1="245" y1="265" x2="195" y2="245" />
        
        {/* Nodos (Átomos / Círculos) */}
        {/* Nodo Principal Grande (Izquierda) */}
        <circle cx="140" cy="220" r="55" />
        
        {/* Nodo Superior Medio */}
        <circle cx="290" cy="135" r="30" />
        
        {/* Nodo Inferior Medio */}
        <circle cx="265" cy="270" r="40" />
        
        {/* Nodo Derecho */}
        <circle cx="420" cy="245" r="28" />
        
        {/* Nodo Inferior Derecho Pequeño */}
        <circle cx="375" cy="380" r="20" />
        
      </g>
    </svg>
  );
};
