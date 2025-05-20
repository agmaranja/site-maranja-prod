import { useState, useEffect } from "react";
import { Flag } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

type Language = "pt-BR" | "en-US";

const BrazilFlag = () => (
  <div className="brasil-flag w-7 h-5 relative bg-[#16b83e] rounded-sm overflow-hidden">
    <div className="losangue w-full h-full relative">
      <div className="absolute w-0 h-0 left-[2px] right-[2px] top-[2px]
        border-l-[12px] border-l-transparent 
        border-r-[12px] border-r-transparent 
        border-b-[8px] border-b-[#ffe11f]"></div>
      <div className="absolute w-0 h-0 left-[2px] right-[2px] bottom-[2px]
        border-l-[12px] border-l-transparent 
        border-r-[12px] border-r-transparent 
        border-t-[8px] border-t-[#ffe11f]"></div>
    </div>
    <div className="circle absolute z-[2] bg-[#1651b8] w-[10px] h-[10px] 
      top-1/2 left-1/2 -mt-[5px] -ml-[5px] rounded-full overflow-hidden">
      <div className="absolute w-[12px] h-[4px] bg-white 
        top-1/2 left-1/2 -mt-[2.5px] -ml-[6px] 
        transform rotate-[14deg] rounded-[50%]"></div>
      <div className="absolute w-[12px] h-[4px] bg-[#1651b8]
        top-1/2 left-1/2 -mt-[1.5px] -ml-[6px]
        transform rotate-[14deg] rounded-[50%]"></div>
    </div>
  </div>
);

const USAFlag = () => (
  <div className="usa-flag w-7 h-5 relative bg-[#b22234] rounded-sm overflow-hidden">
    {/* Listras vermelhas e brancas */}
    <div className="stripes absolute w-full h-full z-[1]">
      <div className="absolute inset-0 [background:repeating-linear-gradient(180deg,#b22234_0%,#b22234_7.69%,white_7.69%,white_15.38%)]"></div>
    </div>
    
    {/* Cantão azul */}
    <div className="union absolute w-[40%] h-[54%] bg-[#191b6d] top-0 left-0 z-[2]"></div>

    {/* Grid de estrelas */}
    <div className="stars absolute top-[1px] left-[1px] w-[9px] h-[9px] flex flex-col justify-between z-[3]">
      {/* Primeira linha - 6 estrelas */}
      <div className="star-row flex justify-between">
        {[...Array(6)].map((_, i) => (
          <span key={`star-1-${i}`} className="text-white text-[1.2px] leading-none drop-shadow-[0_0_0.2px_#000]">★</span>
        ))}
      </div>
      {/* Segunda linha - 5 estrelas */}
      <div className="star-row flex justify-between ml-[0.6px] w-[7.8px]">
        {[...Array(5)].map((_, i) => (
          <span key={`star-2-${i}`} className="text-white text-[1.2px] leading-none drop-shadow-[0_0_0.2px_#000]">★</span>
        ))}
      </div>
      {/* Terceira linha - 6 estrelas */}
      <div className="star-row flex justify-between">
        {[...Array(6)].map((_, i) => (
          <span key={`star-3-${i}`} className="text-white text-[1.2px] leading-none drop-shadow-[0_0_0.2px_#000]">★</span>
        ))}
      </div>
      {/* Quarta linha - 5 estrelas */}
      <div className="star-row flex justify-between ml-[0.6px] w-[7.8px]">
        {[...Array(5)].map((_, i) => (
          <span key={`star-4-${i}`} className="text-white text-[1.2px] leading-none drop-shadow-[0_0_0.2px_#000]">★</span>
        ))}
      </div>
      {/* Quinta linha - 6 estrelas */}
      <div className="star-row flex justify-between">
        {[...Array(6)].map((_, i) => (
          <span key={`star-5-${i}`} className="text-white text-[1.2px] leading-none drop-shadow-[0_0_0.2px_#000]">★</span>
        ))}
      </div>
      {/* Sexta linha - 5 estrelas */}
      <div className="star-row flex justify-between ml-[0.6px] w-[7.8px]">
        {[...Array(5)].map((_, i) => (
          <span key={`star-6-${i}`} className="text-white text-[1.2px] leading-none drop-shadow-[0_0_0.2px_#000]">★</span>
        ))}
      </div>
      {/* Sétima linha - 6 estrelas */}
      <div className="star-row flex justify-between">
        {[...Array(6)].map((_, i) => (
          <span key={`star-7-${i}`} className="text-white text-[1.2px] leading-none drop-shadow-[0_0_0.2px_#000]">★</span>
        ))}
      </div>
      {/* Oitava linha - 5 estrelas */}
      <div className="star-row flex justify-between ml-[0.6px] w-[7.8px]">
        {[...Array(5)].map((_, i) => (
          <span key={`star-8-${i}`} className="text-white text-[1.2px] leading-none drop-shadow-[0_0_0.2px_#000]">★</span>
        ))}
      </div>
      {/* Nona linha - 6 estrelas */}
      <div className="star-row flex justify-between">
        {[...Array(6)].map((_, i) => (
          <span key={`star-9-${i}`} className="text-white text-[1.2px] leading-none drop-shadow-[0_0_0.2px_#000]">★</span>
        ))}
      </div>
    </div>
  </div>
);

const LanguageSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLanguage, setCurrentLanguage] = useState<Language>("pt-BR");

  useEffect(() => {
    setCurrentLanguage(location.pathname.includes("/en") ? "en-US" : "pt-BR");
  }, [location.pathname]);

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    
    // Get the current path without any language prefix
    const pathWithoutLang = location.pathname.replace(/^\/en/, '');
    
    // Get the current hash if it exists
    const hash = location.hash;
    
    if (language === "en-US" && !location.pathname.includes("/en")) {
      // Navigate to English version
      navigate(`/en${pathWithoutLang}${hash}`);
    } else if (language === "pt-BR" && location.pathname.includes("/en")) {
      // Navigate to Portuguese version
      navigate(`${pathWithoutLang}${hash}`);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-1.5 px-2">
          {currentLanguage === "pt-BR" ? (
            <>
              <BrazilFlag />
              <span className="text-xs font-medium">PT</span>
            </>
          ) : (
            <>
              <USAFlag />
              <span className="text-xs font-medium">EN</span>
            </>
          )}
          <Flag className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("pt-BR")} className="cursor-pointer">
          <BrazilFlag />
          <span className="ml-2 text-sm font-medium">Português</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("en-US")} className="cursor-pointer">
          <USAFlag />
          <span className="ml-2 text-sm font-medium">English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
