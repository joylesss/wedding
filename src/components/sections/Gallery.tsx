"use client"

import { Swiper, SwiperSlide } from "swiper/react";
// Style css
import 'swiper/css'
import 'swiper/css/pagination'
//
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 3500)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="sm:h-screen py-8 px-4 mx-auto flex flex-col md:flex-col"
                 data-scroll-section
        >
            <h2 className="text-5xl font-bold mx-auto align-center w-[60%]">
                <AnimatedText text="Album" />
            </h2>
            <hr
                data-scroll
                className="w-[60%] is-hidden pb-4"/>
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
                        <img src={img} alt={index} ></img>
                    </SwiperSlide>
                ))}


            </Swiper>

        </section>
    )
}