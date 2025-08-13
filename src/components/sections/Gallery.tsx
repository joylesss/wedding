"use client"

import { Swiper, SwiperSlide } from "swiper/react";
// Style css
import 'swiper/css'
import 'swiper/css/pagination'
//
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import AnimatedText from "@/components/AnimatedText";

const images = [
    "/gallery/1.jpg",
    "/gallery/1.jpg",
    "/gallery/2.jpg",
    "/gallery/2.jpg",
    "/gallery/3.jpg",
    "/gallery/3.jpg",
    "/gallery/4.jpg",
    "/gallery/4.jpg",
    "/gallery/5.jpg",
    "/gallery/5.jpg"
];

export default function Gallery() {


    return (
        <section className="h-screen pb-2 px-4 mx-auto flex flex-col md:flex-col"
                 data-scroll-section
        >
            <div className="pt-2 pb-5 md:pb-15 ">
                <h2 className="text-[2.2rem] sm:text-[2.6rem] md:text-[2.7rem] lg:text-5xl font-bold mx-auto align-center w-[95%] sm:w-[82%] md:w-[70%] lg:w-[58%] pb-1 leading-none">
                    <AnimatedText text="Album" />
                </h2>
                <hr
                    className="w-[95%] sm:w-[82%] md:w-[70%] lg:w-[58%] is-hidden pb-2 mb-4"
                    data-scroll
                />
            </div>
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={25}
                pagination={{
                    clickable: true
                }}
                modules={[Pagination, EffectFade, Autoplay]}
                effect="slide"
                autoplay={{delay: 3500}}
                loop={true}
                className="mySwiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide>
                        <img src={img} alt={index} />
                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    )
}