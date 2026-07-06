import logo1 from '../Logo/Asset 1.png';
import logo2 from '../Logo/Asset 2.png';
import logo3 from '../Logo/Asset 3.png';
import logo4 from '../Logo/LC.png';
import logo5 from '../Logo/logo tách nền.png';
import logo6 from '../Logo/logopc1.png';
import logo7 from '../Logo/SAT&JUNIOR-1.png'

const partners = [
  { id: 1, name: 'Partner 1', img: logo1 },
  { id: 2, name: 'Partner 2', img: logo2 },
  { id: 3, name: 'Partner 3', img: logo3 },
  { id: 4, name: 'Partner 4', img: logo4 },
  { id: 5, name: 'Partner 5', img: logo5 },
  { id: 6, name: 'Partner 6', img: logo6 },
  { id: 7, name: 'Partner 7', img: logo7 },
];

export const PartnerSection = () => {
  return (
    <section id="partner" className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-12">
        <div className="flex items-center gap-3 mb-4">
          {/* Orange slanted block */}
          <div className="w-4 h-8 bg-orange-500 skew-x-[-15deg]"></div>
          <h2 className="text-3xl md:text-4xl font-black text-brand-dark uppercase tracking-wide">
            Các đơn vị đồng hành 
          </h2>
        </div>
        
        <p className="text-gray-600 text-sm md:text-base max-w-3xl leading-relaxed">
          Tham gia đồng hành cùng cuộc thi Tôi Bản lĩnh 2026
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* We duplicate the array to create a seamless infinite scroll loop */}
        <div className="flex w-max animate-marquee items-center py-4">
          {[...partners, ...partners].map((partner, index) => (
            <div key={`${partner.id}-${index}`} className="flex flex-col w-[150px] md:w-[200px] shrink-0 mx-6">
              <div className="w-full aspect-square overflow-hidden flex items-center justify-center p-4">
                <img 
                  src={partner.img} 
                  alt={partner.name} 
                  className="w-full h-full object-contain object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
