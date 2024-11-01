import { Lightbulb, Code, Rocket } from '@mui/icons-material';

export default function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: 'Entendendo as Necessidades',
      description: 'Analisamos os requisitos do seu negócio e as necessidades dos usuários para criar a estratégia PWA perfeita.',
    },
    {
      icon: Code,
      title: 'Desenvolvimento Personalizado',
      description: 'Nossa equipe desenvolve seu PWA usando tecnologias de ponta e as melhores práticas.',
    },
    {
      icon: Rocket,
      title: 'Lançamento e Suporte',
      description: 'Implementamos seu PWA e fornecemos manutenção e suporte contínuos.',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100/40 to-purple-100/40 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-100/40 to-indigo-100/40 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center glass-card p-8 rounded-2xl mb-16 backdrop-blur-sm">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Como Funciona
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Nosso processo otimizado garante que seu PWA seja entregue de forma eficiente e eficaz.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative flex flex-col items-center">
                  <div className="absolute -top-12 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mt-8 text-xl font-bold text-gray-900 text-center">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-gray-600 mb-6">
            Quer saber como um PWA pode transformar seu negócio?
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-button inline-flex items-center px-8 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Vamos Conversar
          </button>
        </div>
      </div>
    </section>
  );
}