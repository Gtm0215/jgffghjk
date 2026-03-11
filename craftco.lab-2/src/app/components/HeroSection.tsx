import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/69f555be4e627c818b6c203a89cf347cbec4a343.png';

export function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div 
        className="relative rounded-3xl overflow-hidden shadow-lg"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '500px'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-8 py-32">
          <h2 className="text-6xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
            #ART COLLECTION
          </h2>
          <p className="text-xl max-w-xl leading-relaxed opacity-95">
            Handmade paintings & creative prints you'll love
          </p>
        </div>
      </div>
    </section>
  );
}