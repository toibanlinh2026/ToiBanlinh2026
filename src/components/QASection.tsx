import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'Những ai có thể tham gia cuộc thi?',
    answer: 'Học sinh/sinh viên từ 16 - 25 tuổi đang theo học tại các trường THPT, Đại học, Cao đẳng, Học viện trên toàn địa bàn thành phố Hà Nội.'
  },
  {
    id: 2,
    question: 'Cuộc thi có hình thức thi theo cá nhân hay đội nhóm?',
    answer: 'Cuộc thi có hình thức thi cá nhân. Tuy nhiên ở vòng Teamwork và Bán kết, các thí sinh sẽ được ghép cặp và thi đấu.'
  },
  {
    id: 3,
    question: 'Nếu chưa có kinh nghiệm trong lĩnh vực có thể tham gia không?',
    answer: 'Hoàn toàn có thể. Trong quá trình diễn ra cuộc thi, BTC sẽ luôn có những buổi training kéo dài từ vòng Teamwork tới Chung kết, đảm bảo kiến thức cho các bạn thí sinh.'
  }
];

export const QASection = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="qa" className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-[#0f172a]">
          Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">Questions</span>
        </h2>
        
        <div className="flex flex-col gap-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-gray-100 overflow-hidden transition-all duration-300"
              >
                <button 
                  onClick={() => toggle(faq.id)}
                  className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
                >
                  <span className={`font-bold text-[15px] md:text-base pr-8 ${isOpen ? 'text-[#1e3a8a]' : 'text-gray-800'}`}>
                    {faq.question}
                  </span>
                  <svg 
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-blue-600' : 'text-gray-400'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div 
                  className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[200px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-gray-600 text-sm md:text-[15px] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
