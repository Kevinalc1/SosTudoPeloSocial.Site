import React, { useState } from 'react';
import { Menu, X, Instagram, Facebook, Phone, Mail, Download } from 'lucide-react';
import logo from '../assets/logosemfundo.png';
import regulamentoPDF from '../assets/programs/regulamento de compras .pdf';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Programas e Ações', href: '#programas' },
    { name: 'Galeria', href: '#galeria' },
    { name: 'Serviços e Contato', href: '#contato' }
  ];

  const handleDownloadRegulamento = () => {
    const link = document.createElement('a');
    link.href = regulamentoPDF;
    link.download = 'Regulamento de Compras.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with social links */}
        <div className="flex justify-between items-center py-2 border-b border-gray-200">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <a href="tel:+5581999999999" className="flex items-center space-x-1 hover:text-primary transition-colors">
              <Mail size={14} />
              <span>sostudopelosocial@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/sostudopelosocial/" className="flex items-center space-x-1 hover:text-primary transition-colors">
              <Instagram size={14} />
              <span>@SosTudopelosocial</span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="SOS Tudo pelo Social" className="h-12 w-auto" />
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={handleDownloadRegulamento}
              className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              <Download size={18} />
              <span>Regulamento de Compras</span>
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={() => {
                  handleDownloadRegulamento();
                  setIsMenuOpen(false);
                }}
                className="flex items-center space-x-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium w-full justify-center"
              >
                <Download size={18} />
                <span>Regulamento de Compras</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

