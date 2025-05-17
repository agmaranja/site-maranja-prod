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
              <img 
                src="/flags/br.png" 
                alt="Bandeira do Brasil" 
                className="w-5 h-3.5 object-cover rounded-sm"
              />
              <span className="text-xs">PT</span>
            </>
          ) : (
            <>
              <img 
                src="/flags/us.png" 
                alt="US Flag" 
                className="w-5 h-3.5 object-cover rounded-sm"
              />
              <span className="text-xs">EN</span>
            </>
          )}
          <Flag className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => handleLanguageChange("pt-BR")} className="cursor-pointer">
          <img 
            src="/flags/br.png" 
            alt="Bandeira do Brasil" 
            className="w-5 h-3.5 object-cover rounded-sm mr-2"
          />
          Português
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("en-US")} className="cursor-pointer">
          <img 
            src="/flags/us.png" 
            alt="US Flag" 
            className="w-5 h-3.5 object-cover rounded-sm mr-2"
          />
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
