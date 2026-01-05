import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Importando algumas imagens para a galeria
import gallery1 from '../assets/programs/1.jpg';
import gallery2 from '../assets/programs/2.jpg';
import gallery3 from '../assets/programs/3.jpg';
import gallery4 from '../assets/programs/4.jpg';
import gallery5 from '../assets/programs/5.jpg';
import gallery6 from '../assets/programs/6.jpg';
import gallery7 from '../assets/programs/8.jpg';
import gallery8 from '../assets/programs/7.jpg';
import gallery9 from '../assets/programs/9.jpeg';
import gallery10 from '../assets/programs/10.jpeg';
import gallery11 from '../assets/programs/11.jpeg';
import gallery12 from '../assets/programs/12.jpeg';
import gallery13 from '../assets/programs/13.jpeg';
import gallery14 from '../assets/programs/14.jpeg';
import gallery15 from '../assets/programs/15.jpeg';
import gallery16 from '../assets/programs/16.jpeg';
import gallery17 from '../assets/programs/17.jpeg';
import gallery18 from '../assets/programs/18.jpeg';
import gallery19 from '../assets/programs/19.jpeg';
import gallery20 from '../assets/programs/20.jpeg';
import gallery21 from '../assets/programs/21.jpeg';
import gallery22 from '../assets/programs/22.jpeg';
import gallery23 from '../assets/programs/23.jpeg';
import gallery24 from '../assets/programs/24.jpeg';
import gallery25 from '../assets/programs/25.jpeg';
import gallery26 from '../assets/programs/26.jpeg';
import gallery27 from '../assets/programs/27.jpeg';
import gallery28 from '../assets/programs/28.jpeg';
import gallery29 from '../assets/programs/29.jpeg';
import gallery30 from '../assets/programs/30.jpeg';
import gallery31 from '../assets/programs/31.jpeg';
import gallery32 from '../assets/programs/32.jpeg';
import gallery33 from '../assets/programs/33.jpeg';
import gallery34 from '../assets/programs/34.jpeg';
import gallery35 from '../assets/programs/35.jpeg';
import gallery36 from '../assets/programs/36.jpeg';
import gallery37 from '../assets/programs/37.jpeg';
import gallery38 from '../assets/programs/38.jpeg';
import gallery39 from '../assets/programs/39.jpeg';
import gallery40 from '../assets/programs/40.jpeg';
import gallery41 from '../assets/programs/41.jpeg';
import gallery42 from '../assets/programs/42.jpeg';
import gallery43 from '../assets/programs/43.jpeg';
import gallery44 from '../assets/programs/44.jpeg';
import gallery45 from '../assets/programs/45.jpeg';
import gallery46 from '../assets/programs/46.jpeg';
import gallery47 from '../assets/programs/47.jpeg';
import gallery48 from '../assets/programs/48.jpeg';
import gallery49 from '../assets/programs/49.jpeg';
import gallery50 from '../assets/programs/50.jpeg';
import gallery51 from '../assets/programs/51.jpeg';
import gallery52 from '../assets/programs/52.jpeg';
import gallery53 from '../assets/programs/53.jpeg';
import gallery54 from '../assets/programs/54.jpeg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { src: gallery1, alt: "Ação educativa com crianças neurodivergentes", title: "Educar e Incluir", description: "Atividades lúdicas e educativas focadas no desenvolvimento e inclusão de crianças neurodivergentes." },
    { src: gallery2, alt: "Manifestação de mães atípicas", title: "Lute como uma Mãe Atípica", description: "Movimento de conscientização e luta pelos direitos das mães de crianças com deficiência." },
    { src: gallery3, alt: "Roda de conversa com mães", title: "Apoio às Mães", description: "Espaço de acolhimento e troca de experiências para fortalecer a rede de apoio materno." },
    { src: gallery4, alt: "Atendimento nutricional", title: "Nutrir com Afeto", description: "Orientação nutricional personalizada para garantir a saúde e bem-estar das famílias." },
    { src: gallery5, alt: "Terapia ocupacional", title: "Terapias", description: "Sessões de terapia ocupacional para estimular a autonomia e coordenação motora." },
    { src: gallery6, alt: "Oficina com crianças", title: "Oficinas Educativas", description: "Oficinas criativas que promovem o aprendizado e a interação social entre as crianças." },
    { src: gallery7, alt: "Atividade física para idosos", title: "Cuidar +", description: "Programa de exercícios físicos adaptados para promover a saúde na terceira idade." },
    { src: gallery8, alt: "Exercícios para terceira idade", title: "Saúde do Idoso", description: "Atividades focadas no fortalecimento muscular e bem-estar dos idosos participativos." },
    { src: gallery9, alt: "Ação Social e Solidariedade", title: "Compromisso Social", description: "Ações contínuas de solidariedade para apoiar as famílias em situação de vulnerabilidade." },
    { src: gallery10, alt: "Entregas para a comunidade", title: "Apoio Comunitário", description: "Distribuição de cestas básicas e itens essenciais para a comunidade local." },
    { src: gallery11, alt: "Atividades recreativas", title: "Lazer e Cultura", description: "Momentos de lazer e cultura para promover a alegria e integração social." },
    { src: gallery12, alt: "Momentos de integração", title: "União e Afeto", description: "Encontros que fortalecem os laços de amizade e solidariedade entre os participantes." },
    { src: gallery13, alt: "Apoio às famílias", title: "Assistência Familiar", description: "Suporte integral às famílias, oferecendo orientação e recursos necessários." },
    { src: gallery14, alt: "Eventos beneficentes", title: "Solidariedade em Ação", description: "Eventos organizados para arrecadar fundos e promover a causa social." },
    { src: gallery15, alt: "Cuidado com o próximo", title: "Amor ao Próximo", description: "Iniciativas que refletem nosso compromisso com o cuidado e respeito ao próximo." },
    { src: gallery16, alt: "Desenvolvimento social", title: "Crescimento Juntos", description: "Projetos que visam o desenvolvimento social e humano de toda a comunidade." },
    { src: gallery17, alt: "Projetos educacionais", title: "Educação para Todos", description: "Programas educativos acessíveis para transformar vidas através do conhecimento." },
    { src: gallery18, alt: "Saúde e bem-estar", title: "Vida Saudável", description: "Promoção de hábitos saudáveis e prevenção de doenças para uma vida melhor." },
    { src: gallery19, alt: "Inclusão social", title: "Inclusão Verdadeira", description: "Trabalhamos para construir uma sociedade mais justa e inclusiva para todos." },
    { src: gallery20, alt: "Fortalecendo vínculos", title: "Laços Comunitários", description: "Fortalecimento dos vínculos comunitários através da participação ativa de todos." },
    { src: gallery21, alt: "Esperança e renovação", title: "Futuro Melhor", description: "Semeando esperança e renovação para construir um futuro mais promissor." },
    { src: gallery22, alt: "Transformando vidas", title: "Transformação Social", description: "Nosso objetivo é transformar vidas e realidades através do amor e dedicação." },
    { src: gallery23, alt: "Ação social", title: "Compromisso e Amor", description: "Dedicação total em cada atendimento e ação realizada." },
    { src: gallery24, alt: "Solidariedade", title: "Solidariedade em Foco", description: "Ações que transformam o dia a dia da nossa comunidade." },
    { src: gallery25, alt: "União", title: "União Faz a Força", description: "Juntos construímos um futuro mais digno e feliz para todos." },
    { src: gallery26, alt: "Alegria e esperança", title: "Sorrisos que Inspiram", description: "A alegria de quem recebe nosso apoio é nossa maior motivação." },
    { src: gallery27, alt: "Cuidado", title: "Cuidado e Carinho", description: "Cada gesto de carinho faz a diferença na vida de quem precisa." },
    { src: gallery28, alt: "Apoio mútuo", title: "Juntos Somos Mais Fortes", description: "Fortalecendo a rede de apoio e solidariedade." },
    { src: gallery29, alt: "Fazer o bem", title: "Fazer o Bem", description: "Acreditamos no poder transformador da bondade." },
    { src: gallery30, alt: "Transformação", title: "Transformando Realidades", description: "Pequenas ações geram grandes impactos sociais." },
    { src: gallery31, alt: "Inclusão", title: "Inclusão e Respeito", description: "Valorizando a diversidade e promovendo a igualdade." },
    { src: gallery32, alt: "Comunidade", title: "Nossa Comunidade", description: "Apoiando o desenvolvimento local e social." },
    { src: gallery33, alt: "Esperança", title: "Semeando Esperança", description: "Plantando sementes de um futuro melhor." },
    { src: gallery34, alt: "Gratidão", title: "Gratidão e Amor", description: "Agradecemos a todos que fazem parte dessa história." },
    { src: gallery35, alt: "Voluntariado", title: "Força Voluntária", description: "O trabalho voluntário é a essência da nossa missão." },
    { src: gallery36, alt: "Parceria", title: "Parcerias do Bem", description: "Construindo pontes para ajudar quem mais precisa." },
    { src: gallery37, alt: "Acolhimento", title: "Acolhimento Humanizado", description: "Recebemos cada pessoa com dignidade e respeito." },
    { src: gallery38, alt: "Educação", title: "Educação Transformadora", description: "O conhecimento como ferramenta de mudança social." },
    { src: gallery39, alt: "Saúde", title: "Saúde para Todos", description: "Promovendo bem-estar e qualidade de vida." },
    { src: gallery40, alt: "Cultura", title: "Cultura e Arte", description: "Valorizando as expressões culturais da nossa gente." },
    { src: gallery41, alt: "Esporte", title: "Esporte e Lazer", description: "Atividades que promovem saúde e integração." },
    { src: gallery42, alt: "Meio ambiente", title: "Sustentabilidade", description: "Cuidando do nosso planeta e da nossa comunidade." },
    { src: gallery43, alt: "Cidadania", title: "Cidadania Ativa", description: "Promovendo direitos e deveres para todos." },
    { src: gallery44, alt: "Dignidade", title: "Vida com Dignidade", description: "Lutando por condições melhores para todos." },
    { src: gallery45, alt: "Amor", title: "Amor em Movimento", description: "O amor é a força que move nossas ações." },
    { src: gallery46, alt: "Paz", title: "Cultura de Paz", description: "Promovendo a harmonia e o respeito mútuo." },
    { src: gallery47, alt: "Fé", title: "Fé na Vida", description: "Acreditando sempre em dias melhores." },
    { src: gallery48, alt: "Sonhos", title: "Realizando Sonhos", description: "Apoiando a concretização de projetos de vida." },
    { src: gallery49, alt: "Família", title: "Apoio Familiar", description: "Fortalecendo a base da nossa sociedade." },
    { src: gallery50, alt: "Crianças", title: "Futuro das Crianças", description: "Investindo no desenvolvimento dos pequenos." },
    { src: gallery51, alt: "Idosos", title: "Respeito ao Idoso", description: "Valorizando a sabedoria e a experiência de vida." },
    { src: gallery52, alt: "Mulheres", title: "Força Feminina", description: "Empoderando mulheres e promovendo autonomia." },
    { src: gallery53, alt: "Juventude", title: "Juventude Ativa", description: "Protagonismo jovem na construção do futuro." },
    { src: gallery54, alt: "Vida", title: "Celebração da Vida", description: "Comemorando cada conquista e cada superação." }
  ];

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % galleryImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(galleryImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(galleryImages[prevIndex]);
  };

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Galeria de <span className="text-primary">Ações</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja alguns momentos especiais das nossas ações e programas sociais em funcionamento.
          </p>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border border-gray-100"
              onClick={() => openModal(image, index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-1 group-hover:text-primary transition-colors">{image.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
              >
                <X size={32} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
              >
                <ChevronRight size={32} />
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain"
              />

              <div className="absolute bottom-4 left-4 right-4 text-white text-center">
                <h3 className="text-xl font-semibold mb-2">{selectedImage.title}</h3>
                <p className="text-sm opacity-90 max-w-2xl mx-auto">{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Acompanhe nossas redes sociais para ver mais fotos e vídeos das nossas ações.
          </p>
          <a
            href="https://www.instagram.com/SosTudopelosocial/"
            target='_blank'
            rel='noopener noreferrer'
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
          >
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

