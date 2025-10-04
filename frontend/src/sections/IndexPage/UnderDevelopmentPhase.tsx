import { Button } from "@/components/ui/button"


const UnderDevelopmentPhase = () => {
    return (
        <section
            id="companies"
            className="bg-secondary w-full py-10 md:py-20 lg:py-32 overflow-hidden"
        >
                        <div className="container-div">
                <p className="text-muted-foreground">It's a work in progress! We are currently in the development phase of our platform, and we are working hard to bring you the best experience possible. Stay tuned for updates and new features!</p>
                <p className="text-muted-foreground">In the meantime, feel free to explore our website and learn more about what we have to offer. If you have any questions or feedback, please don't hesitate to reach out to us.</p>
                <Button>Explore</Button>
            </div>
        </section>
    )
}

export default UnderDevelopmentPhase