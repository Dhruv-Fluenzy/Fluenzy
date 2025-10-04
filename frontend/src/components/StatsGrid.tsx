import { stats } from "../constants"
import StatsCard from "./StatsCard"

const StatsGrid = () => {
  return (
    <div className="max-w-6xl mx-auto mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {stats.map((stat, index) => (
          <StatsCard
            key={stat.title}
            value={stat.value}
            title={stat.title}
            description={stat.description}
            delay={0.1 * index}
          />
        ))}
      </div>
    </div>
  )
}

export default StatsGrid
