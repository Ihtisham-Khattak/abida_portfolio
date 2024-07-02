import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxCrop,
    title: "Comprehensive Functional Testing",
    description:
      "Conduct thorough functional testing to ensure software features work as intended. Create test plans and cases based on requirements. Identify and document defects and inconsistencies, and collaborate with developers for resolution.",
  },
  {
    Icon: RxPencil2,
    title: "User Interface (UI) Testing",
    description:
      "Conduct UI testing to ensure a user-friendly, consistent, and visually appealing interface. Check alignment, color schemes, font sizes, and responsiveness across devices and browsers. Report issues and suggest enhancements to improve user experience.",
  },
  {
    Icon: RxDesktop,
    title: "Regression Testing",
    description:
      "Execute regression testing to ensure new code changes don't affect existing functionalities. Update regression test suites to cover critical aspects of the application. Provide detailed reports on outcomes, highlighting new defects and verifying fixes.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
