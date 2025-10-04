
import { steps } from '../constants'

const StepCard = () => {
  return (
    <div className='w-full'>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-3 gap-6'>
            {steps.map(({ stepCount, title, desc }) => (
                <div key={title} className='flex flex-col items-center justify-center gap-4'>
                    <div className='bg-primary rounded-full w-14 h-14 flex items-center justify-center text-white font-bold shadow-lg'>{stepCount}</div>
                    <h3 className='text-2xl font-bold mt-2'>{title}</h3>
                    <p className="text-lg text-muted-foreground">{desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default StepCard