import { BarChart3, TrendingDown, MessageSquare, Sparkles } from 'lucide-react';

export default function Demo() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            <BarChart3 className="w-4 h-4" />
            <span>Analytics avanzado</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Visualiza tus gastos con{' '}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              gráficos interactivos
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-relaxed">
            Entiende mejor tus finanzas con visualizaciones claras y reportes detallados que te ayudan a tomar mejores decisiones.
          </p>

          <div className="space-y-4 pt-4">
            <div className="flex items-start space-x-3">
              <div className="bg-blue-100 rounded-full p-1 mt-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Gráficos en tiempo real</h4>
                <p className="text-gray-600">Visualiza tus gastos al instante con actualizaciones automáticas</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-green-100 rounded-full p-1 mt-1">
                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Comparativas mensuales</h4>
                <p className="text-gray-600">Compara tus gastos mes a mes para identificar tendencias</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="bg-purple-100 rounded-full p-1 mt-1">
                <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Exporta reportes</h4>
                <p className="text-gray-600">Descarga tus análisis en PDF o Excel cuando lo necesites</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Análisis de Gastos</h3>
                <TrendingDown className="w-5 h-5 text-green-600" />
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Alimentación</span>
                    <span className="font-semibold text-gray-900">33%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full" style={{ width: '33%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Entretenimiento</span>
                    <span className="font-semibold text-gray-900">24%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{ width: '24%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Transporte</span>
                    <span className="font-semibold text-gray-900">21%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-3 rounded-full" style={{ width: '21%' }}></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Otros</span>
                    <span className="font-semibold text-gray-900">22%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full" style={{ width: '22%' }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-6 mt-6 border border-blue-100">
                <div className="flex items-start space-x-3">
                  <div className="bg-white rounded-xl p-2 shadow-sm">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm font-semibold text-gray-900">Asistente IA</span>
                      <Sparkles className="w-4 h-4 text-blue-500" />
                    </div>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      He detectado un aumento en tus gastos de comida rápida este mes. ¿Quieres crear una cajita para controlarlo?
                    </p>
                    <div className="flex space-x-2 mt-4">
                      <button className="text-xs bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Crear cajita
                      </button>
                      <button className="text-xs border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                        Más tarde
                      </button>
                    </div>
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
