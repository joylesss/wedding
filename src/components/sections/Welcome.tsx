"use client"

import {motion} from "framer-motion";
import AnimatedText from "@/components/AnimatedText"
import {useEffect, useState} from "react";

export default function Welcome() {

  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  useEffect(() => {
    const targetDate = new Date("2025-08-20 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        // Nếu đã đến ngày target thì clear
        setDaysLeft(0);
        setHoursLeft(0);
        setMinutesLeft(0);
        setSecondsLeft(0);
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDaysLeft(days);
      setHoursLeft(hours);
      setMinutesLeft(minutes);
      setSecondsLeft(seconds);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

    return (
        <div className="h-screen pt-[0rem] sm:pt-20 md:pt-25"
             data-scroll-section
        >
            <hr
                className="w-[60%] lg:w-[50%] m-auto is-hidden hidden md:flex"
                data-scroll/>
            <motion.nav
                className="flex justify-center space-x-6 py-3 text-sm tracking-wide bg-[rgba(255,255,255,0.5)] backdrop-blur-[2px] w-[60%] lg:w-[50%] m-auto uppercase hidden md:flex "
                data-scroll
            >
                <motion.a
                    href="#"
                    className="is-hidden-menu"
                    data-scroll
                    data-scroll-direction="vertical"
                    transition={{
                        duration: .6, ease: "linear", delay: 0.1
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                >Welcome</motion.a>
                <motion.a
                    href="#"
                    className="is-hidden-menu"
                    data-scroll
                    data-scroll-direction="vertical"
                    transition={{
                        duration: .6,
                        ease: "linear",
                        delay: 0.2
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                >Our Story</motion.a>
                <motion.a
                    href="#"
                    className="is-hidden-menu"
                    data-scroll
                    data-scroll-direction="vertical"
                    transition={{
                        duration: .6,
                        ease: "linear",
                        delay: 0.3
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                >Location</motion.a>
                <motion.a
                    href="#"
                    className="is-hidden-menu"
                    data-scroll
                    data-scroll-direction="vertical"
                    transition={{
                        duration: .6,
                        ease: "linear",
                        delay: 0.4
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                >Menu</motion.a>
                <motion.a
                    href="#"
                    className="is-hidden-menu"
                    data-scroll
                    data-scroll-direction="vertical"
                    transition={{
                        duration: .6,
                        ease: "linear",
                        delay: 0.5
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                >Album</motion.a>
            </motion.nav>

            <section
                className="text-center py-8 sm:py-20 md:px-10  sm:w-[500px] md:w-[768px] mx-auto"
                data-scroll-section
            >
                <motion.img
                    initial={{opacity: 0, y: 50}}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 2,
                        ease: "linear",
                        delay: 0.8
                    }}
                    viewport={{ once: true, amount: 0.5 }}
                    src="/save-the-date.svg" alt="Save the date" className="w-80 sm:w-90 ml-[2.5rem] sm:ml-0"
                />
                <div className="inline-flex relative sm:top-[-8rem] md:top-[-9rem]">
                    <p className="text-[6rem] sm:text-[7rem] md:text-[10rem] font-bold sm:mt-4 ml-[0rem] sm:ml-[11rem] md:ml-[4rem] relative text"
                    >
                        <motion.span
                            initial={{opacity: 0, y: -20}}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: .5,
                                ease: "easeInOut",
                                delay: 0.8
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                        >09
                        </motion.span>
                        <motion.span
                            initial={{opacity: 0, y: -20}}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 0.8
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-[2.3rem] sm:text-[2.8rem] md:text-[4rem] absolute bottom-[1.8rem] sm:bottom-[2rem] tracking-tighter"
                        >2025
                            <span className="absolute bottom-2 pl-[0.5rem] tracking-widest"> ...</span>
                        </motion.span>
                        <motion.span
                            initial={{opacity: 0, y: -20}}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 1,
                                ease: "easeInOut",
                                delay: 1
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="text-[5rem] sm:text-[5.5rem] md:text-[8rem] relative top-[-2rem] sm:top-[-2.4rem] md:top-[-3.3rem] ">aug
                        </motion.span>
                    </p>
                    <p className="mt-[.5rem] sm:mt-[-4.5rem] sm:mt-[1.3rem] md:mt-[1.7rem] ml-[1rem] sm:text-[1.4rem] md:text-[2rem] tracking-wide">
                        <motion.span
                            initial={{opacity: 0, y: -20}}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.9
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="inline sm:block">A</motion.span>
                        <motion.span
                            initial={{opacity: 0, y: -20}}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.7
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="inline sm:block">+</motion.span>
                        <motion.span
                            initial={{opacity: 0, y: -20}}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                delay: 0.5
                            }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="inline sm:block">E</motion.span>
                    </p>
                </div>

                {/*Countdown*/}
                <div className="inline sm:block mt-[-6rem] text-2xl font-title">
                    <span
                        className="text-base tracking-wider w-[90%] md:w-[60%] m-auto text-[1.8rem] inline-block countdown"
                        data-scroll>
                        <AnimatedText text="Days left until our day"/>
                    </span>
                    <hr
                        className="w-[55%] m-auto is-hidden pb-5"
                        data-scroll
                    />
                    <div className="flex justify-center space-x-3 sm:space-x-12">
                        <div className="text-center">
                            <div className="text-6xl font-bold">
                                <AnimatedText text={String(daysLeft)}/>
                            </div>
                            <div className="text-3xl mt-[-8] italic">
                                <AnimatedText text="Days" direction="down"/>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl font-bold">
                                <AnimatedText text={String(hoursLeft)}/>
                            </div>
                            <div className="text-3xl mt-[-8] italic">
                                <AnimatedText text="Hours" direction="down"/>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl font-bold">
                                <AnimatedText text={String(minutesLeft)}/>
                            </div>
                            <div className="text-3xl mt-[-8] italic">
                                <AnimatedText text="Mins" direction="down"/>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-6xl font-bold">
                                <AnimatedText text={String(secondsLeft)}/>
                            </div>
                            <div className="text-3xl mt-[-8] italic">
                                <AnimatedText text="Seconds"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}