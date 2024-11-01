import { Speed, WifiOff, GetApp, Sync, Search, AttachMoney } from '@mui/icons-material';

export default function Benefits() {
  const benefits = [
    {
      icon: Speed,
      title: 'Ultra Rápido',
      description: 'Carregamento instantâneo e desempenho suave como apps nativos',
    },
    {
      icon: WifiOff,
      title: 'Acesso Offline',
      description: 'Funciona sem conexão com internet usando service workers',
    },
    {
      icon: GetApp,
      title: 'Instalação Fácil',
      description: 'Sem necessidade de loja de apps - instale direto do navegador',
    },
    {
      icon: Sync,
      title: 'Atualizações Automáticas',
      description: 'Sempre atualizado sem intervenção manual',
    },
    {
      icon: Search,
      title: 'Otimizado para SEO',
      description: 'Melhor visibilidade nos mecanismos de busca',
    },
    {
      icon: AttachMoney,
      title: 'Custo-Benefício',
      description: 'Uma única base de código para web e mobile',
    },
  ];

  return (
    <section id="benefits" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-100/30 to-pink-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-100/30 to-indigo-100/30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center glass-card p-8 rounded-2xl mb-16 backdrop-blur-sm">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Por Que Escolher um PWA para Seu Negócio?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Progressive Web Apps combinam o melhor da web e dos aplicativos móveis
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-2xl backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}