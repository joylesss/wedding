import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

type Props = {
    text: string;
    direction?: "up" | "down"; // hướng trượt
    delay: number,
    duration: number;
};

const AnimatedText = ({ text, direction = "up", delay = 0, duration = 0.6 }: Props) => {
    const controls = useAnimation();
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.8, once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [isInView, controls]);

    const container = {
        visible: {
            transition: {
                staggerChildren: 0.08,
            },
        },
    };

    const letterVariants = {
        hidden: {
            y: direction === "up" ? "100%" : "-100%",
            opacity: 0,
        },
        visible: {
            y: "0%",
            opacity: 1,
            transition: {
                duration: duration,
                ease: [0.1, 0.7, 0.3, 0.9],
                delay: delay
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            className="inline-block align-middle overflow-hidden"
            variants={container}
            initial="hidden"
            animate={controls}
        >
            {text.split(" ").map((char, i) => (
                <motion.span
                    key={i}
                    variants={letterVariants}
                    className="inline-block"
                    style={{ whiteSpace: "pre" }}
                >
                    {char+" "}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default AnimatedText;
