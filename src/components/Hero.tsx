import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Control financiero inteligente</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Organiza tu dinero con{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              inteligencia
            </span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">
            Divide tus finanzas en cajitas inteligentes y descubre en qué se te va el dinero cada mes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-green-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
              <span>Probar gratis</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:border-blue-500 hover:text-blue-600 transition-all duration-200">
              Ver demo
            </button>
          </div>

          <div className="flex items-center space-x-8 pt-4">
            <div>
              <div className="text-3xl font-bold text-gray-900">10k+</div>
              <div className="text-sm text-gray-600">Usuarios activos</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-gray-900">98%</div>
              <div className="text-sm text-gray-600">Satisfacción</div>
            </div>
            <div className="h-12 w-px bg-gray-300"></div>
            <div>
              <div className="text-3xl font-bold text-gray-900">4.9★</div>
              <div className="text-sm text-gray-600">Valoración</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-green-400 rounded-3xl blur-2xl opacity-20"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="space-y-6">
              <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Mi Dashboard</h3>
                <span className="text-sm text-gray-500">Marzo 2025</span>
              </div>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
                  <div className="text-sm opacity-90 mb-2">Balance Total</div>
                  <div className="text-4xl font-bold">$4,850.00</div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                    <div className="text-sm text-green-700 mb-1">Ingresos</div>
                    <div className="text-2xl font-bold text-green-800">$6,200</div>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4 border border-red-200">
                    <div className="text-sm text-red-700 mb-1">Gastos</div>
                    <div className="text-2xl font-bold text-red-800">$1,350</div>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Alimentación</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">$450</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Transporte</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">$280</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700">Entretenimiento</span>
                    </div>
                    <span className="text-sm font-bold text-gray-900">$320</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
