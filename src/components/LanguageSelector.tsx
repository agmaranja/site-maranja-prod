import { useState } from "react";
import { Flag } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type Language = "pt-BR" | "en-US";

const BrazilFlag = () => (
  <div className="brasil-flag w-6 h-4 relative rounded-sm overflow-hidden">
    <div className="absolute inset-0 bg-[#16b83e]"></div>
    <div className="losangue w-full h-full">
      <div className="absolute w-0 h-0 left-[3px] right-[3px] top-[2px]
        border-l-[15px] border-l-transparent 
        border-r-[15px] border-r-transparent 
        border-b-[10px] border-b-[#ffe11f]"></div>
      <div className="absolute w-0 h-0 left-[3px] right-[3px] bottom-[2px]
        border-l-[15px] border-l-transparent 
        border-r-[15px] border-r-transparent 
        border-t-[10px] border-t-[#ffe11f]"></div>
    </div>
    <div className="circle absolute z-[2] bg-[#1651b8] w-3 h-3 
      top-1/2 left-1/2 -mt-1.5 -ml-1.5 rounded-full">
      <div className="absolute w-3.5 h-1.5 bg-white 
        top-1/2 left-1/2 -mt-[3px] -ml-[7px] 
        transform rotate-[14deg] rounded-full"></div>
      <div className="absolute w-3.5 h-1.5 bg-[#1651b8]
        top-1/2 left-1/2 -mt-[2px] -ml-[7px]
        transform rotate-[14deg] rounded-full"></div>
    </div>
  </div>
);

const USAFlag = () => (
  <div className="usa-flag w-6 h-4 relative rounded-sm overflow-hidden">
    <div className="absolute inset-0 bg-white">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(180deg,
        #B22234 0%,
        #B22234 7.69%,
        white 7.69%,
        white 15.38%)]"></div>
    </div>
    <div className="absolute w-[36%] h-[54%] bg-[#002868] top-0 left-0 
      flex items-center justify-center">
      <span className="text-white text-[8px]">★</span>
    </div>
  </div>
);

const LanguageSelector = () => {
  const navigate = useNavigate();
  const currentPath = window.location.pathname;
  const isEnglish = currentPath.includes("/en");
  const [currentLanguage, setCurrentLanguage] = useState<Language>(isEnglish ? "en-US" : "pt-BR");

  const handleLanguageChange = (language: Language) => {
    setCurrentLanguage(language);
    
    if (language === "en-US" && !isEnglish) {
      navigate("/en");
    } else if (language === "pt-BR" && isEnglish) {
      navigate("/");
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
