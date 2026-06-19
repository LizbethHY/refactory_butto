import { LogoNeuremy } from '../core/LogoNeuremy';
export function Header() {
    return (
        <header className="flex flex-col items-center text-center max-w-sm mb-8">
            <div className="mb-4 bg-white p-2 rounded-full shadow-md border border-slate-100">
                <LogoNeuremy height={40} width={40} />
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
    );
}