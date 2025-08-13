"use client"

import {motion} from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import TimelineItem from "@/components/TimelineItem";

export default function OurStory() {
    const items = [
        { timeline: "08/2018", text: "Lần đầu gặp nhau tại giảng đường đại học", image: "/ourstory/1.webp", image_timeline: "/timeline/timeline-1.svg", direction: "right" },
        { timeline: "10/2018", text: "Buổi hẹn hò đầu tiên tại quán cafe nhỏ trên phố cổ", image: "/ourstory/2.webp", image_timeline: "/timeline/timeline-2.svg", direction: "left" },
        { timeline: "02/2019", text: "Cùng nhau du lịch Đà Lạt, lưu giữ những kỷ niệm đầu tiên", image: "/ourstory/3.webp", image_timeline: "/timeline/timeline-3.svg", direction: "right" },
        { timeline: "09/2020", text: "Vượt qua thử thách yêu xa suốt 1 năm", image: "/ourstory/4.webp", image_timeline: "/timeline/timeline-4.svg", direction: "left" },
        { timeline: "12/2022", text: "Cùng nhau về ra mắt gia đình hai bên", image: "/ourstory/5.webp", image_timeline: "/timeline/timeline-5.svg", direction: "right" },
        { timeline: "03/2025", text: "Cầu hôn ngọt ngào dưới ánh hoàng hôn biển Phú Quốc", image: "/ourstory/1.webp", image_timeline: "/timeline/timeline-6.svg", direction: "left" },
    ]

    return (
        <section className="sm:py-8 sm:px-2 sm:px-4 mx-auto flex-row sm:pb-[5rem]"
                 data-scroll-section
        >
            <div className="pt-2 pb-5 md:pb-15 ">
                <h2
                    className="text-[2.2rem] sm:text-[2.6rem] md:text-[2.7rem] lg:text-5xl mx-auto align-center w-[95%] sm:w-[82%] md:w-[70%] lg:w-[58%] font-bold pb-1 leading-none"
                    data-scroll
                >
                    <AnimatedText text="Câu chuyện của chúng tôi"/>
                </h2>
                <hr
                    className="w-[95%] sm:w-[82%] md:w-[70%] lg:w-[58%] is-hidden pb-2 mb-4"
                    data-scroll
                />
            </div>
            {items.map((item, index) => (
                <TimelineItem key={index} timeline={item.timeline} text={item.text} image={item.image} image_timeline={item.image_timeline} direction={item.direction}/>
            ))}

        </section>
    )
}