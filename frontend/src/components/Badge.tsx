
interface BadgeProps {
    text: string;
    className?: string;
}

const Badge: React.FC<BadgeProps> = ({text, className}) => {
  return (
    <p className={`${className ?? ''} bg-secondary w-[20%] px-4 py-2 rounded-full mb-6 font-medium whitespace-nowrap mx-auto`}>{text}</p>
  )
}

export default Badge