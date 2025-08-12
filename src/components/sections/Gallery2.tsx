"use client"

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg", "/gallery/5.jpg"];

export default function Gallery2() {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 3500)

        return () => clearInterval(timer)
    }, [])

    return (
        <section className="h-screen py-8 px-4 max-w-1xl mx-auto flex gap-8 items-center"
                 data-scroll-section
        >
            <AnimatePresence>
                <motion.img
                    key={images[index]}
                    src={images[index]}
                    className=""
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 2.5 }}
                    exit={{ opacity: .8 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>
        </section>
    )
}