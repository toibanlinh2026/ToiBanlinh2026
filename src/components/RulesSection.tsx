import React, { useState } from 'react';
import cardImage from '../../TBL_Avatar.png';
import bgImage from '../../back2.png';
import imgSoLoai from '../sơ loại.jpg';
import imgTeamwork from '../teamwork.jpg';
import imgBanKet from '../bán kết.jpg';
import imgChungKet2 from '../chung kết 2.jpg';

const rulesData = [
  { 
    id: 1, 
    title: 'Vòng Đơn', 
    date: '06/07 - 18/07/2026', 
    image: cardImage,
    content: (
      <div className="space-y-3">
        <p><strong className="text-brand-yellow">Hình thức thi:</strong></p>
        <p>Dưới hình thức tạo “CV”, các thí sinh sẽ phải gây ấn tượng với Ban Tổ chức (BTC) với những gì được trình bày ở trong một mặt A4. Nội dung phải phù hợp với yêu cầu của BTC.</p>
        <p>Với mục đích tìm ra những thí sinh tiềm năng, những yêu cầu sẽ mang tính chuyên môn, tổng hợp các yếu tố như tư duy phân tích, góc nhìn cá nhân để phân loại một cách tốt nhất.</p>
      </div>
    )
  },
  { 
    id: 2, 
    title: 'Vòng Sơ loại', 
    date: '27/07/2026', 
    image: imgSoLoai,
    content: (
      <div className="space-y-3">
        <p><strong className="text-brand-yellow">Hình thức thi:</strong> Casting</p>
        <p>Các thí sinh sẽ nhận đề thi từ BTC và chuẩn bị trước. Mỗi thí sinh có 5 phút thể hiện quan điểm, góc nhìn riêng về chủ đề. 7 phút còn lại, Ban giám khảo sẽ đặt câu hỏi và thí sinh trả lời.</p>
        <p><strong className="text-brand-yellow">Cách thức chọn:</strong> Top 24 thí sinh xuất sắc (Dựa vào tiêu chí chấm điểm để chọn lựa những thí sinh có phần thể hiện tốt nhất).</p>
      </div>
    )
  },
  { 
    id: 3, 
    title: 'Vòng Teamwork', 
    date: '05/08/2026', 
    image: imgTeamwork,
    content: (
      <div className="space-y-3">
        <p><strong className="text-brand-yellow">Cách thức tham dự:</strong> Chia 8 nhóm (3 người/nhóm).</p>
        <p><strong className="text-brand-yellow">Hình thức thi:</strong> Tranh biện. Các đội thi theo hình thức cặp đôi để ủng hộ hoặc phản đối chủ đề được hội đồng thi đưa ra.</p>
        <p><strong className="text-brand-yellow">Cách thức chọn:</strong> Trận đấu mang tính đồng đội cao. Đội nào được Ban Giám khảo đánh giá cao hơn sẽ bước vào vòng trong.</p>
      </div>
    )
  },
  { 
    id: 4, 
    title: 'Vòng Bán kết', 
    date: '13/08/2026', 
    image: imgBanKet,
    content: (
      <div className="space-y-3">
        <p><strong className="text-brand-yellow">Cách thức tham dự:</strong> Chia 7 nhóm (2 người/nhóm).</p>
        <p><strong className="text-brand-yellow">Hình thức thi:</strong> Hùng biện cặp đôi. Mỗi cặp có 7 phút để trình bày phần hùng biện đôi.</p>
        <p><strong className="text-brand-yellow">Cách thức chọn:</strong> 6 thí sinh xuất sắc (dựa theo điểm tổng từng cá nhân khi chấm theo các tiêu chí đã đưa ra).</p>
      </div>
    )
  },
  { 
    id: 5, 
    title: 'Vòng Chung kết', 
    date: '22/08/2026', 
    image: imgChungKet2,
    content: (
      <div className="space-y-3">
        <p className="font-bold text-brand-yellow border-b border-white/20 pb-1 ">Phần 1: Hùng biện đối kháng</p>
        <p>6 thí sinh chia thành 3 cặp đấu với nhau để ủng hộ/phản đối một chủ đề. <strong className="text-brand-yellow">Tiêu chí (Chọn 4 người):</strong> 3 thí sinh thắng trong 3 lượt đấu + 1 thí sinh có phần thi tốt nhất.</p>
        
        <p className="font-bold text-brand-yellow border-b border-white/20 pb-1 mt-4">Phần 2: Diễn thuyết truyền cảm hứng</p>
        <p>4 thí sinh lần lượt thể hiện phần diễn thuyết. Trong vòng 3 phút, phải làm rõ thông điệp nhận được qua cuộc thi Tôi Bản lĩnh 2026.</p>
      </div>
    )
  },
];

