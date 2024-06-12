import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Slider() {
  return (
    <>
      <section className="w-full h-auto bg-[#495E57]">
        <div className="max-w-[1230px] px-8 py-8 mx-auto">
          <h1 className="markazi min-[600px]:text-[64px] text-[48px] font-bold text-[#DFC338] text-center">
            Testimonial
          </h1>
          <Swiper
            // install Swiper modules
            style={{
              marginTop: "-20px",
            }}
            modules={[
              Navigation,
              Pagination,
              Scrollbar,
              A11y,
              FreeMode,
              Autoplay,
            ]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ dynamicBullets: true, clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <SliderContent
                name="Sarah_Ahmed"
                desc={`"Little Lemon offers a delightful dining experience with fresh,
          flavorful dishes and exceptional service. The cozy ambiance makes it
          perfect for family gatherings. Their lemon-infused specialties are a
          must-try! Highly recommend this hidden gem."`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                name="John_Robertson"
                desc={`"Absolutely love Little Lemon! The vibrant flavors and creative dishes always impress. The staff is friendly and attentive, ensuring a pleasant dining experience. Perfect for both casual meals and special occasions. Definitely a top choice in town."`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                name="Emily_Wong"
                desc={`"Little Lemon exceeded our expectations with its delicious, beautifully presented meals. The lemon-themed menu is unique and refreshing. The atmosphere is warm and inviting, making it a favorite spot for our family. Can't wait to return!"`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                name="Michael_Patel"
                desc={`"Dining at Little Lemon is always a treat. The menu offers a great variety of dishes, all bursting with fresh flavors. The service is impeccable, and the ambiance is charming. A wonderful place to enjoy a memorable meal."`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                name="Laura_Martinez"
                desc={`"Little Lemon is a fantastic restaurant with a cozy, welcoming vibe. The food is consistently excellent, with creative dishes that highlight fresh ingredients. The staff is friendly and attentive, making every visit a pleasure. Highly recommend!"`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                name="David_Kim"
                desc={`"We had an amazing dinner at Little Lemon! The food was fresh, flavorful, and beautifully presented. The lemon accents in the dishes were a delightful touch. The service was outstanding, and the atmosphere was perfect for a relaxing evening."`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <SliderContent
                name="Sophia_Johnson"
                desc={`"Little Lemon is our go-to restaurant for delicious, high-quality meals. The menu is inventive, with a perfect balance of flavors. The staff is always friendly and professional. We love the warm, inviting atmosphere. Highly recommend for any occasion!"`}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
// eslint-disable-next-line react/prop-types
const SliderContent = ({ name, desc }) => {
  return (
    <>
      <div className="py-[40px] px-[90px] max-[650px]:px-[60px]">
        <h3 className="text-center mb-4 min-[600px]:text-[30px] text-[25px] font-bold text-[#DFC338]">
          {name}
        </h3>
        <p className="text-[#DFC338] min-[600px]:text-[18px] text-[16px] font-[600]">
          {desc}
        </p>
      </div>
    </>
  );
};
