import { ImageWithFallback } from './figma/ImageWithFallback';
import customBulbDecoImage from 'figma:asset/db7ea7259ed9a841861e34ce62ec83ae540daf63.png';
import wallCdHangingImage from 'figma:asset/563847452e64ba26c7d273288d5b7007f556d94d.png';
import oceanOnVinylImage from 'figma:asset/129e6f7f43152ad8c2b6f5d3540448219b5b92c1.png';
import customXmasPostcardImage from 'figma:asset/c25ddc5b25e09f38359c63347a4091e494188021.png';
import customCanvasImage from 'figma:asset/a93a9f4ce290708a0364d803577c0fd322ef6625.png';
import mysteryCraftHamperImage from 'figma:asset/919e3c35e8b33bbe360521c02aac07e3d34fefdb.png';

const products = [
  {
    id: 1,
    title: 'Custom Bulb Deco',
    price: '₹300',
    image: customBulbDecoImage
  },
  {
    id: 2,
    title: 'Wall CD Hanging',
    price: '₹300',
    image: wallCdHangingImage
  },
  {
    id: 3,
    title: 'Ocean on Vinyl',
    price: '₹500',
    image: oceanOnVinylImage
  },
  {
    id: 4,
    title: 'Custom Xmas Postcard',
    price: '₹150',
    image: customXmasPostcardImage
  },
  {
    id: 5,
    title: 'Custom Canvas',
    price: '₹600',
    image: customCanvasImage
  },
  {
    id: 6,
    title: 'Mystery Craft Hamper for Gifting',
    price: '₹1,000',
    image: mysteryCraftHamperImage
  }
];

export function FeaturedProducts() {
  return (
    <section className="bg-[#E6A8A8]/20 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
          Featured Products
        </h2>
        
        <div className="grid grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="aspect-square relative overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {product.title}
                </h3>
                <p className="text-2xl text-[#D85C63] mb-5">
                  {product.price}
                </p>
                
                <button 
                  className="w-full bg-[#D85C63] text-white py-3 px-6 rounded-xl transition-all duration-300 hover:bg-[#D85C63]/90 hover:shadow-lg hover:backdrop-blur-sm relative overflow-hidden group/btn"
                  style={{
                    boxShadow: '0 4px 20px rgba(216, 92, 99, 0.3)'
                  }}
                >
                  <span className="relative z-10">Add to Cart</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}