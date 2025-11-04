import { Wallet, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-br from-blue-500 to-green-400 p-2 rounded-xl">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Banco Cajitas IA
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Inicio
            </a>
            <a href="#cajitas" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Mis Cajitas
            </a>
            <a href="#analisis" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Análisis de gastos
            </a>
            <a href="#asistente" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Asistente IA
            </a>
            <a href="#perfil" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Perfil
            </a>
          </nav>

          <button className="hidden md:block bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200">
            Comienza ahora
          </button>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-100">
            <a href="#inicio" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Inicio
            </a>
            <a href="#cajitas" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Mis Cajitas
            </a>
            <a href="#analisis" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Análisis de gastos
            </a>
            <a href="#asistente" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Asistente IA
            </a>
            <a href="#perfil" className="block text-gray-700 hover:text-blue-600 font-medium py-2">
              Perfil
            </a>
            <button className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white px-6 py-2.5 rounded-xl font-semibold mt-4">
              Comienza ahora
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
