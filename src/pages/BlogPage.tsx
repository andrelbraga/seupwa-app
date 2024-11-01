import Header from '../components/Header';
import Footer from '../components/Footer';
import { CalendarMonth, Person, ArrowRight, ArrowLeft } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function BlogPage() {
  const posts = [
    {
      title: 'Google Play Store agora aceita PWAs como apps nativos',
      date: '15 Mar 2024',
      author: 'Tech Team',
      excerpt: 'Google anuncia suporte oficial para PWAs na Play Store, permitindo que desenvolvedores publiquem suas aplicações web progressivas diretamente na loja.',
      content: 'A Google anunciou hoje uma mudança significativa em sua política para a Play Store, permitindo que Progressive Web Apps (PWAs) sejam publicadas diretamente na loja de aplicativos Android. Esta mudança representa um marco importante na evolução das PWAs e seu reconhecimento como alternativa viável aos aplicativos nativos.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000',
      link: 'https://developer.chrome.com/blog/richer-pwa-installation/'
    },
    {
      title: 'Microsoft Teams migra para PWA e reduz consumo de recursos em 50%',
      date: '10 Mar 2024',
      author: 'Dev Team',
      excerpt: 'A nova versão PWA do Microsoft Teams mostra melhorias significativas em performance e uso de memória, estabelecendo um novo padrão para apps corporativos.',
      content: 'A Microsoft anunciou uma redução significativa no consumo de recursos do Teams após a migração para PWA. A nova versão utiliza 50% menos memória RAM e apresenta tempos de inicialização muito mais rápidos.',
      image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1000',
      link: 'https://techcommunity.microsoft.com/t5/microsoft-teams-blog/microsoft-teams-progressive-web-app-now-available-on-linux/ba-p/3669846'
    },
    // More posts...
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
          <div className="absolute inset-0 bg-grid-white/[0.1] bg-grid-16"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
                Blog PWA
              </h1>
              <p className="mt-4 text-xl text-indigo-100">
                Últimas notícias e tendências sobre Progressive Web Apps
              </p>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar para Home
          </Link>
        </div>

        {/* Blog Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article
                key={index}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
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
                    <CalendarMonth className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Person className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
                  >
                    Ler mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}