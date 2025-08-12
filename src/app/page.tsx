"use client"

import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
import ScrollWrapper from "@/components/ScrollWrapper";

import WelcomeSection from "@/components/sections/Welcome"
import OurStorySection from "@/components/sections/OurStory"
import OurStory2Section from "@/components/sections/OurStory2"
import LocationSection from "@/components/sections/Location"
import GallerySection from "@/components/sections/Gallery"
import QRSection from "@/components/sections/QR"
import ThankYouSection from "@/components/sections/ThankYou"

export default function Page() {
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const targetDate = new Date("2025-08-20").getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;
            setDaysLeft(Math.ceil(distance / (1000 * 60 * 60 * 24)));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <ScrollWrapper>
            <div className="absolute w-[58%]">
                <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src="/frame/frame-top.svg" alt="Frame" className=""/>
            </div>
            <div className="absolute bottom-0 right-0 w-[15%]">
                <motion.img
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true, amount: 0.5 }}
                    src="/frame/frame-bottom.svg" alt="Frame" className=""/>
            </div>

            {/**/}
            <div className="relative z-1">
                {/*Screen*/}
                <WelcomeSection/>
                {/*End Screen*/}

                {/*Our Story*/}
                <OurStorySection/>
                {/*End Our Story*/}

                {/*Location*/}
                <LocationSection/>
                {/*End Location*/}

                {/*Gallery*/}
                <GallerySection/>
                {/*End Gallery*/}

                {/*QR*/}
                <QRSection/>
                {/*End QR*/}

                {/*ThankYou*/}
                <ThankYouSection/>
                {/*End ThankYou*/}
            </div>
        </ScrollWrapper>
    );
}
