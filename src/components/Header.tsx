
import { useState } from "react";
import { Button } from "@/components/ui/button";
import LanguageSelector from "@/components/LanguageSelector";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const isEnglish = window.location.pathname.includes("/en");

  return <header className="sticky top-0 z-50 bg-maranja-beige/95 backdrop-blur-sm py-4 border-b border-maranja-darkblue/10 relative">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Just the animal logo without text */}
          <img alt="Maranjá Logo" className="h-12 md:h-14" src="/lovable-uploads/b30ea72c-a074-4b0e-bd99-44b4f833ac99.png" />
          {/* Separate Maranjá text with premium styling */}
          <div className="ml-4 hidden md:block">
            <h1 className="text-2xl font-bold text-maranja-darkblue tracking-wider">
              MARANJÁ
            </h1>
            <p className="text-xs uppercase tracking-widest text-maranja-darkblue/70">
              {isEnglish ? "MARKETING AND AUTOMATION" : "MARKETING E AUTOMAÇÃO"}
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href={isEnglish ? "#home" : "#inicio"} className="text-maranja-darkblue hover:text-maranja-darkblue/80 font-medium">
            {isEnglish ? "Home" : "Início"}
          </a>
          <a href="#servicos" className="text-maranja-darkblue hover:text-maranja-darkblue/80 font-medium">
            {isEnglish ? "Services" : "Serviços"}
          </a>
          <a href="#contato" className="text-maranja-darkblue hover:text-maranja-darkblue/80 font-medium">
            {isEnglish ? "Contact" : "Contato"}
          </a>
          <Button className="bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white" onClick={() => document.getElementById("ligue-para-mim")?.scrollIntoView({
          behavior: "smooth"
        })}>
            {isEnglish ? "Call me" : "Ligue para mim"}
          </Button>
          <LanguageSelector />
        </nav>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          {/* Show Maranjá text on mobile too */}
          <div className="mr-4">
            <h1 className="text-xl font-bold text-maranja-darkblue">MARANJÁ</h1>
          </div>
          <LanguageSelector />
          <button onClick={toggleMenu} className="text-maranja-darkblue ml-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden absolute top-full left-0 w-full bg-maranja-beige shadow-md py-4 px-4 border-t border-maranja-darkblue/10 z-50">
          <nav className="flex flex-col space-y-4">
            <a href={isEnglish ? "#home" : "#inicio"} className="text-maranja-darkblue py-2 px-4 hover:bg-maranja-cream rounded-md" onClick={toggleMenu}>
              {isEnglish ? "Home" : "Início"}
            </a>
            <a href="#servicos" className="text-maranja-darkblue py-2 px-4 hover:bg-maranja-cream rounded-md" onClick={toggleMenu}>
              {isEnglish ? "Services" : "Serviços"}
            </a>
            <a href="#contato" className="text-maranja-darkblue py-2 px-4 hover:bg-maranja-cream rounded-md" onClick={toggleMenu}>
              {isEnglish ? "Contact" : "Contato"}
            </a>
            <Button className="bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white w-full justify-center" onClick={() => {
          toggleMenu();
          document.getElementById("ligue-para-mim")?.scrollIntoView({
            behavior: "smooth"
          });
        }}>
              {isEnglish ? "Call me" : "Ligue para mim"}
            </Button>
          </nav>
        </div>}
    </header>;
};

export default Header;
