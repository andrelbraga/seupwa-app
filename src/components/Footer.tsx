import { Code, Facebook, Twitter, LinkedIn, Mail, Phone } from '@mui/icons-material';

export default function Footer() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold text-white">SeuPWA</span>
            </div>
            <p className="text-gray-400 text-base">
              Transforme sua presença digital com Progressive Web Apps de última geração.
              Construído para performance, projetado para o sucesso.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <LinkedIn className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Links Rápidos
                </h3>
                <ul className="mt-4 space-y-4">
                  {[
                    { id: 'how-it-works', label: 'Como Funciona' },
                    { id: 'benefits', label: 'Benefícios' },
                    { id: 'faq', label: 'Dúvidas' },
                    { id: 'contact', label: 'Contato' }
                  ].map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="text-base text-gray-300 hover:text-white"
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      Política de Privacidade
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-base text-gray-300 hover:text-white">
                      Termos de Serviço
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                Contato
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-300">(11) 4002-8922</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-2" />
                  <span className="text-gray-300">contato@seupwa.com.br</span>
                </li>
              </ul>

              <div className="mt-8">
                <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
                  Assine nossa newsletter
                </h3>
                <form className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Digite seu e-mail"
                    className="min-w-0 flex-1 rounded-md border-gray-700 bg-gray-800 text-white focus:border-indigo-500 focus:ring-indigo-500"
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Assinar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 xl:text-center">
            © 2024 SeuPWA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}