
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const About = () => {
  const achievements = [
    "Mais de 100 projetos entregues",
    "98% de satisfação dos clientes",
    "Equipe especializada e certificada",
    "Suporte contínuo e atualizações"
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Sobre a <span className="text-gradient">Maranja</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Somos uma empresa de tecnologia apaixonada por inovação e excelência. 
              Há mais de 5 anos no mercado, ajudamos empresas de todos os tamanhos a 
              crescerem através de soluções digitais inteligentes e personalizadas.
            </p>
            
            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-maranja-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-maranja-gradient hover:opacity-90 text-white"
            >
              Conheça Nossa História
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-maranja-gradient rounded-3xl blur-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Equipe trabalhando em escritório moderno"
              className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
