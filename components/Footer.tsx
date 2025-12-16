import React from 'react';
import { Scale, Linkedin, Instagram, Facebook, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-400 py-16 border-t border-navy-800">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Scale className="text-gold-500 w-6 h-6" />
              <span className="font-serif text-xl font-bold text-white tracking-wide">
                MONTEIRO
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Excelência jurídica e compromisso ético. Atuamos com dedicação para garantir a melhor defesa dos interesses de nossos clientes.
            </p>
            <div className="flex gap-4">
              <Link to="/em-desenvolvimento" className="hover:text-gold-500 transition-colors"><Linkedin size={20} /></Link>
              <Link to="/em-desenvolvimento" className="hover:text-gold-500 transition-colors"><Instagram size={20} /></Link>
              <Link to="/em-desenvolvimento" className="hover:text-gold-500 transition-colors"><Facebook size={20} /></Link>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Navegação</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#hero" className="hover:text-gold-500 transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-gold-500 transition-colors">O Escritório</a></li>
              <li><a href="#atuacao" className="hover:text-gold-500 transition-colors">Áreas de Atuação</a></li>
              <li><a href="#contato" className="hover:text-gold-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Institutional */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Institucional</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/em-desenvolvimento" className="hover:text-gold-500 transition-colors">Política de Privacidade</Link></li>
              <li><Link to="/em-desenvolvimento" className="hover:text-gold-500 transition-colors">Termos de Uso</Link></li>
              <li><Link to="/em-desenvolvimento" className="hover:text-gold-500 transition-colors">Trabalhe Conosco</Link></li>
            </ul>
          </div>

          {/* Legal Info */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Registro</h4>
            <p className="text-sm mb-2">Monteiro & Associados Advocacia</p>
            <p className="text-sm mb-4">CNPJ: 00.000.000/0001-00</p>
            <div className="inline-block border border-slate-700 px-4 py-2 rounded-sm bg-navy-900">
              <span className="text-xs text-slate-300">Inscrito na OAB/SP sob nº 00.000</span>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <div className="text-center md:text-left">
            <p className="mb-2">&copy; {new Date().getFullYear()} Monteiro & Associados. Todos os direitos reservados.</p>
            <p className="text-slate-600 max-w-md">
              Este site tem caráter meramente informativo e respeita as normas do Código de Ética e Disciplina da OAB.
            </p>
          </div>

          <a
            href="https://matheus-amorim.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-gold-500 transition-colors"
          >
            Desenvolvido por <span className="font-medium">Matheus Amorim</span>
            <Heart size={12} className="text-red-600 fill-red-600" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;