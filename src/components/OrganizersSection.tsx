import img0 from '../btc/IMAGE 0.png';
import img1 from '../btc/IMAGE 1.png';
import img2 from '../btc/IMAGE 2.png';
import img3 from '../btc/IMAGE 3.png';
import img4 from '../btc/IMAGE 4.png';
import img5 from '../btc/IMAGE 5.png';
import img6 from '../btc/IMAGE 6.png';
import img7 from '../btc/IMAGE 7.png';
import img8 from '../btc/IMAGE 8.png';
import img9 from '../btc/IMAGE 9.png';
import img10 from '../btc/IMAGE 10.png';
import img11 from '../btc/IMAGE 11.png';
import img12 from '../btc/IMAGE 12.png';
import img13 from '../btc/IMAGE 13.png';
import img14 from '../btc/IMAGE 14.png';
import img15 from '../btc/IMAGE 15.png';
const organizers = [
  { id: 0, img: img0 },
  { id: 1, img: img1 },
  { id: 2, img: img2 },
  { id: 3, img: img3 },
  { id: 4, img: img4 },
  { id: 5, img: img5 },
  { id: 6, img: img6 },
  { id: 7, img: img7 },
  { id: 8, img: img8 },
  { id: 9, img: img9 },
  { id: 10, img: img10 },
  { id: 11, img: img11 },
  { id: 12, img: img12 },
  { id: 13, img: img13 },
  { id: 14, img: img14 },
   { id: 15, img: img15 }
];

export const OrganizersSection = () => {
  return (
    <section id="organizers" className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex items-center gap-3 mb-10">
          {/* Orange slanted block */}
          <div className="w-4 h-8 bg-orange-500 skew-x-[-15deg]"></div>
          <h2 className="text-3xl md:text-4xl font-black text-[#1e3a8a] uppercase tracking-wide">
            BAN TỔ CHỨC
          </h2>
        </div>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-marquee items-center py-4">
            {[...organizers, ...organizers].map((org, index) => (
              <div key={`${org.id}-${index}`} className="flex flex-col w-[200px] md:w-[250px] shrink-0 mx-4">
                <div className="w-full aspect-[3/4] overflow-hidden flex items-center justify-center bg-[#f8f9fa] shadow-sm hover:shadow-md transition-shadow">
                  <img 
                    src={org.img} 
                    alt={`Ban tổ chức ${org.id}`} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