export const RulesSection = () => {
  const [flippedId, setFlippedId] = useState<number | null>(null);

  return (
    <section id="rules" className="bg-[#1b3326] py-20 px-0 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <h2 className="text-6xl md:text-8xl font-black mb-4 text-white uppercase text-center">
          Thể lệ
        </h2>
        <p className="text-gray-300 text-lg md:text-xl text-center mb-16 px-6">
          Tôi Bản lĩnh 2026 sẽ được tổ chức từ ngày 06/07/2026 đến ngày 22/08/2026
        </p>

        {/* Cards Container - Horizontal scroll on mobile, wrap on desktop */}
        <div className="flex flex-row md:flex-wrap overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none justify-start md:justify-center gap-6 lg:gap-8 w-full max-w-[1100px] px-6 md:px-0 pb-8 md:pb-0 hide-scrollbar">
          {rulesData.map((rule) => (
            <div 
              key={rule.id} 
              className="group perspective-1000 w-[85vw] sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[320px] shrink-0 snap-center h-[480px] cursor-pointer"
              onClick={() => setFlippedId(flippedId === rule.id ? null : rule.id)}
            >
              <div className={`relative w-full h-full preserve-3d transition-transform duration-700 md:group-hover:rotate-y-180 ${flippedId === rule.id ? 'rotate-y-180' : ''}`}>
                
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden rounded-3xl border border-brand-yellow/20 shadow-[0_0_20px_rgba(255,205,106,0.15)] group-hover:shadow-[0_0_30px_rgba(255,205,106,0.3)] transition-shadow">
                  {/* Blurred Background */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden z-0">
                    <div 
                      className="absolute inset-0 scale-110 blur-md bg-cover bg-center"
                      style={{ backgroundImage: `url(${bgImage})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                  
                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    {/* Title Box */}
                    <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-white/20 rounded-xl py-3 px-4 text-center shadow-[0_10px_30px_rgba(0,0,0,1)]">
                      <h3 className="text-2xl font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">{rule.title}</h3>
                    </div>
                    
                    {/* Image */}
                    <div className="w-full h-[180px] rounded-2xl overflow-hidden my-4 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,1)]">
                      <img 
                        src={rule.image} 
                        alt={rule.title} 
                        className="w-full h-full object-cover object-center"
                      />
                    </div>

                    {/* Date Box */}
                    <div className="bg-[#1a1a1a]/80 backdrop-blur-md border border-brand-yellow/30 rounded-xl py-3 px-4 text-center shadow-[0_10px_30px_rgba(0,0,0,1)]">
                      <p className="text-white text-sm md:text-base font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">{rule.date}</p>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl border border-brand-yellow/50 shadow-[0_0_30px_rgba(255,205,106,0.2)]">
                  {/* Blurred Background */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden z-0">
                    <div 
                      className="absolute inset-0 scale-110 blur-md bg-cover bg-center"
                      style={{ backgroundImage: `url(${bgImage})` }}
                    ></div>
                    <div className="absolute inset-0 bg-black/50"></div>
                  </div>

                  <div className="relative z-10 p-6 flex flex-col items-center h-full">
                    <h3 className="text-2xl font-black text-brand-yellow mb-4 shrink-0 drop-shadow-[0_4px_10px_rgba(0,0,0,1)]">{rule.title}</h3>
                    <div className="text-gray-100 text-sm leading-relaxed text-justify w-full overflow-y-auto pr-2 custom-scrollbar flex-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                      {rule.content}
                    </div>
                    <div className="mt-8 border-t border-white/20 pt-6 w-full text-center">
                      <span className="text-brand-yellow/80 text-sm font-semibold tracking-wider uppercase drop-shadow-[0_4px_8px_rgba(0,0,0,1)]">Tôi Bản Lĩnh 2026</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
