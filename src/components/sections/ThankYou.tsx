"use client"

import {motion} from "framer-motion";

export default function ThankYou() {
    return (
        <section className="h-screen mx-auto flex flex-col"
                 data-scroll-section
        >
            <div className="flex-1 text-center flex justify-center align-middle items-center ">
                <motion.img
                    initial={{opacity: 0, y: 80}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.2,
                        ease: "linear",
                        delay: .2
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    src="/frame/frame-thankyou.svg"
                    alt="couple"
                    className="w-120 object-cover mx-auto pt-[30px]"/>
            </div>
            <footer className="text-center text-sm py-2"
                    data-scroll-section
            >
                © 2025 Joyless. All rights reserved.
            </footer>
        </section>
    )
}