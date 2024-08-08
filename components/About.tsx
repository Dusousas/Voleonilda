export default function About() {
    return (
        <>
            <section id="about" className="hrela bg-BrownP">

                <div className=" hidden absolute left-[-100px] top-0 lg:block">
                    <img src="aboutcoffe.png" alt="" />
                </div>


                <div className="maxWidth ">
                    <h1 className="text-center uppercase text-white font-semibold pt-[54px]">Um pouco mais</h1>
                    <h1 className="font-Bitter text-6xl uppercase text-GreenP text-center font-bold lg:text-7x">Sobre nós</h1>

                    <div className="flex flex-col justify-center gap-14 lg:flex-row pb-14">
                        <article className="flex flex-col items-center gap-4 lg:flex-row mt-14 lg:w-1/2 lg:justify-end">
                            <div className="">
                                <img className="w-[320px] h-[500px] object-cover" src="about1.jpeg" alt="" />
                            </div>

                            <div className="">
                                <img className="w-[320px] h-[500px] object-cover" src="about2.jpeg" alt="" />
                            </div>
                        </article>

                        <article className="flex border-r-2 border-GreenP flex-col mt-14 pr-4 justify-center lg:items-start lg:w-1/2">
                            <h1 className="text-center uppercase text-white font-semibold ">Café Vó Leonilda</h1>
                            <h1 className="text-center uppercase text-GreenP text-2xl font-semibold">Nossa história</h1>
                            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae excepturi cupiditate recusandae aliquam iusto perferendis voluptatem non minima voluptatum qui officia, suscipit deleniti consequatur numquam! Eius sequi officiis iste enim quasi, dicta ipsum suscipit voluptatem, architecto, laboriosam eligendi ab.</p>
                            <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio beatae excepturi cupiditate recusandae aliquam iusto perferendis voluptatem non minima voluptatum qui officia, suscipit deleniti consequatur numquam! Eius sequi officiis iste enim quasi, dicta ipsum suscipit voluptatem, architecto, laboriosam eligendi ab.</p>
                            <div className="text-center mt-4 pb-14">
                                <button className="bg-GreenS py-2 px-5 rounded font-bold uppercase text-white">Fale Conosco</button>
                            </div>
                        </article>
                    </div>


                </div>
            </section>
        </>
    );
}