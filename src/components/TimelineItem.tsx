"use client"

import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

type Props = {
    key: number;
    timeline: string;
    text: string;
    image: string;
    image_timeline: string;
    direction: string;
}

const TimelineItem = (
    { timeline, text, image, image_timeline, direction }
    :Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.5 }}
            viewport={{ once: true, amount: 0.5 }}
            className={`flex-1 md:flex justify-center align-middle items-center lg:mt-[0rem] h-[38vh] lg:h-[13rem]`}
        >
            {direction === "left" && (
                <>
                <div className="flex flex-1 py-2">
                    <div className="w-[52%] relatve img-wrapper ml-2 sm:ml-0">
                        <img
                            src={image}
                            alt="coupl2e"
                            className="shadow w-[100%] md:w-[80%] lg:w-[100%]"
                        />
                    </div>
                    <div className="flex w-[48%] items-center p-2">
                        <div className="text-lg leading-[1.1]">
                            <p className="md:text-base m-2">
                                <AnimatedText text={timeline} direction="down" delay={1.5}/>
                            </p>
                            <p>
                                <AnimatedText text={text} direction="up" delay={1.5}/>
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
                        src={image_timeline} alt=""
                        // className="w-28 absolute left-[-4rem] hidden lg:block"
                        className={`w-28 absolute hidden lg:block} ${direction === 'left' ? 'left-[-4rem]' : 'right-[-4rem]'} `}
                    />
                </div>
                </>
            )}

            {direction === "right" && (
                <>
                <div className="lg:flex-1 relative">
                    <motion.img
                        initial={{ opacity: 0, scaleX: 0 }}
                        whileInView={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 2 }}
                        viewport={{ once: true, amount: 0.5 }}
                        src={image_timeline} alt=""
                        className="w-28 absolute right-[-4rem] hidden lg:block"
                    />
                </div>
                <div className="flex flex-1 py-2">
                    <div className="flex w-[48%] items-center p-2">
                        <div className="text-lg leading-[1.1]">
                            <p className="md:text-base m-2">
                                <AnimatedText text={timeline} direction="down"/>
                            </p>
                            <p>
                                <AnimatedText text={text}/>
                            </p>
                        </div>
                    </div>
                    <div
                        className="w-[52%] relatve img-wrapper mr-2 sm:mr-0"
                    >
                        <img
                            src={image} alt="couple"
                            className="shadow w-[100%] md:w-[80%] lg:w-[100%]"
                        />
                    </div>
                </div>
                </>
            )}
        </motion.div>
    );
};

export default TimelineItem
