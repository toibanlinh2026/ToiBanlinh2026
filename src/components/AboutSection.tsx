import avatarImage from '../../TBL_Avatar.png';

export const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-12 lg:px-24 text-brand-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Column - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-brand-yellow rounded-2xl transform translate-x-2 translate-y-2 opacity-50 blur-sm"></div>
            <img 
              src={avatarImage} 
              alt="Tôi Bản Lĩnh Avatar" 
              className="relative z-10 w-full max-w-[400px] md:max-w-full rounded-2xl border-4 border-brand-yellow shadow-xl"
            />
          </div>
        </div>

        {/* Right Column - Text */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
            Tôi Bản lĩnh 2026
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-lg text-justify">
            “Tôi Bản lĩnh” là cuộc thi được tổ chức thường niên bởi CLB Thuyết trình, nhằm tạo sân chơi bổ ích để rèn luyện kỹ năng mềm, tăng tinh thần giao lưu học hỏi giữa các sinh viên trên địa bàn Hà Nội.
          </p>
          
          <p className="text-gray-600 leading-relaxed text-lg text-justify">
            Sau sự vắng bóng của Tôi Bản lĩnh 2025, cuộc thi sẽ tiếp tục quay trở lại với các bạn sinh viên trong năm 2026.  <br/>
            Với chủ đề KÉN, Ban tổ chức mong muốn các thí sinh sẽ nhìn sâu hơn lại chính bản thân mình. Nếu hôm nay bạn đang ở trong kén, đó không phải dấu hiệu của sự tụt lại, mà là khoảnh khắc chuẩn bị cho một lần cất cánh. Và biết đâu, từ những chiếc kén im lặng ấy, đến một ngày, không chỉ một con bướm bay lên - mà là cả một chân trời mới.
          </p>
        </div>

      </div>
    </section>
  );
};
