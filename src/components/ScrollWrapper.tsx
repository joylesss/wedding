"use client";

import { useRef, useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function ScrollWrapper({ children }: { children: React.ReactNode }) {
    // const containerRef = useRef(null);

    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<any>(null);

    useEffect(() => {
        if (typeof window === "undefined") return;

        let scrollInstance: any;

        // Dynamic import để tránh lỗi SSR
        import("locomotive-scroll").then((LocomotiveScrollModule) => {
            const LocomotiveScroll = LocomotiveScrollModule.default;

            scrollInstance = new LocomotiveScroll({
                el: containerRef.current!,
                smooth: true,
                smartphone: {
                    smooth: true, // ✅ Bật scroll mượt trên mobile
                },
                tablet: {
                    smooth: true,
                },
                lerp: 0.08, // (optional) độ mượt – giảm thì mượt hơn
                multiplier: 1.0, // tốc độ scroll
                // class: "is-inview", // class dùng để detect active element
            });

            scrollRef.current = scrollInstance;

            // ✅ Update scroll khi resize
            const handleResize = () => {
                scrollRef.current?.update();
            };
            window.addEventListener("resize", handleResize);

            // ✅ Cleanup
            return () => {
                scrollRef.current?.destroy();
                window.removeEventListener("resize", handleResize);
            };
        });

    }, []);

    return (
        <div data-scroll-container ref={containerRef} className="min-h-screen bg-[#efeeec] bg-cover bg-center text-slate-950">
            {children}
        </div>
    );
}
