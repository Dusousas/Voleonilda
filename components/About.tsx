import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "@mui/material";

export default function About() {
    const controlsLeft = useAnimation();
    const controlsRight = useAnimation();
    const aboutRef = useRef(null);
    const isLargeScreen = useMediaQuery("(min-width: 1024px)"); // lg breakpoint é 1024px

    useEffect(() => {
        if (!isLargeScreen) return; // Se não for tela grande, não fazer nada

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controlsLeft.start({
                        translateX: 0,
                        opacity: 1,
                        transition: { duration: 1 }
                    });
                    controlsRight.start({
                        translateX: 0,
                        opacity: 1,
                        transition: { duration: 1 }
                    });
                }
            },
            {
                threshold: 0.3, // Inicia o efeito quando 30% da seção é visualizada
            }
        );
        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, [controlsLeft, controlsRight, isLargeScreen]);

    return (
        <>
            <section id="about" ref={aboutRef} className="hrela bg-BrownP">
                <div className="hidden absolute left-[-100px] top-0 lg:block">
                    <img src="aboutcoffe.png" alt="" />
                </div>

                <div className="maxWidth">
                    <h1 className="text-center uppercase text-white font-semibold pt-[54px]">Um pouco mais</h1>
                    <h1 className="font-Bitter text-6xl uppercase text-GreenP text-center font-bold lg:text-7x">Sobre nós</h1>

                    <div className="flex flex-col justify-center gap-14 lg:flex-row pb-14">
                        {isLargeScreen ? (
                            <>
                                <motion.article
                                    className="flex flex-col items-center gap-4 lg:flex-row mt-14 lg:w-1/2 lg:justify-end"
                                    initial={{ translateX: "-100%", opacity: 0 }}
                                    animate={controlsRight}
                                >
                                    <div>
                                        <img className="w-[320px] h-[500px] object-cover" src="about1.jpeg" alt="" />
                                    </div>

                                    <div>
                                        <img className="w-[320px] h-[500px] object-cover" src="about2.jpeg" alt="" />
                                    </div>
                                </motion.article>

                                <motion.article
                                    className="flex border-r-2 border-GreenP flex-col mt-14 pr-4 justify-center lg:items-start lg:w-1/2"
                                    initial={{ translateX: "100%", opacity: 0 }}
                                    animate={controlsLeft}
                                >
                                    <h1 className="text-center uppercase text-white font-semibold">Café Vó Leonilda</h1>
                                    <h1 className="text-center uppercase text-GreenP text-2xl font-semibold">Nossa história</h1>
                                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae excepturi cupiditate recusandae aliquam iusto perferendis voluptatem non minima voluptatum qui officia, suscipit deleniti consequatur numquam! Eius sequi officiis iste enim quasi, dicta ipsum suscipit voluptatem, architecto, laboriosam eligendi ab.</p>
                                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae excepturi cupiditate recusandae aliquam iusto perferendis voluptatem non minima voluptatum qui officia, suscipit deleniti consequatur numquam! Eius sequi officiis iste enim quasi, dicta ipsum suscipit voluptatem, architecto, laboriosam eligendi ab.</p>
                                    <div className="text-center mt-4 pb-14">
                                        <button className="bg-GreenS py-2 px-5 rounded font-bold uppercase text-white">Fale Conosco</button>
                                    </div>
                                </motion.article>
                            </>
                        ) : (
                            <>
                                <div className="flex flex-col items-center gap-4 lg:flex-row mt-14 lg:w-1/2 lg:justify-end">
                                    <div>
                                        <img className="w-[320px] h-[500px] object-cover" src="about1.jpeg" alt="" />
                                    </div>

                                    <div>
                                        <img className="w-[320px] h-[500px] object-cover" src="about2.jpeg" alt="" />
                                    </div>
                                </div>

                                <div className="flex border-r-2 border-GreenP flex-col mt-14 pr-4 justify-center lg:items-start lg:w-1/2">
                                    <h1 className="text-center uppercase text-white font-semibold">Café Vó Leonilda</h1>
                                    <h1 className="text-center uppercase text-GreenP text-2xl font-semibold">Nossa história</h1>
                                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae excepturi cupiditate recusandae aliquam iusto perferendis voluptatem non minima voluptatum qui officia, suscipit deleniti consequatur numquam! Eius sequi officiis iste enim quasi, dicta ipsum suscipit voluptatem, architecto, laboriosam eligendi ab.</p>
                                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae excepturi cupiditate recusandae aliquam iusto perferendis voluptatem non minima voluptatum qui officia, suscipit deleniti consequatur numquam! Eius sequi officiis iste enim quasi, dicta ipsum suscipit voluptatem, architecto, laboriosam eligendi ab.</p>
                                    <div className="text-center mt-4 pb-14">
                                        <button className="bg-GreenS py-2 px-5 rounded font-bold uppercase text-white">Fale Conosco</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
}
