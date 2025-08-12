"use client"

import {motion} from "framer-motion";
import AnimatedText from "@/components/AnimatedText";
import TimelineItem from "@/components/TimelineItem";

export default function OurStory() {
    const items = [
        { timeline: "08/2018", text: "Lần đầu gặp nhau tại giảng đường đại học", image: "https://demo-source.imgix.net/scooter.jpg", direction: "right" },
        { timeline: "10/2018", text: "Buổi hẹn hò đầu tiên tại quán cafe nhỏ trên phố cổ", image: "https://demo-source.imgix.net/scooter.jpg", direction: "" },
        { timeline: "02/2019", text: "Cùng nhau du lịch Đà Lạt, lưu giữ những kỷ niệm đầu tiên", image: "https://demo-source.imgix.net/scooter.jpg", direction: "right" },
        { timeline: "09/2020", text: "Vượt qua thử thách yêu xa suốt 1 năm", image: "https://demo-source.imgix.net/scooter.jpg", direction: "" },
        { timeline: "12/2022", text: "Cùng nhau về ra mắt gia đình hai bên", image: "https://demo-source.imgix.net/scooter.jpg", direction: "right" },
        { timeline: "03/2025", text: "Cầu hôn ngọt ngào dưới ánh hoàng hôn biển Phú Quốc", image: "https://demo-source.imgix.net/scooter.jpg", direction: "" },
    ]

    return (
        <section className="py-0 sm:py-8 sm:px-2 sm:px-4 mx-auto flex-row md:flex-row pb-[5rem]"
                 data-scroll-section
        >
            <div className="pb-5 md:pb-15 ">
                <h2
                    className="text-[2.2rem] sm:text-[2.6rem] md:text-[2.7rem] lg:text-5xl mx-auto align-center w-[95%] sm:w-[82%] md:w-[70%] lg:w-[58%] font-bold lg:pb-2 leading-none"
                    data-scroll
                >
                    <AnimatedText text="Câu chuyện của chúng tôi"/>
                </h2>
                <hr
                    className="w-[95%] sm:w-[82%] md:w-[70%] lg:w-[58%] is-hidden pb-2 mb-4"
                    data-scroll
                />
            </div>
            {/*1*/}
            <motion.div
                initial={{ opacity: 0, x : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex-1 md:flex justify-center align-middle items-center lg:mt-[0rem] h-[36vh] lg:h-[13rem]"
                data-scroll
            >
                <div className="lg:flex-1 relative">
                    <motion.img
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/timeline/timeline-1.svg" alt=""
                        className="w-28 absolute right-[-4rem] hidden lg:block"
                    />
                </div>
                <div className="flex flex-1 py-2">
                    <div className="flex w-[48%] items-center p-2">
                        <div className="text-lg leading-[1.1]">
                            <p className="md:text-base m-2">
                                <AnimatedText text="Tháng 08/2018" direction="down"/>
                            </p>
                            <p>
                                <AnimatedText text="Lần đầu gặp nhau tại giảng đường đại học"/>
                            </p>
                        </div>
                    </div>
                    <div
                        className="w-[52%] relatve img-wrapper mr-2 sm:mr-0"
                    >
                            <img
                                src="/ourstory/1.webp"
                                alt="couple"
                                className="shadow w-[100%] md:w-[80%] lg:w-[100%]"
                            />
                    </div>
                </div>
            </motion.div>
            {/*2*/}
            <motion.div
                initial={{ opacity: 0, x : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex-1 md:flex justify-center align-middle items-center mt-[1rem] lg:mt-[0rem] h-[36vh] lg:h-[13rem]"
                data-scroll
            >
                <div className="flex flex-1 py-2">
                    <div
                        className="w-[52%] relatve img-wrapper ml-2 sm:ml-0"
                    >
                        <img
                            src="/ourstory/2.webp"
                            alt="coupl2e"
                            className="shadow w-[100%] md:w-[80%] lg:w-[100%]"
                        />
                    </div>
                    <div className="flex w-[48%] items-center p-2">
                        <div className="text-lg leading-[1.1]">
                            <p className="md:text-base m-2">
                                <AnimatedText text="Tháng 10/2018" direction="down" delay={1.5}/>
                            </p>
                            <p>
                                <AnimatedText text="Buổi hẹn hò đầu tiên tại quán cafe nhỏ trên phố cổ" direction="up" delay={1.5}/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex-1 relative">
                    <motion.img
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/timeline/timeline-2.svg" alt=""
                        className="w-28 absolute left-[-4rem] hidden lg:block"
                    />
                </div>
            </motion.div>
            {/*3*/}
            <motion.div
                initial={{ opacity: 0, x : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex-1 md:flex justify-center align-middle items-center mt-[1rem] lg:mt-[0rem] h-[36vh] lg:h-[13rem]"
                data-scroll
            >
                <div className="lg:flex-1 relative">
                    <motion.img
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/timeline/timeline-1.svg" alt=""
                        className="w-28 absolute right-[-4rem] hidden lg:block"
                    />
                </div>
                <div className="flex flex-1 py-2">
                    <div className="flex w-[48%] items-center p-2">
                        <div className="text-lg leading-[1.1]">
                            <p className="md:text-base m-2">
                                <AnimatedText text={"Tháng 02/2019"} direction="down" delay={1.5}/>
                            </p>
                            <p>
                                <AnimatedText text="Cùng nhau du lịch Đà Lạt, lưu giữ những kỷ niệm đầu tiên" direction="up" delay={1.5}/>
                            </p>
                        </div>
                    </div>
                    <div
                        className="w-[52%] relatve img-wrapper mr-2 sm:mr-0"
                    >
                            <img
                                src="/ourstory/3.webp"
                                alt="couple"
                                className="shadow w-[100%] md:w-[80%] lg:w-[100%]"
                            />
                    </div>
                </div>
            </motion.div>
            {/*4*/}
            <motion.div
                initial={{ opacity: 0, x : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex-1 md:flex justify-center align-middle items-center mt-[1rem] lg:mt-[0rem] h-[36vh] lg:h-[13rem]"
                data-scroll
            >
                <div className="flex flex-1 py-2">
                    <div
                        className="w-[52%] relatve img-wrapper ml-2 sm:ml-0"
                    >
                            <img
                                src="/ourstory/4.webp"
                                alt="coupl2e"
                                className=" shadow w-[100%] md:w-[80%] lg:w-[100%]"
                            />
                    </div>
                    <div className="flex w-[48%] items-center p-2">
                        <div className="text-lg leading-[1.1]">
                            <p className="md:text-base m-2">
                                <AnimatedText text="Tháng 09/2020" direction="down" delay={1.5}/>
                            </p>
                            <p>
                                <AnimatedText text="Vượt qua thử thách yêu xa suốt 1 năm" direction="up" delay={1.5}/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex-1 relative">
                    <motion.img
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/timeline/timeline-2.svg" alt=""
                        className="w-28 absolute left-[-4rem] hidden lg:block"
                    />
                </div>
            </motion.div>
            {/*5*/}
            <motion.div
                initial={{ opacity: 0, x : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex-1 md:flex justify-center align-middle items-center mt-[1rem] lg:mt-[0rem] h-[36vh] lg:h-[13rem]"
                data-scroll
            >
                <div className="lg:flex-1 relative">
                    <motion.img
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/timeline/timeline-1.svg" alt=""
                        className="w-28 absolute right-[-4rem] hidden lg:block"
                    />
                </div>
                <div className="flex flex-1 py-2">
                    <div className="flex w-[48%] items-center p-2">
                        <div className="text-lg leading-[1.1]">
                            <p className="md:text-base m-2">
                                <AnimatedText text="Tháng 12/2022" direction="down" delay={1.5}/>
                            </p>
                            <p>
                                <AnimatedText text="Cùng nhau về ra mắt gia đình hai bên"  direction="up" delay={1.5}/>
                            </p>
                        </div>
                    </div>
                    <div
                        className="w-[52%] relatve img-wrapper mr-2 sm:mr-0"
                    >
                            <img
                                src="/ourstory/5.webp"
                                alt="couple"
                                className="shadow w-[100%] md:w-[80%] lg:w-[100%]"

                            />
                    </div>
                </div>
            </motion.div>
            {/*6*/}
            <motion.div
                initial={{ opacity: 0, x : -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
                viewport={{ once: true, amount: 0.5 }}
                className="flex-1 md:flex justify-center align-middle items-center mt-[1rem] lg:mt-[0rem] h-[36vh] lg:h-[13rem]"
                data-scroll
            >
                <div className="flex flex-1 py-2">
                    <div
                        className="w-[52%] relatve img-wrapper ml-2 sm:ml-0"
                    >
                        <img
                            src="/default.jpg"
                            alt="coupl2e"
                            className="shadow w-[100%] md:w-[80%] lg:w-[100%]"
                        />
                    </div>
                    <div className="flex w-[48%] items-center p-2">
                        <div className="text-lg leading-[1.1]">
                            <p className="md:text-base m-2">
                                <AnimatedText text="Tháng 03/2025" direction="down" delay={1.5}/>
                            </p>
                            <p>
                                <AnimatedText text="Cầu hôn ngọt ngào dưới ánh hoàng hôn biển Phú Quốc" direction="up" delay={1.5}/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex-1 relative"></div>
            </motion.div>

        </section>
    )
}