import Navbar from "@/components/Navbar";
import Companies from "../sections/IndexPage/Companies";
// import Features from "../sections/IndexPage/Features";
import Hero from "../sections/IndexPage/Hero";
import HowItWorks from "../sections/IndexPage/HowItWorks";
import OurWork from "../sections/IndexPage/OurWork";
// import UnderDevelopmentPhase from "../sections/IndexPage/UnderDevelopmentPhase";
import WhatWeDo from "../sections/IndexPage/WhatWeDo";
import Footer from "@/components/Footer";

const Index = () => {
    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <main>
                <Navbar />
                <Hero />
                <OurWork />
                <WhatWeDo />
                <Companies />
                {/* <Features /> */}
                <HowItWorks />
                {/* <UnderDevelopmentPhase /> */}
            </main>
            {/* footer */}
            <Footer/>
        </div>
    )
}

export default Index;