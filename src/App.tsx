import heroImg from './assets/hero.png'
import { Button } from './Button';
import { Globe } from 'lucide-react';

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f9] to-[#e6eef7] text-slate-800 flex flex-col items-center justify-center p-6 antialiased">
      <header className="flex flex-col items-center text-center max-w-sm mb-8">
        <div className="mb-4 bg-white p-2 rounded-full shadow-md border border-slate-100">
          <img
            src={heroImg}
            className="w-24 h-24 object-contain rounded-full"
            alt="Neuremy Logo"
          />
        </div>
        <div>
          <h1 className="text-xl font-bold tracking-wide text-[#2b4185] block opacity-100 relative z-10">
            Neuremy
          </h1>
          <p className="mt-2 text-sm font-medium text-[#2b4185] max-w-[340px] px-4">
            Todo lo que necesitas para estudiar medicina, en un solo lugar.
          </p>
        </div>


      </header>

      <section className="w-full max-w-md px-2">
        <div id="social" className="flex flex-col gap-4">
          {/* Botón Web Neuremy */}
          <Button
            href="https://neuremy.com"
            label="SUSCRIBETE"
            variant="primary"
            icon={<Globe size={20} />}
          />

          {/* Botón YouTube */}
          <Button
            href="https://youtube.com"
            label="YouTube"
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            }
          />

          {/* Botón TikTok */}
          <Button
            href="https://tiktok.com"
            label="Tik Tok"
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.02 1.63 4.18 1.14 1.25 2.74 2.01 4.43 2.15v3.74c-1.8-.03-3.57-.61-5.02-1.69-.35-.26-.67-.56-.96-.88v6.56a6.83 6.83 0 0 1-6.19 6.82 6.835 6.835 0 0 1-7.1-5.15A6.85 6.85 0 0 1 7.4 8.46c.49-.06.98-.05 1.47.01v3.76c-.34-.09-.7.01-1 .22a3.085 3.085 0 0 0-1.12 3.14c.27 1.22 1.34 2.13 2.6 2.14 1.7-.03 3.05-1.44 3.02-3.14V0h.15z" />
              </svg>
            }
          />

          {/* Botón Facebook */}
          <Button
            href="https://facebook.com"
            label="Facebook"
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            }
          />

          {/* Botón Instagram */}
          <Button
            href="https://instagram.com"
            label="Instagram"
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            }
          />
        </div>
      </section>

    </div>
  )
}

export default App;