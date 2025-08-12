"use client"

import { motion } from "framer-motion";
import AnimatedText from "@/components/AnimatedText";

type Props = {
    timeline: string;
    text: string;
    image: string;
    direction?: "left" | "right";
}

const TimelineItem = ({ timeline, text, image, direction = "left" }:Props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: direction === "left" ? -100 : 100, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center align-middle items-center h-[20vh]"
        >
            {direction === "left" && (
                <>
                <div className="flex flex-1 py-2">
                    <div className="flex flex-1 items-center">
                        <button
                            className="btn-timeline mr-5"
                            data-scroll
                        >Tháng {timeline}</button>
                        <p
                            className="text-lg"
                            data-scroll
                        >
                            <AnimatedText text={text}/>
                        </p>
                    </div>
                    <div
                        className="flex-1"
                        data-scroll
                    >
                        <motion.img
                            src={image}
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
                <div className="flex-1"></div>
                </>
            )}

            {direction === "right" && (
                <>
                <div className="flex-1"></div>
                <div className="flex flex-1 py-2">
                    <div className="flex flex-1 items-center">
                        <button
                            className="btn-timeline mr-5"
                            data-scroll
                        >Tháng {timeline}</button>
                        <p
                            className="text-lg"
                            data-scroll
                        >
                            <AnimatedText text={text}/>
                        </p>
                    </div>
                    <div
                        className="flex-1"
                        data-scroll
                    >
                        <motion.img
                            src={image}
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
                </>
            )}
        </motion.div>
    );
};

export default TimelineItem
