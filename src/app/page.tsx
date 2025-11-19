"use client";

import { useState } from 'react';
import { Check, Star, Phone, Mail, Clock, Shield, Award, Users, MessageCircle } from 'lucide-react';

export default function Home() {
  const [formData, setFormData] = useState({
    nome: '',
    email: ''
  });

  const handleWhatsAppClick = () => {
    // Formata a mensagem com os dados do formulário
    const mensagem = `Olá! Gostaria de fazer minha consulta gratuita.\n\n*Nome:* ${formData.nome || '[Não informado]'}\n*E-mail:* ${formData.email || '[Não informado]'}\n\nQuero saber se sou elegível para a Ação Coletiva de Limpeza de Nome.`;

    // Número do WhatsApp (substitua pelo número real)
    const numeroWhatsApp = '5511999999999'; // Formato: código do país + DDD + número
    
    // Codifica a mensagem para URL
    const mensagemCodificada = encodeURIComponent(mensagem);
    
    // Abre o WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`, '_blank');
  };

  const handleFinalCTAClick = () => {
    // Abre o WhatsApp diretamente
    const mensagem = `Olá! Quero limpar meu nome em 72h! Gostaria de fazer minha consulta gratuita e saber se sou elegível para a Ação Coletiva de Limpeza de Nome.`;
    const numeroWhatsApp = '5511999999999';
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`, '_blank');
  };

  const handleFloatingCTAClick = () => {
    // Abre o WhatsApp diretamente
    const mensagem = `Olá! Quero fazer minha consulta gratuita e saber se sou elegível para a Ação Coletiva de Limpeza de Nome.`;
    const numeroWhatsApp = '5511999999999';
    const mensagemCodificada = encodeURIComponent(mensagem);
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a365d] via-[#2d5a87] to-[#4a90b8]">
      {/* Header - TAMANHO AINDA MAIS REDUZIDO */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5">
          <div className="flex items-center justify-center md:justify-between">
            <div className="flex items-center justify-center">
              <img 
                src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a0bc5964-191e-40eb-bb87-6ca165c0d43d.png" 
                alt="Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center text-[#1a365d]">
                <Phone className="w-3.5 h-3.5 mr-2" />
                <span className="font-semibold text-sm">(11) 9999-9999</span>
              </div>
              <div className="flex items-center text-[#1a365d]">
                <Mail className="w-3.5 h-3.5 mr-2" />
                <span className="text-sm">contato@vianovaassessoria.com.br</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - CENTRALIZADO */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - TOTALMENTE CENTRALIZADO */}
            <div className="text-white text-center">
              <div className="inline-flex items-center bg-[#22c55e]/20 text-[#22c55e] px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Clock className="w-4 h-4 mr-2" />
                Resultado em até 72 horas
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-[#22c55e]">Recupere Seu Crédito: Assessoria Judicial para Limpeza de Nome em Tempo Recorde.</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                A única Ação Coletiva com Respaldo Judicial no Brasil que garante o fim das restrições 
                e o resgate da sua dignidade financeira.
              </h2>

              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-[#22c55e] mr-2" />
                  <span className="text-sm font-semibold">100% Legal</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-[#22c55e] mr-2" />
                  <span className="text-sm font-semibold">Respaldo Judicial</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Users className="w-5 h-5 text-[#22c55e] mr-2" />
                  <span className="text-sm font-semibold">Ação Coletiva</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-2">
                  GARANTA SUA VAGA
                </h3>
                <p className="text-gray-600">
                  Nossa Ação Coletiva possui um número limitado de vagas por período. 
                  Preencha seus dados agora e descubra em minutos se você é elegível.
                </p>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#1a365d] mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#22c55e] focus:outline-none transition-colors"
                    placeholder="Digite seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1a365d] mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-[#22c55e] focus:outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Botão WhatsApp com logo e texto da imagem */}
                <button
                  type="button"
                  onClick={handleWhatsAppClick}
                  className="w-full bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white font-bold py-4 px-6 rounded-lg text-lg hover:from-[#20BA5A] hover:to-[#1DA851] transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  SIM! QUERO MINHA CONSULTA GRÁTIS E SEM COMPROMISSO
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Seus dados estão protegidos pela LGPD. Não fazemos spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Dor */}
            <div>
              <h3 className="text-3xl font-bold text-[#1a365d] mb-8">
                Chega de Perder Oportunidades: Diga adeus a estas frustrações:
              </h3>
              <div className="space-y-6">
                {[
                  "Cartão de Crédito NEGADO: Nunca mais receba o aviso de restrição ao tentar comprar.",
                  "Vergonha da Cobrança: Livre-se das ligações incessantes e invasivas em casa e no trabalho.",
                  "Financiamento Bloqueado: Volte a realizar o sonho da casa, carro ou moto nova.",
                  "Score Congelado: Veja seu score de crédito subir rapidamente após a baixa judicial.",
                  "Portas Fechadas: Acabe com as restrições que impedem você de abrir sua própria conta PJ."
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Alívio */}
            <div>
              <h3 className="text-3xl font-bold text-[#1a365d] mb-8">
                Sua Nova Liberdade Começa AGORA. Estes são os Seus Benefícios Exclusivos:
              </h3>
              <div className="space-y-6">
                {[
                  "NOME LIMPO em 72h: Tempo recorde graças à nossa estratégia de Ação Coletiva.",
                  "Crédito Restaurado: Receba o documento 'Nada Consta' e use seu CPF sem medo.",
                  "Paz de Espírito: Desfrute da tranquilidade de ter sua dignidade financeira de volta.",
                  "100% Legal: Nosso processo é amparado pela Justiça, oferecendo total segurança.",
                  "Consulta GRÁTIS: Comece sem pagar nada e descubra se você é elegível hoje mesmo."
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#22c55e] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="text-gray-700 leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-[#1a365d] text-center mb-16">
            Prova Real: Veja Quem Já Superou as Restrições em Tempo Recorde
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcos T.",
                location: "Comerciante, São Paulo/SP",
                title: "Fiquei incrédulo! Meu nome estava limpo em 3 dias.",
                content: "Eu tinha tentado de tudo por meses. A promessa de 72 horas parecia boa demais. Mas em apenas 3 dias, já não havia restrição no meu CPF! Processo transparente e ultra-rápido."
              },
              {
                name: "Juliana C.",
                location: "Analista Financeira, Curitiba/PR",
                title: "Consegui o financiamento que a anos era negado.",
                content: "Meu maior sonho era trocar de carro, mas o score não deixava. Depois da ação, meu nome foi liberado, meu score subiu, e o banco aprovou meu financiamento na primeira tentativa! Agradeço a segurança e o resultado rápido."
              },
              {
                name: "Roberto P.",
                location: "Servidor Público, Belo Horizonte/MG",
                title: "Paz de espírito: É legal e funciona de verdade.",
                content: "O que me deu confiança foi saber que o processo era totalmente amparado pela Justiça e não apenas uma negociação. Recebi meu 'Nada Consta' sem dores de cabeça. Sinto-me seguro e respeitado de novo."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <h4 className="text-lg font-bold text-[#1a365d] mb-3">
                  "{testimonial.title}"
                </h4>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-[#1a365d]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-[#1a365d] text-center mb-16">
            Perguntas Frequentes
          </h3>

          <div className="space-y-8">
            {[
              {
                question: "O processo é legal e seguro?",
                answer: "Sim, 100% legal. Utilizamos uma Ação Coletiva amparada pela Justiça, com Decisão Favorável para limpeza imediata. É a via mais segura e rápida no Brasil."
              },
              {
                question: "Por que o prazo de 72 horas?",
                answer: "Agilidade Judicial. Nosso processo já está em andamento, o que otimiza o prazo padrão. Seu CPF é incluído na decisão já existente, garantindo a baixa das restrições em tempo recorde."
              },
              {
                question: "A dívida some?",
                answer: "Não. A dívida se torna interna, mas ela NÃO IMPEDE MAIS NENHUMA NOVA OPERAÇÃO DE CRÉDITO (financiamentos, empréstimos, etc.). Seu foco é ter o nome limpo imediatamente."
              },
              {
                question: "Há algum custo na consulta?",
                answer: "Não, é 100% gratuita e sem compromisso. Você só avança se for elegível e decidir seguir com o processo."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gradient-to-r from-[#f8fafc] to-[#e2e8f0] rounded-2xl p-8">
                <h4 className="text-xl font-bold text-[#1a365d] mb-4">
                  {faq.question}
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-[#1a365d] via-[#2d5a87] to-[#4a90b8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Não Perca Mais Tempo!
          </h3>
          <p className="text-xl text-blue-100 mb-12">
            Sua liberdade financeira está a um clique de distância. 
            Junte-se aos milhares que já recuperaram sua dignidade.
          </p>
          
          <button 
            onClick={handleFinalCTAClick}
            className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white font-bold py-6 px-12 rounded-2xl text-2xl hover:from-[#20BA5A] hover:to-[#1DA851] transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-4 mx-auto"
          >
            <MessageCircle className="w-8 h-8" />
            CLIQUE AQUI: LIMPAR MEU NOME EM 72H!
          </button>
        </div>
      </section>

      {/* Floating CTA - AGORA COM WHATSAPP DIRETO */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 md:hidden">
        <button 
          onClick={handleFloatingCTAClick}
          className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:from-[#20BA5A] hover:to-[#1DA851] transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          CONSULTA GRÁTIS
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#1a365d] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://k6hrqrxuu8obbfwn.public.blob.vercel-storage.com/temp/a0bc5964-191e-40eb-bb87-6ca165c0d43d.png" 
                  alt="Logo" 
                  className="h-32 w-auto object-contain"
                />
              </div>
              <p className="text-blue-200">
                Restituindo dignidade financeira através da Justiça.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contato</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>(11) 9999-9999</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>contato@vianovaassessoria.com.br</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Garantias</h4>
              <div className="space-y-2 text-blue-200">
                <div className="flex items-center">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>100% Legal e Seguro</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-4 h-4 mr-2" />
                  <span>Respaldo Judicial</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-200">
            <p>&copy; 2024. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
