import React from 'react';
import { Mail, Phone, MapPin, Instagram, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Entre em <span className="text-primary">Contato</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos aqui para ajudar! Entre em contato conosco e descubra como podemos apoiar você e sua família.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Informações de Contato */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Informações de Contato</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <a
                      href="mailto:sostudopelosocial@gmail.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      sostudopelosocial@gmail.com
                    </a>
                  </div>
                </div>

                {/* Telefone */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Telefone</h4>
                    <a
                      href="tel:+5581987118820"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +55 (81) 98711-8820
                    </a>
                  </div>
                </div>

                {/* Endereço */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua Hosana Alves do Nascimento, nº 493<br />
                      Casa 01 - Janga<br />
                      Paulista/PE
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Instagram className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Instagram</h4>
                    <a
                      href="https://www.instagram.com/SosTudopelosocial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      @SosTudopelosocial
                    </a>
                  </div>
                </div>

                {/* Horário */}
                <div className="flex items-start space-x-4 group">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Horário de Atendimento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 17h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Localização</h3>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Rua+Hosana+Alves+do+Nascimento+493+Janga+Paulista+PE&zoom=17"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização SOS Tudo pelo Social - Rua Hosana Alves do Nascimento, 493, Janga, Paulista/PE"
                ></iframe>
              </div>
              <p className="text-gray-600 mt-4 text-sm">
                Visite-nos pessoalmente ou entre em contato através dos canais acima.
                Estamos prontos para atendê-lo!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
