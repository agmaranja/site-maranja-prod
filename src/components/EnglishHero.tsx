import { Button } from "@/components/ui/button";
import { Phone, Search, Sparkles, Star } from "lucide-react";

const EnglishHero = () => {
  const handleWhatsAppClick = () => {
    // Updated WhatsApp number
    window.open("https://wa.me/5511982404879", "_blank");
  };

  return (
    <section id="home" className="relative py-24 md:py-32 bg-maranja-beige overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(29,45,53,0.6),transparent)]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-maranja-darkblue leading-tight">
              Marketing and automation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-maranja-darkblue to-maranja-darkblue/70">clinics</span>
            </h1>
            
            <p className="text-lg md:text-xl text-maranja-darkblue/80 mb-8 max-w-lg">
              Boost your clinic with complete marketing and automation solutions.
              Attract more patients and provide a superior experience.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 max-w-xl">
              <Button 
                size="lg" 
                className="bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white w-full sm:w-1/2" 
                onClick={() => document.getElementById("quote")?.scrollIntoView({
                  behavior: "smooth"
                })}
              >
                <Phone className="h-4 w-4 mr-2" />
                Contact Us
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-maranja-darkblue text-maranja-darkblue hover:bg-maranja-darkblue hover:text-white w-full sm:w-1/2" 
                onClick={() => document.getElementById("services")?.scrollIntoView({
                  behavior: "smooth"
                })}
              >
                Our Services
              </Button>
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
    </section>
  );
};

export default EnglishHero; 