"use client"

import {motion} from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

export default function QR() {
    return (
        <section className="sm:h-screen py-8 px-4 max-w-1xl mx-auto flex flex-col md:flex-col"
                 data-scroll-section
        >
            <h2 className="text-5xl font-bold mx-auto align-center w-[60%]">
                <AnimatedText text="Mừng cưới từ xa" />
            </h2>
            <hr
                data-scroll
                className="w-[60%] is-hidden pb-12"/>
            <div className="col-1 sm:inline-flex text-right mx-auto pt-15">
                <div
                    data-scroll
                    className="content-end sm:pr-5 pb-5 md:pb-0">
                    <motion.img
                        initial={{opacity: 0, y: -80}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 0.2
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/ourstory/2.webp"
                        className="rounded-full w-80 h-80 object-cover mx-auto border-4 border-white shadow"/>
                    <motion.p
                        initial={{opacity: 0, x: -80}}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 0.6
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-lg text-gray-600 mt-2 text-center">
                            Phan Vũ Nguyên Nam<br/>
                            MB Bank - 123456789
                    </motion.p>
                    <motion.img
                        initial={{opacity: 0, y: 80}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 1
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/"
                        className="w-50 h-50 object-cover mx-auto border-2 border-white shadow mt-2"/>
                </div>


                <div className="content-end sm:pl-5 pb-5 md:pb-0 pt-10 sm:pt-0">
                    <motion.img
                        initial={{opacity: 0, y: -80}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 1.4
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/ourstory/3.webp"
                        className="rounded-full w-80 h-80 object-cover mx-auto border-4 border-white shadow"/>
                    <motion.p
                        initial={{opacity: 0, x: -80}}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 1.8
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="text-lg text-gray-600 mt-2 text-center">
                            Nguyễn Thị Đài Loan<br/>
                            Vietcombank - 123456789
                    </motion.p>
                    <motion.img
                        initial={{opacity: 0, y: 80}}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.2,
                            ease: "linear",
                            delay: 2.2
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        src="/"
                        className="w-50 h-50 object-cover mx-auto border-2 border-white shadow mt-2"/>
                </div>
            </div>
        </section>
    )
}