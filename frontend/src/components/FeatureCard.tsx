import { features } from "../constants"
// import Button from "../components/Button"

const FeatureCard = () => {
  return (
    <div className="w-full">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {features.map(({ imgPath, title, desc }) => (
          <div
            key={title}
            className="card-border rounded-xl p-8 flex flex-col gap-4 text-left"
          >
            <div className="size-14 flex items-center justify-center rounded-full bg-gray-100">
              <img src={imgPath} alt="" />
            </div>
            <h3 className="text-2xl font-semibold mt-2">
              {title}
            </h3>
            <p className="text-lg text-muted-foreground">{desc}</p>
            {/* <Button
              className="w-full mr-4 h-18"
              id="book-demo"
              text="Learn More"
              backgroundColor="bg-primary"
              textColor="text-white"
            /> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCard