import React from 'react';

import ArowDown from '/images/arrow-down.svg';

interface ButtonProps {
    text: string,
    className?: string,
    id?: string,
}

const Button: React.FC<ButtonProps> = ({ text, className, id }) => {
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
            className={`${className ?? ''} relative z-20 cursor-pointer`}
        >
            <div className="bg-primary px-2 py-4 rounded-full flex justify-center items-center relative cursor-pointer overflow-hidden group">
                <div className="absolute origin-center top-1/2 -translate-y-1/2 
        w-full h-full group-hover:size-10 group-hover:right-10
        rounded-full bg-white transition-all duration-500" />
                <div className='flex flex-row'>
                    <p className="uppercase text-white transition-all duration-500
        group-hover:text-white group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5">{text}</p>
                    <div className="group-hover:bg-white size-10 rounded-full absolute right-10 top-1/2 
        -translate-y-1/2 flex justify-center items-center overflow-hidden md:hidden">
                        {/* <img src={ArowDown} alt="arrow" /> */}
                        <img className="size-5 xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500" src="/images/arrow-down.svg" alt="arrow" />

                    </div>

                </div>
            </div>
        </a>
    )
}


export default Button;