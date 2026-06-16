import heroImg from './assets/hero.png';
import { AllButtos } from './AllButtos';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f9] to-[#e6eef7] flex flex-col items-center justify-center p-6 antialiased">
      
      {/* Encabezado */}
      <header className="flex flex-col items-center text-center max-w-sm mb-8">
        <div className="mb-4 bg-white p-2 rounded-full shadow-md border border-slate-100">
          <img 
            src={heroImg} 
            className="w-24 h-24 object-contain rounded-full" 
            alt="Neuremy Logo" 
          />
        </div>
        <div>
          {/* Título e indicador nítidos y sin opacidad externa */}
          <h1 className="text-xl font-bold tracking-wide text-[#2b4185]">
            Neuremy
          </h1>
          <p className="mt-2 text-sm font-medium text-[#2b4185] max-w-[340px] px-4">
            Todo lo que necesitas para estudiar medicina, en un solo lugar.
          </p>
        </div>
      </header>

      {/* Sección contenedora que invoca el bloque de botones */}
      <section className="w-full max-w-md px-2">
        <AllButtos />
      </section>
    </div>
  );
}

export default App;
