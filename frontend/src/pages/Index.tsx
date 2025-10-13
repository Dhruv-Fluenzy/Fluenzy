import Navbar from "@/components/Navbar";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Companies from "../sections/IndexPage/Companies";
import Hero from "../sections/IndexPage/Hero";
import HowItWorks from "../sections/IndexPage/HowItWorks";
import OurWork from "../sections/IndexPage/OurWork";
import WhatWeDo from "../sections/IndexPage/WhatWeDo";
import Footer from "@/components/Footer";

const Index = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.getElementById(location.hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <main>
                <Navbar />
                <Hero />
                <OurWork />
                <WhatWeDo />
                <Companies />
                <HowItWorks />
            </main>
            {/* footer */}
            <Footer/>
        </div>
    )
}

export default Index;