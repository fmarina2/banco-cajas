import { Wallet, PieChart, Brain } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Wallet,
      title: 'Crear cajitas virtuales',
      description: 'Organiza tu dinero en cajitas personalizadas y define presupuestos inteligentes para cada una.',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: PieChart,
      title: 'Analizar tus gastos',
      description: 'Visualiza tus gastos por categoría con gráficos interactivos y descubre patrones de consumo.',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600'
    },
    {
      icon: Brain,
      title: 'Sugerencias inteligentes',
      description: 'Recibe alertas automáticas sobre gastos hormiga y consejos personalizados para ahorrar más.',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Todo lo que necesitas para{' '}
          <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
            controlar tus finanzas
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Herramientas poderosas y fáciles de usar para gestionar tu dinero de forma inteligente
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className={`${feature.bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <Icon className={`w-8 h-8 ${feature.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
