"use client"

import {motion} from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import TimelineItem from "@/components/TimelineItem";

export default function OurStory2() {
    const items = [
        { timeline: "08/2018", text: "Lần đầu gặp nhau tại giảng đường đại học", image: "https://demo-source.imgix.net/scooter.jpg", direction: "right" },
        { timeline: "10/2018", text: "Buổi hẹn hò đầu tiên tại quán cafe nhỏ trên phố cổ", image: "https://demo-source.imgix.net/scooter.jpg", direction: "" },
        { timeline: "02/2019", text: "Cùng nhau du lịch Đà Lạt, lưu giữ những kỷ niệm đầu tiên", image: "https://demo-source.imgix.net/scooter.jpg", direction: "right" },
        { timeline: "09/2020", text: "Vượt qua thử thách yêu xa suốt 1 năm", image: "https://demo-source.imgix.net/scooter.jpg", direction: "" },
        { timeline: "12/2022", text: "Cùng nhau về ra mắt gia đình hai bên", image: "https://demo-source.imgix.net/scooter.jpg", direction: "right" },
        { timeline: "03/2025", text: "Cầu hôn ngọt ngào dưới ánh hoàng hôn biển Phú Quốc", image: "https://demo-source.imgix.net/scooter.jpg", direction: "" },
    ]

    return (
        <section className=" py-8 px-4 max-w-1xl mx-auto flex-row md:flex-row items-start gap-8"
                 data-scroll-section
        >
            <div>
                <h2
                    className="text-5xl mx-auto align-center w-[60%] font-bold pb-2"
                    data-scroll>
                    <AnimatedText text="Câu chuyện của chúng tôi"/>
                </h2>
                <hr
                    className="w-[60%] is-hidden pb-2 mb-4"
                    data-scroll/>
                {/*<img src="/timeline2.svg" alt="" className="fixed w-[13vh] top-[16%] left-[45%]"/>*/}
            </div>

            <motion.div
                initial={{ opacity: 0, x: 100, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center align-middle items-center h-[20vh]"
            >
                <div className="flex-1"></div>
                <div className="flex flex-1 py-2">
                    <div className="flex flex-1 items-center">
                        <button
                            className="btn-timeline mr-5"
                            data-scroll
                        >Tháng 08/2018</button>
                        <p
                            className="text-lg"
                            data-scroll
                        >
                            <AnimatedText text="Lần đầu gặp nhau tại giảng đường đại học"/>
                        </p>
                    </div>
                    <div
                        className="flex-1"
                        data-scroll
                    >
                        <motion.img
                            src="https://demo-source.imgix.net/scooter.jpg"
                            alt="couple"
                            className="rounded-full w-45 h-45 object-cover mx-auto border-4 border-white shadow"
                            data-scroll
                            initial={{opacity: 0, x: -150}}
                            animate={{opacity: 1, x: 0}}
                            transition={{
                                duration: 0.3,
                                ease: "easeOut",
                                delay: 0.8
                            }}
                            viewport={{ once: false, amount: 0.8 }}

                        />
                    </div>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -100, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex-1 flex justify-center align-middle items-center h-[20vh]"
            >
                <div className="flex flex-1 py-2">
                    <div className="flex flex-1 items-center">
                        <div
                            className="flex-1"
                            data-scroll
                        >
                            <motion.img
                                src="https://demo-source.imgix.net/scooter.jpg"
                                alt="couple"
                                className="rounded-full w-45 h-45 object-cover mx-auto border-4 border-white shadow"
                                data-scroll
                                initial={{opacity: 0, x: -150}}
                                animate={{opacity: 1, x: 0}}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeOut",
                                    delay: 0.8
                                }}
                                viewport={{ once: false, amount: 0.8 }}

                            />
                        </div>
                        <p
                            className="text-lg"
                            data-scroll
                        >
                            <AnimatedText text="Lần đầu gặp nhau tại giảng đường đại học"/>
                        </p>
                        <button
                            className="btn-timeline mr-5"
                            data-scroll
                        >Tháng 08/2018</button>

                    </div>

                </div>
                <div className="flex-1"></div>
            </motion.div>

        </section>
    )
}