import React from 'react';

interface ButtonProps {
    text: string,
    className?: string,
    id?: string,
    backgroundColor?: string,
    textColor?: string,
}

const Button: React.FC<ButtonProps> = ({ text, className, id, backgroundColor, textColor }) => {
    return (
        <a
            onClick={(e) => {
                e.preventDefault();

                const target = document.getElementById("counter");

                if (target && id) {
                    const offset = window.innerHeight * 0.15;

                    const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

                    window.scrollTo({ top, behavior: "smooth" })
                }
            }}
            className={`${className ?? ''} cta-wrapper`}
        >
            <div className={`${backgroundColor ?? 'bg-primary' } cta-button group`} style={{
                    transition: 'transform 0.3s ease, background-color 0.3s ease, color 0.3s ease',
                }}>
                <div className='flex flex-row'>
                    <p className={`${textColor ?? "text-white" } font-medium transition-all duration-500`}>{text}</p>
                    <div className="image-wrapper">
                        <img src="/images/arrow-right.svg" alt="arrow" />

                    </div>

                </div>
            </div>
        </a>
    )
}


export default Button;