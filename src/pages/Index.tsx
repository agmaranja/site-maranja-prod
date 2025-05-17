
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CallMeForm from "@/components/CallMeForm";
import Footer from "@/components/Footer";
import Leaf from "@/components/Leaf";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-maranja-beige relative overflow-hidden">
      {/* Background corner leaves */}
      <Leaf 
        position="top-left" 
        variant="branch-1" 
        size={200} 
        opacity={0.12} 
        color="#1d2d35" 
        className="left-[-25px] top-[-25px]"
      />
      
      <Leaf 
        position="top-right" 
        variant="branch-2" 
        size={200} 
        opacity={0.12} 
        color="#1d2d35" 
        rotation={0}
        className="right-[-35px] top-[-35px]"
      />
      
      <Leaf 
        position="bottom-left" 
        variant="branch-3" 
        size={200} 
        opacity={0.12} 
        color="#1d2d35" 
        rotation={0}
        className="left-[-35px] bottom-[-35px]"
      />
      
      <Leaf 
        position="bottom-right" 
        variant="branch-4" 
        size={200} 
        opacity={0.12} 
        color="#1d2d35" 
        rotation={0}
        className="right-[-35px] bottom-[-35px]"
      />

      {/* Left side leaves */}
      <Leaf 
        variant="new-leaf-1" 
        size={160} 
        opacity={0.12} 
        color="#1d2d35" 
        className="absolute left-[-20px] top-[25%]"
      />
      
      <Leaf 
        variant="new-leaf-3" 
        size={140} 
        opacity={0.12} 
        color="#1d2d35" 
        className="absolute left-[-20px] top-[65%]"
      />

      {/* Right side leaves */}
      <Leaf 
        variant="new-leaf-2" 
        size={160} 
        opacity={0.12} 
        color="#1d2d35" 
        rotation={0}
        className="absolute right-[-20px] top-[35%]"
      />
      
      <Leaf 
        variant="new-leaf-4" 
        size={140} 
        opacity={0.12} 
        color="#1d2d35" 
        rotation={0}
        className="absolute right-[-20px] top-[75%]"
      />

      <Header />
      <main className="relative z-10">
        <Hero />
        <Services />
        <CallMeForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
