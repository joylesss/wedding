"use client"

import {motion} from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

export default function Location() {
    return (
        <section className="py-8 px-4 max-w-1xl mx-auto flex flex-col md:flex-col"
                 data-scroll-section
        >
            <h2 className="text-5xl mx-auto align-center w-[60%] font-bold pb-2">
                <AnimatedText text="Thông tin lễ cưới"/>
            </h2>
            <hr className="w-[60%] is-hidden pb-4"
                data-scroll
            />
            <div className="md:col-1 inline md:inline-flex md:text-right mx-auto pb-10">
                <div className="md:mr-[5rem] md:content-end">
                    <motion.p
                        initial={{opacity: 0, y: -50}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 0.2
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="mb-2 text-2xl font-bold"
                    >Lễ Vu Quy</motion.p>
                    <motion.p
                        initial={{opacity: 0, x: -50}}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 0.4
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-lg text-gray-600"
                    >Ngày: 15/08/2025 - 08:00 sáng</motion.p>
                    <motion.p
                        initial={{opacity: 0, x: -50}}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 0.6
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-lg text-gray-600 mt-2"
                    >Địa điểm: Tư gia chú rể, T-T-Huế.</motion.p>
                </div>
                <div>
                    <motion.img
                        initial={{opacity: 0, x: 50}}
                        whileInView={{ opacity: 1, x: 0}}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 0.6
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/ourstory/1.webp"
                        className="rounded-lg shadow w-90"/>
                </div>
            </div>
            <div className="md:col-1 inline md:inline-flex text-left mx-auto">
                <div className="hidden md:inline">
                    <motion.img
                        initial={{opacity: 0, x: -50}}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 1.2
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/ourstory/1.webp"
                        className="rounded-lg shadow w-90"/>
                </div>
                <div className="md:ml-[5rem] md:content-end">
                    <motion.p
                        initial={{opacity: 0, y: -50}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: .8
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="mb-2 text-2xl font-bold"
                    >Tiệc Cưới</motion.p>
                    <motion.p
                        initial={{opacity: 0, x: 50}}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 1
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-lg text-gray-600"
                    >Ngày: 15/08/2025 - 18:00 tối</motion.p>
                    <motion.p
                        initial={{opacity: 0, x: 50}}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 1.2
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-lg text-gray-600 mt-2"
                    >Địa chỉ: Tư gia chú rể, T-T-Huế.</motion.p>
                </div>
                <div className="inline md:hidden">
                    <motion.img
                        initial={{opacity: 0, x: -50}}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 1.2
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/ourstory/1.webp"
                        className="rounded-lg shadow w-90"/>
                </div>
            </div>
            <div>
                <motion.iframe
                    initial={{opacity: 0, y: 50}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.2,
                        ease: "linear",
                        delay: 1.4
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4756.330382370516!2d106.63451097583314!3d10.782206389366959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eaf6658609f%3A0x1e97038f274d4237!2zVHJ1bmcgVMOibSBI4buZaSBOZ2jhu4sgVsOgIFRp4buHYyBDxrDhu5tpIE1lbGlzYSBDZW50ZXI!5e1!3m2!1svi!2s!4v1749547934443!5m2!1svi!2s"
                     height="220" style={{border:0}} allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mx-auto mt-4 w-[90%] md:w-[695px]"
                />
            </div>
        </section>
    )
}