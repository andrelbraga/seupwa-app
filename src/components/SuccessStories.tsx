import { ShoppingBag, Article, Brush, CreditCard, CalendarMonth, Message, OpenInNew } from '@mui/icons-material';

export default function SuccessStories() {
  const stories = [
    {
      icon: ShoppingBag,
      type: 'E-commerce',
      company: 'Pinterest',
      metrics: [
        '40% mais tempo no site',
        '44% mais receita/usuário',
        '60% mais engajamento',
        '50% menos dados'
      ],
      description: 'Após migrar para PWA, a Pinterest viu um aumento significativo no engajamento e conversões em mercados emergentes.',
      source: 'https://developers.google.com/web/showcase/2017/pinterest',
      isReal: true
    },
    {
      icon: Article,
      type: 'Portal de Notícias',
      company: 'Twitter Lite',
      metrics: [
        '65% mais páginas/sessão',
        '75% mais tweets',
        '20% menos abandono',
        '10x menos dados'
      ],
      description: 'O Twitter Lite PWA revolucionou o acesso em mercados emergentes, reduzindo drasticamente o uso de dados.',
      source: 'https://developers.google.com/web/showcase/2017/twitter',
      isReal: true
    },
    {
      icon: Brush,
      type: 'App Personalizado',
      company: 'Starbucks',
      metrics: [
        '2x mais pedidos/dia',
        '94% menos dados',
        'Desktop + Mobile',
        'Suporte Offline'
      ],
      description: 'O PWA da Starbucks oferece uma experiência personalizada completa, com cardápio dinâmico e pedidos offline.',
      source: 'https://formidable.com/work/starbucks-progressive-web-app/',
      isReal: true
    },
    {
      icon: CreditCard,
      type: 'App de Pagamentos',
      company: 'MakeMyTrip',
      metrics: [
        '3x mais conversões',
        '38% mais páginas/sessão',
        '160% mais sessões',
        '67% menos dados'
      ],
      description: 'A maior plataforma de viagens da Índia revolucionou suas conversões com PWA.',
      source: 'https://developers.google.com/web/showcase/2017/make-my-trip',
      isReal: true
    },
    {
      icon: CalendarMonth,
      type: 'App de Produtividade',
      company: 'Google Maps Go',
      metrics: [
        '1/10 do tamanho original',
        'Suporte Offline',
        '50% menos RAM',
        'Performance superior'
      ],
      description: 'Versão PWA do Google Maps para dispositivos com recursos limitados.',
      source: 'https://play.google.com/store/apps/details?id=com.google.android.apps.mapslite',
      isReal: true
    },
    {
      icon: Message,
      type: 'App de Comunicação',
      company: 'Telegram Web',
      metrics: [
        'Mensagens instantâneas',
        'Notificações push',
        'Modo offline',
        'Instalável'
      ],
      description: 'O Telegram Web PWA oferece uma experiência completa de mensageria multiplataforma.',
      source: 'https://web.telegram.org/',
      isReal: true
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            PWAs que Transformaram o Mercado
          </h2>
          <p className="mt-6 text-xl text-gray-500 leading-relaxed">
            Casos reais de empresas que revolucionaram sua presença digital com Progressive Web Apps
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <div
                key={index}
                className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute -top-4 left-6">
                  <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-800 ring-4 ring-white">
                    <Icon className="h-4 w-4 mr-2" />
                    {story.type}
                  </span>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {story.company}
                    </h3>
                    {story.source && (
                      <a
                        href={story.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 hover:text-indigo-700 transition-colors"
                        title="Ver fonte"
                      >
                        <OpenInNew className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-600 mb-6 line-clamp-2">
                    {story.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {story.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-xl text-sm font-medium text-gray-700 text-center hover:from-gray-100 hover:to-gray-200 transition-colors"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            * Todos os casos apresentados são reais e documentados, com fontes verificáveis.
          </p>
        </div>
      </div>
    </section>
  );
}