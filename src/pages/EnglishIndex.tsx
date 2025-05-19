import Header from "@/components/Header";
import EnglishHero from "@/components/EnglishHero";
import EnglishServices from "@/components/EnglishServices";
import EnglishFooter from "@/components/EnglishFooter";
import WhatsAppButton from "@/components/WhatsAppButton";
import EnglishCallMeForm from "@/components/EnglishCallMeForm";

const EnglishIndex = () => {
  return (
    <div className="min-h-screen bg-maranja-cream">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/leaves-bg.png')] bg-repeat opacity-5"></div>
      </div>
      
      <Header />
      
      <main>
        <section id="home">
          <EnglishHero />
        </section>
        
        <section id="services">
          <EnglishServices />
        </section>
        
        <EnglishCallMeForm />
      </main>
      
      <EnglishFooter />
      <WhatsAppButton />
    </div>
  );
};

export default EnglishIndex;
