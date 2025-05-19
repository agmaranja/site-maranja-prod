import { FloatingWhatsApp } from "react-floating-whatsapp";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const WhatsAppButton = () => {
  const [isEnglish, setIsEnglish] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsEnglish(location.pathname.includes("/en"));
  }, [location]);

  const config = {
    accountName: "Agência Maranjá",
    avatar: "/lovable-uploads/781fb56a-1cb8-4504-844e-774d19f133c1.png",
    statusMessage: isEnglish ? "Typically replies within 1 hour" : "Normalmente responde em até 1 hora",
    chatMessage: isEnglish ? "Hello! How can we help you?" : "Olá, como podemos te ajudar?",
    placeholder: isEnglish ? "Type a message..." : "Digite uma mensagem..."
  };

  return (
    <FloatingWhatsApp
      phoneNumber="5511982404879"
      accountName={config.accountName}
      allowEsc
      allowClickAway
      notification
      notificationSound
      statusMessage={config.statusMessage}
      chatMessage={config.chatMessage}
      avatar={config.avatar}
      buttonStyle={{
        backgroundColor: "#25D366",
        color: "white",
      }}
      buttonClassName="!bg-[#25D366] hover:!bg-[#128C7E] !w-[75px] !h-[75px] !p-0 !flex !items-center !justify-center"
      messageDelay={0}
      placeholder={config.placeholder}
      darkMode={false}
    />
  );
};

export default WhatsAppButton;
