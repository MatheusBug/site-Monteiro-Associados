import React, { useState, useRef } from 'react';
import Section from './ui/Section';
import FadeIn from './ui/FadeIn';
import { MapPin, Phone, Mail, Clock, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  // CONFIGURAÇÃO: COLOQUE AQUI O E-MAIL QUE VAI RECEBER AS MENSAGENS
  const DESTINATION_EMAIL = 'monteiro.advocacia.contato@gmail.com';

  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${DESTINATION_EMAIL}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          _subject: `Novo contato pelo site: ${data.subject || 'Geral'}`, // Assunto personalizado no email
          _template: 'table' // Formatação bonitinha no email
        })
      });

      if (response.ok) {
        setStatus('success');
        formRef.current.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Erro no envio:", error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contato" className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <FadeIn direction="right">
          <h2 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">Fale Conosco</h2>
          <h3 className="font-serif text-4xl text-navy-900 font-bold mb-8">Estamos prontos para atendê-lo.</h3>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="text-gold-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-bold text-navy-900">Endereço</h4>
                <p className="text-slate-600">Av. Paulista, 1000, Sala 1500<br />Bela Vista, São Paulo - SP</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-gold-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-bold text-navy-900">Telefone</h4>
                <p className="text-slate-600">(11) 3000-0000</p>
                <p className="text-slate-600">(11) 99999-9999 (WhatsApp)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-gold-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-bold text-navy-900">E-mail</h4>
                <p className="text-slate-600">contato@monteiroassociados.com.br</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-gold-600 w-6 h-6 mt-1" />
              <div>
                <h4 className="font-bold text-navy-900">Horário de Atendimento</h4>
                <p className="text-slate-600">Segunda a Sexta: 09:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-48 bg-slate-200 rounded-sm overflow-hidden relative grayscale">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098170216767!2d-46.65429492383796!3d-23.56491746172659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1715456789012!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </FadeIn>

        {/* Form */}
        <FadeIn direction="left" delay={0.2}>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-slate-50 p-8 md:p-10 shadow-lg border-t-4 border-navy-900 h-full flex flex-col justify-center"
          >
            <h4 className="font-serif text-2xl text-navy-900 font-bold mb-6">Envie uma Mensagem</h4>

            <div className="space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-semibold text-slate-700 mb-2">Nome Completo</label>
                <input
                  type="text"
                  name="Nome"
                  id="user_name"
                  required
                  className="w-full px-4 py-3 border border-slate-300 bg-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-sm font-semibold text-slate-700 mb-2">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="user_email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 bg-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Telefone</label>
                <input
                  type="tel"
                  name="Telefone"
                  id="phone"
                  className="w-full px-4 py-3 border border-slate-300 bg-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Assunto</label>
                <select
                  name="subject"
                  id="subject"
                  className="w-full px-4 py-3 border border-slate-300 bg-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                >
                  <option value="Contato Geral">Selecione um assunto</option>
                  <option value="Direito Empresarial">Direito Empresarial</option>
                  <option value="Direito Civil">Direito Civil</option>
                  <option value="Família e Sucessões">Família e Sucessões</option>
                  <option value="Outros">Outros</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Mensagem</label>
                <textarea
                  name="Mensagem"
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 bg-white focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                  placeholder="Descreva brevemente sua necessidade..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-navy-900 text-white font-bold uppercase tracking-widest py-4 hover:bg-gold-600 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" /> Enviando...
                  </>
                ) : (
                  <>
                    <Mail size={18} />
                    Enviar Mensagem
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 flex items-center gap-2 rounded-sm animate-fade-in text-sm">
                  <CheckCircle size={20} className="flex-shrink-0" />
                  <span>Sucesso! Verifique seu e-mail para ativar o formulário (apenas na 1ª vez).</span>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 flex items-center gap-2 rounded-sm animate-fade-in text-sm">
                  <AlertCircle size={20} className="flex-shrink-0" />
                  <span>Erro ao enviar. Tente novamente mais tarde.</span>
                </div>
              )}
            </div>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
};

export default Contact;