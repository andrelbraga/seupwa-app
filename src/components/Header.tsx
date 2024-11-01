import { Menu as MenuIcon, Close, Code } from '@mui/icons-material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const menuItems = isHomePage
    ? [
        { id: 'how-it-works', label: 'Como Funciona', type: 'scroll' },
        { id: 'benefits', label: 'Benefícios', type: 'scroll' },
        { id: 'faq', label: 'Dúvidas', type: 'scroll' },
        { id: 'blog', label: 'Blog', type: 'link', path: '/blog' },
        { id: 'contact', label: 'Contato', type: 'scroll' }
      ]
    : [
        { id: 'home', label: 'Home', type: 'link', path: '/' },
        { id: 'contact', label: 'Contato', type: 'link', path: '/#contact' }
      ];

  const handleNavigation = (item: { id: string; type: string; path?: string }) => {
    if (item.type === 'scroll') {
      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <Code className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">SeuPWA</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.id}
                  to={item.path || '#'}
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
          </nav>

          <div className="hidden md:flex">
            <Link
              to="/#contact"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Solicitar Demo
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isMenuOpen ? <Close className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              item.type === 'link' ? (
                <Link
                  key={item.id}
                  to={item.path || '#'}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </div>
      )}
    </header>
  );
}