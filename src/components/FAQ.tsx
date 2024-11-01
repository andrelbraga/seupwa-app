import { useState } from 'react';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'O que é um PWA?',
      answer: 'Um Progressive Web App (PWA) é um tipo de aplicação que combina as melhores características de sites e aplicativos móveis. Ele roda no navegador mas pode ser instalado em dispositivos, funciona offline e oferece uma experiência similar a um aplicativo nativo.',
    },
    {
      question: 'Qual a diferença entre um PWA e um aplicativo nativo?',
      answer: 'Diferente dos apps nativos que precisam ser baixados das lojas de aplicativos, PWAs podem ser instalados diretamente do navegador. São independentes de plataforma, ocupam menos espaço e atualizam automaticamente. Embora possam não ter acesso a todos os recursos do dispositivo como apps nativos, oferecem a maioria das funcionalidades essenciais.',
    },
    {
      question: 'Quanto custa para desenvolver um PWA?',
      answer: 'O custo de desenvolvimento de PWAs varia com base na complexidade, recursos e requisitos. Geralmente, são mais econômicos que desenvolver apps nativos separados para diferentes plataformas, já que você precisa manter apenas uma base de código. Entre em contato para um orçamento detalhado.',
    },
    {
      question: 'Como os PWAs são atualizados?',
      answer: 'PWAs atualizam automaticamente quando os usuários visitam seu site. O service worker verifica novas versões e atualizações em segundo plano, garantindo que os usuários sempre tenham a versão mais recente sem atualizações manuais ou processos de aprovação em lojas de apps.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-indigo-100/30 to-purple-100/30 blur-3xl"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-blue-100/30 to-indigo-100/30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center glass-card p-8 rounded-2xl mb-16 backdrop-blur-sm">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Dúvidas Frequentes
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Perguntas comuns sobre Progressive Web Apps
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full glass-card p-6 rounded-xl backdrop-blur-sm hover:shadow-lg transition-all duration-300"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <KeyboardArrowUp className="h-5 w-5 text-indigo-600" />
                  ) : (
                    <KeyboardArrowDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
                {openIndex === index && (
                  <div className="mt-4 text-gray-600 border-t border-gray-200 pt-4">
                    {faq.answer}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">Ainda tem dúvidas?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="glass-button inline-flex items-center px-8 py-3 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300"
          >
            Fale Conosco
          </button>
        </div>
      </div>
    </section>
  );
}