
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para transformar sua ideia em realidade? Vamos conversar sobre seu projeto
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-maranja-100 rounded-full">
                  <Mail className="text-maranja-600" size={24} />
                </div>
                <div>
                  <CardTitle className="text-lg">Email</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-gray-600">contato@maranja.com.br</p>
                  </CardContent>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-maranja-100 rounded-full">
                  <Phone className="text-maranja-600" size={24} />
                </div>
                <div>
                  <CardTitle className="text-lg">Telefone</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-gray-600">(11) 9999-9999</p>
                  </CardContent>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-3 bg-maranja-100 rounded-full">
                  <MapPin className="text-maranja-600" size={24} />
                </div>
                <div>
                  <CardTitle className="text-lg">Endereço</CardTitle>
                  <CardContent className="p-0">
                    <p className="text-gray-600">São Paulo, SP - Brasil</p>
                  </CardContent>
                </div>
              </CardHeader>
            </Card>
          </div>

          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Envie uma Mensagem</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <Input placeholder="Seu nome" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <Input placeholder="Assunto da mensagem" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea 
                  placeholder="Conte-nos sobre seu projeto..."
                  className="min-h-[120px] resize-none"
                />
              </div>

              <Button 
                size="lg" 
                className="w-full bg-maranja-gradient hover:opacity-90 text-white"
              >
                Enviar Mensagem
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
