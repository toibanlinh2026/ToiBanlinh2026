export const HeroContent = () => {
  return (
    <>
      <h2 className="text-5xl md:text-7xl lg:text-[90px] mt-10 md:mt-0 font-black leading-tight tracking-tight mb-2 uppercase text-glow">
        Tôi Bản Lĩnh
      </h2>
      <h3 className="text-5xl md:text-7xl lg:text-[90px] font-black leading-tight tracking-tight mb-8">
        2026
      </h3>
      
      <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl leading-relaxed">
        Hành trình khám phá giới hạn bản thân, rèn luyện bản lĩnh và chinh phục những thử thách mới.
      </p>

      <div className="flex flex-wrap gap-4 mb-16">
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLSeZ1cU77T1xz1z8hqh2z9hEoBJFKb5kImu1nBfhaoTphXxKAA/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-semibold transition-transform duration-300 transform hover:scale-105 inline-block text-center"
        >
          Tham gia ngay
        </a>
        <a 
          href="https://www.facebook.com/toibanlinh.uet.vnu"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-yellow md:bg-transparent border border-brand-yellow text-brand-dark md:text-brand-yellow px-8 py-3 rounded-full font-semibold transition-transform duration-300 transform hover:scale-105 inline-block text-center"
        >
          Khám phá
        </a>
      </div>
    </>
  );
};
