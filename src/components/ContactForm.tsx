import { useState } from 'react';
import { Send, Loop } from '@mui/icons-material';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-100/30 to-pink-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/3 -left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-100/30 to-indigo-100/30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center glass-card p-8 rounded-2xl mb-16 backdrop-blur-sm">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Solicite seu PWA
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Pronto para transformar sua presença digital? Vamos discutir seu projeto.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          {isSubmitted ? (
            <div className="glass-card p-8 rounded-2xl backdrop-blur-sm animate-fade-in">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0">
                  <Send className="h-8 w-8 text-green-500" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-medium text-gray-900">
                    Obrigado pelo seu interesse!
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Recebemos sua mensagem e entraremos em contato em breve.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl backdrop-blur-sm space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  disabled={isSubmitting}
                  value={formState.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white/50 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  disabled={isSubmitting}
                  value={formState.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white/50 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  disabled={isSubmitting}
                  value={formState.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white/50 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  disabled={isSubmitting}
                  value={formState.company}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white/50 backdrop-blur-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  disabled={isSubmitting}
                  value={formState.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-xl border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed bg-white/50 backdrop-blur-sm"
                />
              </div>

              <div className="text-sm text-gray-500">
                Ao enviar este formulário, você concorda com nossa{' '}
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  Política de Privacidade
                </a>
                .
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full glass-button flex justify-center items-center py-3 px-4 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loop className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Enviando...
                  </>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}