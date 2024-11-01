import { CalendarToday, Person, ArrowForward } from '@mui/icons-material';

export default function Blog() {
  const posts = [
    {
      title: 'Google Play Store agora aceita PWAs como apps nativos',
      date: '15 Mar 2024',
      author: 'Tech Team',
      excerpt: 'Google anuncia suporte oficial para PWAs na Play Store, permitindo que desenvolvedores publiquem suas aplicações web progressivas diretamente na loja.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000',
      link: 'https://developer.chrome.com/blog/richer-pwa-installation/'
    },
    {
      title: 'Microsoft Teams migra para PWA e reduz consumo de recursos em 50%',
      date: '10 Mar 2024',
      author: 'Dev Team',
      excerpt: 'A nova versão PWA do Microsoft Teams mostra melhorias significativas em performance e uso de memória, estabelecendo um novo padrão para apps corporativos.',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1000',
      link: 'https://techcommunity.microsoft.com/t5/microsoft-teams-blog/microsoft-teams-progressive-web-app-now-available-on-linux/ba-p/3669846'
    },
    {
      title: 'PWAs ultrapassam downloads de apps nativos em 2024',
      date: '5 Mar 2024',
      author: 'Research Team',
      excerpt: 'Estudo mostra que usuários preferem cada vez mais PWAs devido à facilidade de acesso e menor consumo de armazenamento.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      link: 'https://web.dev/case-studies/'
    },
    {
      title: 'Apple amplia suporte a PWAs no iOS 17.4',
      date: '1 Mar 2024',
      author: 'Mobile Team',
      excerpt: 'Novas atualizações do Safari trazem melhor integração de PWAs com recursos nativos do iOS, incluindo notificações push e acesso ao hardware.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000',
      link: 'https://webkit.org/blog/'
    }
  ];

  return (
    <section id="blog" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-100/30 to-pink-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-100/30 to-indigo-100/30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center glass-card p-8 rounded-2xl mb-16 backdrop-blur-sm">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Blog PWA
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Últimas notícias e tendências sobre Progressive Web Apps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <CalendarToday className="h-4 w-4 mr-2" />
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <Person className="h-4 w-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-indigo-600 font-medium">
                  Ler mais
                  <ArrowForward className="ml-2 h-4 w-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://web.dev/progressive-web-apps/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button inline-flex items-center px-8 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Ver Mais Notícias
            <ArrowForward className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}