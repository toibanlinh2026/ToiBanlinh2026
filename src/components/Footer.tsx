export const Footer = () => {
  return (
    <footer className="bg-[#0b111a] py-16 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8">
        
        <div className="flex flex-col items-start max-w-sm">
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase mb-3">
            TÔI BẢN LĨNH <span className="text-brand-yellow">2026</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base text-left">
            Hành trình khám phá giới hạn bản thân, rèn luyện bản lĩnh và chinh phục những thử thách mới.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 w-full lg:w-auto">
          {/* Thông tin liên hệ */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm flex flex-col">
                <span className="font-semibold text-white">Email:</span>
                <a href="mailto:clbthuyettrinh.uet@gmail.com" className="hover:text-brand-yellow transition-colors">clbthuyettrinh.uet@gmail.com</a>
              </li>
              <li className="text-gray-400 text-sm flex flex-col">
                <div><span className="font-semibold text-white">Hotline:</span> <a href="tel:0333809204" className="hover:text-brand-yellow transition-colors">0333 809 204</a></div>
                <span className="text-xs italic mt-1 text-gray-500">(Trưởng BTC: Dương Văn Chương)</span>
              </li>
            </ul>
          </div>

          {/* Mạng xã hội */}
          <div className="flex flex-col items-start">
            <h3 className="text-white font-bold mb-4 uppercase tracking-wider">Mạng xã hội</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://fb.com/toibanlinh.uet.vnu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm flex flex-col">
                   <span className="font-semibold text-white">Fanpage Cuộc thi Tôi Bản lĩnh:</span>
                   <span>fb.com/toibanlinh.uet.vnu</span>
                </a>
              </li>
              <li>
                <a href="https://fb.com/caulacbothuyettrinh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm flex flex-col">
                   <span className="font-semibold text-white">Fanpage Câu lạc bộ Thuyết trình:</span>
                   <span>fb.com/caulacbothuyettrinh</span>
                </a>
              </li>
              <li>
                <a href="https://tiktok.com/@clbthuyettrinh_uet" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-yellow transition-colors text-sm flex flex-col">
                   <span className="font-semibold text-white">Tiktok Câu lạc bộ Thuyết trình:</span>
                   <span>@clbthuyettrinh_uet</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-500 text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Câu lạc bộ Thuyết trình. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-white text-xs md:text-sm transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-white text-xs md:text-sm transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
