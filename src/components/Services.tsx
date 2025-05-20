import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Services = () => {
  // Updated services list with new descriptions
  const servicesList = [
    {
      id: 1,
      title: "Criação de Sites com IA",
      description: "Sites otimizados para SEO, responsivos, com conteúdo automatizado adaptado à especialidade da clínica.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Automação de Agendamentos 24h com Agentes de I.A",
      description: "Agentes de I.A disponíveis 24h para realizar agendamentos, reagendamentos e cancelamentos de consultas. Integração com SMS, WhatsApp e e-mail.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Relatórios Inteligentes de Conversas",
      description: "Análise automática das interações com pacientes para insights sobre dúvidas frequentes, objeções e oportunidades de melhoria no atendimento.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Pacote de Conteúdo para Redes Sociais",
      description: "Criação regular de posts (imagens, legendas e hashtags), com inteligência de engajamento e adaptação por especialidade (ex: dermato, cardio).",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Gestão de CRM e Follow-Up Inteligente",
      description: "Automação de fluxos de nutrição e reativação de pacientes. Segmentação baseada em comportamento e histórico.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
        </svg>
      )
    },
    {
      id: 6,
      title: "Monitoramento de Reputação Online",
      description: "Acompanhamento em tempo real de avaliações no Google, Doctoralia, Facebook e Instagram com alertas e análise de sentimento.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      )
    },
    {
      id: 7,
      title: "Pacote de Tráfego Local Inteligente",
      description: "Campanhas geolocalizadas no Google Ads, Facebook/Instagram Ads, com foco em atrair pacientes próximos.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
        </svg>
      )
    },
    {
      id: 8,
      title: "Otimização de Presença Google (SEO Local)",
      description: "Criação e otimização de página \"Google Business\", uso de Google Tags no site e estratégias de review para ranqueamento local.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
      )
    },
    /* Comentado temporariamente - Integração com Prontuário
    {
      id: 9,
      title: "Integração com Prontuário",
      description: "Conectamos sistemas de marketing com o software que a clínica já usa (ex: iClinic, Doctoralia, etc.) para maior eficiência.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      )
    }
    */
  ];

  // Track which card is flipped
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);

  // Function to handle WhatsApp click
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511982404879", "_blank");
  };

  // Function to handle card flip
  const handleCardFlip = (cardId: number) => {
    if (flippedCardId === cardId) {
      setFlippedCardId(null);
    } else {
      setFlippedCardId(cardId);
    }
  };

  return (
    <section id="servicos" className="py-16 md:py-24 bg-maranja-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-maranja-darkblue mb-6">
            Nossos Serviços
          </h2>
          <p className="text-maranja-darkblue/70 max-w-3xl mx-auto text-base md:text-lg">
            Soluções completas para impulsionar sua clínica com tecnologias modernas e processos eficientes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
            {servicesList.slice(0, 6).map((service) => (
              <div key={service.id} className="perspective-1000">
                <motion.div 
                  className={`card-container relative w-full h-72 cursor-pointer`}
                  onClick={() => handleCardFlip(service.id)}
                  animate={{ rotateY: flippedCardId === service.id ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front of Card - Only Title */}
                  <div 
                    className={`absolute w-full h-full backface-hidden ${
                      flippedCardId === service.id ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-300 rounded-lg border border-maranja-darkblue/10 bg-white/90 backdrop-blur-sm hover:shadow-md`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Card className="h-full border-none shadow-none bg-transparent flex flex-col items-center justify-center text-center p-8">
                      <div className="w-20 h-20 bg-maranja-beige rounded-full flex items-center justify-center mb-8">
                        <div className="w-10 h-10 text-[#a58c6b] flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                      <CardTitle className="text-maranja-darkblue text-2xl mb-4">{service.title}</CardTitle>
                      <p className="mt-2 text-sm text-maranja-darkblue/50 font-medium">
                        Clique para saber mais
                      </p>
                    </Card>
                  </div>
                  
                  {/* Back of Card - Full Description */}
                  <div 
                    className={`absolute w-full h-full backface-hidden ${
                      flippedCardId === service.id ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-300 bg-maranja-darkblue text-white rounded-lg border border-maranja-darkblue/10 flex flex-col justify-center p-8`}
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                    <p className="text-white/80 text-lg">
                      {service.description}
                    </p>
                    <p className="mt-6 text-sm italic text-white/60">Clique para voltar</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
          
          {/* Container específico para os dois últimos cards */}
          <div className="lg:col-span-3 flex justify-center gap-8 md:gap-12 lg:gap-16">
            {servicesList.slice(6, 8).map((service) => (
              <div key={service.id} className="perspective-1000 w-full md:w-1/2 lg:w-1/3">
                <motion.div 
                  className={`card-container relative w-full h-72 cursor-pointer`}
                  onClick={() => handleCardFlip(service.id)}
                  animate={{ rotateY: flippedCardId === service.id ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Front of Card - Only Title */}
                  <div 
                    className={`absolute w-full h-full backface-hidden ${
                      flippedCardId === service.id ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-300 rounded-lg border border-maranja-darkblue/10 bg-white/90 backdrop-blur-sm hover:shadow-md`}
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Card className="h-full border-none shadow-none bg-transparent flex flex-col items-center justify-center text-center p-6">
                      <div className="w-16 h-16 bg-maranja-beige rounded-full flex items-center justify-center mb-6">
                        <div className="w-8 h-8 text-[#a58c6b] flex items-center justify-center">
                          {service.icon}
                        </div>
                      </div>
                      <CardTitle className="text-maranja-darkblue text-xl">{service.title}</CardTitle>
                      <p className="mt-4 text-sm text-maranja-darkblue/50 font-medium">
                        Clique para saber mais
                      </p>
                    </Card>
                  </div>
                  
                  {/* Back of Card - Full Description */}
                  <div 
                    className={`absolute w-full h-full backface-hidden ${
                      flippedCardId === service.id ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-300 bg-maranja-darkblue text-white rounded-lg border border-maranja-darkblue/10 flex flex-col justify-center p-8`}
                    style={{ 
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-white/80 text-base">
                      {service.description}
                    </p>
                    <p className="mt-4 text-sm italic text-white/60">Clique para voltar</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* On-Demand Automation Card */}
        <div className="mt-16">
          <Card className="bg-white/90 p-6 md:p-8 rounded-lg shadow-lg border border-maranja-darkblue/10 hover:shadow-xl transition-shadow">
            <div className="cursor-pointer" onClick={() => handleCardFlip(10)}>
              <motion.div className="card-container relative w-full" animate={{
                rotateY: flippedCardId === 10 ? 180 : 0
              }} transition={{
                duration: 0.6
              }} style={{
                transformStyle: "preserve-3d"
              }}>
                {/* Front of Card */}
                <div className={`backface-hidden ${flippedCardId === 10 ? "opacity-0" : "opacity-100"} transition-opacity duration-300`} style={{
                  backfaceVisibility: "hidden"
                }}>
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-3/5 mb-6 md:mb-0 md:pr-8">
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-maranja-darkblue">Automação Sob Demanda</h3>
                      <p className="text-maranja-darkblue/80 mb-4">Nossa equipe permite que você solicite soluções personalizadas conforme sua necessidade. Pague apenas pelo que usar.</p>
                      <ul className="list-disc list-inside space-y-2 mb-6 text-maranja-darkblue/80">
                        <li>Soluções flexíveis</li>
                        <li>Sem compromissos longos</li>
                        <li>Modelo pay-as-you-go</li>
                        <li>Personalizado para sua clínica</li>
                      </ul>
                      <Button className="bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white">
                        Saiba Mais
                      </Button>
                    </div>
                    <div className="md:w-2/5">
                      <img src="/lovable-uploads/a10dbad2-9400-4aa3-a107-909e5ea2a372.png" alt="Automation Card" className="w-full h-auto rounded-md shadow-md" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-center text-maranja-darkblue/60 font-medium">
                    Clique para ver benefícios detalhados
                  </p>
                </div>

                {/* Back of Card - Simplified content to fit */}
                <div className={`absolute inset-0 backface-hidden ${flippedCardId === 10 ? "opacity-100" : "opacity-0"} transition-opacity duration-300 bg-maranja-darkblue text-white rounded-lg p-6 md:p-8`} style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)"
                }}>
                  <h3 className="text-xl font-bold mb-4 text-center">Benefícios da Automação Sob Demanda</h3>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Flexibilidade</h4>
                      <p className="text-sm">Use créditos pré-pagos para lembretes, acompanhamentos ou tarefas administrativas.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Economia</h4>
                      <p className="text-sm">Pague apenas pelos serviços que você realmente utiliza, sem taxas mensais fixas.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-1">Suporte Técnico</h4>
                      <p className="text-sm">Suporte prioritário incluído para garantir automações perfeitas.</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 text-center">
                    <div className="relative inline-block">
                      <Button 
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background h-11 rounded-md px-8 border-maranja-darkblue text-maranja-darkblue hover:bg-maranja-darkblue hover:text-white"
                        onClick={handleWhatsAppClick}
                      >
                        Solicitar Demonstração
                      </Button>
                    </div>
                  </div>
                  
                  <p className="mt-3 text-xs italic text-center text-white/60">Clique para voltar</p>
                </div>
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;
