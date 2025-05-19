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
  <div className="usa-flag w-7 h-5 relative bg-white rounded-sm overflow-hidden">
    <div className="stripes absolute w-full h-full">
      <div className="absolute inset-0 [background:repeating-linear-gradient(180deg,#B22234_0%,#B22234_7.69%,white_7.69%,white_15.38%)]"></div>
    </div>
    <div className="union absolute w-[36%] h-[54%] bg-[#002868] top-0 left-0 
      flex items-center justify-center">
      <span className="text-white text-[2.5px] transform -translate-y-[0.5px]">★</span>
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
              <span className="text-xs">PT</span>
            </>
          ) : (
            <>
              <USAFlag />
              <span className="text-xs">EN</span>
            </>
          )}
          <Flag className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("pt-BR")} className="cursor-pointer">
          <BrazilFlag />
          <span className="ml-2">Português</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("en-US")} className="cursor-pointer">
          <USAFlag />
          <span className="ml-2">English</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
