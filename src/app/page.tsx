"use client"

import ScrollWrapper from "@/components/ScrollWrapper";

import WelcomeSection from "@/components/sections/Welcome"
import OurStorySection from "@/components/sections/OurStory"
import LocationSection from "@/components/sections/Location"
import GallerySection from "@/components/sections/Gallery"
import QRSection from "@/components/sections/QR"
import ThankYouSection from "@/components/sections/ThankYou"

export default function Page() {
    return (
        <ScrollWrapper>
            <div className="absolute w-[58%]">
                <img
                    src="/frame/frame-top.svg" alt="Frame" className=""/>
            </div>
            <div className="absolute bottom-0 right-0 w-[15%]">
                <img
                    src="/frame/frame-bottom.svg" alt="Frame" className=""/>
            </div>

            {/**/}
            <div className="relative z-1">
                {/*Screen*/}
                <WelcomeSection/>
                {/*End Screen*/}1

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
