import { Button } from "@/components/ui/button";
import { Phone, Search, Sparkles, Star } from "lucide-react";
const Hero = () => {
  const handleWhatsAppClick = () => {
    // Updated WhatsApp number
    window.open("https://wa.me/5511982404879", "_blank");
  };
  return <section id="inicio" className="relative py-24 md:py-32 bg-maranja-beige overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(29,45,53,0.6),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8">
            

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-maranja-darkblue leading-tight">
              Marketing e automação para <span className="text-transparent bg-clip-text bg-gradient-to-r from-maranja-darkblue/90 to-maranja-darkblue/60">clínicas</span>
            </h1>
            
            <p className="text-base md:text-lg text-maranja-darkblue/70 mb-8 max-w-lg">
              Potencialize sua clínica com soluções completas de marketing e automação. 
              Atraia mais pacientes e ofereça uma experiência superior.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              
              
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-xl">
              <Button size="lg" className="bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white w-full sm:w-1/2" onClick={() => document.getElementById("ligue-para-mim")?.scrollIntoView({
              behavior: "smooth"
            })}>
                <Phone className="h-4 w-4 mr-2" />
                Fale Conosco
              </Button>
              
              <Button variant="outline" size="lg" className="border-maranja-darkblue text-maranja-darkblue hover:bg-maranja-darkblue hover:text-white w-full sm:w-1/2" onClick={() => document.getElementById("servicos")?.scrollIntoView({
              behavior: "smooth"
            })}>
                Conheça nossos serviços
              </Button>
              
              {/* WhatsApp Button - Temporariamente comentado
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white" onClick={handleWhatsAppClick}>
                <img alt="WhatsApp" className="h-4 w-4 mr-2" src="/lovable-uploads/2749e1c9-f63d-4f1d-8c31-b5f50437f431.png" />
                WhatsApp
              </Button>
              */}
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-[400px] md:h-[400px]">
              <img alt="Maranjá Logo" className="w-full h-full object-contain" src="/lovable-uploads/a10dbad2-9400-4aa3-a107-909e5ea2a372.png" />
            </div>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 relative">
          <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-maranja-darkblue/20 to-transparent"></div>
          
          
        </div>
      </div>
    </section>;
};
export default Hero;