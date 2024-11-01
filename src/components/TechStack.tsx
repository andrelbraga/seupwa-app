import { useState } from 'react';

export default function TechStack() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const technologies = [
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    {
      name: 'Angular',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg'
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Vite',
      icon: 'https://vitejs.dev/logo.svg'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    {
      name: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'HTML',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'Tailwind CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
    },
    {
      name: 'Material Design',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
    },
    {
      name: 'Lucide React',
      icon: 'https://lucide.dev/logo.svg'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Tecnologias que Utilizamos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Stack moderna e robusta para criar PWAs de alta performance
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`w-20 h-20 transition-all duration-300 ${
                    hoveredIndex === index 
                      ? 'filter-none scale-110' 
                      : 'grayscale brightness-50'
                  }`}
                />
              </div>
              <span className={`mt-4 text-sm font-medium transition-colors duration-300 ${
                hoveredIndex === index ? 'text-indigo-600' : 'text-gray-500'
              }`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}