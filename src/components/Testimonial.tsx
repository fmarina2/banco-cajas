import { Quote, Star } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-gradient-to-br from-blue-600 to-green-500 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10">
          <Quote className="w-16 h-16 mx-auto mb-6 opacity-50" />

          <blockquote className="text-2xl lg:text-4xl font-bold mb-8 leading-relaxed max-w-4xl mx-auto">
            "Desde que uso Banco Cajitas IA controlo mis gastos sin estrés."
          </blockquote>

          <div className="flex justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current text-yellow-300" />
            ))}
          </div>

          <div className="space-y-2">
            <p className="text-xl font-semibold">María González</p>
            <p className="text-blue-100">Diseñadora Gráfica</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            "La función de detectar gastos hormiga me ha ayudado a ahorrar más de $200 al mes."
          </p>
          <div className="text-center">
            <p className="font-semibold text-gray-900">Carlos Ruiz</p>
            <p className="text-sm text-gray-600">Estudiante</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            "Súper intuitiva. Mis cajitas me ayudan a mantener mis finanzas organizadas sin complicaciones."
          </p>
          <div className="text-center">
            <p className="font-semibold text-gray-900">Ana López</p>
            <p className="text-sm text-gray-600">Emprendedora</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex justify-center space-x-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-700 mb-4 leading-relaxed">
            "El asistente IA es increíble. Me da sugerencias personalizadas que realmente funcionan."
          </p>
          <div className="text-center">
            <p className="font-semibold text-gray-900">Luis Martínez</p>
            <p className="text-sm text-gray-600">Ingeniero</p>
          </div>
        </div>
      </div>
    </section>
  );
}
