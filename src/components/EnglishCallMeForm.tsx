import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Checkbox } from "@/components/ui/checkbox";

const EnglishCallMeForm = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    services: [] as string[]
  });

  const servicesList = [
    "AI-Powered Website Creation",
    "24/7 AI Appointment Automation",
    "Intelligent Conversation Reports",
    "Social Media Content Package",
    "CRM and Smart Follow-Up Management",
    "Online Reputation Monitoring",
    "Local Traffic Package",
    "Google Presence Optimization (Local SEO)"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      services: checked 
        ? [...prev.services, service]
        : prev.services.filter(s => s !== service)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Form data being sent:", formData);
      
      // Send form data to Supabase edge function to email recipients
      const { data, error } = await supabase.functions.invoke("send-contact-form", {
        body: {
          nome: formData.name,
          telefone: formData.phone,
          email: formData.email,
          mensagem: formData.message,
          servicos: formData.services,
          recipients: [
            "agmaranja@gmail.com", 
            "bmeduneckas@gmail.com", 
            "denermelo2@gmail.com"
          ]
        }
      });

      if (error) {
        console.error("Edge Function error:", error);
        throw error;
      }

      console.log("Complete Edge Function response:", data);

      toast({
        title: "Form submitted!",
        description: "We'll contact you soon.",
        duration: 5000
      });

      // Clear form
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        services: []
      });
    } catch (error) {
      console.error("Error sending form:", error);
      toast({
        title: "Error sending form",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000
      });
    } finally {
      setLoading(false);
    }
  };

  return <section id="quote" className="py-20 md:py-28 bg-gradient-to-b from-maranja-beige to-maranja-cream relative">
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-maranja-darkblue mb-5">
              Contact Us
            </h2>
            <p className="text-maranja-darkblue/70 max-w-xl mx-auto">
              Fill out the form below and we'll contact you to discuss how we can help your clinic.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-8 md:p-10 relative">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-8 mb-8">
                <div className="grid gap-3">
                  <Label htmlFor="name" className="text-maranja-darkblue">
                    Name
                  </Label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required className="border-maranja-darkblue/20 focus:border-maranja-darkblue focus:ring-maranja-darkblue" />
                </div>
                
                <div className="grid gap-3">
                  <Label htmlFor="phone" className="text-maranja-darkblue">
                    Phone
                  </Label>
                  <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="(00) 00000-0000" required className="border-maranja-darkblue/20 focus:border-maranja-darkblue focus:ring-maranja-darkblue" />
                </div>
                
                <div className="grid gap-3">
                  <Label htmlFor="email" className="text-maranja-darkblue">
                    Email
                  </Label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className="border-maranja-darkblue/20 focus:border-maranja-darkblue focus:ring-maranja-darkblue" />
                </div>

                <div className="grid gap-3">
                  <Label className="text-maranja-darkblue">
                    Which services are you interested in? (optional)
                  </Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {servicesList.map((service) => (
                      <div key={service} className="flex items-center space-x-2">
                        <Checkbox
                          id={`service-${service}`}
                          checked={formData.services.includes(service)}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          className="border-maranja-darkblue/20 data-[state=checked]:bg-maranja-darkblue data-[state=checked]:text-white"
                        />
                        <label
                          htmlFor={`service-${service}`}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-maranja-darkblue/80"
                        >
                          {service}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid gap-3">
                  <Label htmlFor="message" className="text-maranja-darkblue">
                    Message (optional)
                  </Label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="How can we help your clinic?" className="min-h-[120px] border-maranja-darkblue/20 focus:border-maranja-darkblue focus:ring-maranja-darkblue" />
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-maranja-darkblue hover:bg-maranja-darkblue/90 text-white" disabled={loading}>
                {loading ? "Sending..." : "Request contact"}
              </Button>
            </form>
            
            <div className="mt-10 pt-8 border-t border-maranja-darkblue/10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-2 text-maranja-darkblue">
                  <Phone className="h-5 w-5" />
                  <span>(11) 98240-4879</span>
                </div>
                <div className="flex items-center gap-2 text-maranja-darkblue">
                  <Mail className="h-5 w-5" />
                  <span>agmaranja@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default EnglishCallMeForm; 