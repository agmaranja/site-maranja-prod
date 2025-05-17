
import React from "react";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    // Updated WhatsApp number
    window.open("https://wa.me/5511982404879", "_blank");
  };
  
  return (
    <button 
      onClick={handleWhatsAppClick} 
      className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white rounded-full p-5 shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500" 
      aria-label="Contato via WhatsApp"
    >
      <img 
        alt="WhatsApp" 
        className="h-8 w-8" 
        src="/lovable-uploads/6b79a134-3586-42ea-a93c-3af7a63c804e.png" 
      />
    </button>
  );
};

export default WhatsAppButton;
